const slides = [
  {
    section: { en: "01 / foundations", hr: "01 / osnove" },
    type: "title",
    title: { en: "My<br><span class='accent'>agentic</span><br>workflow", hr: "Moj<br><span class='accent'>agentski</span><br>workflow" },
    lead: { en: "How I prepare context, define a goal, guide implementation and verify the result.", hr: "Kako pripremam kontekst, definiram cilj, vodim implementaciju i provjeravam rezultat." },
    footer: { en: "from understanding the agent to my daily workflow", hr: "od razumijevanja agenta do mog načina rada" },
    byline: { en: "Goran Vuković · tech lead walkthrough", hr: "Goran Vuković · walkthrough za tech leadove" }
  },
  {
    section: { en: "01 / foundations", hr: "01 / osnove" },
    title: { en: "A model is not the whole agent.", hr: "Model nije cijeli agent." },
    lead: { en: "An agent combines a model and a harness that can act in an environment.", hr: "Agent povezuje model i harness koji omogućuje djelovanje u okruženju." },
    html: {
      en: `<div class="cards cards--4"><div class="card card--cyan"><span class="card__number">01</span><h3>Model</h3><p>Processes input tokens and generates a response or a tool call.</p></div><div class="card card--amber"><span class="card__number">02</span><h3>Harness</h3><p>Prepares context, runs tools, manages permissions and repeats the loop.</p></div><div class="card card--blue"><span class="card__number">03</span><h3>Environment</h3><p>The repo, terminal, browser and APIs available to the harness.</p></div><div class="card card--red"><span class="card__number">04</span><h3>Agent</h3><p>The working system that can act, observe results and continue.</p></div></div>`,
      hr: `<div class="cards cards--4"><div class="card card--cyan"><span class="card__number">01</span><h3>Model</h3><p>Obrađuje ulazne tokene i generira odgovor ili poziv alata.</p></div><div class="card card--amber"><span class="card__number">02</span><h3>Harness</h3><p>Priprema kontekst, pokreće alate, upravlja dozvolama i ponavlja petlju.</p></div><div class="card card--blue"><span class="card__number">03</span><h3>Okruženje</h3><p>Repo, terminal, preglednik i API-ji dostupni harnessu.</p></div><div class="card card--red"><span class="card__number">04</span><h3>Agent</h3><p>Radni sustav koji djeluje, opaža rezultate i nastavlja rad.</p></div></div>`
    },
    footer: { en: "model + harness, operating in an environment", hr: "model + harness, koji djeluju u okruženju" }
  },
  {
    section: { en: "01 / foundations", hr: "01 / osnove" },
    title: { en: "Who connects the pieces?", hr: "Tko povezuje dijelove?" },
    lead: { en: "The harness connects the user, the model provider and external capabilities. Each has a different role.", hr: "Harness povezuje korisnika, pružatelja modela i vanjske mogućnosti. Svaki dio ima svoju ulogu." },
    html: {
      en: `<div class="cards cards--4"><div class="card card--cyan"><h3>Client / UI</h3><p>Accepts your prompt and displays the result.</p></div><div class="card card--amber"><h3>Provider</h3><p>Hosts and runs the model; returns text or structured tool requests.</p></div><div class="card card--blue"><h3>Tools</h3><p>Perform external work: read files, search Jira or call an API.</p></div><div class="card card--red"><h3>MCP</h3><p>A protocol for exposing tools, resources and prompts. The harness commonly acts as its client.</p></div></div><p class="body">The harness selects which tool definitions the model sees. The model can request a tool; the harness controls execution.</p>`,
      hr: `<div class="cards cards--4"><div class="card card--cyan"><h3>Klijent / UI</h3><p>Prima tvoj prompt i prikazuje rezultat.</p></div><div class="card card--amber"><h3>Provider</h3><p>Pružatelj koji pokreće model i vraća tekst ili strukturirane zahtjeve za alate.</p></div><div class="card card--blue"><h3>Alati</h3><p>Obavljaju vanjski rad: čitaju datoteke, pretražuju Jiru ili pozivaju API.</p></div><div class="card card--red"><h3>MCP</h3><p>Protokol za izlaganje alata, resursa i promptova. Harness obično djeluje kao njegov klijent.</p></div></div><p class="body">Harness odabire koje definicije alata model vidi. Model može zatražiti alat; harness kontrolira izvršavanje.</p>`
    },
    footer: { en: "MCP server exposes capabilities · the model does not call external systems directly", hr: "MCP server izlaže mogućnosti · model ne poziva vanjske sustave izravno" }
  },
  {
    section: { en: "01 / foundations", hr: "01 / osnove" },
    title: { en: "Context travels with every request.", hr: "Kontekst putuje sa svakim zahtjevom." },
    lead: { en: "The model does not remember the chat on its own. The harness supplies the context for each request.", hr: "Model sam ne pamti razgovor. Harness svakom zahtjevu prilaže kontekst." },
    html: {
      en: `<div class="turn"><div class="turn__box"><strong>01 / context</strong><p>Instructions, your message, relevant history, loaded files and tool results.</p></div><div class="turn__arrow">→</div><div class="turn__box"><strong>02 / model</strong><p>Generates text or requests a tool call.</p></div><div class="turn__arrow">→</div><div class="turn__box"><strong>03 / harness</strong><p>Runs the tool, adds its result and sends the next request.</p></div></div><p class="body">The loop continues until an answer or a stopping point. Files only help when their relevant content is read into context.</p>`,
      hr: `<div class="turn"><div class="turn__box"><strong>01 / kontekst</strong><p>Upute, tvoja poruka, relevantna povijest, učitane datoteke i rezultati alata.</p></div><div class="turn__arrow">→</div><div class="turn__box"><strong>02 / model</strong><p>Generira tekst ili traži poziv alata.</p></div><div class="turn__arrow">→</div><div class="turn__box"><strong>03 / harness</strong><p>Izvršava alat, dodaje rezultat i šalje sljedeći zahtjev.</p></div></div><p class="body">Petlja se ponavlja do odgovora ili zaustavljanja. Datoteke pomažu tek kada se njihov relevantni sadržaj učita u kontekst.</p>`
    },
    footer: { en: "the conversation is working context, not permanent project memory", hr: "razgovor je radni kontekst, a ne trajna memorija projekta" }
  },
  {
    section: { en: "01 / foundations", hr: "01 / osnove" },
    title: { en: "From prompt to answer.", hr: "Od prompta do odgovora." },
    lead: { en: "Example: “Find my open Jira tickets.” One prompt can trigger several model requests.", hr: "Primjer: „Pronađi moje otvorene Jira tickete.” Jedan prompt može pokrenuti više zahtjeva prema modelu." },
    html: {
      en: `<div class="workflow"><div class="workflow__step workflow__step--hero"><b>UI → harness</b><span>Your prompt arrives. The harness assembles instructions, history and tool definitions.</span></div><div class="workflow__step"><b>Harness → provider → model</b><span>The provider runs the model with that context.</span></div><div class="workflow__step"><b>Model → harness</b><span>The model requests a Jira search with structured arguments.</span></div><div class="workflow__step"><b>Harness → MCP → Jira</b><span>The harness checks permissions and arguments, asks approval if needed, then routes the call.</span></div><div class="workflow__step"><b>Result → harness → model</b><span>Jira returns tickets via MCP. The harness adds the result to the next model request.</span></div><div class="workflow__step"><b>Answer → UI</b><span>The model summarizes the tickets. The harness returns the answer to you.</span></div></div><p class="body">No tool needed? Go straight to the answer. More data needed? Repeat steps 3–5. Local and API tools can work without MCP.</p>`,
      hr: `<div class="workflow"><div class="workflow__step workflow__step--hero"><b>UI → harness</b><span>Stiže tvoj prompt. Harness slaže upute, povijest i definicije alata.</span></div><div class="workflow__step"><b>Harness → provider → model</b><span>Provider pokreće model s tim kontekstom.</span></div><div class="workflow__step"><b>Model → harness</b><span>Model traži pretragu Jire sa strukturiranim argumentima.</span></div><div class="workflow__step"><b>Harness → MCP → Jira</b><span>Harness provjerava dozvole i argumente, po potrebi traži odobrenje, zatim usmjerava poziv.</span></div><div class="workflow__step"><b>Rezultat → harness → model</b><span>Jira vraća tickete preko MCP-a. Harness dodaje rezultat u sljedeći zahtjev modelu.</span></div><div class="workflow__step"><b>Odgovor → UI</b><span>Model sažima tickete. Harness ti vraća odgovor.</span></div></div><p class="body">Alat nije potreban? Odmah odgovor. Treba još podataka? Ponovi korake 3–5. Lokalni i API alati mogu raditi bez MCP-a.</p>`
    },
    footer: { en: `Want to learn more about the process? <a href="model-agent-harness-mcp-context-guide.html">Read the full guide →</a>`, hr: `Želiš saznati više o procesu? <a href="model-agent-harness-mcp-context-guide.html">Pročitaj cijeli vodič na engleskom →</a>` }
  },
  {
    section: { en: "02 / context and risk", hr: "02 / kontekst i rizik" },
    title: { en: "One session, one focus.", hr: "Jedna sesija, jedan fokus." },
    lead: { en: "Everything we add competes for attention. I keep the conversation focused on the task we agreed to solve.", hr: "Sve što dodamo natječe se za pažnju. Razgovor držim fokusiranim na zadatak koji smo dogovorili riješiti." },
    html: {
      en: `<div class="cards cards--2"><div class="card card--cyan"><span class="card__number">keep</span><h3>Relevant context</h3><p>The goal, current decisions, related code, constraints and verification results.</p></div><div class="card card--red"><span class="card__number">leave out</span><h3>Unrelated history</h3><p>Other tasks, stale decisions, conflicting instructions and entire logs when an excerpt is enough. That noise accelerates attention degradation.</p></div></div>`,
      hr: `<div class="cards cards--2"><div class="card card--cyan"><span class="card__number">zadrži</span><h3>Relevantni kontekst</h3><p>Cilj, aktualne odluke, povezani kod, ograničenja i rezultate provjera.</p></div><div class="card card--red"><span class="card__number">izostavi</span><h3>Nepovezanu povijest</h3><p>Druge zadatke, stare odluke, proturječne upute i cijele logove kada je dovoljan izvadak. Taj šum ubrzava degradaciju pažnje.</p></div></div>`
    },
    footer: { en: "a new unrelated task belongs in a fresh session", hr: "novi nepovezani zadatak pripada svježoj sesiji" }
  },
  {
    section: { en: "02 / context and risk", hr: "02 / kontekst i rizik" },
    title: { en: "More context is not always better.", hr: "Više konteksta nije uvijek bolje." },
    lead: { en: "Long, noisy sessions can reduce reliability. Smart zone and dumb zone describe a quality risk, not a fixed token threshold.", hr: "Duge sesije pune šuma mogu smanjiti pouzdanost. Smart zona i dumb zona opisuju rizik pada kvalitete, ne fiksni broj tokena." },
    html: {
      en: `<div class="zone"><div class="zone__bar"><div class="zone__smart"><strong>smart zone</strong><span>focused planning and complex changes</span></div><div class="zone__dumb"><strong>dumb zone</strong><span>missed decisions, repetition and drift</span></div></div><div class="symptoms"><div class="symptom"><b>Noise</b><span>Important facts get lost among old details.</span></div><div class="symptom"><b>Contradictions</b><span>Old and new instructions pull in different directions.</span></div><div class="symptom"><b>Risk</b><span>Invented claims or an implementation that misses the goal.</span></div></div></div>`,
      hr: `<div class="zone"><div class="zone__bar"><div class="zone__smart"><strong>smart zona</strong><span>fokusirano planiranje i složene promjene</span></div><div class="zone__dumb"><strong>dumb zona</strong><span>propuštene odluke, ponavljanje i skretanje</span></div></div><div class="symptoms"><div class="symptom"><b>Šum</b><span>Važne činjenice gube se među starim detaljima.</span></div><div class="symptom"><b>Proturječja</b><span>Stare i nove upute vuku u različitim smjerovima.</span></div><div class="symptom"><b>Rizik</b><span>Izmišljene tvrdnje ili implementacija koja promašuje cilj.</span></div></div></div>`
    },
    footer: { en: "quality depends on the model, task and harness; focus is not a guarantee", hr: "kvaliteta ovisi o modelu, zadatku i harnessu; fokus nije jamstvo" }
  },
  {
    section: { en: "02 / context and risk", hr: "02 / kontekst i rizik" },
    title: { en: "Code is not the whole project.", hr: "Kod nije cijeli projekt." },
    lead: { en: "Even a short session can miss the goal. Product decisions often live in Figma, tickets, API docs and people's heads.", hr: "I kratka sesija može promašiti cilj. Produktne odluke često žive u Figmi, ticketima, API dokumentaciji i glavama ljudi." },
    html: {
      en: `<div class="cards cards--2"><div class="card card--red"><span class="card__number">the problem</span><h3>Plausible guesses</h3><p>The agent can fill missing requirements with a reasonable-looking but wrong solution.</p></div><div class="card card--cyan"><span class="card__number">my response</span><h3>Make decisions explicit</h3><p>Bring in the missing facts, agree on the goal and define how we will check it.</p></div></div>`,
      hr: `<div class="cards cards--2"><div class="card card--red"><span class="card__number">problem</span><h3>Uvjerljive pretpostavke</h3><p>Nedostajuće zahtjeve agent može popuniti rješenjem koje djeluje razumno, ali je pogrešno.</p></div><div class="card card--cyan"><span class="card__number">moj odgovor</span><h3>Eksplicitne odluke</h3><p>Prikupim činjenice, dogovorim cilj i definiram kako ćemo ga provjeriti.</p></div></div>`
    },
    footer: { en: "less guessing, earlier feedback — not a promise of zero hallucinations", hr: "manje nagađanja, ranija provjera — ne obećanje rada bez halucinacija" }
  },
  {
    section: { en: "03 / my approach", hr: "03 / moj pristup" },
    title: { en: "The workflow I repeat.", hr: "Workflow koji ponavljam." },
    lead: { en: "I own the goal and final judgment. The agent explores, implements and brings back evidence.", hr: "Ja držim cilj i završnu prosudbu. Agent istražuje, implementira i donosi dokaze." },
    html: {
      en: `<div class="workflow"><div class="workflow__step workflow__step--hero"><b>Grill → Spec → tickets</b><span>agree on the goal and slice the work</span></div><div class="workflow__step"><b>Worktree → implement</b><span>isolate and execute one phase</span></div><div class="workflow__step"><b>Verify + checkpoint</b><span>check each phase and save its state</span></div><div class="workflow__step"><b>Human review</b><span>inspect the code and behavior</span></div><div class="workflow__step"><b>Refresh docs</b><span>record the new product state</span></div><div class="workflow__step"><b>Human merge</b><span>decide whether the change is ready</span></div></div>`,
      hr: `<div class="workflow"><div class="workflow__step workflow__step--hero"><b>Grill → Spec → ticketi</b><span>dogovorimo cilj i podijelimo posao</span></div><div class="workflow__step"><b>Worktree → implementacija</b><span>izoliramo i izvedemo jednu fazu</span></div><div class="workflow__step"><b>Provjera + checkpoint</b><span>provjerimo fazu i spremimo stanje</span></div><div class="workflow__step"><b>Ljudski pregled</b><span>pregledam kod i ponašanje</span></div><div class="workflow__step"><b>Osvježi docs</b><span>zapišemo novo stanje proizvoda</span></div><div class="workflow__step"><b>Ljudski merge</b><span>odlučim je li promjena spremna</span></div></div>`
    },
    footer: { en: "every next phase starts from saved decisions and current project docs", hr: "svaka sljedeća faza kreće od zapisanih odluka i aktualnih docsa" }
  },
  {
    section: { en: "03 / my approach", hr: "03 / moj pristup" },
    title: { en: "A good prompt gives direction.", hr: "Dobar prompt daje smjer." },
    lead: { en: "I name the goal and point to existing files and classes instead of pasting the whole project. Example: Profile states.", hr: "Zadam cilj i usmjerim na postojeće datoteke i klase umjesto kopiranja cijelog projekta. Primjer: stanja ekrana Profile." },
    html: {
      en: `<div class="prompt-card"><div><span class="key">Goal:</span> <span class="value">Add empty, error and paginated states to Profile.</span></div><div><span class="key">Read:</span> <span class="value">docs/profile.md, the Profile view and its API fixture.</span></div><div><span class="key">Constraints:</span> <span class="value">Keep MVVM + @Observable and the existing API contract.</span></div><div><span class="key">Deliver:</span> <span class="value">Implementation, tests and verification evidence.</span></div><div><span class="key">Verify:</span> <span class="value">Success, empty, error and next-page behavior.</span></div><div><span class="key">Stop if:</span> <span class="value">The docs and code disagree on intended behavior.</span></div></div>`,
      hr: `<div class="prompt-card"><div><span class="key">Cilj:</span> <span class="value">Dodaj prazno stanje, grešku i paginaciju za Profile.</span></div><div><span class="key">Pročitaj:</span> <span class="value">docs/profile.md, Profile view i njegov API fixture.</span></div><div><span class="key">Ograničenja:</span> <span class="value">Zadrži MVVM + @Observable i postojeći API ugovor.</span></div><div><span class="key">Isporuči:</span> <span class="value">Implementaciju, testove i dokaze provjere.</span></div><div><span class="key">Provjeri:</span> <span class="value">Uspjeh, prazno stanje, grešku i sljedeću stranicu.</span></div><div><span class="key">Stani ako:</span> <span class="value">Docs i kod ne opisuju isto željeno ponašanje.</span></div></div>`
    },
    footer: { en: "a pointer helps the agent find context; it still needs to read it", hr: "putanja pomaže agentu pronaći kontekst; i dalje ga treba pročitati" }
  },
  {
    section: { en: "03 / my approach", hr: "03 / moj pristup" },
    title: { en: "Project knowledge lives beside the code.", hr: "Znanje o projektu živi uz kod." },
    lead: { en: "I combine written notes with relevant material from Figma, tickets and API documentation. Developers and agents use the same map.", hr: "Spajam vlastite bilješke s relevantnim materijalima iz Figme, ticketa i API dokumentacije. Developer i agent koriste istu kartu." },
    html: {
      en: `<div class="cards cards--4"><div class="card card--cyan"><h3>Docs</h3><p>Product behavior, screens, flows, API contracts and architecture.</p></div><div class="card card--amber"><h3>Skills</h3><p>Repeatable procedures for interviewing, specifying and slicing work.</p></div><div class="card card--blue"><h3>AGENTS.md</h3><p>Project rules and pointers to relevant documentation and checks.</p></div><div class="card card--red"><h3>ADRs</h3><p>Why an important decision was made and which trade-offs it accepts.</p></div></div>`,
      hr: `<div class="cards cards--4"><div class="card card--cyan"><h3>Docs</h3><p>Ponašanje proizvoda, ekrani, flowovi, API ugovori i arhitektura.</p></div><div class="card card--amber"><h3>Skillovi</h3><p>Ponovljivi postupci za intervju, specifikaciju i podjelu posla.</p></div><div class="card card--blue"><h3>AGENTS.md</h3><p>Projektna pravila i putanje do relevantne dokumentacije i provjera.</p></div><div class="card card--red"><h3>ADR-ovi</h3><p>Zašto je važna odluka donesena i koje kompromise prihvaća.</p></div></div>`
    },
    footer: { en: "prepare the knowledge base, then keep it aligned with the product", hr: "pripremi bazu znanja, zatim je održavaj usklađenom s proizvodom" }
  },
  {
    section: { en: "04 / planning", hr: "04 / planiranje" },
    title: { en: "Grill: find a shared language.", hr: "Grill: pronađimo zajednički jezik." },
    lead: { en: "When I am unsure what the task really needs, Grill Me helps us expose assumptions before implementation.", hr: "Kad nisam siguran što zadatak stvarno traži, Grill Me pomaže nam otkriti pretpostavke prije implementacije." },
    html: {
      en: `<div class="cards cards--2"><div class="card card--cyan"><h3>Ask until we agree</h3><p>Who is this for? What should happen? Which edge cases matter? What stays out of scope?</p></div><div class="card card--amber"><h3>Keep the agreement</h3><p>Use /grill-me for the interview or /grill-with-docs to record vocabulary and decisions alongside it.</p></div></div><p class="body">Profile example: is “no profile yet” an empty state, a permission issue or an API error?</p>`,
      hr: `<div class="cards cards--2"><div class="card card--cyan"><h3>Pitaj dok se ne uskladimo</h3><p>Za koga radimo? Što se treba dogoditi? Koji su rubni slučajevi važni? Što nije dio zadatka?</p></div><div class="card card--amber"><h3>Sačuvaj dogovor</h3><p>/grill-me vodi intervju, a /grill-with-docs uz razgovor zapisuje terminologiju i odluke.</p></div></div><p class="body">Primjer Profilea: znači li „profil još ne postoji” prazno stanje, problem s dozvolama ili API grešku?</p>`
    },
    footer: { en: "planning reduces guesswork; it does not make the model infallible", hr: "planiranje smanjuje nagađanje; ne čini model nepogrešivim" }
  },
  {
    section: { en: "04 / planning", hr: "04 / planiranje" },
    title: { en: "Spec is the destination.", hr: "Spec je odredište." },
    lead: { en: "/to-spec writes down the decisions we have already made. We agree on the result before choosing the implementation steps.", hr: "/to-spec zapisuje odluke koje smo već donijeli. Dogovaramo rezultat prije odabira implementacijskih koraka." },
    html: {
      en: `<div class="cards cards--2"><div class="card card--cyan"><h3>What and why</h3><p>The problem, desired behavior, users, constraints and what is out of scope.</p></div><div class="card card--amber"><h3>How we know it works</h3><p>Acceptance criteria, edge cases, testing decisions and unresolved questions.</p></div></div><p class="body">Profile example: empty data shows guidance; an error offers retry; pagination preserves loaded items.</p>`,
      hr: `<div class="cards cards--2"><div class="card card--cyan"><h3>Što i zašto</h3><p>Problem, željeno ponašanje, korisnici, ograničenja i ono što je izvan opsega.</p></div><div class="card card--amber"><h3>Kako znamo da radi</h3><p>Kriteriji prihvaćanja, rubni slučajevi, odluke o testiranju i otvorena pitanja.</p></div></div><p class="body">Primjer Profilea: prazni podaci daju uputu; greška nudi ponovni pokušaj; paginacija čuva učitane stavke.</p>`
    },
    footer: { en: "the spec records the shared goal; it is not another interview", hr: "spec zapisuje zajednički cilj; nije novi intervju" }
  },
  {
    section: { en: "04 / planning", hr: "04 / planiranje" },
    title: { en: "Tickets are the route.", hr: "Ticketi su put do cilja." },
    lead: { en: "Grill → Spec → /to-tickets in one focused planning session. Then I implement small, verifiable phases in separate sessions.", hr: "Grill → Spec → /to-tickets u jednoj fokusiranoj sesiji planiranja. Zatim male, provjerljive faze implementiram u zasebnim sesijama." },
    html: {
      en: `<div class="cards cards--2"><div class="card card--cyan"><h3>One phase, one result</h3><p>A vertical slice through the relevant layers, with its inputs, dependencies and done condition.</p></div><div class="card card--amber"><h3>A fresh working context</h3><p>Read the spec, current ticket and relevant docs. Carry decisions forward, not the entire planning conversation.</p></div></div><p class="body">Profile slices: empty state → retry on error → pagination. Dependencies determine which can run in parallel.</p>`,
      hr: `<div class="cards cards--2"><div class="card card--cyan"><h3>Jedna faza, jedan rezultat</h3><p>Vertikalni presjek relevantnih slojeva, s ulazima, ovisnostima i jasnim uvjetom završetka.</p></div><div class="card card--amber"><h3>Svježi radni kontekst</h3><p>Pročitaj spec, trenutni ticket i relevantne docse. Prenesi odluke, ne cijeli razgovor planiranja.</p></div></div><p class="body">Faze Profilea: prazno stanje → ponovni pokušaj → paginacija. Ovisnosti određuju što može teći paralelno.</p>`
    },
    footer: { en: "small phases preserve focus and expose mistakes earlier", hr: "male faze čuvaju fokus i ranije otkrivaju pogreške" }
  },
  {
    section: { en: "05 / execution", hr: "05 / izvedba" },
    title: { en: "Parallel work, persistent terminals.", hr: "Paralelan rad, trajne <span data-dictionary-skip>terminalske sesije</span>." },
    lead: { en: "Git worktrees separate task directories and branches. Shared ports, databases and decisions still need coordination.", hr: "Git worktreeji odvajaju direktorije i grane neovisnih zadataka. Zajednički portovi, baze i odluke i dalje traže koordinaciju." },
    html: {
      en: `<div class="cards cards--2"><div class="card card--cyan"><span class="card__number">isolate the code</span><h3>Worktrunk</h3><p>I create, switch between and manage worktrees while the main checkout stays separate.</p></div><div class="card card--amber"><span class="card__number">keep the terminals running</span><h3>Herdr</h3><p>A terminal multiplexer for my agent sessions. I close the client and reattach later; processes continue while its background server runs.</p></div></div><p class="body">A <span data-dictionary-skip>terminal session</span> is not the model’s context. Restart recovery is different from keeping the original processes alive.</p>`,
      hr: `<div class="cards cards--2"><div class="card card--cyan"><span class="card__number">izolacija koda</span><h3>Worktrunk</h3><p>Otvaram, mijenjam i upravljam worktreejima, dok glavni checkout ostaje odvojen.</p></div><div class="card card--amber"><span class="card__number" data-dictionary-skip>očuvanje terminalskih sesija</span><h3>Herdr</h3><p>Terminalni multiplexer za agentske sesije. Zatvorim klijent i poslije se ponovno spojim; procesi nastavljaju dok pozadinski server radi.</p></div></div><p class="body"><span data-dictionary-skip>Terminalska sesija</span> nije kontekst modela. Obnova nakon restarta nije isto što i neprekinuti rad procesa.</p>`
    },
    footer: { en: "worktree = code isolation · Herdr = terminal continuity · checkpoint = task state", hr: "worktree = izolacija koda · Herdr = kontinuitet terminala · checkpoint = stanje zadatka" }
  },
  {
    section: { en: "05 / execution", hr: "05 / izvedba" },
    title: { en: "The agent implements one phase.", hr: "Agent implementira jednu fazu." },
    lead: { en: "The agent can work independently inside an agreed scope. Verification requirements are input, not a surprise at review time.", hr: "Agent može samostalno raditi unutar dogovorenog opsega. Zahtjevi provjere dio su ulaza, a ne iznenađenje na reviewu." },
    html: {
      en: `<div class="cards cards--2"><div class="card card--cyan"><h3>Before coding</h3><p>Read the ticket and existing patterns. Identify the files, constraints and checks for this phase.</p></div><div class="card card--amber"><h3>Before handing it back</h3><p>Implement, add tests and fixtures, run checks and report results. Surface blockers instead of inventing requirements.</p></div></div>`,
      hr: `<div class="cards cards--2"><div class="card card--cyan"><h3>Prije pisanja koda</h3><p>Pročitaj ticket i postojeće obrasce. Pronađi datoteke, ograničenja i provjere za ovu fazu.</p></div><div class="card card--amber"><h3>Prije predaje rezultata</h3><p>Implementiraj, dodaj testove i fixturee, pokreni provjere i prijavi rezultate. Istakni blokade umjesto izmišljanja zahtjeva.</p></div></div>`
    },
    footer: { en: "one focused change, one checkable result", hr: "jedna fokusirana promjena, jedan provjerljiv rezultat" }
  },
  {
    section: { en: "05 / execution", hr: "05 / izvedba" },
    title: { en: "A checkpoint for tomorrow.", hr: "Checkpoint za nastavak sutra." },
    lead: { en: "After each phase I save a record so the next session can see the state of the spec, the plan or the tickets. Illustrative status:", hr: "Nakon svake faze spremam zapis iz kojeg sljedeća sesija vidi stanje speca, plana ili ticketa. Ilustrativni status:" },
    html: {
      en: `<div class="prompt-card"><div><span class="key">spec:</span> <span class="value">profile-states.md</span></div><div><span class="key">done:</span> <span class="value">Empty-state UI, fixture and tests</span></div><div><span class="key">verified:</span> <span class="value">Empty-state tests pass; preview checked</span></div><div><span class="key">unverified:</span> <span class="value">Live backend integration</span></div><div><span class="key">open:</span> <span class="value">Confirm retry behavior before the next phase</span></div><div><span class="key">next:</span> <span class="value">Implement error + retry in the Profile view</span></div></div><p class="body">The next session sees where we left off and continues because it already has the full spec for that problem and the tickets that are done. If the goal changes, update the spec and remaining tickets.</p>`,
      hr: `<div class="prompt-card"><div><span class="key">spec:</span> <span class="value">profile-states.md</span></div><div><span class="key">done:</span> <span class="value">UI praznog stanja, fixture i testovi</span></div><div><span class="key">verified:</span> <span class="value">Testovi praznog stanja prolaze; preview provjeren</span></div><div><span class="key">unverified:</span> <span class="value">Integracija sa stvarnim backendom</span></div><div><span class="key">open:</span> <span class="value">Potvrditi ponašanje ponovnog pokušaja prije iduće faze</span></div><div><span class="key">next:</span> <span class="value">Implementirati grešku i ponovni pokušaj u Profile viewu</span></div></div><p class="body">Sljedeća sesija vidi gdje smo stali i nastavlja jer za taj problem već ima cijelu specifikaciju i odrađene tickete. Ako se cilj promijeni, ažuriraj spec i preostale tickete.</p>`
    },
    footer: { en: "a checkpoint records progress; product docs describe the system", hr: "checkpoint bilježi napredak; produktni docs opisuju sustav" }
  },
  {
    section: { en: "06 / verification", hr: "06 / provjera" },
    title: { en: "The agent returns evidence.", hr: "Agent vraća dokaze provjere." },
    lead: { en: "Checks run after every phase. At the end, I also check the integrated feature against the spec.", hr: "Provjere se pokreću nakon svake faze. Na kraju provjeravam i integrirani feature prema specifikaciji." },
    html: {
      en: `<div class="cards cards--2"><div class="card card--cyan"><h3>Automated checks</h3><p>Build, relevant tests, API contract checks and UI previews. Report what passed, failed or was not checked.</p></div><div class="card card--amber"><h3>Prepared API scenarios</h3><p>Using docs and code, the agent prepares local JSON responses and mappings with Yaak MCP and an HTTP proxy.</p></div></div><p class="body">Success · empty · error · pagination · edge cases. Deterministic fixtures make the same behavior reproducible without a live backend.</p>`,
      hr: `<div class="cards cards--2"><div class="card card--cyan"><h3>Automatske provjere</h3><p>Build, relevantni testovi, provjere API ugovora i UI previewi. Prijavi što je prošlo, palo ili ostalo neprovjereno.</p></div><div class="card card--amber"><h3>Pripremljeni API scenariji</h3><p>Iz docsa i koda agent priprema lokalne JSON odgovore i mapiranja uz Yaak MCP i HTTP proxy.</p></div></div><p class="body">Uspjeh · prazno stanje · greška · paginacija · rubni slučajevi. Deterministički fixturei omogućuju ponavljanje bez stvarnog backenda.</p>`
    },
    footer: { en: "simulated responses test application behavior, not live backend compatibility", hr: "simulirani odgovori provjeravaju ponašanje aplikacije, ne kompatibilnost sa stvarnim backendom" }
  },
  {
    section: { en: "06 / verification", hr: "06 / provjera" },
    title: { en: "I review the code and the result.", hr: "Pregledam kod i stvarni rezultat." },
    lead: { en: "A green build does not prove that we built the right thing. I inspect the diff and walk the user flow.", hr: "Zeleni build ne dokazuje da smo napravili pravu stvar. Pregledam diff i prolazim kroz korisnički flow." },
    html: {
      en: `<div class="cards cards--2"><div class="card card--cyan"><h3>Code and intent</h3><p>Does the change match the spec, fit the architecture and stay within scope?</p></div><div class="card card--amber"><h3>Behavior and design</h3><p>In the iOS simulator, check expected and failure states through the proxy. For UI work, compare against Figma.</p></div></div><p class="body">If a check fails, return to implementation and verify again. The agent prepares the change; I own the decision to merge.</p>`,
      hr: `<div class="cards cards--2"><div class="card card--cyan"><h3>Kod i namjera</h3><p>Odgovara li promjena specu, uklapa li se u arhitekturu i ostaje li unutar opsega?</p></div><div class="card card--amber"><h3>Ponašanje i dizajn</h3><p>U iOS simulatoru provjerim očekivana i pogrešna stanja kroz proxy. UI usporedim s Figmom.</p></div></div><p class="body">Ako provjera padne, vraćamo se implementaciji i ponovno provjeravamo. Agent priprema promjenu; ja odlučujem o mergeu.</p>`
    },
    footer: { en: "delegating execution does not transfer responsibility", hr: "delegiranje izvedbe nije prijenos odgovornosti" }
  },
  {
    section: { en: "06 / verification", hr: "06 / provjera" },
    title: { en: "Refresh docs. Close the loop.", hr: "Osvježi docs. Zatvori krug." },
    lead: { en: "After review and corrections, I ask the agent to update the docs to match the actual product before merge.", hr: "Nakon pregleda i ispravaka tražim da agent prije mergea uskladi docse sa stvarnim stanjem proizvoda." },
    html: {
      en: `<div class="cards cards--2"><div class="card card--cyan"><h3>Update what changed</h3><p>Behavior, screen → API → model mappings, architecture and the reasons behind new decisions.</p></div><div class="card card--amber"><h3>Prepare the next task</h3><p>Developers and future agent sessions start from current facts rather than reconstructing this conversation.</p></div></div><p class="body">Profile example: document empty-state guidance, retry behavior and pagination rules alongside the code.</p>`,
      hr: `<div class="cards cards--2"><div class="card card--cyan"><h3>Ažuriraj promijenjeno</h3><p>Ponašanje, mapu ekran → API → model, arhitekturu i razloge novih odluka.</p></div><div class="card card--amber"><h3>Pripremi sljedeći zadatak</h3><p>Developeri i buduće agentske sesije kreću od aktualnih činjenica umjesto rekonstrukcije ovog razgovora.</p></div></div><p class="body">Primjer Profilea: uz kod dokumentiraj uputu za prazno stanje, ponovni pokušaj i pravila paginacije.</p>`
    },
    footer: { en: "docs are maintained knowledge, not a one-time setup", hr: "docs su održavano znanje, a ne jednokratni setup" }
  },
  {
    section: { en: "07 / takeaways", hr: "07 / zaključci" },
    title: { en: "Scale the process to the risk.", hr: "Prilagodi proces riziku zadatka." },
    html: {
      en: `<div class="cards cards--2"><div class="card card--cyan"><span class="card__number">small / low risk</span><h3>A shorter route</h3><p>Read context → implement → verify → human review → update affected docs → human merge.</p></div><div class="card card--amber"><span class="card__number">large / uncertain</span><h3>The full workflow</h3><p>Grill → Spec → tickets → isolated phases with checks and checkpoints → human review → docs → human merge.</p></div></div><div class="rule"></div><p class="statement">Planning varies. Responsibility stays.</p>`,
      hr: `<div class="cards cards--2"><div class="card card--cyan"><span class="card__number">malo / nizak rizik</span><h3>Kraći put</h3><p>Pročitaj kontekst → implementiraj → provjeri → ljudski pregled → ažuriraj relevantne docse → ljudski merge.</p></div><div class="card card--amber"><span class="card__number">veliko / neizvjesno</span><h3>Cijeli workflow</h3><p>Grill → Spec → ticketi → izolirane faze s provjerama i checkpointima → ljudski pregled → docs → ljudski merge.</p></div></div><div class="rule"></div><p class="statement">Planiranje prilagodim. Odgovornost zadržavam.</p>`
    },
    footer: { en: "parallelism is optional; relevant context and verification are not", hr: "paralelizam je opcionalan; relevantni kontekst i provjera nisu" }
  },
  {
    section: { en: "07 / takeaways", hr: "07 / zaključci" },
    title: { en: "A <span data-dictionary-skip>clear</span> goal. Small, verified steps.", hr: "Jasan cilj. Mali, provjereni koraci." },
    lead: { en: "The model is only one part. My workflow connects project knowledge, shared decisions and feedback.", hr: "Model je samo jedan dio. Moj workflow povezuje znanje o projektu, zajedničke odluke i povratnu informaciju." },
    html: {
      en: `<div class="cards cards--4"><div class="card card--cyan"><h3>Context</h3><p>Relevant knowledge, close to the code.</p></div><div class="card card--amber"><h3>Agreement</h3><p>A shared goal before implementation.</p></div><div class="card card--blue"><h3>Phases</h3><p>Focused sessions and a saved checkpoint.</p></div><div class="card card--red"><h3>Evidence</h3><p>Agent checks, human review and current docs.</p></div></div>`,
      hr: `<div class="cards cards--4"><div class="card card--cyan"><h3>Kontekst</h3><p>Relevantno znanje, blizu koda.</p></div><div class="card card--amber"><h3>Dogovor</h3><p>Zajednički cilj prije implementacije.</p></div><div class="card card--blue"><h3>Faze</h3><p>Fokusirane sesije i spremljen checkpoint.</p></div><div class="card card--red"><h3>Dokazi</h3><p>Agentove provjere, ljudski pregled i aktualni docs.</p></div></div>`
    },
    footer: { en: "next: the skills, tools and sources behind this workflow", hr: "slijede skillovi, alati i izvori iza ovog workflowa" }
  },
  {
    section: { en: "08 / resources", hr: "08 / poveznice" },
    title: { en: "Skills I use.", hr: "Skillovi koje koristim." },
    lead: { en: "Public skills from Matt Pocock’s collection. Each link opens the skill’s documentation.", hr: "Javni skillovi iz zbirke Matta Pococka. Svaka poveznica otvara dokumentaciju skilla." },
    html: {
      en: `<div class="resources"><a href="https://github.com/mattpocock/skills/blob/main/docs/productivity/grill-me.md" target="_blank" rel="noreferrer"><strong>/grill-me ↗</strong><span>Clarify a loose idea through an interview.</span></a><a href="https://github.com/mattpocock/skills/blob/main/docs/engineering/grill-with-docs.md" target="_blank" rel="noreferrer"><strong>/grill-with-docs ↗</strong><span>Interview with recorded vocabulary and decisions.</span></a><a href="https://github.com/mattpocock/skills/blob/main/docs/engineering/to-spec.md" target="_blank" rel="noreferrer"><strong>/to-spec ↗</strong><span>Write agreed decisions into a specification.</span></a><a href="https://github.com/mattpocock/skills/blob/main/docs/engineering/to-tickets.md" target="_blank" rel="noreferrer"><strong>/to-tickets ↗</strong><span>Split work into verifiable, dependency-linked tickets.</span></a></div>`,
      hr: `<div class="resources"><a href="https://github.com/mattpocock/skills/blob/main/docs/productivity/grill-me.md" target="_blank" rel="noreferrer"><strong>/grill-me ↗</strong><span>Razjasni početnu ideju kroz intervju.</span></a><a href="https://github.com/mattpocock/skills/blob/main/docs/engineering/grill-with-docs.md" target="_blank" rel="noreferrer"><strong>/grill-with-docs ↗</strong><span>Uz intervju zapiši terminologiju i odluke.</span></a><a href="https://github.com/mattpocock/skills/blob/main/docs/engineering/to-spec.md" target="_blank" rel="noreferrer"><strong>/to-spec ↗</strong><span>Pretvori dogovorene odluke u specifikaciju.</span></a><a href="https://github.com/mattpocock/skills/blob/main/docs/engineering/to-tickets.md" target="_blank" rel="noreferrer"><strong>/to-tickets ↗</strong><span>Podijeli posao u provjerljive tickete s ovisnostima.</span></a></div>`
    },
    footer: { en: "interview → agreement → specification → focused tickets", hr: "intervju → dogovor → specifikacija → fokusirani ticketi" }
  },
  {
    section: { en: "08 / resources", hr: "08 / poveznice" },
    title: { en: "Tools behind the workflow.", hr: "Alati iza workflowa." },
    html: {
      en: `<div class="resources"><a href="https://git-scm.com/docs/git-worktree" target="_blank" rel="noreferrer"><strong>Git worktree ↗</strong><span>Separate working directories and branches.</span></a><a href="https://worktrunk.dev/" target="_blank" rel="noreferrer"><strong>Worktrunk ↗</strong><span>Manage and switch between worktrees.</span></a><a href="https://herdr.dev/" target="_blank" rel="noreferrer"><strong>Herdr ↗</strong><span>Persistent terminal sessions for agents.</span></a><a href="https://yaak.app/" target="_blank" rel="noreferrer"><strong>Yaak ↗</strong><span>API work and MCP integration in my testing setup.</span></a><a href="https://www.figma.com/" target="_blank" rel="noreferrer"><strong>Figma ↗</strong><span>UI context, design data and comparison.</span></a><a href="https://developer.apple.com/documentation/xcode/running-your-app-in-simulator-or-on-a-device" target="_blank" rel="noreferrer"><strong>Xcode Simulator ↗</strong><span>Manual app flows and simulated API states.</span></a></div><p class="body">HTTP proxy: part of my API simulation setup, not a named product in this talk.</p>`,
      hr: `<div class="resources"><a href="https://git-scm.com/docs/git-worktree" target="_blank" rel="noreferrer"><strong>Git worktree ↗</strong><span>Zasebni radni direktoriji i grane.</span></a><a href="https://worktrunk.dev/" target="_blank" rel="noreferrer"><strong>Worktrunk ↗</strong><span>Upravljanje i prebacivanje između worktreeja.</span></a><a href="https://herdr.dev/" target="_blank" rel="noreferrer"><strong>Herdr ↗</strong><span>Trajne terminalske sesije za agente.</span></a><a href="https://yaak.app/" target="_blank" rel="noreferrer"><strong>Yaak ↗</strong><span>Rad s API-jem i MCP integracija u mom testiranju.</span></a><a href="https://www.figma.com/" target="_blank" rel="noreferrer"><strong>Figma ↗</strong><span>UI kontekst, podaci dizajna i usporedba.</span></a><a href="https://developer.apple.com/documentation/xcode/running-your-app-in-simulator-or-on-a-device" target="_blank" rel="noreferrer"><strong>Xcode Simulator ↗</strong><span>Ručni flowovi aplikacije i simulirana API stanja.</span></a></div><p class="body">HTTP proxy: dio mog setupa za API simulaciju, bez izdvajanja konkretnog proizvoda u ovom izlaganju.</p>`
    },
    footer: { en: "tools support the process; they do not replace the agreement or review", hr: "alati podržavaju proces; ne zamjenjuju dogovor ni pregled" }
  },
  {
    section: { en: "08 / resources", hr: "08 / poveznice" },
    title: { en: "Sources and further learning.", hr: "Izvori i daljnje učenje." },
    html: {
      en: `<div class="resources"><a href="https://www.aihero.dev/ai-coding-dictionary" target="_blank" rel="noreferrer"><strong>AI Hero Coding Dictionary ↗</strong><span>Definitions of the terms used throughout the talk.</span></a><a href="https://www.aihero.dev/skills" target="_blank" rel="noreferrer"><strong>AI Hero Skills ↗</strong><span>The skill collection and its documentation.</span></a><a href="https://www.aihero.dev/workshops/ai-coding-crash-course" target="_blank" rel="noreferrer"><strong>AI Coding Crash Course ↗</strong><span>Models, context, focused sessions and agent workflows.</span></a><a href="https://github.com/owainlewis/blueprint" target="_blank" rel="noreferrer"><strong>Blueprint ↗</strong><span>Design and planning before delegated implementation.</span></a><a href="https://www.youtube.com/watch?v=gwduNjsOaNA" target="_blank" rel="noreferrer"><strong>Agentic Design Skills ↗</strong><span>Owain Lewis on the design and delivery workflow.</span></a><a href="https://www.youtube.com/live/MN9dGgmLyso?si=Vec_ysVN1sxUjXg7" target="_blank" rel="noreferrer"><strong>Poteto · pstack ↗</strong><span>Shipping thousands of PRs a month at SpaceX.</span></a></div>`,
      hr: `<div class="resources"><a href="https://www.aihero.dev/ai-coding-dictionary" target="_blank" rel="noreferrer"><strong>AI Hero Coding Dictionary ↗</strong><span>Objašnjenja pojmova koji se pojavljuju u izlaganju.</span></a><a href="https://www.aihero.dev/skills" target="_blank" rel="noreferrer"><strong>AI Hero Skills ↗</strong><span>Zbirka skillova i njihova dokumentacija.</span></a><a href="https://www.aihero.dev/workshops/ai-coding-crash-course" target="_blank" rel="noreferrer"><strong>AI Coding Crash Course ↗</strong><span>Modeli, kontekst, fokusirane sesije i agentski workflowi.</span></a><a href="https://github.com/owainlewis/blueprint" target="_blank" rel="noreferrer"><strong>Blueprint ↗</strong><span>Dizajn i planiranje prije delegirane implementacije.</span></a><a href="https://www.youtube.com/watch?v=gwduNjsOaNA" target="_blank" rel="noreferrer"><strong>Agentic Design Skills ↗</strong><span>Owain Lewis o workflowu dizajna i isporuke.</span></a><a href="https://www.youtube.com/live/MN9dGgmLyso?si=Vec_ysVN1sxUjXg7" target="_blank" rel="noreferrer"><strong>Poteto · pstack ↗</strong><span>Tisuće PR-ova mjesečno u SpaceX-u.</span></a></div>`
    },
    footer: { en: "these sources sit beside the talk; they are not a required reading order", hr: "izvori stoje uz izlaganje; nisu obavezan red čitanja" }
  },
  {
    section: { en: "09 / the goal", hr: "09 / cilj" },
    title: { en: "The goal: an environment where the agent works well.", hr: "Cilj: okruženje u kojem agent radi dobro." },
    lead: { en: "Bring the code to a state where it is itself good, and where it explains to the agent how to do good work. Shrink the docs over time and use tools to verify the agent.", hr: "Dovedemo kod u stanje da je sam dobar i da agentu objašnjava kako raditi dobar posao. S vremenom smanjimo docse i alatima verificiramo rad agenta." },
    html: {
      en: `<div class="cards cards--4"><div class="card card--cyan"><span class="card__number">01</span><h3>Docs and skills first</h3><p>Early on we need docs and skills. The agent cannot yet read everything from the codebase.</p></div><div class="card card--amber"><span class="card__number">02</span><h3>Code as the source</h3><p>When architecture and classes are consistent and well defined, the agent reads the rules from the codebase. Docs shrink.</p></div><div class="card card--blue"><span class="card__number">03</span><h3>Encode the environment</h3><p>The environment dictates the rules. If the agent errs, we build the rule into the environment through the next conversations.</p></div><div class="card card--red"><span class="card__number">04</span><h3>Self-check, then the feature</h3><p>Linters and CLI scripts help the agent check itself while assembling code. That is the mini verification; next comes verifying the feature.</p></div></div>`,
      hr: `<div class="cards cards--4"><div class="card card--cyan"><span class="card__number">01</span><h3>Prvo docs i skillovi</h3><p>Na početku trebaju docs i skillovi. Agent još ne može sve očitati iz codebasea.</p></div><div class="card card--amber"><span class="card__number">02</span><h3>Kod kao izvor</h3><p>Kad su arhitektura i klase jednako i dobro definirane, agent čita pravila iz codebasea. Docs se smanjuju.</p></div><div class="card card--blue"><span class="card__number">03</span><h3>Ugradi u okruženje</h3><p>Okruženje diktira pravila. Ako agent griješi, kroz sljedeće razgovore ugradimo pravilo u okruženje.</p></div><div class="card card--red"><span class="card__number">04</span><h3>Samoprovjera, zatim feature</h3><p>Linteri i CLI skripte pomažu agentu da se sam provjeri pri slaganju koda. To je mini verifikacija; sljedeći korak je verifikacija featurea.</p></div></div>`
    },
    footer: { en: "the environment dictates the rules; encode repeated mistakes into checks", hr: "okruženje diktira pravila; ponovljene greške ugradi u provjere" }
  }
];

