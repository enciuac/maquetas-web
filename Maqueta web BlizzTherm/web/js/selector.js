/* Selector de temperatura de la home (lógica original de blizztherm.es)
   CAMBIOS de la maqueta: se retiran las recomendaciones de BlizzCool (26-45 °C),
   el enlace al blog de BlizzCool y se añaden avisos de ventilación en combustión. */
(function () {
  var P = window.BZT.P, LIVE = window.BZT.LIVE;
  var root = document.getElementById('bzt-ctl');
  if (!root) return;
  var $ = function (s) { return root.querySelector(s); };

  var WHY_COOL = 'La recomendación principal pasa a ser de BlizzTherm (antes eran productos BlizzCool) y BlizzCool queda como enlace secundario, presentado como marca hermana de Toolsplace: el informe pide eliminar las referencias a Blizzcool, ventiladores y refrigeración (Sección 02 y prioridad 1 de la Sección 11).';
  var PRETEMP = {
    who: 'BlizzTherm · Temporada de calor',
    h: 'No necesitas calefacción ahora: prepara la próxima temporada',
    p: 'Es el mejor momento para revisar quemadores, resistencias y conexiones, y para renovar los equipos antiguos antes de que llegue el frío.',
    links: [['Mantenimiento', P.mantenimiento.h], ['Plan Renove', P.renove.h]],
    sister: true
  };
  function cool(antes) { var o = {}; for (var k in PRETEMP) o[k] = PRETEMP[k]; o.links = PRETEMP.links; o.chg = {t: 'mod', antes: antes, porque: WHY_COOL}; return o; }
  var SAFE_DIRECT = {txt: 'Combustión directa: úsalo solo en exteriores o espacios con ventilación abundante.',
    antes: 'La recomendación no indicaba ninguna condición de ventilación.',
    porque: 'El informe pide que las condiciones de ventilación y evacuación de gases se vean antes de comprar, no solo en el manual (Secciones 03 y 08).'};

  var CONFORT = {max: 25, who: 'BlizzTherm', h: 'Tu espacio está en su punto',
    p: 'Buen momento para preparar el invierno: revisa tus equipos o renueva los antiguos antes de que llegue el frío.',
    links: [['Plan Renove', P.renove.h], ['Post-venta', P.postventa.h]]};

  var CONFIG = {
    ask: {who: 'Antes de recomendarte', h: '¿Tu espacio de trabajo es cerrado o abierto?',
      p: 'El equipo adecuado cambia mucho: en un espacio abierto el calor se escapa, y en uno cerrado hay que cuidar los humos y la ventilación.',
      cerrado: ['Cerrado', 'Naves, talleres, almacenes'], abierto: ['Abierto', 'Obras, muelles, carpas, exteriores']},
    notes: [
      {when: function (v) { return v < 17; }, html: 'Por debajo de 17 °C no se alcanza el mínimo que fija el RD 486/1997 para trabajos sedentarios (14 °C en trabajos ligeros).'},
      {when: function (v) { return v > 25; }, html: 'Por encima de 25 °C se supera el máximo que fija el RD 486/1997 para trabajos ligeros (27 °C en trabajos sedentarios). <a class="del chg" data-t="mod" data-antes="Enlace «Más información» a un artículo del blog de blizzcool.es." data-porque="Se retira el enlace al blog de BlizzCool (Sección 02 · Hallazgos críticos)." href="#">Más información</a>'}
    ],
    spaces: {
      cerrado: [
        {max: 5, who: 'BlizzTherm · Extracción de humos', h: 'Calefactores con extracción de humos',
          p: 'La potencia de la combustión con los gases conducidos al exterior: la opción para calentar naves y talleres cerrados cuando hace mucho frío.',
          links: [['Ver BTC 18', LIVE + '/calefactor-industrial-infrarrojos/calefactor-por-infrarrojos-btc-18/'], ['Ver BTC 13', LIVE + '/calefactor-industrial-infrarrojos/calefactor-por-infrarrojos-btc-13/']]},
        {max: 12, who: 'BlizzTherm · Eléctricos', h: 'Calefactores eléctricos de alta potencia',
          p: 'Sin combustión ni humos, así que son seguros en espacios cerrados. Los modelos más potentes calientan naves y talleres de buen tamaño.',
          links: [['Ver BTE 150', LIVE + '/calefactor-industrial-electrico/calefactor-electrico-bte-150/'], ['Todos los eléctricos', P.electricos.h]]},
        {max: 19, who: 'BlizzTherm · Eléctricos', h: 'Calefactores eléctricos portátiles',
          p: 'Enchufar y listo: sin humos y con termostato de precisión para mantener talleres, almacenes y oficinas de nave a la temperatura justa.',
          links: [['Ver BTE 50', LIVE + '/calefactor-industrial-electrico/calentador-electrico-bte-50/'], ['Todos los eléctricos', P.electricos.h]]},
        CONFORT,
        (function () { var o = cool('BlizzCool · marca hermana — «Ventiladores de techo HVLS», con enlaces a blizzcool.es.'); o.max = 29; return o; })(),
        (function () { var o = cool('BlizzCool · marca hermana — «Climatizadores evaporativos», con enlaces a blizzcool.es.'); o.max = 35; return o; })(),
        (function () { var o = cool('BlizzCool · marca hermana — «Aire acondicionado portátil industrial», con enlaces a blizzcool.es.'); o.max = 99; return o; })()
      ],
      abierto: [
        {max: 2, who: 'BlizzTherm · Cañones de calor', h: 'Cañones de calor a gasóleo',
          p: 'Máxima potencia y autonomía para obras, naves sin cerrar y espacios abiertos bajo cero, donde la ventilación es natural.', safe: SAFE_DIRECT,
          links: [['Ver cañones a gasóleo', P.gasoil.h], ['Cañones a gas', P.gas.h]]},
        {max: 9, who: 'BlizzTherm · Cañones de calor', h: 'Cañones de calor a gas',
          p: 'Calor inmediato para zonas abiertas o muy ventiladas: obras, muelles de carga y explotaciones agrícolas.', safe: SAFE_DIRECT,
          links: [['Ver cañones a gas', P.gas.h], ['Cañones a gasóleo', P.gasoil.h]]},
        {max: 19, who: 'BlizzTherm · Infrarrojos', h: 'Calefactores por infrarrojos',
          p: 'En un espacio abierto el aire caliente se escapa. El infrarrojo calienta directamente a las personas y superficies, así que no se pierde: ideal para muelles, carpas y puestos de trabajo al aire libre.',
          links: [['Ver calefactores por infrarrojos', P.infrarrojos.h]]},
        CONFORT,
        (function () { var o = cool('BlizzCool · marca hermana — «Ventiladores industriales móviles», con enlaces a blizzcool.es.'); o.max = 29; return o; })(),
        (function () { var o = cool('BlizzCool · marca hermana — «Nebulizadores», con enlaces a blizzcool.es.'); o.max = 35; return o; })(),
        (function () { var o = cool('BlizzCool · marca hermana — «Climatizadores evaporativos», con enlaces a blizzcool.es.'); o.max = 99; return o; })()
      ]
    }
  };

  var range = $('.tc-range'), arc = $('.tc-arc'), tEl = $('.tc-t'), lEl = $('.tc-l'), reco = $('.tc-reco');
  var C = 2 * Math.PI * 170, SPAN = C * .75, space = null;
  var ticks = $('.tc-ticks');
  for (var i = 0; i <= 50; i++) {
    var an = (135 + i * 270 / 50) * Math.PI / 180, r1 = i % 5 ? 142 : 136, r2 = 148;
    var l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    l.setAttribute('x1', 200 + Math.cos(an) * r1); l.setAttribute('y1', 200 + Math.sin(an) * r1);
    l.setAttribute('x2', 200 + Math.cos(an) * r2); l.setAttribute('y2', 200 + Math.sin(an) * r2);
    l.setAttribute('stroke', 'rgba(255,255,255,' + (i % 5 ? .12 : .35) + ')'); l.setAttribute('stroke-width', i % 5 ? 1 : 2);
    ticks.appendChild(l);
  }
  var TEMP = [{max: 5, lbl: 'Frío extremo', col: '#8FB4F0'}, {max: 14, lbl: 'Frío', col: '#A9C3F0'}, {max: 19, lbl: 'Fresco', col: '#C9D8F2'},
    {max: 25, lbl: 'Confort', col: '#ffffff'}, {max: 31, lbl: 'Calor', col: '#FFC08A'}, {max: 99, lbl: 'Calor extremo', col: '#FFA06A'}];
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]; }); }
  var ICO = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg>';
  var ICO_SP = {cerrado: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21V9l9-6 9 6v12"/><path d="M8 21v-7h8v7M3 21h18"/></svg>',
    abierto: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'};

  function setChg(el, c) {
    if (c) { el.classList.add('chg'); el.setAttribute('data-t', c.t); el.setAttribute('data-antes', c.antes); el.setAttribute('data-porque', c.porque); }
    else { el.classList.remove('chg'); el.removeAttribute('data-t'); }
  }
  function update() {
    var v = +range.value, p = (v + 5) / 50;
    arc.setAttribute('stroke-dasharray', (SPAN * p) + ' ' + C);
    var t = TEMP.filter(function (x) { return v <= x.max; })[0];
    tEl.textContent = v + '°'; tEl.style.color = t.col; lEl.textContent = t.lbl;
    if (!space) {
      var q = CONFIG.ask;
      reco.style.borderColor = 'var(--acc)'; reco.style.boxShadow = '0 20px 60px -30px var(--acc)';
      reco.innerHTML = '<div class="tc-who" style="color:var(--acc)">' + esc(q.who) + '</div><h3>' + esc(q.h) + '</h3><p>' + esc(q.p) + '</p><div class="tc-q">' +
        ['cerrado', 'abierto'].map(function (k) { return '<button type="button" data-space="' + k + '"><b>' + ICO_SP[k] + esc(q[k][0]) + '</b><small>' + esc(q[k][1]) + '</small></button>'; }).join('') + '</div>';
      setChg(reco, null);
      return;
    }
    var r = CONFIG.spaces[space].filter(function (x) { return v <= x.max; })[0];
    var acc = 'var(--acc)';
    reco.style.borderColor = acc; reco.style.boxShadow = '0 20px 60px -30px ' + acc;
    var nt = CONFIG.notes.filter(function (x) { return x.when(v); })[0];
    var n = nt ? '<div class="tc-note">' + ICO + '<span>' + nt.html + '</span></div>' : '';
    var seg = '<div class="tc-seg" role="group" aria-label="Tipo de espacio">' + ['cerrado', 'abierto'].map(function (k) {
      return '<button type="button" data-space="' + k + '" aria-pressed="' + (k === space) + '">' + esc(CONFIG.ask[k][0]) + '</button>'; }).join('') + '</div>';
    var safe = r.safe ? '<div class="tc-safe"><span class="chg" data-t="mod" data-antes="' + esc(r.safe.antes) + '" data-porque="' + esc(r.safe.porque) + '">' + esc(r.safe.txt) + '</span></div>' : '';
    reco.innerHTML = seg + '<div class="tc-who" style="color:' + acc + '">' + esc(r.who) + '</div><h3>' + esc(r.h) + '</h3><p>' + esc(r.p) + '</p>' + safe + n +
      '<div class="tc-links">' + r.links.map(function (x, k) {
        var ext = /^https?:/.test(x[1]);
        var pg = ''; for (var key in P) if (P[key].h === x[1]) pg = ' data-pg="' + key + '"';
        return '<a class="tc-btn" href="' + esc(x[1]) + '"' + pg + (ext ? ' target="_blank" rel="noopener"' : '') + ' style="' + (k ? 'color:#EB5C1B;border-color:#EB5C1B' : 'background:#EB5C1B;color:#fff') + '">' + esc(x[0]) + ' →</a>';
      }).join('') + '</div>' +
      (r.sister ? '<p class="tc-sis">¿Necesitas refrigerar o ventilar tu espacio? <a href="https://blizzcool.es" target="_blank" rel="noopener">BlizzCool, la marca de refrigeración de Toolsplace →</a></p>' : '');
    setChg(reco, r.chg || null);
    if (document.body.classList.contains('review')) reco.querySelectorAll('a[data-pg]').forEach(function (l) { l.setAttribute('href', l.getAttribute('href') + '#cambios'); });
  }
  reco.addEventListener('click', function (e) {
    var b = e.target.closest('[data-space]'); if (!b) return;
    space = b.getAttribute('data-space'); update();
    var again = reco.querySelector('[data-space="' + space + '"]'); if (again) again.focus({preventScroll: true});
  });
  function xRange(input) {
    var w = document.createElement('span'), th = document.createElement('span');
    w.className = 'tc-xr'; th.className = 'tc-xr-thumb';
    input.parentNode.insertBefore(w, input); w.appendChild(input); w.appendChild(th);
    var min = +input.min, max = +input.max, step = +input.step || 1;
    var pos = function () { w.style.setProperty('--xp', (input.value - min) / (max - min)); };
    var set = function (x) {
      var b = input.getBoundingClientRect(), t = th.offsetWidth,
        pp = Math.min(1, Math.max(0, (x - b.left - t / 2) / (b.width - t))),
        v = Math.round((min + pp * (max - min)) / step) * step;
      if (+input.value !== v) { input.value = v; input.dispatchEvent(new Event('input', {bubbles: true})); }
      pos();
    };
    var drag = false;
    w.addEventListener('pointerdown', function (e) { if (e.button > 0) return; drag = true; try { w.setPointerCapture(e.pointerId); } catch (_) {} set(e.clientX); input.focus({preventScroll: true}); });
    w.addEventListener('pointermove', function (e) { if (drag) set(e.clientX); });
    ['pointerup', 'pointercancel'].forEach(function (n) { w.addEventListener(n, function () { drag = false; }); });
    input.addEventListener('input', pos); pos();
  }
  xRange(range);
  range.addEventListener('input', update);
  range.value = 20; update();
  document.addEventListener('bzt:review', update);
})();
