---
name: meme-explainer
description: Meme explainer — use when the user wants a technical topic taught to non-experts as something fun, visual or shareable (an explainer page, zine, one-pager or PDF), or asks to explain something "with memes" or "from first principles".
---

# Meme Explainer

One page that teaches one topic from **first principles**. The body text teaches, written to
**ASD-STE100**. The memes are the **hook** that gets people to read it. The page ships **clean**:
`check-layout.js` returns `clean` at both widths and every page of the PDF has been looked at.

## Steps

1. **Frame.** Write down the one question the page answers, who reads it, and the reader's real
   case (their names, their error text). Done when all three are written down and each example
   value is marked as an example.
2. **Chain.** List 6–11 sections, each using only ideas from the sections before it:
   basics → the problem → the core object → how it is checked → good case → bad case → compare →
   the real-world twist → *try it* → the fix → glossary. Done when every term in a section is
   introduced in that section or an earlier one, and the glossary lists every term.
3. **Theme.** Take the theme the user named, or ask, choosing from `themes.md`. Done when the
   palette and fonts on the page are that theme's tokens and nothing else.
4. **Write.** For each section: number, short label, title, body, one diagram where a picture
   helps, one meme **hook** (a section carried by its diagram alone may skip the meme). Body text
   follows the writing rules below. Sign the page with the requester's name when they ask.
   Done when every section has its parts and every body sentence meets the rules.
5. **Draw.** Memes, diagrams and icons follow the drawing rules below. Add one *try it* check:
   3–6 yes/no toggles that name which condition fails and why, with "Try it on the web page" under
   it for the PDF. Done when every visual is inline SVG with `role="img"` and an `aria-label`.
6. **Check.** Run `check-layout.js` in the browser at 1280px and at 400px. Then view every meme and
   figure side by side once (clone each `.meme` / `.fig` into one overlay and screenshot it). Done
   when the script returns `clean` at both widths and every visual has been viewed.
7. **Export.** `node export-pdf.cjs page.html out.pdf`, then view all pages at once (viewer
   thumbnails or `pdftoppm -r 20 -png out.pdf p`). Without Playwright: Chrome → Print → Save as PDF,
   A4, Background graphics on, and tell the user it prints the one-column layout. Done when every
   page has been viewed and none is half empty or cuts a card.
8. **Ship.** Publish the page. Tell the user it is private until shared, and where the PDF is.
   For a second language, follow `second-language.md` before shipping.

## Writing rules (ASD-STE100)

- Steps ≤ 20 words; descriptions ≤ 25 words; one idea per sentence.
- Active voice. Steps are numbered, one action each, starting with a verb.
- One word for one thing across the whole page; bold a term where it is first explained.
- Notices: NOTE for information, CAUTION for something that can cause a problem, WARNING for a
  security or data risk.
- Memes speak casual, short and funny; the rules above govern everything else.

## Drawing rules

- Memes and diagrams are inline SVG. Meme formats: Drake no/yes, Expectation vs Reality,
  "Can we fix it? / No.", two stick figures talking, an object with big eyes, a homemade
  "TRUST ME BRO" card. Stick figures and doodles, the theme's handwritten font, and one mono caption
  that ties the joke to the lesson.
- Hand-drawn wobble goes on shapes only: `feTurbulence` (baseFrequency .035) + `feDisplacementMap`
  (scale 3.2); text stays crisp.
- Diagram labels are dark pills sitting on their arrow. Route right-angle arrows around labels.
  Green solid arrow = works; red dashed arrow = fails.
- Icons are drawn `<symbol>`s (lock, check, cross, warning, question, eyes, sparkle) placed with
  `<use>`. Results read as text faces: "IT LOADS :)" / "IT FAILS :(".
- Everything is visible at rest, so thumbnails and PDFs show the whole page.
- Diagrams fill the column on desktop (`width: 100%`). On phones (≤ 600px) they keep
  `min-width: 560px` inside an `overflow-x: auto` box with a "Swipe" hint.
- A grid or flex row holds one element per cell: wrap a line of text and its `<code>` chip in one
  `<span>`. Give a rotated sticker inside a title vertical margin.