const ui = {
  en: {
    title: "My agentic workflow",
    brand: "agentic workflow",
    overviewTitle: "Overview",
    hint: "← → navigate · L language · T theme · O overview · Dotted terms: hover for definitions",
    previous: "Previous slide",
    next: "Next slide",
    openOverview: "Open slide overview",
    switchLanguage: "Switch to Croatian",
    controls: "Presentation controls",
    switchTheme: "Switch theme",
    themeLabels: { default: "default", "cursor-dark": "cursor" }
  },
  hr: {
    title: "Moj agentski workflow",
    brand: "agentski workflow",
    overviewTitle: "Pregled",
    hint: "← → navigacija · L jezik · T tema · O pregled · Točkasto podcrtano: prijeđi mišem za objašnjenje",
    previous: "Prethodni slajd",
    next: "Sljedeći slajd",
    openOverview: "Otvori pregled slajdova",
    switchLanguage: "Prebaci na engleski",
    controls: "Kontrole prezentacije",
    switchTheme: "Promijeni temu",
    themeLabels: { default: "default", "cursor-dark": "cursor" }
  }
};

const themes = ["default", "cursor-dark"];
const themeAliases = { cursor: "cursor-dark" };
const themeColors = { default: "#0b0e12", "cursor-dark": "#14120b" };

