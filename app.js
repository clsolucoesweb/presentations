const assets = {
  photos: {
    family: "assets/gocare/doctor-document.jpg",
    care: "assets/gocare/doctor-patient.jpg",
    reception: "assets/gocare/healthcare-team.jpg",
    telemed: "assets/gocare/telemedicine.jpg",
    business: "assets/gocare/business-team.jpg",
    doctor: "assets/gocare/doctor-laptop.jpg",
  },
};

const icons = {
  leaf: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.4 5.08-6"></path></svg>',
  wheat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22V8"></path><path d="M12 8c0-2 1.5-4 4-4 0 2-1.5 4-4 4Z"></path><path d="M12 8c0-2-1.5-4-4-4 0 2 1.5 4 4 4Z"></path><path d="M12 14c0-2 1.5-4 4-4 0 2-1.5 4-4 4Z"></path><path d="M12 14c0-2-1.5-4-4-4 0 2 1.5 4 4 4Z"></path></svg>',
  protein: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15.5 8.5 19 5a2.8 2.8 0 0 0-4-4l-3.5 3.5"></path><path d="M8.5 15.5 5 19a2.8 2.8 0 0 1-4-4l3.5-3.5"></path><path d="m7 12 5 5"></path><path d="m12 7 5 5"></path></svg>',
  drop: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3s6 6.3 6 10.5A6 6 0 0 1 6 13.5C6 9.3 12 3 12 3Z"></path></svg>',
  water: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10l-1 16a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2L7 3Z"></path><path d="M6.5 9h11"></path></svg>',
  run: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="17" cy="5" r="2"></circle><path d="m9 21 2-4-3-3 1-5 4 3 3 1"></path><path d="M4 11h3l3-2"></path></svg>',
  moon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"></path></svg>',
  check: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m20 6-11 11-5-5"></path></svg>',
  swap: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 8h14l-3-3"></path><path d="M21 16H7l3 3"></path></svg>',
  home: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11 12 3l9 8"></path><path d="M5 9.5V21h14V9.5"></path></svg>',
  alert: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 20h20L12 3Z"></path><path d="M12 10v4"></path><path d="M12 17v.01"></path></svg>',
  doctor: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 21a7 7 0 0 0-14 0"></path><circle cx="12" cy="8" r="5"></circle></svg>',
  heart: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"></path></svg>',
};

const slides = [
  { type: "cover", nav: "Capa" },
  { type: "purpose", nav: "Propósito" },
  { type: "about", nav: "Contexto" },
  {
    type: "cards",
    nav: "Pilares",
    subtitle: "Estilo de vida",
    title: "Os 3 pilares",
    cards: [
      [icons.leaf, "Comida de verdade", ["Mais plantas e comida fresca", "Menos ultraprocessados"], "pink"],
      [icons.run, "Movimento", ["150–300 min por semana (OMS)", "Qualquer movimento conta"], "dark"],
      [icons.moon, "Sono", ["7–9 horas por noite", "Horários regulares"], "pink"],
    ],
  },
  {
    type: "cards",
    nav: "Macros",
    subtitle: "Nenhum é vilão",
    title: "Macronutrientes",
    cards: [
      [icons.wheat, "Carboidratos", ["Energia do dia a dia", "Prefira integrais e leguminosas", "Modere refinados e açúcar"], "pink"],
      [icons.protein, "Proteínas", ["Constroem e reparam tecidos", "Feijões, ovos, peixes, aves", "Varie as fontes"], "dark"],
      [icons.drop, "Gorduras", ["Hormônios e vitaminas", "Azeite, abacate, oleaginosas", "Evite gordura trans"], "pink"],
    ],
  },
  { type: "plate", nav: "Prato" },
  { type: "hydration", nav: "Água" },
  {
    type: "cards",
    nav: "Hábitos",
    subtitle: "Mudança que dura",
    title: "Hábitos que ficam",
    cards: [
      [icons.home, "Mude o ambiente", ["Saudável à vista", "Resto fora de casa"], "pink"],
      [icons.swap, "Uma troca por vez", ["Refrigerante → água", "Refinado → integral"], "dark"],
      [icons.check, "Bom o bastante", ["Consistência 80/20", "Vence a perfeição que não dura"], "pink"],
    ],
  },
  { type: "help", nav: "Ajuda" },
  { type: "closing", nav: "Fim" },
];

let currentIndex = getIndexFromHash();

