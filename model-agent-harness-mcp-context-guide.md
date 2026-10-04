# Model, Agent Harness, Provider, Tools, MCP, Context, and Sub-Agents

## 1. The Big Picture

A modern AI agent system usually contains several distinct parts:

- **Client / UI** — where the user writes a prompt.
- **Agent harness** — orchestrates the interaction with the model.
- **Model provider** — hosts and runs the language model.
- **Model** — reasons over the provided context and generates text or structured tool calls.
- **Tools** — external capabilities such as web search, databases, Jira, GitHub, file access, calculators, APIs, etc.
- **MCP servers** — a standardized way to expose tools, resources, and prompts to an agent system.
- **Sub-agents** — additional agent instances created to perform specialized pieces of work.

A simplified architecture looks like this:

```text
User
  |
  v
Client / UI
  |
  v
Agent Harness
  |
  +--------------------+
  |                    |
  v                    v
Model Provider      Tools / MCP Servers
  |                    ^
  v                    |
Model -----------------+
```

The most important idea is:

> The model generates decisions and outputs, while the harness controls the environment around the model.

---

# 2. What Happens When You Send a Prompt?

Suppose you type:

> Find the open Jira tickets assigned to me.

and press Enter.

A simplified request flow is:

```text
1. User writes prompt
        |
        v
2. Client sends prompt
        |
        v
3. Harness builds model context
        |
        v
4. Harness sends request to model provider
        |
        v
5. Model reasons over the request
        |
        +----> Answer directly
        |
        +----> Request a tool call
                     |
                     v
6. Harness executes the tool
                     |
                     v
7. Tool result is returned to the harness
                     |
                     v
8. Harness gives the result back to the model
                     |
                     v
9. Model continues reasoning
                     |
                     v
10. Final answer is returned to the user
```

The loop between **model → tool → model** can happen multiple times before the final answer is produced.

---

# 3. What Does the Agent Harness Do?

The **agent harness** is the orchestration layer around the model.

Depending on the system, it may be responsible for:

- adding system instructions
- adding conversation history
- deciding which tools the model may see
- validating tool arguments
- executing tool calls
- requesting user approval for sensitive actions
- retrieving documents or memory
- managing context-window limits
- spawning sub-agents
- collecting sub-agent results
- handling retries and errors
- streaming the model's output to the UI

The harness therefore controls the model's operating environment.

A useful mental model is:

```text
Harness = runtime + orchestration + policy + context management
```

---

# 4. What Does the Model Provider Do?

The **model provider** operates the infrastructure that runs the model.

Examples of provider responsibilities include:

- receiving the model request
- running inference
- processing tokens
- generating output tokens
- returning structured tool-call requests
- streaming output back to the harness

Conceptually:

```text
Harness
   |
   | request:
   | - system instructions
   | - conversation
   | - tools
   | - current user message
   v
Model Provider
   |
   v
Model
   |
   | generated output
   v
Harness
```

The provider generally does not decide your application's business logic.

That logic usually lives in the **harness**.

---

# 5. Who Decides Which Tool to Use?

There are two separate decisions.

## Harness decision

The harness decides:

> Which tools is the model allowed to know about?

For example, the harness might expose:

```text
search_jira
create_jira_issue
search_github
read_file
web_search
```

It might intentionally hide other available tools.

Reasons can include:

- permissions
- security
- relevance
- user settings
- cost
- application design
- reducing model confusion

## Model decision

The model decides:

> Given the tools I am allowed to see, which one should I call?

For example:

```text
User:
Find my open Jira tickets.

Model:
I need Jira data.

Tool call:
search_jira(
    jql = "assignee = currentUser() AND status != Closed"
)
```

The model does not actually execute the Jira API request.

Instead:

```text
Model proposes tool call
        |
        v
Harness validates it
        |
        v
Harness executes it
        |
        v
Result returned to model
```

So the precise relationship is:

> **The harness determines the available tool set. The model chooses among the exposed tools. The harness ultimately controls execution.**

---

# 6. How Does the Model Know How to Use a Tool?

The model receives a description of each tool.

Conceptually, a tool definition might look like:

```text
Tool: search_issues

Description:
Search Jira issues using JQL.

Arguments:
- jql: string
- max_results: integer
```

The model can then generate something like:

```text
search_issues(
    jql = "assignee = currentUser() AND status != Closed",
    max_results = 50
)
```

The tool does not necessarily need to have existed when the model was trained.

A sufficiently capable model can often use a new tool based only on:

- tool name
- description
- parameter schema
- instructions
- examples, if provided

This is a major property of modern tool-using language models.

---

# 7. What Is MCP?

**MCP — Model Context Protocol — provides a standardized way for applications to expose capabilities and context to AI systems.**

An MCP server can expose things such as:

- tools
- resources
- prompts

For example:

```text
Jira MCP Server
    |
    +-- search_issues
    +-- create_issue
    +-- get_issue
```

or:

```text
GitHub MCP Server
    |
    +-- search_code
    +-- read_repository
    +-- create_pull_request
```

The agent harness commonly acts as an **MCP client**.

---