let language = "hr";
let current = (Number(new URLSearchParams(location.search).get("slide")) || 1) - 1;
current = Math.max(0, Math.min(slides.length - 1, Math.trunc(current)));
let theme = resolveTheme(
  new URLSearchParams(location.search).get("theme") ||
  localStorage.getItem("deck-theme") ||
  "default"
);

const deck = document.querySelector("#deck");
const count = document.querySelector("#slide-count");
const sectionLabel = document.querySelector("#section-label");
const progressBar = document.querySelector("#progress-bar");
const langButton = document.querySelector("#lang-toggle");
const themeButton = document.querySelector("#theme-toggle");
const themeColorMeta = document.querySelector("#theme-color");
const hint = document.querySelector("#hint");
const overview = document.querySelector("#overview-panel");
const overviewGrid = document.querySelector("#overview-grid");

function resolveTheme(value) {
  const raw = String(value || "default").toLowerCase();
  const mapped = themeAliases[raw] || raw;
  return themes.includes(mapped) ? mapped : "default";
}

function applyTheme(nextTheme) {
  theme = resolveTheme(nextTheme);
  if (theme === "default") document.documentElement.removeAttribute("data-theme");
  else document.documentElement.setAttribute("data-theme", theme);
  if (themeColorMeta) themeColorMeta.setAttribute("content", themeColors[theme] || themeColors.default);
  try { localStorage.setItem("deck-theme", theme); } catch (_) { /* ignore private-mode quota */ }
}