const deck = document.querySelector("#deck");
const currentLabel = document.querySelector("[data-current]");
const totalLabel = document.querySelector("[data-total]");
const progress = document.querySelector("[data-progress]");
const thumbs = document.querySelector("[data-thumbs]");

function brandRow() {
  return `
    <header class="brand-row">
      <span class="brand-mark">${icons.leaf}<strong>Nutrição &amp; Estilo de Vida</strong></span>
      <div class="brand-right">
        <span>Educativo · baseado em evidência</span>
      </div>
    </header>
  `;
}

function visualPanel(kind, label) {
  const photo = assets.photos[kind] || assets.photos.doctor;
  return `
    <div class="image-panel image-panel--${kind}" role="img" aria-label="${label}">
      <img class="image-panel__photo" src="${photo}" alt="${label}" loading="lazy" onerror="this.hidden=true">
      <div class="image-panel__caption">${label}</div>
    </div>
  `;
}

function renderCover() {
  return `
    <section class="content-grid content-grid--cover">
      <div class="copy-block">
        <h1>Nutrição e um <mark>estilo de vida</mark> de agora!</h1>
        <p class="lead-line">Comer bem e viver melhor — o que a ciência sustenta, sem dietas-milagre nem culpa.</p>
        <p class="ans-line">por @clsolucoesweb</p>
      </div>
      ${visualPanel("family", "Saúde que começa nas suas escolhas")}
    </section>
  `;
}

function renderPurpose() {
  return `
    <section class="split-full">
      ${visualPanel("care", "Cuidado simples, do dia a dia")}
      <div class="pink-panel">
        <p>Comer bem não é <mark>dieta</mark>. É <mark>cuidar de você</mark> todos os dias — com escolhas simples e sustentáveis.</p>
      </div>
    </section>
  `;
}

function renderAbout() {
  return `
    <section class="content-grid content-grid--about">
      <div class="copy-block">
        <h2>Por que nutrição importa</h2>
        <p>A alimentação está entre os principais fatores de risco modificáveis para doenças crônicas. A OMS recomenda ao menos 400 g de frutas e vegetais por dia, menos de 5 g de sal e açúcar livre abaixo de 10% das calorias — metas que a maioria não atinge.</p>
      </div>
      <div class="institutional-card">
        ${visualPanel("reception", "Saúde é construída no dia a dia")}
      </div>
    </section>
  `;
}

