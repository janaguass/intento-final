import { cheatsheets } from '../data/cheatsheets.js';

export default function CheatsheetsList() {
  const container = document.getElementById("cheatsheets");
  if (!container) return;

  container.innerHTML = cheatsheets
    .map((sheet) => {
      return `
        <a href="${sheet.link}" class="cheatsheet-card">
          <img src="${sheet.icon}" alt="${sheet.name}" />
          <span>${sheet.name}</span>
        </a>
      `;
    })
    .join("");
}