function renderSlides() {
  deck.innerHTML = slides.map((slide, index) => {
    const title = slide.title?.[language] || "";
    const lead = slide.lead?.[language] || "";
    const html = slide.html?.[language] || "";
    const footer = slide.footer?.[language] || "";
    return `<section class="slide ${index === current ? "active" : ""} ${slide.type === "title" ? "title-slide" : ""}" data-index="${index}" aria-hidden="${index === current ? "false" : "true"}" ${index === current ? "" : "inert"}><div class="slide__inner"><p class="eyebrow">${slide.section[language]}</p>${title ? `<h${slide.type === "title" ? "1" : "2"}>${title}</h${slide.type === "title" ? "1" : "2"}>` : ""}${lead ? `<p class="lead">${lead}</p>` : ""}${slide.type === "title" ? `<div class="byline"><span>${slide.byline[language]}</span><span>·</span><span>${footer}</span></div>` : html}</div>${slide.type !== "title" ? `<div class="footer-note">${footer}</div>` : ""}</section>`;
  }).join("");
  glossary.annotate(deck, language);
  updateChrome();
}

function renderOverview() {
  overviewGrid.innerHTML = slides.map((slide, index) => `<button class="overview__item ${index === current ? "current" : ""}" type="button" data-slide="${index}"><small>${String(index + 1).padStart(2, "0")}</small><b>${stripHtml(slide.title?.[language] || slide.section[language])}</b></button>`).join("");
  overviewGrid.querySelectorAll("[data-slide]").forEach(button => button.addEventListener("click", () => { goTo(Number(button.dataset.slide)); closeOverview(); }));
}

