# Agentic workflow deck

The reader-facing expansion of the talk is in
[`documentation/`](../documentation/). This folder is only the static HTML
deck.

Open `index.html` directly, or from the repository root serve **this folder**
(not the repo root) on port 4173:

```sh
python3 -m http.server 4173 --directory site
```

Then open [http://localhost:4173/](http://localhost:4173/). Relative asset
paths work at a GitHub Pages or GitLab Pages subpath without a base URL
setting. `script.js` holds the English/Croatian content layer and the renderer;
`styles.css` is the visual system; optional themes live under `themes/`.

The 26-slide deck starts in **Croatian** on every page load. English remains
available through `L` or the `EN` button. Language is not stored in the URL.
Titles, navigation labels and dictionary definitions follow the selected
language. The last resource slides link to the mentioned skills, tools and
learning resources; the closing slide is the environment goal.

## Themes

The default look stays the existing cyan/dark deck theme. An opt-in
**cursor-dark** theme approximates the [Cursor blog](https://cursor.com/blog)
dark canvas: warm near-black background (`#14120b`), restrained contrast,
sparse borders, and a quiet orange accent (`#f54e00`).

### Fonts vs cursor.com

cursor.com uses proprietary webfonts we cannot lawfully redistribute:

| Role | Cursor site | cursor-dark (lawful) |
| --- | --- | --- |
| Body / UI | `CursorGothic` | Cursor’s published fallback: `system-ui, Helvetica Neue, Helvetica, Arial` |
| Display titles | `cursorDisplay` | Same Helvetica Neue / system-ui fallback |
| Mono | `berkeleyMono` (+ `cursorMono`) | Cursor’s mono fallback: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, …` |
| Serif accents | `EB Garamond` (OFL) | Not used in this deck |

Verdict: **not an exact match** — closest lawful substitute is Cursor’s own
fallback stacks, not a third-party Google Font stand-in.

Enable it in any of these ways:

- URL: `site/index.html?theme=cursor-dark` (alias: `?theme=cursor`)
- Keyboard: press `T` to cycle `default` ↔ `cursor-dark`
- Chrome control: the theme pill in the top-right

The choice is remembered in `localStorage` (`deck-theme`) and kept in the URL
when it is not the default, so both English and Croatian continue to share the
same theme switch.

## Controls

Keyboard controls: arrow keys, Page Up/Down or Space move between slides, `L`
switches locale, `T` switches theme, and `O` (or `⌘K`) opens the slide overview.
`Esc` closes it.

Slide URLs are one-based: `?slide=5` opens the prompt-to-answer flow,
`?slide=15` opens the worktrees/Herdr slide and `?slide=23` opens the skills list.
Reloading keeps the same slide number.

## Dictionary definitions

Dotted-underlined terms show a definition on hover, keyboard focus or tap.
`Esc`, clicking outside, scrolling, navigation and locale/theme changes dismiss
the card. Space and Enter on a focused term open its definition without advancing
the slide. You can move the pointer into the card to read it.

`dictionary.js` contains paired English/Croatian summaries and matching aliases,
adapted from [Matt Pocock's AI Coding Dictionary](https://www.aihero.dev/ai-coding-dictionary).
Each `slug` identifies the original entry at
`https://www.aihero.dev/ai-coding-dictionary/<slug>`. The knowledge course notes
already reference this dictionary; no separate dictionary export was present in
`knowledge/` when this feature was added. Definitions are bundled, not fetched
at runtime, so direct-file and offline use still work.

`glossary.js` annotates slide text without changing its wording or nested markup.
Matching prefers full phrases and respects Croatian word boundaries. Links,
code samples, file trees and section labels are left alone. Use
`data-dictionary-skip` on text with a different meaning, such as design tokens,
“turn” as a verb or “clear” as an adjective. Terms without a dictionary entry are
not annotated.

Run the dependency-free content, locale, slide-URL and dictionary checks from the repository root:

```sh
node --test scripts/*.test.cjs
```

## Full process guide

Slide 5 links to `model-agent-harness-mcp-context-guide.html`, a standalone
reading page with a return link to slide 5. The author's supplied English
document is preserved verbatim in `model-agent-harness-mcp-context-guide.md`.
Both slide locales link to this English original; a Croatian translation of
the full guide remains TODO. The final slide grid also links to the Poteto/pstack
interview about shipping PRs at SpaceX.

After editing the guide source or its page template, regenerate the HTML:

```sh
uv run scripts/build-process-guide.py
```

The generated guide HTML is intentionally checked in for the existing build-free
publishing workflow. Reading it requires no JavaScript, network dependency or
Markdown renderer. All local links are relative for file and Pages-subpath use.

For browser checks, verify hover → card → away, Tab/Space/Esc, click/tap and
navigation in both locales and themes. Check a narrow viewport, terms near the
viewport edges, and serving the deck under a subpath. No build step is needed.
Check that a fresh load is Croatian, language switching preserves the active
slide, resource links work with the keyboard, and all slides fit a 16:9 desktop
viewport. Narrow layouts scroll within each slide.
