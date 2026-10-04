// Concise adaptations of Matt Pocock's AI Coding Dictionary, with paired
// Croatian translations. The slug identifies the original aihero.dev entry.
const dictionaryEntries = [
  {
    slug: "model", title: { en: "Model", hr: "Model" },
    aliases: { en: ["model", "models", "LLM", "LLMs"], hr: ["model", "modela", "modelu", "modeli", "modele", "modelom", "LLM"] },
    definition: { en: "The trained prediction engine. It reads context and generates tokens, but has no memory between requests and cannot act on the world without a harness.", hr: "Trenirani mehanizam predviđanja. Čita kontekst i generira tokene, ali ne pamti prethodne zahtjeve i ne može djelovati u okruženju bez harnessa." }
  },
  {
    slug: "harness", title: { en: "Harness", hr: "Harness" },
    aliases: { en: ["harness", "harnesses"], hr: ["harness", "harnessa", "harnessu", "harnessom"] },
    definition: { en: "The software around a model that makes it an agent: tools, system instructions, context management and permissions. It executes the tool calls the model requests.", hr: "Softver oko modela koji ga pretvara u agenta: alati, sistemske upute, upravljanje kontekstom i dozvole. Izvršava pozive alata koje model zatraži." }
  },
  {
    slug: "environment", title: { en: "Environment", hr: "Okruženje" },
    aliases: { en: ["environment", "environments"], hr: ["okruženje", "okruženja", "okruženju", "okruženjem"] },
    definition: { en: "The world outside the harness that an agent can observe and change through tools: files, a shell, a browser, APIs and other systems.", hr: "Svijet izvan harnessa koji agent može opažati i mijenjati alatima: datoteke, shell, preglednik, API-ji i drugi sustavi." }
  },
  {
    slug: "agent", title: { en: "Agent", hr: "Agent" },
    aliases: { en: ["agent", "agents", "AI agent", "AI agents"], hr: ["agent", "agenta", "agentu", "agenti", "agente", "agentima", "agentom", "AI agent"] },
    definition: { en: "A model operating through a harness, with tools, instructions and a context window. Together they can respond to a user, act on an environment and observe results.", hr: "Model koji radi kroz harness, s alatima, uputama i kontekstnim prozorom. Zajedno mogu odgovarati korisniku, djelovati u okruženju i opažati rezultate." }
  },
  {
    slug: "token", title: { en: "Token", hr: "Token" },
    aliases: { en: ["token", "tokens"], hr: ["token", "tokeni", "tokene", "tokena", "tokenima"] },
    definition: { en: "A unit of text a model reads or generates, often a word or part of a word. Context capacity, usage costs and output length are measured in tokens.", hr: "Jedinica teksta koju model čita ili generira, često riječ ili dio riječi. Kapacitet konteksta, trošak korištenja i duljina izlaza mjere se tokenima." }
  },
  {
    slug: "stateless", title: { en: "Stateless", hr: "Bez stanja" },
    aliases: { en: ["stateless", "statelessness"], hr: ["bez stanja", "stateless"] },
    definition: { en: "The model carries no memory from one request to the next. The harness must send the relevant history and context again on every request.", hr: "Model ne prenosi pamćenje iz jednog zahtjeva u sljedeći. Harness pri svakom zahtjevu mora ponovno poslati relevantnu povijest i kontekst." }
  },
  {
    slug: "context", title: { en: "Context", hr: "Kontekst" },
    aliases: { en: ["context"], hr: ["kontekst", "konteksta", "kontekstu", "kontekstom"] },
    definition: { en: "The relevant information available to the agent right now: instructions, conversation, files and tool results that help it perform the task.", hr: "Relevantne informacije koje su agentu trenutačno dostupne: upute, razgovor, datoteke i rezultati alata koji mu pomažu izvršiti zadatak." }
  },
  {
    slug: "context-window", title: { en: "Context window", hr: "Kontekstni prozor" },
    aliases: { en: ["context window", "context windows"], hr: ["context window", "context windowa", "context windowu", "kontekstni prozor", "kontekstnog prozora", "kontekstnom prozoru"] },
    definition: { en: "Everything the model can see in one request, within a finite token limit. A larger window allows more input, but does not guarantee equally good reasoning across all of it.", hr: "Sve što model može vidjeti u jednom zahtjevu, unutar konačnog broja tokena. Veći prozor prima više ulaza, ali ne jamči jednako kvalitetno zaključivanje nad cijelim sadržajem." }
  },
  {
    slug: "session", title: { en: "Session", hr: "Sesija" },
    aliases: { en: ["session", "sessions"], hr: ["sesija", "sesije", "sesiju", "sesiji", "sesijom", "sesijama"] },
    definition: { en: "One bounded interaction with an agent. Messages and tool results accumulate across turns until it is cleared, closed or compacted into a fresh session.", hr: "Jedna ograničena interakcija s agentom. Poruke i rezultati alata nakupljaju se kroz turnove dok se sesija ne očisti, zatvori ili sažme u novu sesiju." }
  },
  {
    slug: "turn", title: { en: "Turn", hr: "Turn" },
    aliases: { en: ["turn", "turns"], hr: ["turn", "turna", "turnu", "turnova", "turnove", "turnovi"] },
    definition: { en: "One user message and everything the agent does in response before yielding back to the user. A turn can contain several model requests and tool calls.", hr: "Jedna korisnička poruka i sve što agent napravi kao odgovor prije nego što vrati riječ korisniku. Turn može sadržavati više zahtjeva modelu i poziva alata." }
  },
  {
    slug: "tool", title: { en: "Tool", hr: "Alat" },
    aliases: { en: ["tool", "tools"], hr: ["alat", "alata", "alati", "alate", "alatima"] },
    definition: { en: "A function the harness makes available to the agent, such as reading a file, editing code or running a shell command. Tools let an agent observe and change its environment.", hr: "Funkcija koju harness daje agentu, primjerice čitanje datoteke, uređivanje koda ili pokretanje shell naredbe. Alati omogućuju opažanje i mijenjanje okruženja." }
  },
  {
    slug: "tool-call", title: { en: "Tool call", hr: "Poziv alata" },
    aliases: { en: ["tool call", "tool calls"], hr: ["poziv alata", "poziva alata", "pozive alata", "pozivi alata"] },
    definition: { en: "Structured model output naming a tool and its arguments. It is a request, not the action itself: the harness must execute it and return a result.", hr: "Strukturirani izlaz modela s nazivom alata i argumentima. To je zahtjev, ne sama radnja: harness ga mora izvršiti i vratiti rezultat." }
  },
  {
    slug: "tool-result", title: { en: "Tool result", hr: "Rezultat alata" },
    aliases: { en: ["tool result", "tool results"], hr: ["rezultat alata", "rezultati alata", "rezultate alata", "rezultata alata"] },
    definition: { en: "The output returned to the model after a tool runs: file contents, command output or an error. It is how the agent learns what happened in the environment.", hr: "Izlaz vraćen modelu nakon izvršavanja alata: sadržaj datoteke, izlaz naredbe ili pogreška. Tako agent saznaje što se dogodilo u okruženju." }
  },
  {
    slug: "mcp", title: { en: "MCP", hr: "MCP" },
    aliases: { en: ["MCP", "Model Context Protocol"], hr: ["MCP", "Model Context Protocol"] },
    definition: { en: "Model Context Protocol: a standard for connecting external tool servers to a harness. It gives an agent access to capabilities beyond its built-in tools.", hr: "Model Context Protocol: standard za povezivanje vanjskih poslužitelja alata s harnessom. Agentu daje mogućnosti izvan njegovih ugrađenih alata." }
  },
  {
    slug: "hallucination", title: { en: "Hallucination", hr: "Halucinacija" },
    aliases: { en: ["hallucination", "hallucinations"], hr: ["halucinacija", "halucinacije", "halucinaciju", "halucinacijama"] },
    definition: { en: "Confident but incorrect model output. It can invent facts or contradict information already supplied in context; plausible wording is not evidence of correctness.", hr: "Samouvjeren, ali netočan izlaz modela. Može izmišljati činjenice ili proturječiti već zadanom kontekstu; uvjerljiv tekst nije dokaz točnosti." }
  },
  {
    slug: "smart-zone", title: { en: "Smart zone / dumb zone", hr: "Smart zona / dumb zona" },
    aliases: { en: ["smart zone", "smart zones", "dumb zone", "dumb zones"], hr: ["smart zona", "smart zone", "smart zonu", "smart zonom", "dumb zona", "dumb zone", "dumb zonu", "dumb zoni"] },
    definition: { en: "The smart zone is the earlier, focused part of a session. As context accumulates, the agent can drift into a dumb zone with more omissions and mistakes. The boundary is not a universal fixed percentage.", hr: "Smart zona je raniji, fokusirani dio sesije. Nakupljanjem konteksta agent može prijeći u dumb zonu s više propusta i pogrešaka. Granica nije univerzalan fiksni postotak." }
  },
  {
    slug: "clearing", title: { en: "Clearing", hr: "Čišćenje sesije" },
    aliases: { en: ["clearing", "clear"], hr: ["očisti", "čišćenje sesije", "clear"] },
    definition: { en: "Ending the current session and starting a fresh one without its accumulated conversation. Save decisions outside the chat before clearing anything the next task will need.", hr: "Završetak trenutačne sesije i početak nove bez nakupljenog razgovora. Prije čišćenja spremi izvan chata odluke koje će trebati sljedećem zadatku." }
  },
  {
    slug: "compaction", title: { en: "Compaction", hr: "Sažimanje" },
    aliases: { en: ["compaction", "compact"], hr: ["compaction", "compact", "sažmi", "sažimanje"] },
    definition: { en: "Summarizing a session's history and using that summary to seed a fresh session. It preserves selected context while freeing space, but inevitably loses detail.", hr: "Sažimanje povijesti sesije i pokretanje nove sesije tim sažetkom. Čuva odabrani kontekst i oslobađa prostor, ali neizbježno gubi detalje." }
  },
  {
    slug: "autocompact", title: { en: "Auto-compaction", hr: "Automatsko sažimanje" },
    aliases: { en: ["auto-compaction", "autocompact"], hr: ["auto-compaction", "autocompact", "automatsko sažimanje"] },
    definition: { en: "Compaction triggered by the harness as the context window approaches its limit. It is a safety net, not a substitute for deliberately ending a task and saving its decisions.", hr: "Sažimanje koje harness automatski pokreće kad se kontekstni prozor približi granici. To je sigurnosna mreža, a ne zamjena za namjeran završetak zadatka i spremanje odluka." }
  },
  {
    slug: "handoff", title: { en: "Handoff", hr: "Predaja konteksta" },
    aliases: { en: ["handoff", "handoffs", "hand off"], hr: ["handoff", "handoffa", "predaj", "predaja konteksta"] },
    definition: { en: "Transferring relevant context to another session so work can continue there, without a return path to the original session. A document or a compaction summary can carry it.", hr: "Prijenos relevantnog konteksta u drugu sesiju kako bi se rad ondje nastavio, bez povratka rezultata izvornoj sesiji. Kontekst može prenijeti dokument ili sažetak sesije." }
  },
  {
    slug: "spec", title: { en: "Spec", hr: "Specifikacija" },
    aliases: { en: ["spec", "specs", "specification", "specifications"], hr: ["spec", "speca", "specifikacija", "specifikacije", "specifikaciju", "specifikaciji"] },
    definition: { en: "A handoff document describing what a larger, multi-session piece of work should build. It holds the destination and boundaries; tickets divide the work into individual sessions.", hr: "Dokument za predaju koji opisuje što treba izgraditi kroz veći posao raspoređen u više sesija. Čuva cilj i granice, a ticketi dijele posao na pojedinačne sesije." }
  },
  {
    slug: "ticket", title: { en: "Ticket", hr: "Ticket" },
    aliases: { en: ["ticket", "tickets"], hr: ["ticket", "ticketi", "ticketa", "tickete", "ticketima", "ticketu"] },
    definition: { en: "A handoff document scoping one session of work. It can stand alone or belong to a spec, and records enough context, dependencies and completion criteria for that session.", hr: "Dokument za predaju koji ograničava jednu sesiju rada. Može biti samostalan ili dio specifikacije te sadrži potreban kontekst, ovisnosti i kriterije završetka." }
  },
  {
    slug: "agents-md", title: { en: "AGENTS.md / CLAUDE.md", hr: "AGENTS.md / CLAUDE.md" },
    aliases: { en: ["AGENTS.md", "CLAUDE.md"], hr: ["AGENTS.md", "CLAUDE.md"] },
    definition: { en: "A project instruction file the harness loads into context: the standing brief for work in this repository. Harnesses use conventions such as AGENTS.md or CLAUDE.md.", hr: "Datoteka projektnih uputa koju harness učitava u kontekst: trajne smjernice za rad u repozitoriju. Harnessi koriste konvencije poput AGENTS.md ili CLAUDE.md." }
  },
  {
    slug: "skill", title: { en: "Skill", hr: "Skill" },
    aliases: { en: ["skill", "skills"], hr: ["skill", "skillovi", "skillove", "skillova", "skillovima"] },
    definition: { en: "A reusable capability packaged with instructions and supporting resources. It is loaded when the task needs it instead of keeping every procedure in the context window all the time.", hr: "Ponovljiva sposobnost zapakirana s uputama i pratećim resursima. Učitava se kad je zadatak treba, umjesto da svi postupci stalno zauzimaju kontekstni prozor." }
  },
  {
    slug: "subagent", title: { en: "Subagent", hr: "Subagent" },
    aliases: { en: ["subagent", "subagents"], hr: ["subagent", "subagenta", "subagenti", "subagentu"] },
    definition: { en: "An agent launched by another agent through a tool call. It works in its own session and returns a result to the parent, keeping the detailed work out of the parent's context.", hr: "Agent kojeg drugi agent pokreće pozivom alata. Radi u vlastitoj sesiji i vraća rezultat roditeljskom agentu, bez unošenja svih detalja rada u njegov kontekst." }
  },
  {
    slug: "afk", title: { en: "AFK", hr: "AFK" },
    aliases: { en: ["AFK"], hr: ["AFK"] },
    definition: { en: "Away from keyboard: the user starts an agent task and lets it run unattended, rather than reviewing and redirecting every step in real time.", hr: "Away from keyboard: korisnik pokrene agentski zadatak i pusti ga da radi bez nadzora, umjesto da svaki korak pregledava i usmjerava u stvarnom vremenu." }
  },
  {
    slug: "grilling", title: { en: "Grilling", hr: "Grill" },
    aliases: { en: ["grill", "grilling"], hr: ["grill", "grilla", "grilling"] },
    definition: { en: "An interview in which the agent questions the user one decision at a time to build a shared understanding of what to make. It exposes assumptions before implementation.", hr: "Intervju u kojem agent ispituje korisnika odluku po odluku kako bi zajedno razumjeli što treba izgraditi. Otkriva pretpostavke prije implementacije." }
  },
  {
    slug: "human-review", title: { en: "Human review", hr: "Ljudski pregled" },
    aliases: { en: ["human review"], hr: ["ljudski pregled", "ljudskim pregledom", "ljudskog pregleda"] },
    definition: { en: "A person reads the code an agent produced and judges it. Reading the actual diff counts; accepting the agent's summary alone does not.", hr: "Čovjek čita i prosuđuje kod koji je agent proizveo. Pregled stvarnog diffa se računa; prihvaćanje samo agentova sažetka nije pregled koda." }
  },
  {
    slug: "automated-review", title: { en: "Automated review", hr: "Automatski agentski pregled" },
    aliases: { en: ["automated review"], hr: ["automatski review", "automatski pregled"] },
    definition: { en: "An agent reviews another agent's work, often using a different model or instructions. Unlike a deterministic test, this is a judgement and can vary between runs.", hr: "Agent pregledava rad drugog agenta, često drugim modelom ili uputama. Za razliku od determinističkog testa, to je prosudba koja se može razlikovati među pokretanjima." }
  }
];

const dictionaryMatchers = Object.fromEntries(["en", "hr"].map(language => {
  const aliases = new Map(dictionaryEntries.flatMap(entry => entry.aliases[language].map(alias => [alias.toLocaleLowerCase(language), entry])));
  const alternatives = [...aliases.keys()].sort((a, b) => b.length - a.length).map(alias => alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  // Unicode word boundaries preserve Croatian inflections; the dot guard avoids
  // treating CONTEXT.md as prose. Longer phrases win over their component words.
  const pattern = new RegExp(`(?<![\\p{L}\\p{N}_.])(?:${alternatives.join("|")})(?![\\p{L}\\p{N}_]|\\.[\\p{L}\\p{N}_])`, "giu");
  return [language, { aliases, pattern }];
}));

function findDictionaryTerms(text, language) {
  const { aliases, pattern } = dictionaryMatchers[language];
  return [...text.matchAll(pattern)].map(match => ({
    start: match.index,
    text: match[0],
    entry: aliases.get(match[0].toLocaleLowerCase(language))
  }));
}