# 8. How MCP Fits Into the Architecture

A typical MCP flow is:

```text
                   MCP discovery
Agent Harness ------------------------> MCP Server
     ^                                      |
     |                                      |
     |      tool definitions                |
     +--------------------------------------+

Agent Harness
     |
     | selected tool definitions
     v
   Model
```

Then, during execution:

```text
User
 |
 v
Harness
 |
 v
Model
 |
 | "Call search_issues"
 v
Harness
 |
 | MCP request
 v
MCP Server
 |
 | Jira/API/database/etc.
 v
External System
 |
 v
MCP Server
 |
 v
Harness
 |
 v
Model
 |
 v
Final Answer
```

---

# 9. Does the Harness Automatically Expose Every MCP Tool?

Not necessarily.

Suppose the harness connects to three MCP servers:

```text
Jira MCP
    - search_issues
    - create_issue
    - delete_issue

GitHub MCP
    - search_code
    - create_pull_request

Internal DB MCP
    - query_customer
    - modify_customer
```

The harness might decide to expose only:

```text
search_issues
search_code
query_customer
```

The other tools may be hidden because of:

- permissions
- safety rules
- current task relevance
- role restrictions
- user approval requirements

So the complete sequence is:

```text
MCP server advertises capabilities
            |
            v
Harness discovers capabilities
            |
            v
Harness selects allowed capabilities
            |
            v
Model sees selected tools
            |
            v
Model chooses a tool
            |
            v
Harness validates and executes
```

---

# 10. Is the Model Speaking MCP Directly?

Usually, no.

A common architecture is:

```text
Model
 |
 | structured tool request
 v
Harness
 |
 | translates / routes request
 v
MCP Client
 |
 v
MCP Server
```

The model understands the **tool description** and produces a structured call.

The harness handles the underlying MCP communication.

This separation allows the same model to interact with many different MCP servers without needing to understand their transport implementation.

---

# 11. Conversation History and Context

Language models generally need the previous conversation to be included in their current input if they are expected to remember it.

Imagine this conversation:

```text
User:
My project is called Cloky.

Assistant:
Understood.

User:
What name did I say?
```

For the model to answer **Cloky**, the second request must contain enough information about the first request.

Conceptually, the harness sends something like:

```text
System instructions

User:
My project is called Cloky.

Assistant:
Understood.

User:
What name did I say?
```

The model then processes this entire context.

---

# 12. The Model Is Usually Stateless Between Requests

A useful mental model is:

```text
Request 1
Context A
   |
   v
Model
   |
   v
Response 1


Request 2
Context B
   |
   v
Model
   |
   v
Response 2
```

The model does not necessarily retain an internal persistent memory of Request 1.

Instead, the application or harness reconstructs what the model needs to see for Request 2.

This means:

> The chat system remembers the conversation; the model reasons over the context supplied for the current invocation.

---

# 13. What Can Be Inside the Context Window?

A model's context can contain many different things:

```text
+----------------------------------+
| System instructions              |
+----------------------------------+
| Developer / application rules    |
+----------------------------------+
| Previous user messages           |
+----------------------------------+
| Previous assistant messages      |
+----------------------------------+
| Current user message             |
+----------------------------------+
| Tool definitions                 |
+----------------------------------+
| Tool results                     |
+----------------------------------+
| Retrieved documents              |
+----------------------------------+
| Memory / summaries               |
+----------------------------------+
| Sub-agent results                |
+----------------------------------+
```

All of this consumes context-window capacity.

---

# 14. What Happens When a Conversation Gets Too Long?

The model has a finite context window.

Therefore, a harness may need to manage older information.

Possible strategies include:

### Truncation

Remove older messages.

```text
Oldest messages -> removed
Recent messages -> retained
```

### Summarization

Convert many old messages into a smaller summary.

```text
50 old messages

        |
        v

"Earlier, the user and assistant discussed X, Y and Z."
```

### Retrieval

Store conversation information externally and retrieve only relevant parts.

```text
Current question
      |
      v
Search previous conversation
      |
      v
Retrieve relevant pieces
      |
      v
Add them to current context
```

Modern systems often combine these techniques.

---

# 15. Context Is Constructed, Not Global

One of the most important ideas is:

> There is not necessarily one giant universal conversation context shared by every agent.

Instead, each model invocation gets a context constructed for that particular request.

For example:

```text
Conversation database
        |
        v
Harness
        |
        | selects relevant information
        v
Current Model Context
```

That distinction becomes especially important when sub-agents are involved.

---

# 16. What Happens When the Harness Creates a Sub-Agent?

Suppose the main agent receives:

> Analyze this application architecture, check the GitHub repository, and inspect the Jira backlog.

The main agent might delegate:

```text
Main Agent
 |
 +--> Sub-agent A: inspect GitHub
 |
 +--> Sub-agent B: analyze Jira
 |
 +--> Sub-agent C: review architecture docs
```

Each sub-agent can have its **own context window**.

---

# 17. Does a Sub-Agent Receive the Entire Parent Context?

Usually not automatically.

Instead, the parent agent or harness commonly constructs a task-specific context.

For example:

```text
Parent context:

- 100 previous chat messages
- project documentation
- Jira data
- GitHub data
- user preferences
- multiple tools
```

The GitHub sub-agent might receive only:

```text
Task:
Inspect repository architecture.

Relevant information:
- repository name
- target branch
- architecture question

Available tools:
- GitHub search
- GitHub file reader
```

The Jira sub-agent might instead receive:

```text
Task:
Find high-priority unresolved issues.

Relevant information:
- Jira project key
- required statuses

Available tools:
- Jira search
```

This creates isolation between tasks.

---

# 18. Why Give Sub-Agents Separate Contexts?

Separate contexts have several advantages.

## Lower token usage

The sub-agent receives only what it needs.

## Less distraction

Irrelevant conversation does not interfere with the task.

## Better specialization

The sub-agent can receive specialized instructions and tools.

## Parallelization

Multiple sub-agents can work independently.

## Security

Sensitive information can be withheld from sub-agents that do not need it.

---

# 19. How Does the Sub-Agent Return Its Work?

A typical pattern is:

```text
Parent Agent
     |
     | delegated task
     v
Sub-Agent
     |
     | uses tools
     | reasons
     | gathers information
     v
Sub-Agent Result
     |
     v
Parent Agent
```

The parent generally does not need the sub-agent's entire internal context.

Instead, the sub-agent might return something like:

```text
Result:
The repository uses MVVM.
Networking is implemented using Ktor.
There are three architecture violations in module X.
```

That result then becomes part of the parent's context.

---

# 20. Multi-Agent Example

Imagine this request:

> Review my mobile application project and tell me what should be improved.

A harness could orchestrate:

```text
                         User
                           |
                           v
                      Main Agent
                           |
          +----------------+----------------+
          |                |                |
          v                v                v
   GitHub Agent       Jira Agent       Docs Agent
          |                |                |
          v                v                v
   inspect code       inspect issues   inspect docs
          |                |                |
          +----------------+----------------+
                           |
                           v
                    Main Agent Context
                           |
                           v
                      Final Answer
```

Each sub-agent has its own context and potentially its own set of tools.

---

# 21. Full End-to-End Architecture

Putting everything together:

```text
                         USER
                           |
                           v
                      Client / UI
                           |
                           v
                    AGENT HARNESS
                           |
            +--------------+--------------+
            |                             |
            | Build context               | Discover tools
            |                             |
            v                             v
       Model Provider                 MCP Servers
            |                             |
            v                             |
           MODEL <------------------------+
            |
            | decide:
            | answer OR tool call
            |
            v
        Tool Request
            |
            v
     Harness Validation
            |
            +----------------------------+
            |                            |
            v                            v
      Local/API Tool                 MCP Tool
            |                            |
            v                            v
         Result                       Result
            |                            |
            +-------------+--------------+
                          |
                          v
                        MODEL
                          |
                 possibly more tools
                          |
                          v
                     Final Answer
                          |
                          v
                        USER
```

---

# 22. A More Precise Mental Model

The responsibilities can be summarized like this.

## Client

> "Capture the user's input and display the result."

## Harness

> "Construct the environment in which the model operates."

## Model

> "Given this context and these available capabilities, determine what to do next."

## Model Provider

> "Run the model and return its generated output."

## Tool

> "Perform some external operation."

## MCP

> "Standardize how capabilities and context can be exposed to AI applications."

## MCP Server

> "Expose specific tools/resources/prompts and connect them to real systems."

## Sub-Agent

> "Perform a delegated task using its own instructions, context, and tools."

---

# 23. The Three Most Important Boundaries

## Boundary 1 — Harness vs Model

The model **proposes** actions.

The harness **controls** whether those actions can actually happen.

```text
Model: "I want to call tool X."

Harness: "Is X allowed? Are the arguments valid? Does this require approval?"
```

---

## Boundary 2 — Conversation vs Model Memory

The conversation may persist in the application.

The model usually receives only the context assembled for the current request.

```text
Conversation storage
       !=
Model's persistent internal memory
```

---

## Boundary 3 — Parent Agent vs Sub-Agent

A sub-agent usually does not automatically inherit the complete parent context.

Instead:

```text
Parent context
      |
      v
Relevant subset
      |
      v
Sub-agent context
```

The sub-agent performs its work and returns a result.

---

# 24. Short Version

If you want one compact explanation, use this:

> When you send a prompt, the agent harness collects the relevant conversation history, instructions, tools, and other context and sends that package to the model provider. The model reasons over the package and either produces an answer or requests a tool. The harness validates and executes tool requests, possibly through MCP servers, and sends the results back to the model. This loop can repeat several times. If the harness creates a sub-agent, that sub-agent normally receives a separate, task-specific context rather than automatically inheriting the entire parent conversation. When the sub-agent finishes, its result is returned to the parent agent and can become part of the parent's context.

---

# 25. One-Sentence Mental Model

> **The harness builds and controls the environment, the model decides what to do inside that environment, tools perform external work, MCP standardizes how many of those capabilities are exposed, and every agent or sub-agent reasons over the specific context assembled for that invocation.**
