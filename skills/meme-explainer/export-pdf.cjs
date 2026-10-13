// Export an explainer page to PDF with its desktop layout.
//   node export-pdf.cjs page.html out.pdf
// Plain `chrome --print-to-pdf` ignores CSS page size, prints the phone layout and leaves half-empty
// pages. This prints at 1180px wide on A4-shaped pages (1180 x 1669 px), which prints fine on A4.
// Needs Playwright: `npm i -D playwright && npx playwright install chromium` (or use a project copy).
const path = require('path');
let chromium;
try { ({ chromium } = require('playwright')); } catch { ({ chromium } = require(path.resolve('node_modules/playwright'))); }

const [, , input, output] = process.argv;
if (!input || !output) { console.error('usage: node export-pdf.cjs page.html out.pdf'); process.exit(1); }

const PRINT_CSS = `
  html, body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { padding: 0 !important; }
  .meme:hover { transform: none !important; }
  section, .sheet, .meme, .fig, figure, .table-wrap, .note, table, .card { break-inside: avoid; }
  h1, h2, h3 { break-after: avoid; }`;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1180, height: 1669 } });
  await page.goto('file://' + path.resolve(input), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.addStyleTag({ content: PRINT_CSS });
  await page.emulateMedia({ media: 'screen' }); // keep the desktop (multi-column) layout
  await page.pdf({ path: output, width: '1180px', height: '1669px', printBackground: true,
    margin: { top: '28px', bottom: '28px', left: '28px', right: '28px' } });
  await browser.close();
  console.log('wrote', output);
})();
