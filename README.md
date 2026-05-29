# presentations

Apresentação web sobre **Nutrição & Estilo de Vida** — mesma engine/estilo da
apresentação institucional do autor, com conteúdo trocado para saúde.

**Online:** https://clsolucoesweb.github.io/presentations/

## Estrutura

```
index.html        # shell do deck (nav, footer, progress, thumbs)
app.js            # engine (slides data-driven + navegação) — ES module
styles.css        # estilo (Poppins, tema pink/azul)
assets/gocare/    # imagens (Pexels/Wikimedia — ver SOURCES.md)
assets/img/       # favicon
```

## Navegação

- `→` / `↓` / `Espaço` ou `PageDown` — próximo
- `←` / `↑` ou `PageUp` — anterior · `Home` / `End` — primeiro / último
- Setas laterais · thumbs numerados no rodapé · deep-link por hash (`#5`)

> **Atenção:** `app.js` é um ES module. Abrir `index.html` direto do disco
> (`file://`) deixa a página **em branco** (browsers bloqueiam módulos via
> file:// por CORS). Veja pela URL do GitHub Pages acima, ou rode um servidor
> local: `python -m http.server` e acesse `http://localhost:8000`.

## Conteúdo

Material educativo baseado em fontes de saúde pública (OMS, Guia Alimentar
para a População Brasileira, Harvard T.H. Chan). Não substitui orientação
de profissional de saúde.

© 2026 · @clsolucoesweb
