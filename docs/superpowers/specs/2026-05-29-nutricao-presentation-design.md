# Spec — Apresentações (Nutrição & Estilo de Vida)

**Data:** 2026-05-29
**Autor:** cigano.agi (@clsolucoesweb)
**Status:** Aprovado

## Objetivo

Replicar o estilo do site de referência `https://caiocesarps.github.io/presentations/`
(landing index + deck self-contained) com conteúdo de **Nutrição & Estilo de Vida**,
publicado em `https://clsolucoesweb.github.io/presentations/`.

## Match de estilo (requisito explícito do usuário)

- **Fontes:** `Inter` (variável) corpo/títulos · `JetBrains Mono` código · `Georgia, serif` citações.
- **Tema:** claro. `--bg #ffffff`, `--text #1a1a2e`.
- **Paleta:** `--purple #6c5ce7`, `--purple-light #a29bfe`, `--blue #0984e3`,
  `--yellow #fdcb6e`, `--orange #e17055`, `--teal #00b894`, `--coral #fd79a8`, `--red #d63031`.
- **Navegação por seta:** `.slide.active` mostra atual; `goTo(target, dir)` com transição direcional;
  teclado `→/↓/Espaço` próximo, `←/↑` anterior; barra de progresso + dots clicáveis;
  botões prev/next; animação `stagger` (filhos escalonados).
- **Variantes de slide:** `.slide-hero`, `.slide-tinted`, `.slide-white`.

## Arquitetura

Site estático, sem build step (GitHub Pages serve direto).

```
presentations/
├── index.html                          # landing: grid de cards
├── decks/
│   └── nutricao-estilo-de-vida.html    # deck único self-contained (CSS+JS inline)
├── assets/img/                         # favicon, og-image (SVG)
├── docs/superpowers/specs/             # este spec
└── README.md
```

### Landing (`index.html`)
Clone estrutural do index da referência: grid de cards, header, footer `© 2026`.
- Card ativo: **Nutrição & Estilo de Vida** — "16 slides · PT", acento teal.
- 2 cards "Em breve" (desabilitados): Saúde Mental & Bem-estar, Saúde Digital.

### Deck `nutricao-estilo-de-vida.html` (~16 slides, baseado em evidência)
1. Capa (hero) · 2. Agenda · 3. Por que nutrição importa (carga de doença) ·
4. Macronutrientes · 5. Micronutrientes · 6. Mitos × ciência ·
7. Padrões alimentares (Mediterrânea/DASH/plant-forward) · 8. Prato saudável (modelo Harvard) ·
9. Hidratação · 10. Movimento + sono · 11. Hábitos sustentáveis ·
12. Planejamento de refeições · 13. Sinais de alerta / quando buscar ajuda ·
14. Takeaways · 15. Referências · 16. Encerramento.

Disclaimer obrigatório: "Conteúdo educativo. Não substitui orientação de profissional de saúde."

## Deploy
`gh repo create clsolucoesweb/presentations --public` → push `main` →
GitHub Pages (branch `main`, root) via `gh api` → URL `https://clsolucoesweb.github.io/presentations/`.

## Critério de sucesso
- Navegação por seta funciona (testado local antes de publicar).
- Visual bate com a referência (fonte/tema/paleta).
- Deck completo, conteúdo correto, com disclaimer.
- Publicado e acessível na URL do Pages.
