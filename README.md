# meme-explainer

An agent skill that turns a technical topic into a fun, shareable explainer page (and PDF):
first-principles structure, plain ASD-STE100 body text, hand-drawn SVG memes and diagrams,
five Gen Z themes, an automatic layout check, and an optional second language.

## Install

```bash
npx skills add bhuvangnk-devx/meme-explainer
```

Then ask your agent something like: *"Explain how DNS works to the ops team with memes."*

## What is inside

| File | Purpose |
|---|---|
| `skills/meme-explainer/SKILL.md` | The steps, writing rules and drawing rules |
| `skills/meme-explainer/themes.md` | Five Gen Z themes: Riso Zine, Y2K Chrome, Pixel Arcade, Sticker Scrapbook, Brainrot Terminal |
| `skills/meme-explainer/second-language.md` | Optional: add a second language with a toggle |
| `skills/meme-explainer/check-layout.js` | Browser check for overlapping text, overflow, emoji and sideways scroll |
| `skills/meme-explainer/export-pdf.cjs` | PDF export that keeps the desktop layout (needs Playwright) |

## License

MIT, see [LICENSE](LICENSE).