function renderCards(slide) {
  return `
    <section class="center-stack center-stack--light">
      <p class="section-subtitle">${slide.subtitle}</p>
      <h2>${slide.title}</h2>
      <div class="benefit-grid">
        ${slide.cards
          .map(
            ([icon, title, lines, tone]) => `
          <article class="benefit-card benefit-card--${tone}">
            ${icon}
            <h3>${title}</h3>
            ${lines.map((line) => `<p>${line}</p>`).join("")}
          </article>
        `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderPlate() {
  return `
    <section class="center-stack center-stack--light">
      <p class="section-subtitle">Na prática</p>
      <h2>O prato saudável</h2>
      <div class="white-card plate-card" style="display:flex;gap:36px;align-items:center;flex-wrap:wrap;justify-content:center;text-align:left">
        <div class="plate-figure" style="position:relative;width:220px;height:220px;flex:none;border-radius:50%;background:conic-gradient(#00A8B5 0 50%,#F04A0C 50% 75%,#FFD95A 75% 100%);box-shadow:0 16px 40px rgba(0,0,0,.16)">
          <span style="position:absolute;inset:0;border-radius:50%;box-shadow:inset 0 0 0 8px #fff"></span>
          <span style="position:absolute;inset:36% 36%;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;text-align:center;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:600;color:#63717A;line-height:1.2">ÁGUA<br>+ AZEITE</span>
        </div>
        <ul>
          <li><strong>½ vegetais e frutas</strong> — quanto mais cor, melhor</li>
          <li><strong>¼ grãos integrais</strong> — em vez de refinados</li>
          <li><strong>¼ proteínas saudáveis</strong> — feijões, peixe, ovos, aves</li>
          <li><strong>Água</strong> como bebida; azeite para temperar</li>
        </ul>
      </div>
    </section>
  `;
}

function renderHydration() {
  return `
    <section class="center-stack center-stack--light">
      <p class="section-subtitle">Hidratação</p>
      <h2>Água em primeiro lugar</h2>
      <div class="white-card">
        <ul>
          <li><strong>Água</strong> — a base da hidratação</li>
          <li><strong>Café e chá</strong> — ok, sem excesso de açúcar</li>
          <li><strong>Suco natural</strong> — com moderação</li>
          <li><strong>Refrigerante</strong> — evite</li>
        </ul>
        <small>Não existe número mágico: sede, clima e atividade mandam. Urina clara ao longo do dia costuma indicar boa hidratação.</small>
      </div>
    </section>
  `;
}

function renderHelp() {
  return `
    <section class="split-full split-full--business">
      ${visualPanel("business", "Cuidado individual com quem entende")}
      <div class="pink-panel">
        <div class="corner-badge">Atenção</div>
        <h2>Quando procurar um profissional</h2>
        <p>Perda ou ganho de peso sem explicação, fadiga persistente, alterações digestivas frequentes ou uma relação de sofrimento com a comida pedem avaliação individual.</p>
        <p>Nutricionista para um plano sob medida, médico para investigar causas e apoio psicológico quando há compulsão ou restrição.</p>
      </div>
    </section>
  `;
}

function renderClosing() {
  return `
    <section class="content-grid content-grid--cover">
      <div class="copy-block">
        <h2>Comece pequeno hoje.</h2>
        <p class="lead-line">Uma troca, uma caminhada, um copo de água a mais. O resto vem da repetição.</p>
        <p class="ans-line">Conteúdo educativo. Não substitui orientação de profissional de saúde.</p>
      </div>
      ${visualPanel("care", "Saúde é o hábito de cada dia")}
    </section>
  `;
}

function renderSlide(slide) {
  const renderers = {
    cover: renderCover,
    purpose: renderPurpose,
    about: renderAbout,
    cards: renderCards,
    plate: renderPlate,
    hydration: renderHydration,
    help: renderHelp,
    closing: renderClosing,
  };

  return renderers[slide.type](slide);
}

function renderDeck() {
  deck.innerHTML = slides
    .map(
      (slide, index) => `
    <article class="slide ${index === currentIndex ? "is-active" : ""}" data-slide="${index}">
      ${["cover", "closing"].includes(slide.type) ? "" : brandRow()}
      ${renderSlide(slide)}
    </article>
  `,
    )
    .join("");

  totalLabel.textContent = String(slides.length).padStart(2, "0");
  thumbs.innerHTML = slides
    .map(
      (slide, index) => `
    <button class="thumb ${index === currentIndex ? "is-active" : ""}" type="button" aria-label="Ir para ${slide.nav}" data-thumb="${index}">
      <span>${String(index + 1).padStart(2, "0")}</span>
    </button>
  `,
    )
    .join("");

  updateState();
}

function getIndexFromHash() {
  const value = Number.parseInt(window.location.hash.replace("#", ""), 10);
  if (Number.isFinite(value) && value >= 1 && value <= slides.length) return value - 1;
  return 0;
}

function updateState() {
  document.querySelectorAll("[data-slide]").forEach((slide) => {
    slide.classList.toggle("is-active", Number(slide.dataset.slide) === currentIndex);
  });
  document.querySelectorAll("[data-thumb]").forEach((thumb) => {
    thumb.classList.toggle("is-active", Number(thumb.dataset.thumb) === currentIndex);
  });
  currentLabel.textContent = String(currentIndex + 1).padStart(2, "0");
  progress.style.width = `${((currentIndex + 1) / slides.length) * 100}%`;
  document.querySelector("[data-prev]").disabled = currentIndex === 0;
  document.querySelector("[data-next]").disabled = currentIndex === slides.length - 1;
  try {
    if (window.location.hash !== `#${currentIndex + 1}`) {
      history.replaceState(null, "", `#${currentIndex + 1}`);
    }
  } catch (error) {
    /* file:// origin is opaque — replaceState may throw; navigation still works */
  }
}

function goTo(index) {
  currentIndex = Math.max(0, Math.min(slides.length - 1, index));
  updateState();
}

document.addEventListener("click", (event) => {
  const previous = event.target.closest("[data-prev]");
  const next = event.target.closest("[data-next]");
  const thumb = event.target.closest("[data-thumb]");

  if (previous) goTo(currentIndex - 1);
  if (next) goTo(currentIndex + 1);
  if (thumb) goTo(Number(thumb.dataset.thumb));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
    event.preventDefault();
    goTo(currentIndex + 1);
  }
  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    goTo(currentIndex - 1);
  }
  if (event.key === "Home") goTo(0);
  if (event.key === "End") goTo(slides.length - 1);
});

window.addEventListener("hashchange", () => goTo(getIndexFromHash()));

renderDeck();
