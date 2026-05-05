// ============================================================
//  LINUX HANDBUCH — App Logic (app.js)
// ============================================================

// ── Clock ──
function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent =
    now.toLocaleTimeString('de-CH', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}
updateClock();
setInterval(updateClock, 1000);

// ── Command Count ──
const totalCmds = Object.values(COMMANDS).reduce((s, arr) => s + arr.length, 0);
const counter = document.getElementById('cmd-count');
let count = 0;
const interval = setInterval(() => {
  count = Math.min(count + Math.ceil(totalCmds / 40), totalCmds);
  counter.textContent = count;
  if (count >= totalCmds) clearInterval(interval);
}, 30);

// ── Matrix Background ──
const canvas = document.getElementById('matrix-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const cols = Math.floor(canvas.width / 18);
const drops = Array(cols).fill(1);
function matrixDraw() {
  ctx.fillStyle = 'rgba(13,17,23,0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#388bfd';
  ctx.font = '13px monospace';
  drops.forEach((y, i) => {
    const char = String.fromCharCode(0x30A0 + Math.random() * 96);
    ctx.fillText(char, i * 18, y * 18);
    if (y * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  });
}
setInterval(matrixDraw, 60);
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// ── Badge Level ──
function badgeHTML(level) {
  const map = { basic: 'badge-basic', medium: 'badge-medium', advanced: 'badge-advanced' };
  const label = { basic: 'Basis', medium: 'Mittel', advanced: 'Profi' };
  return `<span class="card-badge ${map[level] || 'badge-basic'}">${label[level] || level}</span>`;
}

// ── Render Cards ──
function renderCards() {
  Object.entries(COMMANDS).forEach(([cat, cmds]) => {
    const grid = document.getElementById(`grid-${cat}`);
    if (!grid) return;
    grid.innerHTML = cmds.map((cmd, i) => `
      <div class="cmd-card" data-cat="${cat}" data-idx="${i}" role="button" tabindex="0">
        <div class="card-top">
          <span class="card-cmd">${escapeHtml(cmd.cmd)}</span>
          ${badgeHTML(cmd.level)}
        </div>
        <div class="card-desc">${escapeHtml(cmd.desc)}</div>
        <div class="card-syntax">${escapeHtml(cmd.syntax || '')}</div>
        ${cmd.tags ? `<div class="card-tags">${cmd.tags.map(t => `<span class="card-tag">#${t}</span>`).join('')}</div>` : ''}
      </div>
    `).join('');
  });

  // Card click → modal
  document.querySelectorAll('.cmd-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.cat, parseInt(card.dataset.idx)));
    card.addEventListener('keydown', e => { if (e.key === 'Enter') openModal(card.dataset.cat, parseInt(card.dataset.idx)); });
  });
}

// ── Modal ──
function openModal(cat, idx) {
  const cmd = COMMANDS[cat][idx];
  if (!cmd) return;

  const optionsTable = cmd.options && cmd.options.length ? `
    <div class="modal-section">
      <div class="modal-section-title">Optionen & Flags</div>
      <table class="options-table">
        <thead><tr><th>Flag</th><th>Beschreibung</th></tr></thead>
        <tbody>${cmd.options.map(o => `
          <tr>
            <td class="opt-flag">${escapeHtml(o.flag)}</td>
            <td class="opt-desc">${escapeHtml(o.desc)}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>` : '';

  const examplesHTML = cmd.examples && cmd.examples.length ? `
    <div class="modal-section">
      <div class="modal-section-title">Beispiele</div>
      <div class="examples-list">${cmd.examples.map(ex => `
        <div class="example-item">
          <div class="example-label"># ${escapeHtml(ex.label)}</div>
          <div class="code-block" style="position:relative">
            <button class="copy-btn" onclick="copyCode(this)">Kopieren</button>
            <span class="prompt">$ </span>${escapeHtml(ex.code)}
          </div>
        </div>`).join('')}
      </div>
    </div>` : '';

  const notesHTML = cmd.notes ? `
    <div class="modal-section">
      <div class="modal-section-title">Hinweise</div>
      <div class="code-block"><span class="comment">${escapeHtml(cmd.notes)}</span></div>
    </div>` : '';

  document.getElementById('modal-content').innerHTML = `
    <div class="modal-title">${escapeHtml(cmd.cmd)}</div>
    <div class="modal-subtitle">${badgeHTML(cmd.level)} &nbsp;${(cmd.tags || []).map(t => `<span class="card-tag">#${t}</span>`).join(' ')}</div>
    <div class="modal-section">
      <div class="modal-section-title">Beschreibung</div>
      <div class="modal-desc">${escapeHtml(cmd.desc)}</div>
    </div>
    <div class="modal-section">
      <div class="modal-section-title">Syntax</div>
      <div class="code-block"><span class="prompt">$ </span><span class="flag">${escapeHtml(cmd.syntax || '')}</span></div>
    </div>
    ${optionsTable}
    ${examplesHTML}
    ${notesHTML}
  `;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modal-overlay')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── Copy to clipboard ──
function copyCode(btn) {
  const block = btn.parentElement;
  const text = block.textContent.replace('Kopieren', '').replace(/^\$\s*/, '').trim();
  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✓ Kopiert!';
    setTimeout(() => btn.textContent = 'Kopieren', 2000);
  });
}

// ── Search ──
const searchInput = document.getElementById('search-input');
const searchResults = document.getElementById('search-results');

const allCommands = [];
Object.entries(COMMANDS).forEach(([cat, cmds]) => {
  cmds.forEach((cmd, idx) => allCommands.push({ cat, idx, ...cmd }));
});

searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase().trim();
  if (!q) { searchResults.classList.add('hidden'); return; }

  const hits = allCommands.filter(c =>
    c.cmd.toLowerCase().includes(q) ||
    c.desc.toLowerCase().includes(q) ||
    (c.tags || []).some(t => t.includes(q))
  ).slice(0, 12);

  if (!hits.length) {
    searchResults.innerHTML = '<div class="no-results">Keine Befehle gefunden</div>';
    searchResults.classList.remove('hidden');
    return;
  }

  const catNames = { dateisystem: 'Dateisystem', benutzer: 'Benutzer', berechtigungen: 'Berechtigungen',
    prozesse: 'Prozesse', netzwerk: 'Netzwerk', pakete: 'Pakete', text: 'Text', archiv: 'Archiv',
    system: 'System', dienste: 'Dienste', ssh: 'SSH & Remote', bash: 'Bash' };

  searchResults.innerHTML = hits.map(h => `
    <div class="search-result-item" data-cat="${h.cat}" data-idx="${h.idx}">
      <span class="sri-cmd">${escapeHtml(h.cmd)}</span>
      <span class="sri-desc">${escapeHtml(h.desc.substring(0, 60))}${h.desc.length > 60 ? '...' : ''}</span>
      <span class="sri-cat">${catNames[h.cat] || h.cat}</span>
    </div>
  `).join('');
  searchResults.classList.remove('hidden');

  searchResults.querySelectorAll('.search-result-item').forEach(item => {
    item.addEventListener('click', () => {
      openModal(item.dataset.cat, parseInt(item.dataset.idx));
      searchResults.classList.add('hidden');
      searchInput.value = '';
    });
  });
});

document.addEventListener('click', e => {
  if (!e.target.closest('.search-container')) searchResults.classList.add('hidden');
});

// ── Nav Sidebar Active State ──
const sections = document.querySelectorAll('.category-section');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(l => {
        l.classList.toggle('active', l.dataset.cat === id);
      });
    }
  });
}, { rootMargin: '-20% 0px -75% 0px' });

sections.forEach(s => observer.observe(s));

// ── Smooth scroll for nav ──
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.getElementById(link.dataset.cat);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// ── Scroll to top ──
const scrollBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  scrollBtn.classList.toggle('visible', window.scrollY > 400);
});
scrollBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── Escape HTML ──
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// ── Init ──
renderCards();
