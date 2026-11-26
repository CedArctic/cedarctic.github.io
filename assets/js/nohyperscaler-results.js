// No Hyperscaler paper page: results charts (paper Table 5, 5 runs per setting).
// Ported from the artifact's landing page (hotnets_artifact/site/landing.js); colours come from assets/css/custom.css.
(() => {
  const RESULTS = [
    // model, fault, [without, with] RCA success %, [without, with] tokens per run (input + output, mean)
    { model: 'GPT-5.4 mini', fault: 'L2 Subnetting', rca: [60, 100], tokens: [70193.2, 47761.0] },
    { model: 'GPT-5.4 mini', fault: 'BGP TE', rca: [0, 100], tokens: [92341.8, 57493.6] },
    { model: 'GPT-5.5', fault: 'L2 Subnetting', rca: [20, 100], tokens: [118965.4, 142298.4] },
    { model: 'GPT-5.5', fault: 'BGP TE', rca: [100, 100], tokens: [239418.0, 34359.0] },
  ];
  const SERIES = [
    { key: 'without', label: 'Without runbooks' },
    { key: 'with', label: 'With runbooks' },
  ];
  const METRICS = {
    rca: { max: 100, ticks: [0, 50, 100], fmt: (v) => `${Math.round(v)}%`,
      tip: (v) => `${Math.round(v)}% (${Math.round(v / 20)} of 5 runs)` },
    tokens: { max: 250000, ticks: [0, 100000, 200000], fmt: (v) => (v === 0 ? '0' : `${Math.round(v / 1000)}k`),
      tip: (v) => `${(v / 1000).toFixed(1)}k tokens per run` },
  };

  const NS = 'http://www.w3.org/2000/svg';
  const el = (name, attrs = {}, parent) => {
    const node = document.createElementNS(NS, name);
    for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
    if (parent) parent.appendChild(node);
    return node;
  };

  // Bar with 4px rounded top, square at the baseline
  const barPath = (x, y, w, h) => {
    const r = Math.min(4, h, w / 2);
    return `M${x},${y + h} V${y + r} Q${x},${y} ${x + r},${y} H${x + w - r} Q${x + w},${y} ${x + w},${y + r} V${y + h} Z`;
  };

  function drawChart(figure) {
    const metric = METRICS[figure.dataset.metric];
    // Draw at the figure's real width (no downscaling, so labels stay readable on phones)
    figure.querySelector('svg')?.remove();
    figure.querySelector('.nh-tooltip')?.remove();
    const W = Math.max(280, Math.min(560, figure.clientWidth - 32)), H = 250, left = 40, right = 6, top = 18, bottom = 52;
    const plotW = W - left - right, plotH = H - top - bottom;
    const y = (v) => top + plotH - (v / metric.max) * plotH;

    const svg = el('svg', { viewBox: `0 0 ${W} ${H}`, role: 'img',
      'aria-label': `${figure.querySelector('figcaption').textContent}, without vs. with runbooks; hover a bar for its value` });
    const grid = el('g', { class: 'grid' }, svg);
    const axis = el('g', { class: 'axis' }, svg);
    for (const t of metric.ticks) {
      el('line', { x1: left, x2: W - right, y1: y(t), y2: y(t) }, grid);
      const label = el('text', { x: left - 6, y: y(t) + 4, 'text-anchor': 'end' }, axis);
      label.textContent = metric.fmt(t);
    }

    const groupW = plotW / RESULTS.length, barW = Math.min(36, groupW / 2 - 6);
    const gap = Math.max(2, 35 - barW); // keep the two value labels of a group apart
    const valueSize = barW < 34 ? 10 : 11;
    const tooltip = document.createElement('div');
    tooltip.className = 'nh-tooltip';
    tooltip.hidden = true;
    figure.appendChild(tooltip);

    RESULTS.forEach((row, i) => {
      const cx = left + groupW * (i + 0.5);
      SERIES.forEach((s, j) => {
        const value = row[figure.dataset.metric][j];
        const x = cx + (j === 0 ? -(barW + gap / 2) : gap / 2);
        const mark = el('g', { class: 'mark' }, svg);
        const h = (value / metric.max) * plotH;
        if (h > 0) el('path', { class: `bar ${s.key}`, d: barPath(x, y(value), barW, h) }, mark);
        else el('rect', { class: `bar ${s.key}`, x, y: y(0) - 1.5, width: barW, height: 1.5 }, mark);
        const label = el('text', { class: 'value', x: x + barW / 2, y: y(value) - 5, 'text-anchor': 'middle', 'font-size': valueSize }, mark);
        label.textContent = metric.fmt(value);
        // Hit target: the whole column, taller than the bar
        const hit = el('rect', { class: 'hit', x: x - gap / 2, y: top - 12, width: barW + gap, height: plotH + 12 }, mark);
        const text = `${row.model} · ${row.fault}\n${s.label}: ${metric.tip(value)}`;
        el('title', {}, hit).textContent = text;
        hit.addEventListener('pointerenter', () => {
          const box = figure.getBoundingClientRect(), r = mark.querySelector('.value').getBoundingClientRect();
          tooltip.textContent = '';
          text.split('\n').forEach((line, k) => {
            const div = document.createElement('div');
            div.textContent = line;
            if (k === 0) div.className = 'nh-tooltip-head';
            tooltip.appendChild(div);
          });
          tooltip.style.left = `${r.left - box.left + r.width / 2}px`;
          tooltip.style.top = `${r.top - box.top - 2}px`;
          tooltip.hidden = false;
        });
        hit.addEventListener('pointerleave', () => { tooltip.hidden = true; });
      });
      const group = el('g', { class: 'group' }, svg);
      const fault = el('text', { x: cx, y: H - bottom + 16, 'text-anchor': 'middle' }, group);
      fault.textContent = row.fault;
    });

    // Model labels span their two faults
    const models = [...new Set(RESULTS.map((r) => r.model))];
    models.forEach((m) => {
      const idx = RESULTS.map((r, i) => (r.model === m ? i : -1)).filter((i) => i >= 0);
      const x1 = left + groupW * idx[0] + 8, x2 = left + groupW * (idx[idx.length - 1] + 1) - 8;
      const group = el('g', { class: 'group' }, svg);
      el('line', { class: 'divider', x1, x2, y1: H - bottom + 24, y2: H - bottom + 24 }, group);
      const t = el('text', { class: 'model', x: (x1 + x2) / 2, y: H - bottom + 40, 'text-anchor': 'middle' }, group);
      t.textContent = m;
    });

    figure.appendChild(svg);
  }

  const charts = document.querySelectorAll('.nh-chart[data-metric]');
  charts.forEach(drawChart);
  let resizeTimer;
  let lastWidth = window.innerWidth;
  window.addEventListener('resize', () => {
    if (window.innerWidth === lastWidth) return;
    lastWidth = window.innerWidth;
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => charts.forEach(drawChart), 150);
  });
})();
