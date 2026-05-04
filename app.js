document.addEventListener("DOMContentLoaded", () => {
  renderAllCategories();
  updateCommandCount();
});

// 🔹 Alle Kategorien rendern
function renderAllCategories() {
  Object.keys(data).forEach(category => {
    renderCategory(category, data[category]);
  });
}

// 🔹 Einzelne Kategorie rendern
function renderCategory(categoryName, commands) {
  const grid = document.getElementById("grid-" + categoryName);
  if (!grid) return;

  grid.innerHTML = commands.map(cmd => createCard(cmd)).join("");
}

// 🔹 Command Card HTML
function createCard(cmd) {
  return `
    <div class="cmd-card" onclick="openModal('${cmd.cmd}')">
      <div class="cmd-header">
        <h3>${cmd.cmd}</h3>
        <span class="level ${cmd.level}">${cmd.level}</span>
      </div>

      <p class="cmd-desc">${cmd.desc}</p>

      <code class="cmd-syntax">${cmd.syntax}</code>

      <div class="cmd-tags">
        ${cmd.tags.map(tag => `<span>#${tag}</span>`).join("")}
      </div>
    </div>
  `;
}

// 🔹 Modal öffnen
function openModal(cmdName) {
  let found;

  Object.values(data).forEach(category => {
    category.forEach(cmd => {
      if (cmd.cmd === cmdName) found = cmd;
    });
  });

  if (!found) return;

  const modal = document.getElementById("modal-overlay");
  const content = document.getElementById("modal-content");

  content.innerHTML = `
    <h2>${found.cmd}</h2>
    <p>${found.desc}</p>

    <h3>Syntax</h3>
    <code>${found.syntax}</code>

    <h3>Optionen</h3>
    <ul>
      ${found.options.map(o => `<li><b>${o.flag}</b> – ${o.desc}</li>`).join("")}
    </ul>

    <h3>Beispiele</h3>
    ${found.examples.map(e => `
      <div class="example">
        <span>${e.label}</span>
        <code>${e.code}</code>
      </div>
    `).join("")}
  `;

  modal.style.display = "flex";
}

// 🔹 Modal schliessen
document.getElementById("modal-close").onclick = () => {
  document.getElementById("modal-overlay").style.display = "none";
};

document.getElementById("modal-overlay").onclick = (e) => {
  if (e.target.id === "modal-overlay") {
    e.target.style.display = "none";
  }
};

// 🔹 Anzahl Befehle anzeigen
function updateCommandCount() {
  let count = 0;
  Object.values(data).forEach(cat => count += cat.length);

  document.getElementById("cmd-count").textContent = count;
}