function stripHtml(value) { const div = document.createElement("div"); div.innerHTML = value; return div.textContent || div.innerText || ""; }

function syncUrl() {
  const params = new URLSearchParams();
  params.set("slide", String(current + 1));
  if (theme !== "default") params.set("theme", theme);
  history.replaceState(null, "", `?${params.toString()}`);
}

function updateChrome() {
  const slide = slides[current];
  count.textContent = `${String(current + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  sectionLabel.textContent = slide.section[language];
  progressBar.style.transform = `scaleX(${(current + 1) / slides.length})`;
  document.querySelector("[data-ui='brand']").textContent = ui[language].brand;
  document.querySelector("[data-ui='overviewTitle']").textContent = ui[language].overviewTitle;
  hint.textContent = ui[language].hint;
  document.querySelector("#prev").setAttribute("aria-label", ui[language].previous);
  document.querySelector("#next").setAttribute("aria-label", ui[language].next);
  document.querySelector("#overview").setAttribute("aria-label", ui[language].openOverview);
  document.querySelector(".controls").setAttribute("aria-label", ui[language].controls);
  langButton.textContent = language === "en" ? "HR" : "EN";
  langButton.setAttribute("aria-label", ui[language].switchLanguage);
  themeButton.textContent = ui[language].themeLabels[theme] || theme;
  themeButton.setAttribute("aria-label", ui[language].switchTheme);
  document.documentElement.lang = language;
  document.title = ui[language].title;
  syncUrl();
}

function cycleTheme() {
  glossary.close();
  const index = themes.indexOf(theme);
  applyTheme(themes[(index + 1) % themes.length]);
  updateChrome();
}

function goTo(next) {
  if (next < 0 || next >= slides.length || next === current) return;
  glossary.close();
  const old = deck.querySelector(`[data-index="${current}"]`);
  old?.classList.remove("active"); old?.setAttribute("aria-hidden", "true"); old?.setAttribute("inert", "");
  current = next;
  const nextSlide = deck.querySelector(`[data-index="${current}"]`);
  nextSlide?.classList.add("active"); nextSlide?.setAttribute("aria-hidden", "false"); nextSlide?.removeAttribute("inert");
  updateChrome(); renderOverview();
}

function toggleLanguage() { language = language === "en" ? "hr" : "en"; renderSlides(); renderOverview(); }
function openOverview() { glossary.close(); overview.classList.add("open"); overview.setAttribute("aria-hidden", "false"); }
function closeOverview() { overview.classList.remove("open"); overview.setAttribute("aria-hidden", "true"); }

document.querySelector("#prev").addEventListener("click", () => goTo(current - 1));
document.querySelector("#next").addEventListener("click", () => goTo(current + 1));
document.querySelector("#overview").addEventListener("click", openOverview);
document.querySelector("#close-overview").addEventListener("click", closeOverview);
langButton.addEventListener("click", toggleLanguage);
themeButton.addEventListener("click", cycleTheme);
document.addEventListener("keydown", event => {
  if (event.key === "Escape") { glossary.close(); closeOverview(); return; }
  if (overview.classList.contains("open")) return;
  if ([" ", "Enter"].includes(event.key) && event.target.closest("button, a")) return;
  if (["ArrowRight", "PageDown", " "].includes(event.key)) { event.preventDefault(); goTo(current + 1); }
  if (["ArrowLeft", "PageUp"].includes(event.key)) { event.preventDefault(); goTo(current - 1); }
  if (event.key.toLowerCase() === "l") toggleLanguage();
  if (event.key.toLowerCase() === "t") cycleTheme();
  if (event.key.toLowerCase() === "o" || (event.key.toLowerCase() === "k" && (event.metaKey || event.ctrlKey))) openOverview();
});

applyTheme(theme);
renderSlides();
renderOverview();
