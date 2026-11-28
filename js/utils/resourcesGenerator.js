import { resources } from '../data/resources.js';

export default function resourcesGenerator() {
  const tabsContainer = document.getElementById("resources-tabs");
  const panelsContainer = document.getElementById("resources-panels");

  if (!tabsContainer || !panelsContainer || !Array.isArray(resources) || resources.length === 0) {
    return;
  }

  tabsContainer.innerHTML = resources
    .map((group, index) => {
      const isActive = index === 0;
      return `
        <button
          type="button"
          class="resource-tab ${isActive ? "active" : ""}"
          role="tab"
          aria-selected="${isActive}"
          data-index="${index}"
        >
          ${group.category}
        </button>
      `;
    })
    .join("");

  panelsContainer.innerHTML = resources
    .map((group, index) => {
      const isActive = index === 0;
      const cardsHtml = group.items
        .map(
          (item) => `
            <article class="resource-card">
              <h3>${item.title}</h3>
              <p>${item.note}</p>
              <a href="${item.url}" target="_blank" rel="noopener noreferrer">
                Visitar recurso →
              </a>
            </article>
          `
        )
        .join("");

      return `
        <div
          class="resource-panel ${isActive ? "active" : ""}"
          role="tabpanel"
          data-index="${index}"
          ${isActive ? "" : "hidden"}
        >
          <div class="resources-grid">
            ${cardsHtml}
          </div>
        </div>
      `;
    })
    .join("");

  const tabs = tabsContainer.querySelectorAll(".resource-tab");
  const panels = panelsContainer.querySelectorAll(".resource-panel");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const targetIndex = tab.dataset.index;

      tabs.forEach((btn) => {
        const selected = btn.dataset.index === targetIndex;
        btn.classList.toggle("active", selected);
        btn.setAttribute("aria-selected", String(selected));
      });

      panels.forEach((panel) => {
        const isTarget = panel.dataset.index === targetIndex;
        panel.classList.toggle("active", isTarget);
        panel.hidden = !isTarget;
      });
    });
  });
}