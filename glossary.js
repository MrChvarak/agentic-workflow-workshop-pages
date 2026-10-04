const glossary = (() => {
  const tooltip = document.createElement("div");
  tooltip.id = "dictionary-tooltip";
  tooltip.className = "dictionary-tooltip";
  tooltip.setAttribute("role", "tooltip");
  tooltip.hidden = true;
  tooltip.innerHTML = '<div class="dictionary-tooltip__source">AI Hero · AI Coding Dictionary</div><div class="dictionary-tooltip__title"></div><p class="dictionary-tooltip__definition"></p><div class="dictionary-tooltip__hint"></div>';
  document.body.append(tooltip);

  const labels = {
    en: { explain: "Explain", dismiss: "Esc or click outside to dismiss", source: "Adapted from AI Hero · AI Coding Dictionary" },
    hr: { explain: "Objasni", dismiss: "Esc ili klik izvan za zatvaranje", source: "Prema AI Hero · AI Coding Dictionary" }
  };
  let activeTerm = null;
  let closeTimer;

  function close() {
    clearTimeout(closeTimer);
    activeTerm?.removeAttribute("aria-describedby");
    activeTerm = null;
    tooltip.hidden = true;
  }

  function show(term) {
    clearTimeout(closeTimer);
    if (term === activeTerm) return;
    close();
    activeTerm = term;
    const language = term.dataset.language;
    const entry = dictionaryEntries.find(entry => entry.slug === term.dataset.dictionaryTerm);
    tooltip.querySelector(".dictionary-tooltip__title").textContent = entry.title[language];
    tooltip.querySelector(".dictionary-tooltip__definition").textContent = entry.definition[language];
    tooltip.querySelector(".dictionary-tooltip__source").textContent = labels[language].source;
    tooltip.querySelector(".dictionary-tooltip__hint").textContent = labels[language].dismiss;
    tooltip.lang = language;
    tooltip.hidden = false;
    term.setAttribute("aria-describedby", tooltip.id);

    const rect = term.getBoundingClientRect();
    const gap = 10;
    const padding = 12;
    const width = tooltip.offsetWidth;
    const height = tooltip.offsetHeight;
    const left = Math.max(padding, Math.min(rect.left, window.innerWidth - width - padding));
    const top = rect.bottom + gap + height <= window.innerHeight - padding ? rect.bottom + gap : rect.top - height - gap;
    tooltip.style.left = `${left}px`;
    tooltip.style.top = `${Math.max(padding, Math.min(top, window.innerHeight - height - padding))}px`;
  }

  function scheduleClose() {
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => {
      if (document.activeElement !== activeTerm && !tooltip.matches(":hover")) close();
    }, 180);
  }

  function annotate(root, language) {
    close();
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return node.parentElement.closest("a, button, code, pre, .prompt-card, .tree .file, .tree .folder, .eyebrow, [data-dictionary-skip]")
          ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      const matches = findDictionaryTerms(node.textContent, language);
      if (!matches.length) continue;
      const fragment = document.createDocumentFragment();
      let offset = 0;
      for (const match of matches) {
        fragment.append(node.textContent.slice(offset, match.start));
        const term = document.createElement("button");
        term.type = "button";
        term.className = "dictionary-term";
        term.dataset.dictionaryTerm = match.entry.slug;
        term.dataset.language = language;
        term.textContent = match.text;
        term.setAttribute("aria-label", `${labels[language].explain}: ${match.text}`);
        term.addEventListener("pointerenter", event => { if (event.pointerType !== "touch") show(term); });
        term.addEventListener("pointerleave", scheduleClose);
        term.addEventListener("focus", () => show(term));
        term.addEventListener("blur", scheduleClose);
        term.addEventListener("click", () => show(term));
        fragment.append(term);
        offset = match.start + match.text.length;
      }
      fragment.append(node.textContent.slice(offset));
      node.replaceWith(fragment);
    }
  }

  tooltip.addEventListener("pointerenter", () => clearTimeout(closeTimer));
  tooltip.addEventListener("pointerleave", scheduleClose);
  document.addEventListener("pointerdown", event => {
    if (!event.target.closest(".dictionary-term, .dictionary-tooltip")) close();
  });
  document.querySelector("#deck").addEventListener("scroll", close, true);
  window.addEventListener("resize", close);
  return { annotate, close };
})();
