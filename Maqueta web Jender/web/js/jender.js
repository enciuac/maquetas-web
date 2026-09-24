/* Maqueta Jender · cabecera, pie, iconos y modo "ver cambios" compartidos */
(function () {
  const I = {
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
    pin: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    box: '<path d="M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.7z"/><path d="M3.3 7 12 12l8.7-5M12 22V12"/>',
    clip: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
    gauge: '<path d="m12 14 4-4"/><path d="M3.3 19a10 10 0 1 1 17.4 0"/>',
    tool: '<path d="M2 20h20M5 20V9l7-5 7 5v11"/><path d="M9 20v-6h6v6"/>',
    cog: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    award: '<circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/>',
    map: '<path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/><path d="M8 2v16M16 6v16"/>',
    user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
    check: '<circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/>',
    bolt: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    truck: '<path d="M1 3h15v13H1zM16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
    layers: '<path d="m12 2 10 5-10 5L2 7l10-5z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
    chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M9 15h6M9 11h2"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10z"/><path d="M2 21c0-3 1.9-5.4 5.1-6"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    cart: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/>',
    handshake: '<path d="m11 17 2 2a1 1 0 1 0 3-3"/><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.9-3.9a3 3 0 0 0-4.2 0l-.9.9a1 1 0 1 1-3-3l2.8-2.8a5.8 5.8 0 0 1 7.1-.9l.5.3a2 2 0 0 0 1.4.2L21 4M21 3l1 11h-2M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3M3 4h8"/>'
  };
  const svg = (n, extra) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${extra || ''}>${I[n] || ''}</svg>`;
  window.jIcon = svg;

  const page = document.body.dataset.page || '';
  /* index.html vive en la raíz de la maqueta; el resto de páginas y recursos, en la carpeta /web */
  const ROOT = document.body.dataset.root === '1';
  const P = ROOT ? 'web/' : '';
  const fix = h => (!h || h === '#' || h.startsWith('#') || /^https?:/.test(h)) ? (h || '#') : (h === 'index.html' ? (ROOT ? 'index.html' : '../index.html') : P + h);
  const staticHeader = document.body.dataset.header === 'static';
  /* Regla del menú en "Ver cambios": solo quedan activas las páginas con cambios propios
     (etiquetas CAMBIO / NUEVO en su contenido). El pie común con la dirección unificada no cuenta.
     Menú idéntico al de jender.es (mismos desplegables).
     m: true  = página maquetada con cambios (enlace activo en "Ver cambios")
     sin m    = página sin cambios en esta maqueta (se bloquea en gris)       */
  const menu = [
    { t: 'Inicio', h: 'index.html', k: 'home', m: true },
    { t: 'Productos', h: '#', k: 'productos', c: [
      { t: 'Compresores de tornillo', h: 'compresores-de-tornillo.html', m: true, c: [
        { t: 'Con variador', h: 'compresores-de-tornillo-con-variador.html' },
        { t: 'Con variador directo', h: 'compresores-de-tornillo-con-variador-directo.html' },
        { t: 'Con variador y secador', h: 'compresores-de-tornillo-con-variador-y-secador.html' } ] },
      { t: 'Compresores de pistón', h: 'compresores-de-piston.html' },
      { t: 'Instalaciones de aire comprimido', h: 'instalaciones-aire-comprimido.html', c: [
        { t: 'Accesorios', h: 'instalaciones-aire-comprimido-accesorios.html' },
        { t: 'Tuberías de aluminio', h: 'instalaciones-aire-comprimido-tuberias-de-aluminio.html' },
        { t: 'Enrolladores automáticos', h: 'instalaciones-aire-comprimido-enrolladores-automaticos.html' },
        { t: 'Pistolas de soplado', h: 'instalaciones-aire-comprimido-pistolas-de-soplado.html' },
        { t: 'Espirales de poliuretano', h: 'instalaciones-aire-comprimido-espirales-de-poliuretano.html' },
        { t: 'Enchufes rápidos', h: 'instalaciones-aire-comprimido-enchufes-rapidos.html' },
        { t: 'Calderines y accesorios', h: 'instalaciones-aire-comprimido-calderines-y-accesorios.html' },
        { t: 'Herramientas de montaje', h: 'instalaciones-aire-comprimido-herramientas.html' } ] },
      { t: 'Tratamientos de aire comprimido', h: 'tratamientos-aire-comprimido.html', c: [
        { t: 'Filtros de aire', h: 'tratamientos-aire-comprimido-filtros-de-aire.html' },
        { t: 'Purgas de condensado', h: 'tratamientos-aire-comprimido-purgas-de-condensado.html' },
        { t: 'Secador frigorífico', h: 'tratamientos-aire-comprimido-secador-frigorifico.html' },
        { t: 'Separadores de aire', h: 'tratamientos-aire-comprimido-separadores-de-aire.html' } ] }
    ] },
    { t: 'Soluciones', h: 'soluciones.html', k: 'soluciones', c: [
      { t: 'Alimentación', h: 'soluciones-alimentacion.html' }, { t: 'Automoción', h: 'soluciones-automocion.html' },
      { t: 'Bricolaje', h: 'soluciones-bricolaje.html' }, { t: 'Carpintería', h: 'soluciones-carpinteria.html' },
      { t: 'Industrial', h: 'soluciones-industrial.html' }, { t: 'Medicina', h: 'soluciones-medicina.html' },
      { t: 'Usos profesionales', h: 'soluciones-uso-profesional.html' }, { t: 'Sector agrícola', h: 'soluciones-sector-agricola.html' } ] },
    { t: 'Post-venta', h: 'posventa.html', k: 'posventa', m: true },
    { t: 'Descargas', h: '#', k: 'descargas', c: [ { t: 'Catálogo', h: 'catalogo.html' }, { t: 'Fichas técnicas', h: 'fichas-tecnicas.html' } ] },
    { t: 'Sobre nosotros', h: 'sobre-nosotros.html', k: 'sobre', m: true },
    { t: 'Blog', h: 'blog.html', k: 'blog' },
    { t: 'Contacto', h: 'contacto.html', k: 'contacto' },
    { t: 'Presupuesto', h: 'crear-presupuesto.html', k: 'presupuesto' }
  ];
  const here = decodeURIComponent(location.pathname.split('/').pop() || 'index.html');
  /* Réplicas con propuestas de cambio (generado automáticamente) */
  const CHG = new Set(["compresores-de-piston.html", "compresores-de-tornillo-con-variador-directo.html", "compresores-de-tornillo-con-variador-y-secador.html", "compresores-de-tornillo-con-variador.html", "instalaciones-aire-comprimido-accesorios.html", "instalaciones-aire-comprimido-calderines-y-accesorios.html", "instalaciones-aire-comprimido-enchufes-rapidos.html", "instalaciones-aire-comprimido-enrolladores-automaticos.html", "instalaciones-aire-comprimido-espirales-de-poliuretano.html", "instalaciones-aire-comprimido-herramientas.html", "instalaciones-aire-comprimido-pistolas-de-soplado.html", "instalaciones-aire-comprimido-tuberias-de-aluminio.html", "instalaciones-aire-comprimido.html", "soluciones-bricolaje.html", "soluciones-carpinteria.html", "soluciones-industrial.html", "soluciones-sector-agricola.html", "soluciones-uso-profesional.html", "soluciones.html", "tratamientos-aire-comprimido-filtros-de-aire.html", "tratamientos-aire-comprimido-purgas-de-condensado.html", "tratamientos-aire-comprimido-secador-frigorifico.html", "tratamientos-aire-comprimido-separadores-de-aire.html", "tratamientos-aire-comprimido.html"]);
  const hasChg = it => !!it.m || CHG.has(it.h) || (it.c || []).some(hasChg);
  const isCur = it => it.h === here || (it.c || []).some(isCur);
  const item = (it, lvl) => {
    const cls = [];
    if (!hasChg(it)) cls.push('nochg');
    if (it.c) cls.push('has-sub');
    const aCls = [];
    if (lvl === 0 && (it.k === page || isCur(it))) aCls.push('active');
    if (lvl > 0 && isCur(it)) aCls.push('current');
    return `<li class="${cls.join(' ')}"><a href="${fix(it.h)}" class="${aCls.join(' ')}"${hasChg(it) ? '' : ' tabindex="-1"'}>${it.t}${it.c ? '<span class="caret"></span>' : ''}</a>${it.c ? `<ul class="sub">${it.c.map(x => item(x, lvl + 1)).join('')}</ul>` : ''}</li>`;
  };
  const header = document.createElement('header');
  header.className = 'site-header' + (staticHeader ? ' static' : '');
  header.innerHTML = `<div class="nav">
      <a class="logo" href="${fix('index.html')}" aria-label="Jender inicio"><img src="${P}img/logo-header.svg" alt="JENDER · pensando en el profesional"></a>
      <ul class="menu">${menu.map(m => item(m, 0)).join('')}<li class="flag nochg"><a href="#" aria-label="Idioma" tabindex="-1"><i></i></a></li></ul>
      <div class="search nochg">${svg('search')}Buscar productos …</div>
      <button class="burger" aria-label="Menú">${svg('menu')}</button>
    </div>`;
  document.body.prepend(header);

  /* Enlaces "#" (páginas que no forman parte de la maqueta) no saltan arriba */
  header.querySelectorAll('a[href="#"]').forEach(a => a.addEventListener('click', e => e.preventDefault()));
  /* Menú móvil */
  const nav = header.querySelector('.nav');
  header.querySelector('.burger').addEventListener('click', () => nav.classList.toggle('open'));

  const footer = document.createElement('div');
  footer.innerHTML = `<footer class="site-footer"><div class="wrap cols">
      <div><img src="${P}img/logo-blanco.svg" alt="JENDER"><p style="color:#dce6f5;max-width:340px">Marca nacional especializada en aire comprimido industrial.</p>
        <ul><li${document.body.dataset.replica ? '' : ' data-k="chg" data-antes="La web muestra tres direcciones distintas: Carrer Brea, 53 · Calle Almansa, 2 · Calle Almansa, 53" data-porque="El informe pide unificar la dirección en todas las páginas (Ajustes prioritarios de contenido: unificar direcciones)." data-falta="Confirmar cuál es la dirección oficial de Jender."'}>Calle Almansa, 2, P. Industrial, 03206 Carrús, Alicante</li><li>info@jender.es · 965 46 34 36</li></ul></div>
      <div><h4>Productos</h4><ul><li><a href="${fix('compresores-de-tornillo.html')}">Compresores de tornillo</a></li><li><a href="${fix('compresores-de-piston.html')}">Compresores de pistón</a></li><li><a href="${fix('tratamientos-aire-comprimido.html')}">Tratamiento de aire</a></li><li><a href="${fix('instalaciones-aire-comprimido.html')}">Redes de aire comprimido</a></li><li><a href="${fix('posventa.html')}">Posventa y SAT</a></li></ul></div>
      <div><h4>Información</h4><ul><li><a href="#">Aplazamiento de pago</a></li><li><a href="#">Aviso legal</a></li><li><a href="#">Política de privacidad</a></li><li><a href="#">Política de cookies</a></li><li><a href="#">Envíos y devoluciones</a></li></ul></div>
    </div></footer><div class="copy">© 2026 JENDER Ibérica. Todos los derechos reservados.</div>
    <a class="float-wa" href="#" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3.9 2.5 1 2.7.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg></a>
    <div class="float-list">${svg('cart')}Ver lista</div>
    <button class="review-toggle" type="button"><span class="sw"></span>Ver cambios <small>(maqueta)</small></button>`;
  document.body.append(...footer.childNodes);

  document.querySelectorAll('i[data-i]').forEach(el => { el.outerHTML = svg(el.dataset.i); });

  const t = document.querySelector('.review-toggle');
  /* "Ver cambios" se mantiene activo al cambiar de página (localStorage + #cambios en los enlaces) */
  const KEY = 'jender-maqueta-cambios';
  let on = location.hash === '#cambios';
  try { on = on || localStorage.getItem(KEY) === '1'; } catch (e) {}
  if (on) document.body.classList.add('show-changes');
  const save = v => { try { localStorage.setItem(KEY, v ? '1' : '0'); } catch (e) {} };
  t.addEventListener('click', () => { save(document.body.classList.toggle('show-changes')); });
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]');
    if (!a || e.defaultPrevented) return;
    const h = a.getAttribute('href');
    if (!/\.html(#.*)?$/.test(h)) return;
    const base = h.split('#')[0];
    if (document.body.classList.contains('show-changes')) a.setAttribute('href', base + '#cambios');
    else a.setAttribute('href', base + (h.includes('#') && !h.endsWith('#cambios') ? '#' + h.split('#')[1] : ''));
  });
  if (location.hash === '#cambios') save(true);

  /* En "Ver cambios", los enlaces a páginas sin cambios se bloquean con un aviso */
  const tip = document.createElement('div');
  tip.className = 'blocked-tip';
  tip.textContent = 'Página sin cambios (réplica). Desactiva «Ver cambios» para navegar.';
  document.body.appendChild(tip);
  let tipT;
  header.addEventListener('click', e => {
    const li = e.target.closest('li.nochg');
    if (!li || !document.body.classList.contains('show-changes')) return;
    e.preventDefault(); e.stopPropagation();
    tip.classList.add('on'); clearTimeout(tipT); tipT = setTimeout(() => tip.classList.remove('on'), 2200);
  }, true);


  /* ---------- Ficha flotante de «Ver cambios» (Antes / Por qué / Qué falta) ---------- */
  const card = document.createElement('div'); card.className = 'rv-card'; document.body.appendChild(card);
  const esc = s => (s || '').replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
  let curEl = null;
  const fill = el => {
    const k = el.dataset.k, a = el.dataset.antes, p = el.dataset.porque, f = el.dataset.falta;
    const col = k === 'new' ? '#16a34a' : k === 'val' ? '#dc2626' : '#E8AB00';
    card.style.setProperty('--mk', col);
    let h = '';
    if (k === 'new') h += `<p class="antes"><b>Antes:</b> No existía en la web actual.</p>`;
    else if (a || k === 'val') h += `<p class="antes"><b>Antes:</b> <span>«${esc(a || el.textContent.trim())}»</span></p>`;
    if (p) h += `<p><b>Por qué:</b> ${esc(p)}</p>`;
    if (f) h += `<p class="falta"><b>Qué falta:</b> ${esc(f)}</p>`;
    card.innerHTML = h;
  };
  const place = (el, x, y) => {
    const r = el.getBoundingClientRect(), cw = card.offsetWidth, ch = card.offsetHeight, W = innerWidth, H = innerHeight, m = 10;
    let left = Math.min(Math.max(x + 16, m), W - cw - m), top;
    if (r.height < 180) {
      top = r.top - ch - 10;                 // encima del elemento, sin taparlo
      if (top < m) top = r.bottom + 10;      // o debajo si no cabe
      if (top + ch > H - m) {                // o al lado si tampoco
        top = Math.min(Math.max(y - ch / 2, m), H - ch - m);
        left = (r.right + 14 + cw < W) ? r.right + 14 : Math.max(m, r.left - cw - 14);
      }
    } else {                                 // bloques grandes: junto al cursor
      top = y + 18; if (top + ch > H - m) top = y - ch - 18;
      top = Math.max(m, top);
    }
    card.style.left = left + 'px'; card.style.top = top + 'px';
  };
  document.addEventListener('mousemove', e => {
    if (!document.body.classList.contains('show-changes')) { card.classList.remove('on'); curEl = null; return; }
    const el = e.target.closest('[data-k]');
    if (!el) { card.classList.remove('on'); curEl = null; return; }
    if (el !== curEl) { curEl = el; fill(el); }
    card.classList.add('on'); place(el, e.clientX, e.clientY);
  });
  addEventListener('scroll', () => { card.classList.remove('on'); curEl = null; }, { passive: true });

  /* ---------- Carrusel del hero: flechas, autoplay, pausa al pasar el ratón y en «Ver cambios» ---------- */
  document.querySelectorAll('.hero-slider').forEach(sl => {
    const track = sl.querySelector('.track'), n = track.children.length;
    const delay = +sl.dataset.autoplay || 3000;
    let i = 0, timer = null, hover = false;
    const go = k => { i = (k + n) % n; track.style.transform = `translateX(${-100 * i}%)`; };
    const paused = () => hover || document.body.classList.contains('show-changes');
    const tick = () => { if (!paused()) go(i + 1); };
    const start = () => { clearInterval(timer); timer = setInterval(tick, delay); };
    sl.querySelector('.prev').addEventListener('click', () => { go(i - 1); start(); });
    sl.querySelector('.next').addEventListener('click', () => { go(i + 1); start(); });
    sl.addEventListener('mouseenter', () => hover = true);
    sl.addEventListener('mouseleave', () => hover = false);
    let x0 = null;
    sl.addEventListener('touchstart', e => x0 = e.touches[0].clientX, { passive: true });
    sl.addEventListener('touchend', e => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) { go(i + (dx < 0 ? 1 : -1)); start(); } x0 = null; });
    start();
  });
})();
