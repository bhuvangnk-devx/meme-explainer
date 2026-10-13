// Layout check for an explainer page. Paste into the browser console (or run via a DevTools
// "evaluate script" tool) after fonts load. Run at 1280px and at 400px wide.
// Returns 'clean' or a list of problems. Fix every one; then look at each meme/figure once.
(async () => {
  await document.fonts.ready;
  const out = [];
  const root = document.querySelector('main:not([hidden])') || document.body;
  // Shrink text boxes to the glyph core so normal line spacing is not reported.
  const core = r => ({ left: r.left, right: r.right, top: r.top + r.height * 0.22, bottom: r.bottom - r.height * 0.22 });
  const hit = (a, b) => a.left < b.right - 1 && b.left < a.right - 1 && a.top < b.bottom - 1 && b.top < a.bottom - 1;

  root.querySelectorAll('svg').forEach(svg => {
    const where = (svg.closest('section,header')?.id || 'top') + (svg.closest('.meme') ? ' meme' : ' figure');
    const texts = [...svg.querySelectorAll('text')].map(t => ({ t: t.textContent.trim(), r: t.getBoundingClientRect(), pill: t.classList.contains('pill-t') }));
    const icons = [...svg.querySelectorAll('use')].map(u => ({ t: 'icon', r: u.getBoundingClientRect() }));
    const all = texts.concat(icons);
    // 1. text or icons overlapping each other
    for (let i = 0; i < all.length; i++) for (let j = i + 1; j < all.length; j++)
      if (hit(core(all[i].r), core(all[j].r))) out.push(`${where}: "${all[i].t}" overlaps "${all[j].t}"`);
    // 2. text that starts inside a box but runs past its right edge
    const boxes = [...svg.querySelectorAll('rect')].map(r => r.getBoundingClientRect());
    texts.forEach(x => {
      if (!x.t) return;
      const c = core(x.r);
      boxes.forEach(b => { if (c.left > b.left && c.left < b.right && c.top > b.top && c.bottom < b.bottom && c.right > b.right - 1) out.push(`${where}: "${x.t}" runs past its box`); });
    });
    // 3. arrows drawn through a label (pill labels sit on arrows on purpose)
    svg.querySelectorAll('path.ln, path.ln-g, path.ln-r, line.ln').forEach(p => {
      if (!p.getTotalLength) return;
      const L = p.getTotalLength(), m = p.getScreenCTM();
      texts.forEach(x => {
        if (!x.t || x.pill) return;
        for (let d = 0; d <= L; d += 3) {
          const pt = p.getPointAtLength(d), px = m.a * pt.x + m.c * pt.y + m.e, py = m.b * pt.x + m.d * pt.y + m.f;
          if (px > x.r.left + 2 && px < x.r.right - 2 && py > x.r.top + 3 && py < x.r.bottom - 3) { out.push(`${where}: arrow crosses "${x.t}"`); break; }
        }
      });
    });
    // 4. text outside the drawing
    const s = svg.getBoundingClientRect();
    texts.forEach(x => { if (x.r.right > s.right + 1 || x.r.left < s.left - 1 || x.r.bottom > s.bottom + 1) out.push(`${where}: "${x.t}" spills outside the drawing`); });
    // 5. emoji (render faded and differently per OS)
    texts.forEach(x => { if (/[\u{1F000}-\u{1FFFF}☀-➿️]/u.test(x.t)) out.push(`${where}: emoji in "${x.t}" — draw an icon instead`); });
  });

  // 6. inline code / URL chips squeezed by a grid or flex parent (one or two letters per line)
  root.querySelectorAll('code, .url').forEach(el => {
    const r = el.getBoundingClientRect(), fs = parseFloat(getComputedStyle(el).fontSize);
    if (r.height > fs * 4 && r.width < 140) out.push(`squeezed chip "${el.textContent}" — wrap its line in one <span>`);
  });
  // 7. diagrams scrolling at desktop width, page scrolling sideways, unreadably small diagram text
  if (innerWidth >= 900) root.querySelectorAll('.fig').forEach(f => { if (f.scrollWidth > f.clientWidth + 1) out.push('figure scrolls at desktop width: ' + (f.closest('section')?.id || '')); });
  if (document.documentElement.scrollWidth > innerWidth + 1) out.push('page scrolls sideways');
  const sizes = [...root.querySelectorAll('.fig svg text')].map(t => t.getBoundingClientRect().height).filter(Boolean);
  if (sizes.length && Math.min(...sizes) < 9) out.push(`smallest diagram text is ${Math.round(Math.min(...sizes))}px — give diagrams a min-width and let them scroll on phones`);
  return out.length ? out : 'clean';
})();
