# Five Gen Z themes

Pick one per page. Each is a single committed look (it does not switch with dark mode), so set the
body background and every colour from these tokens. Fonts are on Google Fonts; always add a fallback
stack. Use the "signature" details — they are what makes the page feel designed, not templated.

| # | Theme | Mood | Best for |
|---|---|---|---|
| 1 | Riso Zine | printed indie zine, grain and stickers | default; mixed audiences |
| 2 | Y2K Chrome | early-2000s internet, sparkle and gloss | product / marketing-adjacent topics |
| 3 | Pixel Arcade | 8-bit game, levels and HP bars | step-by-step processes, troubleshooting |
| 4 | Sticker Scrapbook | journal page, tape and die-cut stickers | onboarding, friendly HR / ops topics |
| 5 | Brainrot Terminal | dark terminal + group-chat memes | developer and infra audiences |

---

## 1. Riso Zine

- **Palette:** paper `#e4e0d5` · sheet `#efece4` · ink `#171615` · ink-2 `#4d4a44` · red `#d24b2a` ·
  grass `#3d6a2e` · lime `#9cc56f` · yellow `#f2c94c` · night `#1e2421`
- **Fonts:** display Bricolage Grotesque 800 · labels Silkscreen (pixel) · memes Gochi Hand ·
  mono JetBrains Mono
- **Signature:** SVG-noise grain on the body; red cover block with a halftone corner
  (`radial-gradient` dots masked to the corner); a rotated pixel "sticker" inside the title; dark
  contents card; memes in cards with a 2px ink border and a hard `6px 6px 0` ink shadow; section
  numbers as red pixel chips; diagram boxes in pastel fills with 2px ink strokes.

## 2. Y2K Chrome

- **Palette:** ground `#eef0ff` · ink `#1b1340` · pink `#ff5fb4` · cyan `#29d3ff` · lilac `#b9a7ff` ·
  lime `#c8ff3d` · chrome `linear-gradient(180deg,#fff,#b8c1d9 45%,#6f7a99 55%,#e9ecf5)`
- **Fonts:** display Rubik Bubbles or Bungee Shade (titles only) · body Outfit · memes Caveat ·
  mono Space Mono
- **Signature:** chrome pill buttons and section chips; 4-point sparkle `<symbol>`s scattered at the
  edges; sections as rounded 28px "windows" with a fake title bar (three dots); memes as pop-up
  windows with a drawn ✕; soft cyan-to-pink glow behind the cover title.

## 3. Pixel Arcade

- **Palette:** ground `#12131f` · panel `#1d2033` · text `#f3f1e6` · coin `#ffd23f` · hp `#ff4d6d` ·
  mana `#3ec1ff` · xp `#7cff6b`
- **Fonts:** titles Press Start 2P (short strings only) · labels Silkscreen · body Pixelify Sans or
  VT323 at 20px+ · mono VT323
- **Signature:** square corners; stepped 4px pixel borders (stacked `box-shadow`); sections named
  "LEVEL 01…"; an XP bar showing reading progress; the interactive check styled as a boss fight
  ("BOSS DEFEATED" / "GAME OVER"); meme sprites drawn on an 8px grid with
  `shape-rendering: crispEdges`.

## 4. Sticker Scrapbook

- **Palette:** paper `#fbf7ef` (faint blue ruled lines via `repeating-linear-gradient`) · ink `#1f1d1a` ·
  tape `#ffe08a` at 60% · red `#ff6b4a` · mint `#7fd6b2` · blue `#5b8def` · purple `#a77bff`
- **Fonts:** display Shrikhand or DynaPuff · body Nunito · memes Patrick Hand or Gochi Hand ·
  mono DM Mono
- **Signature:** cards rotated ±1–2° (keep text cards straight if they hold long text); washi-tape
  strips on card corners; die-cut stickers (white outline via four `drop-shadow`s); doodled arrows
  and circles linking sections; a "pinned polaroid" frame for the cover meme.

## 5. Brainrot Terminal

- **Palette:** ground `#0b0f0c` · panel `#121a14` · text `#d7f5dc` · green `#39ff88` · magenta `#ff3ea5` ·
  amber `#ffb000` · dim `#5d7a65`
- **Fonts:** display Unbounded or Syne · body IBM Plex Mono · mono JetBrains Mono
- **Signature:** steps as `$ ` prompt lines; a blinking cursor after titles (disable under
  `prefers-reduced-motion`); memes drawn as group-chat screenshots (bubbles, names, reactions) or
  terminal output; 4% scanline overlay; notices as `[WARN]` / `[NOTE]` log lines in amber/green.
