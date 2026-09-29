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

  /* El buscador publico resuelve gamas, no productos: las referencias y los precios
     viven en el area de clientes. Cada entrada: [texto visible, pagina, sinonimos]. */
  const GAMAS = [
    ['Compresores de tornillo', 'compresores-de-tornillo.html', 'tornillo screw rotativo'],
    ['Compresores de tornillo con variador', 'compresores-de-tornillo-con-variador.html', 'variador vsd frecuencia jsc v'],
    ['Compresores de tornillo con variador directo', 'compresores-de-tornillo-con-variador-directo.html', 'directa vd jsc vd transmision directa'],
    ['Compresores de tornillo con variador y secador', 'compresores-de-tornillo-con-variador-y-secador.html', 'vtd tanque secador calderin jsc vtd'],
    ['Compresores de pist\u00f3n', 'compresores-de-piston.html', 'piston coaxial correa calderin atlanta jp'],
    ['Tratamiento de aire comprimido', 'tratamientos-aire-comprimido.html', 'secador filtro purga separador iso 8573'],
    ['Secadores frigor\u00edficos', 'tratamientos-aire-comprimido-secador-frigorifico.html', 'secador jkep punto de rocio'],
    ['Filtros de aire', 'tratamientos-aire-comprimido-filtros-de-aire.html', 'filtro linea cartucho'],
    ['Purgas de condensado', 'tratamientos-aire-comprimido-purgas-de-condensado.html', 'purga condensado'],
    ['Separadores de aire', 'tratamientos-aire-comprimido-separadores-de-aire.html', 'separador ciclonico aceite agua'],
    ['Redes de aire comprimido', 'instalaciones-aire-comprimido.html', 'red instalacion tuberia aluminio racor'],
    ['Tuber\u00eda de aluminio', 'instalaciones-aire-comprimido-tuberias-de-aluminio.html', 'tuberia aluminio'],
    ['Enrolladores autom\u00e1ticos', 'instalaciones-aire-comprimido-enrolladores-automaticos.html', 'enrollador manguera'],
    ['Enchufes r\u00e1pidos', 'instalaciones-aire-comprimido-enchufes-rapidos.html', 'enchufe rapido racor'],
    ['Calderines y accesorios', 'instalaciones-aire-comprimido-calderines-y-accesorios.html', 'calderin deposito'],
    ['Servicio t\u00e9cnico y posventa', 'posventa.html', 'sat averia mantenimiento cst garantia']
  ];

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
    { t: 'Área de clientes', h: 'acceso-clientes.html', k: 'acceso', m: true }
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
      <div class="search" data-k="new" data-porque="El buscador no hacía nada. Ahora lleva a la gama que corresponde, no a la ficha de producto: los productos con referencia y precio viven en el área de clientes, así que el buscador público resuelve «necesito un compresor de tornillo con variador» y deja la selección del modelo para el comercial o para el cliente registrado.">
        ${svg('search')}<input type="search" list="jender-gamas" placeholder="Buscar gama de producto …" aria-label="Buscar gama de producto">
        <datalist id="jender-gamas">${GAMAS.map(g => `<option value="${g[0]}">`).join('')}</datalist>
      </div>
      <button class="burger" aria-label="Menú">${svg('menu')}</button>
    </div>`;
  document.body.prepend(header);

  /* Enlaces "#" (páginas que no forman parte de la maqueta) no saltan arriba */
  header.querySelectorAll('a[href="#"]').forEach(a => a.addEventListener('click', e => e.preventDefault()));
  /* buscador: al elegir o pulsar Enter, va a la pagina de la gama */
  const sIn = header.querySelector('.search input');
  if (sIn) {
    const irA = () => {
      const v = sIn.value.trim().toLowerCase();
      if (!v) return;
      const m = GAMAS.find(g => g[0].toLowerCase() === v)
             || GAMAS.find(g => g[0].toLowerCase().includes(v))
             || GAMAS.find(g => g[2].split(' ').some(w => w && v.includes(w)));
      if (m) location.href = fix(m[1]);
    };
    sIn.addEventListener('change', irA);
    sIn.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); irA(); } });
  }

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


  /* ---------- Ficha de gama (estructura de las paginas de gama de CompAir) ----------
     Indice lateral fijo + secciones plegables: Beneficios, Diseno, Especificaciones y Descargas.
     La tabla declara las condiciones de medicion (ISO 1217 / ISO 2151) como hace CompAir.
     Para anadir una gama basta con una entrada mas en este objeto. */
  const GAMA = {
    "JSC V": {
      "cols": [
        "Modelo",
        "Potencia<br><span class=\"u\">kW / HP</span>",
        "Caudal a 7,5 bar ¹ ²<br><span class=\"u\">m³/min</span>",
        "Caudal a 10 bar ¹ ²<br><span class=\"u\">m³/min</span>",
        "Caudal a 13 bar ¹ ²<br><span class=\"u\">m³/min</span>",
        "Nivel sonoro<br><span class=\"u\">dB(A)</span>",
        "Peso<br><span class=\"u\">kg</span>",
        "Conexión",
        "Dimensiones An × La × Al<br><span class=\"u\">mm</span>"
      ],
      "rows": [
        [
          "JSC3 V",
          "3 / 4",
          "0,42",
          "0,35",
          "0,29",
          "68",
          "172",
          "1/2″",
          "610 × 1110 × 1000"
        ],
        [
          "JSC4 V",
          "4 / 5",
          "0,57",
          "0,48",
          "0,35",
          "69",
          "202",
          "1/2″",
          "610 × 1110 × 1000"
        ],
        [
          "JSC5 V",
          "5,5 / 7",
          "0,90",
          "0,70",
          "0,62",
          "69",
          "212",
          "3/4″",
          "750 × 1170 × 1120"
        ],
        [
          "JSC7 V",
          "7,5 / 10",
          "1,23",
          "0,97",
          "0,82",
          "69",
          "248",
          "3/4″",
          "750 × 1170 × 1120"
        ],
        [
          "JSC11 V",
          "11 / 15",
          "1,87",
          "1,62",
          "1,34",
          "69",
          "308",
          "3/4″",
          "750 × 1170 × 1120"
        ],
        [
          "JSC15 V",
          "15 / 20",
          "2,43",
          "2,11",
          "1,80",
          "70",
          "368",
          "3/4″",
          "750 × 1170 × 1120"
        ],
        [
          "JSC18 V",
          "18,5 / 25",
          "3,13",
          "2,73",
          "2,32",
          "70",
          "470",
          "3/4″",
          "900 × 1350 × 1255"
        ],
        [
          "JSC 22V",
          "22 / 30",
          "3,67",
          "3,22",
          "2,77",
          "70",
          "530",
          "3/4″",
          "900 × 1350 × 1255"
        ],
        [
          "JSC30 V",
          "30 / 40",
          "4,97",
          "4,29",
          "3,73",
          "70",
          "610",
          "3/4″",
          "900 × 1350 × 1255"
        ],
        [
          "JSC37 V",
          "37 / 50",
          "6,21",
          "5,40",
          "4,61",
          "70",
          "660–740",
          "1¼″",
          "1020 × 1390 / 1700 × 1610"
        ],
        [
          "JSC45 V",
          "45 / 60",
          "7,46",
          "6,43",
          "5,55",
          "72",
          "840–920",
          "1¼″",
          "1020 × 1390 / 1700 × 1610"
        ]
      ],
      "eyebrow": "Serie JSC V",
      "title": "Compresores de tornillo con variador 3–45 kW",
      "claim": "Variador de frecuencia de serie en toda la gama, para instalaciones con consumo de aire variable.",
      "lead": "La serie de referencia para taller industrial y planta media. El variador adapta las revoluciones del motor a la demanda real en lugar de arrancar y parar, que es donde se pierde la energía y donde sufre el equipo.",
      "fig": [
        [
          "3–45 kW",
          "Potencia",
          "4–60 HP"
        ],
        [
          "0,29–7,46 m³/min",
          "Caudal según presión",
          ""
        ],
        [
          "7,5 / 10 / 13",
          "Presión de trabajo",
          "bar"
        ],
        [
          "11 modelos",
          "en la serie",
          ""
        ]
      ],
      "ben": [
        [
          "Variador de frecuencia de serie",
          "No es una opción de catálogo: toda la serie lo lleva. El compresor sigue la demanda de la red en tiempo real y evita el consumo en vacío de los arranques y paradas."
        ],
        [
          "Presión de red estable",
          "Al ajustar la velocidad en lugar de conmutar entre carga y vacío, la presión no oscila. Las herramientas y los procesos trabajan siempre en el mismo punto."
        ],
        [
          "Arranque suave",
          "Sin picos de corriente en cada arranque: menos esfuerzo sobre el motor y sobre tu instalación eléctrica, y sin penalización por potencia contratada."
        ],
        [
          "Mantenimiento accesible",
          "Separador aire-aceite, refrigerador y filtros se alcanzan sin desmontar el carenado. Cada hora de intervención es una hora menos de parada."
        ],
        [
          "Controlador con aviso de servicio",
          "Lectura de horas, presión y temperatura, con preaviso de mantenimiento antes de que venza el intervalo."
        ]
      ],
      "dis": [
        [
          "Elemento compresor",
          [
            "Tornillo con inyección de aceite",
            "Transmisión por correa, tensado accesible",
            "Motor IE3"
          ]
        ],
        [
          "Configuración",
          [
            "Montaje sobre bastidor",
            "Preparado para secador y calderín independientes",
            "Carenado insonorizado"
          ]
        ],
        [
          "Opciones",
          [
            "Presión 7,5 / 10 / 13 bar",
            "Secador frigorífico independiente",
            "Calderín de 300 o 500 L",
            "Filtración de línea y purga automática"
          ]
        ]
      ],
      "n1": "Rendimiento medido de acuerdo con la norma <strong>ISO 1217:2009, Anexo C</strong>, con referencia a 1 bar de presión de entrada y 20 °C de temperatura ambiente.",
      "n2": "Según la presión de trabajo SHD: el rendimiento de 7,5 bar se midió a 7 bar, el de 10 bar a 9,5 bar y el de 13 bar a 12,5 bar.",
      "pend": "",
      "n3": "Disponibilidad de otras potencias y presiones bajo consulta. Todos los modelos tienen kit de mantenimiento.",
      "aviso": ""
    },
    "JSC VD": {
      "cols": [
        "Modelo",
        "Potencia<br><span class=\"u\">kW / HP</span>",
        "Caudal a 7,5 bar ¹ ²<br><span class=\"u\">m³/min</span>",
        "Caudal a 10 bar ¹ ²<br><span class=\"u\">m³/min</span>",
        "Caudal a 13 bar ¹ ²<br><span class=\"u\">m³/min</span>",
        "Nivel sonoro<br><span class=\"u\">dB(A)</span>",
        "Peso<br><span class=\"u\">kg</span>",
        "Conexión",
        "Dimensiones An × La × Al<br><span class=\"u\">mm</span>"
      ],
      "rows": [
        [
          "JSC 18VD",
          "18,5 / 25",
          "3,27",
          "2,85",
          "2,43",
          "71",
          "470",
          "3/4″",
          "900 × 1600 × 1410"
        ],
        [
          "JSC 22VD",
          "22 / 30",
          "3,82",
          "3,36",
          "2,89",
          "71",
          "500",
          "3/4″",
          "900 × 1600 × 1410"
        ],
        [
          "JSC 30VD",
          "30 / 40",
          "5,04",
          "4,47",
          "3,89",
          "71",
          "700",
          "1″",
          "900 × 1600 × 1410"
        ],
        [
          "JSC 37VD",
          "37 / 50",
          "6,42",
          "5,58",
          "4,77",
          "71",
          "840",
          "1¼″",
          "1150 × 1500 × 1610"
        ],
        [
          "JSC 45VD",
          "45 / 60",
          "7,62",
          "6,70",
          "5,79",
          "72",
          "920",
          "1½″",
          "1150 × 1500 × 1610"
        ],
        [
          "JSC 55VD",
          "55 / 75",
          "10,18",
          "8,86",
          "7,53",
          "74",
          "1450",
          "1½″",
          "1450 × 1600 × 1750"
        ],
        [
          "JSC 75VD",
          "75 / 100",
          "13,29",
          "11,74",
          "10,17",
          "75",
          "2120",
          "2″",
          "1650 × 2000 × 1900"
        ]
      ],
      "eyebrow": "Serie JSC VD",
      "title": "Compresores de tornillo con variador y transmisión directa 18,5–315 kW",
      "claim": "Acoplamiento directo motor–elemento compresor: sin correas, sin pérdidas por fricción y sin su mantenimiento.",
      "lead": "La serie para producción continua de alto caudal. Al eliminar la transmisión por correa desaparecen las pérdidas mecánicas, el tensado periódico y la sustitución de correas de la lista de mantenimiento.",
      "fig": [
        [
          "18,5–75 kW",
          "Potencia en catálogo",
          "25–100 HP"
        ],
        [
          "2,43–13,29 m³/min",
          "Caudal según presión",
          ""
        ],
        [
          "7,5 / 10 / 13",
          "Presión de trabajo",
          "bar"
        ],
        [
          "7 modelos",
          "en la serie",
          ""
        ]
      ],
      "ben": [
        [
          "Transmisión directa sin correas",
          "El motor acciona el elemento compresor sin elementos intermedios: menos pérdidas por fricción y una tarea menos en cada revisión."
        ],
        [
          "Pensado para 24/7",
          "Dimensionado para trabajo continuo, con refrigeración y control preparados para no bajar el ritmo en turnos encadenados."
        ],
        [
          "Funcionamiento en cascada",
          "Varios equipos coordinados repartiendo carga: el caudal se cubre con la combinación más eficiente y uno puede entrar en mantenimiento sin parar la línea."
        ],
        [
          "Variador de frecuencia de serie",
          "La velocidad sigue la demanda de la red, que es donde está el ahorro real en una instalación con consumo variable."
        ],
        [
          "Recuperación de calor opcional",
          "El calor de la compresión se aprovecha para agua caliente o proceso en lugar de disiparse."
        ]
      ],
      "dis": [
        [
          "Elemento compresor",
          [
            "Tornillo con inyección de aceite",
            "Acoplamiento directo, sin correas",
            "Motor IE3"
          ]
        ],
        [
          "Configuración",
          [
            "Montaje sobre bastidor",
            "Preparado para sala de compresores",
            "Carenado insonorizado"
          ]
        ],
        [
          "Opciones",
          [
            "Presión 7,5 / 10 / 13 bar",
            "Secuenciador para varios compresores",
            "Recuperación de calor",
            "Secador y filtración dimensionados para la sala"
          ]
        ]
      ],
      "n1": "Rendimiento medido de acuerdo con la norma <strong>ISO 1217:2009, Anexo C</strong>, con referencia a 1 bar de presión de entrada y 20 °C de temperatura ambiente.",
      "n2": "Según la presión de trabajo SHD: el rendimiento de 7,5 bar se midió a 7 bar, el de 10 bar a 9,5 bar y el de 13 bar a 12,5 bar.",
      "pend": "",
      "n3": "Disponibilidad de otras potencias y presiones bajo consulta. Todos los modelos tienen kit de mantenimiento.",
      "aviso": "La serie se declara hasta 315 kW; el catálogo general 2026 tabula los modelos hasta JSC 75VD. Potencias superiores, bajo consulta."
    },
    "JSC VTD": {
      "cols": [
        "Modelo",
        "Potencia<br><span class=\"u\">kW / HP</span>",
        "Caudal a 7,5 bar ¹ ²<br><span class=\"u\">m³/min</span>",
        "Caudal a 10 bar ¹ ²<br><span class=\"u\">m³/min</span>",
        "Caudal a 13 bar ¹ ²<br><span class=\"u\">m³/min</span>",
        "Calderín<br><span class=\"u\">L</span>",
        "Secador",
        "Nivel sonoro<br><span class=\"u\">dB(A)</span>",
        "Peso<br><span class=\"u\">kg</span>",
        "Dimensiones An × La × Al<br><span class=\"u\">mm</span>"
      ],
      "rows": [
        [
          "JSC 3VTD",
          "3 / 4",
          "0,42",
          "0,35",
          "0,29",
          "300",
          "JKE138",
          "68",
          "302",
          "610 × 1690 × 1550"
        ],
        [
          "JSC 4VTD",
          "4 / 5",
          "0,57",
          "0,48",
          "0,35",
          "300",
          "JKE138",
          "69",
          "322",
          "610 × 1690 × 1550"
        ],
        [
          "JSC 5VTD",
          "5 / 7",
          "0,90",
          "0,70",
          "0,62",
          "500",
          "JKE153",
          "69",
          "448",
          "750 × 1850 × 1770"
        ],
        [
          "JSC 7VTD",
          "8 / 10",
          "1,23",
          "0,97",
          "0,82",
          "500",
          "JKE1100",
          "69",
          "493",
          "750 × 1850 × 1770"
        ],
        [
          "JSC 11VTD",
          "11 / 15",
          "1,87",
          "1,62",
          "1,34",
          "500",
          "JKE1155",
          "69",
          "528",
          "750 × 1850 × 1770"
        ],
        [
          "JSC 15VTD",
          "15 / 20",
          "2,43",
          "2,11",
          "1,80",
          "500",
          "JKE1155",
          "70",
          "603",
          "750 × 1850 × 1770"
        ]
      ],
      "eyebrow": "Serie JSC VTD",
      "title": "Compresores de tornillo con variador y secador 3–15 kW",
      "claim": "Compresor, calderín y secador en un solo bastidor: la sala de aire resuelta en el espacio de una máquina.",
      "lead": "La serie para quien no tiene sala de compresores. Llega montado y se conecta en un solo punto: acometida eléctrica y salida de aire. El secador va dentro, así que el aire sale ya tratado.",
      "fig": [
        [
          "3–15 kW",
          "Potencia",
          "4–20 HP"
        ],
        [
          "0,29–2,43 m³/min",
          "Caudal según presión",
          ""
        ],
        [
          "300 / 500 L",
          "Calderín integrado",
          ""
        ],
        [
          "3 °C",
          "Punto de rocío del secador",
          ""
        ]
      ],
      "ben": [
        [
          "Todo en un conjunto",
          "Compresor, calderín y secador frigorífico montados y probados de fábrica. Sin proyecto de sala ni montaje de tubería entre elementos."
        ],
        [
          "Instalación en un punto",
          "Conexión eléctrica y salida de aire. Se pone en marcha el mismo día que llega."
        ],
        [
          "Aire ya tratado",
          "El secador integrado baja el punto de rocío antes de que el aire entre en la red: ni condensados en la tubería ni agua en las herramientas."
        ],
        [
          "Variador de frecuencia de serie",
          "El equipo sigue la demanda real en lugar de arrancar y parar, con la presión estable que agradece la herramienta neumática."
        ],
        [
          "Ocupa lo mínimo",
          "La superficie de una máquina para lo que normalmente son tres equipos y la tubería que los une."
        ]
      ],
      "dis": [
        [
          "Elemento compresor",
          [
            "Tornillo con inyección de aceite",
            "Transmisión por correa Poly-V",
            "Motor IE3"
          ]
        ],
        [
          "Conjunto",
          [
            "Calderín de 300 o 500 L",
            "Secador frigorífico integrado",
            "Purga automática de condensados"
          ]
        ],
        [
          "Opciones",
          [
            "Presión 7,5 / 10 / 13 bar",
            "Filtración de línea adicional",
            "Separador aceite-agua para el condensado"
          ]
        ]
      ],
      "n1": "Rendimiento medido de acuerdo con la norma <strong>ISO 1217:2009, Anexo C</strong>, con referencia a 1 bar de presión de entrada y 20 °C de temperatura ambiente.",
      "n2": "Según la presión de trabajo SHD: el rendimiento de 7,5 bar se midió a 7 bar, el de 10 bar a 9,5 bar y el de 13 bar a 12,5 bar.",
      "pend": "",
      "n3": "Disponibilidad de otras potencias y presiones bajo consulta. Todos los modelos tienen kit de mantenimiento.",
      "aviso": ""
    },
    "PISTON": {
      "eyebrow": "Compresores de pistón",
      "title": "Compresores de pistón hasta 10 CV",
      "claim": "Diez configuraciones, de la herramienta suelta a la línea con varias tomas simultáneas.",
      "lead": "Se elige por tres datos: el caudal que vas a consumir a la vez, la presión que exige tu herramienta y el tamaño de calderín que te permite trabajar sin que el motor arranque continuamente.",
      "fig": [
        [
          "2–10 HP",
          "Potencia",
          "1,5–7,5 kW"
        ],
        [
          "24–500 L",
          "Depósito",
          ""
        ],
        [
          "8–11 bar",
          "Presión de trabajo",
          ""
        ],
        [
          "12 modelos",
          "en la gama",
          ""
        ]
      ],
      "cols": [
        "Modelo",
        "Potencia<br><span class=\"u\">HP / kW</span>",
        "Depósito<br><span class=\"u\">L</span>",
        "Presión<br><span class=\"u\">bar</span>",
        "Aire aspirado<br><span class=\"u\">l/min</span>",
        "Alimentación<br><span class=\"u\">V / fase / Hz</span>",
        "Nivel sonoro<br><span class=\"u\">dB(A)</span>",
        "Peso<br><span class=\"u\">kg</span>",
        "Dimensiones<br><span class=\"u\">mm</span>"
      ],
      "rows": [
        [
          "@Coaxial · gama bricolaje"
        ],
        [
          "JP Atlanta 25",
          "2 / 1,5",
          "24",
          "8",
          "220",
          "230 / 1 / 50",
          "—",
          "25",
          "570 × 255 × 590"
        ],
        [
          "JP Atlanta 50",
          "2 / 1,5",
          "50",
          "8",
          "220",
          "230 / 1 / 50",
          "—",
          "35",
          "790 × 310 × 670"
        ],
        [
          "@Transmisión por correa · una etapa"
        ],
        [
          "JP 248 / 100 M",
          "2 / 1,5",
          "100",
          "10",
          "255",
          "230 / 1 / 50",
          "73",
          "56",
          "1010 × 415 × 900"
        ],
        [
          "JP 338 / 200 M",
          "3 / 2,2",
          "200",
          "10",
          "320",
          "230 / 1 / 50",
          "73",
          "91",
          "1500 × 470 × 1110"
        ],
        [
          "JP 338 / 200 T",
          "3 / 2,2",
          "200",
          "10",
          "320",
          "400 / 3 / 50",
          "75",
          "91",
          "1500 × 470 × 1110"
        ],
        [
          "@Transmisión por correa · dos etapas"
        ],
        [
          "JP 480 / 300",
          "4 / 3",
          "270",
          "11",
          "553",
          "400 / 3 / 50",
          "73",
          "120",
          "1532 × 456 × 1005"
        ],
        [
          "JP 550 / 300",
          "5,5 / 4",
          "270",
          "11",
          "595",
          "400 / 3 / 50",
          "75",
          "124",
          "1532 × 456 × 1005"
        ],
        [
          "JP 850 / 500 T",
          "7,5 / 5,5",
          "500",
          "11",
          "827",
          "400 / 3 / 50",
          "77",
          "196",
          "2030 × 670 × 1400"
        ],
        [
          "JP 981 / 500 T",
          "10 / 7,5",
          "500",
          "11",
          "1210",
          "400 / 3 / 50",
          "82",
          "279",
          "2030 × 670 × 1400"
        ],
        [
          "JP 981 / 500 TE/T<br><span class=\"muted\">arrancador estrella-triángulo incluido</span>",
          "10 / 7,5",
          "500",
          "11",
          "1210",
          "400 / 3 / 50",
          "82",
          "279",
          "2030 × 670 × 1400"
        ]
      ],
      "ben": [
        [
          "Dimensionado por consumo real",
          "Suma el consumo en l/min de las herramientas que vayan a trabajar a la vez y añade un 20 % de margen: esa cifra marca la potencia mínima."
        ],
        [
          "El calderín estabiliza la red",
          "Un depósito mayor reduce los arranques del motor y mantiene la presión: alarga la vida del equipo y mejora el trabajo en el punto de uso."
        ],
        [
          "Dos etapas cuando hace falta presión",
          "Para arenado o pintura industrial que exigen 10–11 bar, la versión de dos etapas comprime en dos fases con menos esfuerzo térmico."
        ],
        [
          "Monofásico o trifásico",
          "Hasta 3 CV hay versión a 230 V. A partir de 4 CV, trifásico a 400 V: más eficiente y con menos intensidad de línea."
        ],
        [
          "Calderín certificado",
          "Equipos a presión con su certificado y su válvula de seguridad tarada, como exige la normativa."
        ]
      ],
      "dis": [
        [
          "Grupo de compresión",
          [
            "Cabezal de pistón con refrigeración por aire",
            "Versión de una o dos etapas",
            "Filtro de aspiración accesible"
          ]
        ],
        [
          "Calderín y seguridad",
          [
            "25 a 500 L según configuración",
            "Presostato y válvula de seguridad tarada",
            "Manómetro de calderín y de línea"
          ]
        ],
        [
          "Opciones",
          [
            "Secador frigorífico y filtración de línea",
            "Purga automática de condensados",
            "Kit de ruedas y asas para equipos móviles"
          ]
        ]
      ],
      "n1": "",
      "n2": "",
      "pend": "",
      "n3": "Aire aspirado según catálogo. Todos los modelos tienen kit de mantenimiento.",
      "aviso": ""
    },
    "TRATAMIENTO": {
      "eyebrow": "Tratamiento de aire comprimido",
      "title": "Tratamiento de aire comprimido",
      "claim": "El aire que sale del compresor lleva agua, partículas y aceite. El tratamiento decide si tu proceso los recibe o no.",
      "lead": "Sin tratamiento, esas impurezas llegan a las herramientas, corroen la tubería y acaban en el producto final. La combinación correcta depende del caudal, de la clase de calidad que exija tu proceso según ISO 8573-1 y de las condiciones de la planta.",
      "fig": [
        [
          "ISO 8573-1",
          "Norma de calidad de aire",
          ""
        ],
        [
          "4 etapas",
          "Cadena de tratamiento",
          ""
        ],
        [
          "Punto de rocío",
          "Lo que fija el secador",
          ""
        ],
        [
          "1.500–28.000",
          "Caudal de separadores",
          "l/min"
        ]
      ],
      "cols": [
        "Equipo",
        "Qué retira",
        "Parámetro que lo dimensiona",
        "Posición en la línea"
      ],
      "rows": [
        [
          "Separador ciclónico",
          "Agua libre que arrastra el aire al salir del compresor",
          "Caudal en l/min",
          "Inmediatamente después del compresor"
        ],
        [
          "Secador frigorífico",
          "Humedad en suspensión, bajando el punto de rocío",
          "Caudal y punto de rocío objetivo",
          "Antes de la filtración fina"
        ],
        [
          "Filtros de línea",
          "Partículas sólidas y aerosoles de aceite según el grado",
          "Grado de filtración y caudal",
          "Después del secador, antes del consumo"
        ],
        [
          "Purga de condensados",
          "El agua acumulada, sin perder aire comprimido",
          "Volumen de condensado",
          "Calderín, secador y puntos bajos de la red"
        ]
      ],
      "ben": [
        [
          "Protege la red antes que al equipo",
          "La corrosión de la tubería no se ve hasta que hay fugas por toda la instalación. El tratamiento es lo que evita llegar a ese punto."
        ],
        [
          "Calidad de aire según norma",
          "ISO 8573-1 clasifica partículas, agua y aceite. Trabajar con clases y no con adjetivos es lo que permite comprometer una calidad de aire."
        ],
        [
          "Cada elemento hace una cosa",
          "Separador, secador, filtro y purga no son intercambiables: se colocan en orden y cada uno resuelve un problema distinto."
        ],
        [
          "Purga sin pérdida de aire",
          "Las purgas electrónicas evacuan el condensado sin soltar aire comprimido, que es dinero que se escapa en cada ciclo."
        ],
        [
          "El condensado es un residuo",
          "Lleva aceite: el separador aceite-agua permite verterlo cumpliendo la normativa en lugar de tirarlo a la red de saneamiento."
        ]
      ],
      "dis": [
        [
          "Separación",
          [
            "Separadores ciclónicos de 1.500 a 28.000 l/min",
            "Cartuchos de repuesto de toda la gama"
          ]
        ],
        [
          "Secado y filtración",
          [
            "Secadores frigoríficos dimensionados por caudal",
            "Filtros de línea con distintos grados de retención",
            "Manómetro diferencial de saturación"
          ]
        ],
        [
          "Condensados",
          [
            "Purgas automáticas electrónicas",
            "Separadores aceite-agua para el vertido",
            "By-pass para mantenimiento sin parar la línea"
          ]
        ]
      ],
      "n1": "",
      "n2": "",
      "pend": "",
      "n3": "",
      "aviso": ""
    },
    "SECADOR": {
      "eyebrow": "Secadores frigoríficos · Serie JKEP",
      "title": "Secadores frigoríficos JKEP",
      "claim": "De 23 a 3.330 m³/h, con punto de rocío estable y purga de cero pérdidas.",
      "lead": "El aire comprimido sale del compresor cargado de vapor de agua. Al enfriarse dentro de la instalación condensa, y ese agua corroe la tubería y llega a las herramientas. El secador fija el punto de rocío antes de que eso ocurra. Se dimensiona por caudal, temperatura de entrada y temperatura ambiente.",
      "fig": [
        [
          "23–3.330 m³/h",
          "Caudal",
          ""
        ],
        [
          "19 modelos",
          "en la serie",
          ""
        ],
        [
          "Digi-Pro",
          "Control de punto de rocío",
          ""
        ],
        [
          "Cero pérdidas",
          "Purga capacitiva",
          ""
        ]
      ],
      "cols": [
        "Modelo",
        "Caudal<br><span class=\"u\">m³/h</span>",
        "Tensión",
        "Conexión",
        "Control",
        "Dimensiones La × An × Al<br><span class=\"u\">mm</span>"
      ],
      "rows": [
        [
          "JKEP 123",
          "23",
          "230 V · 1~",
          "1/2″",
          "Digi-Pro",
          "372 × 369 × 792"
        ],
        [
          "JKEP 138",
          "38",
          "230 V · 1~",
          "1/2″",
          "Digi-Pro",
          "372 × 369 × 792"
        ],
        [
          "JKEP 153",
          "53",
          "230 V · 1~",
          "1/2″",
          "Digi-Pro",
          "372 × 369 × 792"
        ],
        [
          "JKEP 170",
          "70",
          "230 V · 1~",
          "1/2″",
          "Digi-Pro",
          "372 × 369 × 792"
        ],
        [
          "JKEP 1100",
          "100",
          "230 V · 1~",
          "3/4″",
          "Digi-Pro",
          "454 × 473 × 932"
        ],
        [
          "JKEP 1155",
          "155",
          "230 V · 1~",
          "3/4″",
          "Digi-Pro",
          "454 × 473 × 932"
        ],
        [
          "JKEP 1190",
          "190",
          "230 V · 1~",
          "3/4″",
          "Digi-Pro",
          "454 × 473 × 932"
        ],
        [
          "JKEP 1210",
          "210",
          "230 V · 1~",
          "1½″",
          "Digi-Pro",
          "556 × 556 × 975"
        ],
        [
          "JKEP 1305",
          "305",
          "230 V · 1~",
          "1½″",
          "Digi-Pro",
          "556 × 556 × 975"
        ],
        [
          "JKEP 1375",
          "375",
          "230 V · 1~",
          "1½″",
          "Digi-Pro",
          "556 × 556 × 975"
        ],
        [
          "JKEP 1495",
          "495",
          "230 V · 1~",
          "2″",
          "Digi-Pro",
          "648 × 678 × 1277"
        ],
        [
          "JKEP 1623",
          "623",
          "230 V · 1~",
          "2″",
          "Digi-Pro",
          "648 × 678 × 1277"
        ],
        [
          "JKEP 1930",
          "930",
          "230 V · 1~",
          "2″",
          "Digi-Pro",
          "947 × 727 × 1500"
        ],
        [
          "JKEP 11200",
          "1.200",
          "230 V · 1~",
          "2″",
          "Digi-Pro",
          "947 × 727 × 1500"
        ],
        [
          "JKEP 11388",
          "1.388",
          "400 V · 3~",
          "3″",
          "Digi-Pro",
          "948 × 798 × 1580"
        ],
        [
          "JKEP 11800",
          "1.800",
          "400 V · 3~",
          "3″",
          "Digi-Pro",
          "948 × 798 × 1580"
        ],
        [
          "JKEP 12500",
          "2.500",
          "400 V · 3~",
          "3″",
          "Digi-Pro",
          "1163 × 778 × 1842"
        ],
        [
          "JKEP 12775",
          "2.775",
          "400 V · 3~",
          "3″",
          "Digi-Pro",
          "1163 × 778 × 1842"
        ],
        [
          "JKEP 113330",
          "3.330",
          "400 V · 3~",
          "DN100 brida",
          "Digi-Pro",
          "1577 × 993 × 2026"
        ]
      ],
      "n1": "",
      "n2": "",
      "n3": "Todos los modelos llevan filtros integrados y kit de elementos de repuesto propio. Caudales referidos a las condiciones de ensayo del catálogo.",
      "pend": "",
      "aviso": "",
      "ben": [
        [
          "Punto de rocío estable",
          "El control Digi-Pro monitoriza el punto de rocío real y mantiene el secador trabajando en su punto, en lugar de arrancar y parar a ciegas."
        ],
        [
          "Purga de cero pérdidas",
          "La purga capacitiva evacua el condensado sin soltar aire comprimido. Cada ciclo de una purga temporizada mal ajustada es aire que pagas y tiras."
        ],
        [
          "Filtros integrados",
          "El separador de agua y la filtración van dentro del secador: menos tubería, menos uniones y menos puntos de fuga."
        ],
        [
          "Dimensionado por factores",
          "El caudal útil depende de la temperatura de entrada, la ambiente y la presión. Se aplican los factores de corrección del catálogo, no el caudal nominal a secas."
        ],
        [
          "Diseño compacto",
          "Pensado para caber en la sala de compresores existente, junto al equipo, sin rehacer la instalación."
        ]
      ],
      "dis": [
        [
          "Control",
          [
            "Unidad Digi-Pro con lectura de punto de rocío",
            "Avisos de servicio y mantenimiento",
            "ESD Control en los modelos que lo integran"
          ]
        ],
        [
          "Circuito",
          [
            "Intercambiador y separador integrados",
            "Purga capacitiva de cero pérdidas",
            "Filtros de serie según modelo"
          ]
        ],
        [
          "Instalación",
          [
            "Conexiones de 1/2″ a 3″ y brida DN100",
            "230 V monofásico hasta JKEP 11200",
            "400 V trifásico desde JKEP 11388"
          ]
        ]
      ]
    },
    "FILTRO": {
      "eyebrow": "Filtros de línea",
      "title": "Filtros de línea para aire comprimido",
      "claim": "De 1.500 a 28.000 l/min, en separación ciclónica y prefiltración de 1 micra.",
      "lead": "El aire sin tratar lleva partículas sólidas, humedad y aerosoles de aceite. Cada grado de filtración retira una cosa distinta y se colocan en orden: primero el separador, después el prefiltro, y el filtro fino o de carbón activo si el proceso lo exige.",
      "fig": [
        [
          "1.500–28.000 l/min",
          "Caudal",
          ""
        ],
        [
          "ISO 8573-1",
          "Clases de calidad",
          ""
        ],
        [
          "1 micra",
          "Prefiltro",
          "1 ppm de aceite"
        ],
        [
          "1/2″ a 2½″",
          "Conexión BSP",
          ""
        ]
      ],
      "cols": [
        "Referencia",
        "Conexión BSP",
        "Caudal<br><span class=\"u\">l/min</span>",
        "Dimensiones<br><span class=\"u\">mm</span>"
      ],
      "rows": [
        [
          "@Filtro separador de condensados · incluye cartucho y purga automática"
        ],
        [
          "JFC025",
          "1/2″",
          "2.500",
          "100 × 238 × 74"
        ],
        [
          "JFC037",
          "3/4″",
          "3.700",
          "100 × 238 × 74"
        ],
        [
          "JFC055",
          "1″",
          "5.500",
          "125 × 335 × 85"
        ],
        [
          "JFC140",
          "1½″",
          "14.000",
          "125 × 465 × 85"
        ],
        [
          "JFC200",
          "2″",
          "20.000",
          "155 × 610 × 100"
        ],
        [
          "JFC280",
          "2½″",
          "28.000",
          "180 × 670 × 115"
        ],
        [
          "@Prefiltro 1 micra · partículas sólidas y 1 ppm de aceite · incluye cartucho, manómetro y purga"
        ],
        [
          "JFP015",
          "1/2″",
          "1.500",
          "100 × 200 × 235"
        ],
        [
          "JFP025",
          "3/4″",
          "2.500",
          "100 × 240 × 275"
        ],
        [
          "JFP038",
          "1″",
          "3.800",
          "125 × 290 × 335"
        ],
        [
          "JFP085",
          "1½″",
          "8.500",
          "125 × 420 × 465"
        ],
        [
          "JFP150",
          "2″",
          "15.200",
          "155 × 550 × 610"
        ],
        [
          "JFP200",
          "2½″",
          "20.000",
          "180 × 610 × 670"
        ]
      ],
      "n1": "",
      "n2": "",
      "n3": "Cartuchos de repuesto disponibles para toda la gama (referencias terminadas en E y T). Clases de calidad de aire según ISO 8573-1:2010.",
      "pend": "",
      "aviso": "",
      "ben": [
        [
          "Cada filtro, una función",
          "El separador retira el agua libre; el prefiltro, las partículas y el aceite en aerosol. Montarlos al revés satura el fino en semanas."
        ],
        [
          "Purga automática incluida",
          "Los separadores vienen con cartucho y purga: no hay que añadir nada ni vaciarlos a mano."
        ],
        [
          "Manómetro diferencial",
          "El prefiltro lleva manómetro para ver la saturación del cartucho y cambiarlo cuando toca, no por calendario."
        ],
        [
          "Carcasas para uso industrial",
          "Anillo de sellado Vitón y conexión BSP gas, dimensionadas para trabajo continuo."
        ],
        [
          "Repuesto por referencia",
          "Cada carcasa tiene su cartucho identificado: se pide por referencia y no hay que medir nada."
        ]
      ],
      "dis": [
        [
          "Separación",
          [
            "Separación ciclónica y por colisión",
            "Drenaje optimizado",
            "Purga automática de serie"
          ]
        ],
        [
          "Filtración",
          [
            "Prefiltro de 1 micra",
            "Filtro fino de 0,01 micra",
            "Filtro de carbón activo"
          ]
        ],
        [
          "Construcción",
          [
            "Anillo de sellado Vitón (−20 °C a 250 °C)",
            "Conexión BSP gas",
            "Manómetro diferencial"
          ]
        ]
      ]
    },
    "CALDERIN": {
      "eyebrow": "Depósitos verticales",
      "title": "Calderines de aire comprimido",
      "claim": "De 270 a 900 litros, 11 bar, en acero al carbono y con documentación según la directiva 2014/29/UE.",
      "lead": "El calderín estabiliza la presión de red y reduce los arranques del compresor. Cuanto más varía tu consumo, más trabajo le quitas al equipo y más le alargas la vida.",
      "fig": [
        [
          "270–900 L",
          "Capacidad",
          ""
        ],
        [
          "11 bar",
          "Presión máxima",
          ""
        ],
        [
          "−10 a +120 °C",
          "Temperatura de trabajo",
          ""
        ],
        [
          "2014/29/UE",
          "Directiva",
          ""
        ]
      ],
      "cols": [
        "Código",
        "Capacidad<br><span class=\"u\">L</span>",
        "Presión máx.<br><span class=\"u\">bar</span>",
        "Diámetro<br><span class=\"u\">mm</span>",
        "Altura total<br><span class=\"u\">mm</span>",
        "Peso<br><span class=\"u\">kg</span>"
      ],
      "rows": [
        [
          "0410000009",
          "270",
          "11",
          "500",
          "1648",
          "67"
        ],
        [
          "0410000002",
          "500",
          "11",
          "600",
          "2050",
          "115"
        ],
        [
          "0410000005",
          "720",
          "11",
          "750",
          "2030",
          "178"
        ],
        [
          "0410000010",
          "900",
          "11",
          "800",
          "2140",
          "194"
        ]
      ],
      "n1": "",
      "n2": "",
      "n3": "Acero al carbono con pintura exterior azul RAL 5015. Se entregan con la documentación que exige la normativa vigente. Otras capacidades y materiales, bajo consulta.",
      "pend": "",
      "aviso": "",
      "ben": [
        [
          "Menos arranques del compresor",
          "El calderín absorbe los picos de consumo: el motor arranca menos veces y sufre menos."
        ],
        [
          "Presión de red estable",
          "Las herramientas trabajan siempre en el mismo punto, sin caídas cuando entran varios consumos a la vez."
        ],
        [
          "Documentación en regla",
          "Equipos a presión con marcado y documentación según la directiva 2014/29/UE, entregada con el depósito."
        ],
        [
          "Tomas para toda la línea",
          "Conexiones previstas para entrada, salida, manómetro, válvula de seguridad y purga."
        ],
        [
          "Acabado industrial",
          "Pintura exterior RAL 5015 de serie, lista para sala de compresores."
        ]
      ],
      "dis": [
        [
          "Material",
          [
            "Acero al carbono",
            "Pintura exterior RAL 5015",
            "Fluido: aire comprimido o nitrógeno (grupo 2)"
          ]
        ],
        [
          "Condiciones",
          [
            "Presión máxima 11 bar",
            "Temperatura de −10 a +120 °C",
            "Directiva 2014/29/UE"
          ]
        ],
        [
          "Accesorios",
          [
            "Kit de montaje para depósitos verticales",
            "Purga temporizada o capacitiva",
            "Manómetro y válvula de seguridad"
          ]
        ]
      ]
    },
    "ENCHUFE": {
      "eyebrow": "Enchufes rápidos multipresa",
      "title": "Enchufes rápidos multipresa y adaptadores",
      "claim": "Un único enchufe para cuatro tipos de adaptador: se acabó tener cuatro racores distintos en el taller.",
      "lead": "En una instalación con herramienta de varias procedencias conviven adaptadores de perfiles distintos. El enchufe multipresa los acepta todos, así que cualquier manguera encaja en cualquier toma.",
      "fig": [
        [
          "4 perfiles",
          "en un solo enchufe",
          ""
        ],
        [
          "1/4″ a 1/2″",
          "Rosca",
          ""
        ],
        [
          "Latón niquelado",
          "Cuerpo",
          ""
        ],
        [
          "Hembra y macho",
          "Versiones",
          ""
        ]
      ],
      "cols": [
        "Medida",
        "A<br><span class=\"u\">mm</span>",
        "C<br><span class=\"u\">mm</span>",
        "D<br><span class=\"u\">mm</span>",
        "CH<br><span class=\"u\">mm</span>"
      ],
      "rows": [
        [
          "@Enchufe rápido multipresa hembra"
        ],
        [
          "1/4",
          "11",
          "51",
          "24",
          "21"
        ],
        [
          "3/8",
          "11,5",
          "51",
          "24",
          "21"
        ],
        [
          "1/2",
          "14",
          "55",
          "24",
          "24"
        ],
        [
          "@Enchufe rápido multipresa macho"
        ],
        [
          "1/4",
          "8",
          "49",
          "24",
          "21"
        ],
        [
          "3/8",
          "9",
          "50",
          "24",
          "21"
        ],
        [
          "1/2",
          "10",
          "51",
          "24",
          "24"
        ],
        [
          "@Enchufe multipresa espiga"
        ],
        [
          "6",
          "—",
          "61",
          "24",
          "21"
        ],
        [
          "8",
          "—",
          "61",
          "24",
          "21"
        ],
        [
          "10",
          "—",
          "61",
          "24",
          "21"
        ],
        [
          "12",
          "—",
          "61",
          "24",
          "21"
        ],
        [
          "@Enchufe multipresa tubo"
        ],
        [
          "6/4",
          "—",
          "55",
          "24",
          "21"
        ],
        [
          "8/6",
          "—",
          "55",
          "24",
          "21"
        ],
        [
          "10/8",
          "—",
          "55",
          "24",
          "21"
        ],
        [
          "12/10",
          "—",
          "55",
          "24",
          "21"
        ]
      ],
      "n1": "",
      "n2": "",
      "n3": "Medidas según los croquis del catálogo. Disponibles también en versión tubo muelle y portagoma.",
      "pend": "",
      "aviso": "",
      "ben": [
        [
          "Un enchufe, cuatro adaptadores",
          "Acepta los perfiles más habituales del mercado: no hay que cambiar las tomas de la instalación para usar una herramienta nueva."
        ],
        [
          "Cuerpo en latón niquelado",
          "Resistente al desgaste del uso diario y a la corrosión del condensado."
        ],
        [
          "Desconexión con una mano",
          "Pensado para usarse con guante y sin soltar la herramienta."
        ],
        [
          "Versiones para cada montaje",
          "Rosca hembra y macho, espiga, tubo y tubo muelle, para resolver cualquier punto de la red."
        ],
        [
          "Medidas normalizadas",
          "Las cotas están publicadas: puedes comprobar que encaja antes de pedirlo."
        ]
      ],
      "dis": [
        [
          "Materiales",
          [
            "Cuerpo en latón niquelado",
            "Juntas para aire comprimido",
            "Muelle de acero inoxidable"
          ]
        ],
        [
          "Versiones",
          [
            "Hembra 1/4″, 3/8″ y 1/2″",
            "Macho 1/4″, 3/8″ y 1/2″",
            "Espiga de 6 a 12 mm"
          ]
        ],
        [
          "Compatibilidad",
          [
            "Cuatro perfiles de adaptador",
            "Tubo y tubo muelle",
            "Portagoma"
          ]
        ]
      ]
    },
    "RACOR": {
      "eyebrow": "Redes de aire comprimido",
      "title": "Tubería de aluminio y racorería",
      "claim": "Sistema modular de aluminio de Ø20 a Ø63: se monta, se modifica y se amplía sin soldar.",
      "lead": "Una red de aluminio no se oxida por dentro, así que no arrastra óxido a las herramientas ni pierde sección con los años. Y al ser desmontable, ampliar una línea o mover una toma es cuestión de minutos, no de un soldador.",
      "fig": [
        [
          "Ø20 a Ø63",
          "Diámetros",
          "mm"
        ],
        [
          "Aluminio",
          "Material",
          "sin corrosión interna"
        ],
        [
          "Desmontable",
          "Montaje",
          "sin soldadura"
        ],
        [
          "Modular",
          "Sistema",
          "ampliable"
        ]
      ],
      "cols": [
        "Código",
        "Ø<br><span class=\"u\">mm</span>",
        "A<br><span class=\"u\">mm</span>",
        "B<br><span class=\"u\">mm</span>",
        "C<br><span class=\"u\">mm</span>"
      ],
      "rows": [
        [
          "@Manguito de unión reducido"
        ],
        [
          "0210000092",
          "25×20",
          "52",
          "91",
          "44"
        ],
        [
          "0210000035",
          "32×25",
          "62",
          "103,5",
          "52"
        ],
        [
          "0210000039",
          "40×32",
          "72",
          "121",
          "62"
        ],
        [
          "0210000232",
          "50×40",
          "86,5",
          "145,5",
          "72"
        ],
        [
          "0210000024",
          "63×50",
          "105",
          "167",
          "86,5"
        ],
        [
          "@Manguito de unión"
        ],
        [
          "0210000206",
          "20×20",
          "44",
          "85",
          "—"
        ],
        [
          "0210000138",
          "25×25",
          "52",
          "97",
          "—"
        ],
        [
          "0210000079",
          "32×32",
          "62",
          "113",
          "—"
        ],
        [
          "0210000179",
          "40×40",
          "72",
          "129",
          "—"
        ],
        [
          "0210000072",
          "50×50",
          "86,5",
          "157",
          "—"
        ],
        [
          "0210000244",
          "63×63",
          "105",
          "182",
          "—"
        ],
        [
          "@Codo 90º"
        ],
        [
          "0210000055",
          "20×20",
          "44",
          "76",
          "—"
        ],
        [
          "0210000195",
          "25×25",
          "52",
          "92",
          "—"
        ],
        [
          "0210000237",
          "32×32",
          "62",
          "109",
          "—"
        ],
        [
          "0210000127",
          "40×40",
          "72",
          "127,5",
          "—"
        ],
        [
          "0210000226",
          "50×50",
          "86,5",
          "157,5",
          "—"
        ],
        [
          "0210000036",
          "63×63",
          "105",
          "182",
          "—"
        ],
        [
          "@Tapón"
        ],
        [
          "0210000014",
          "20",
          "44,5",
          "64,5",
          "—"
        ],
        [
          "0210000166",
          "25",
          "53,5",
          "88,5",
          "—"
        ],
        [
          "0210000007",
          "32",
          "63",
          "98",
          "—"
        ],
        [
          "0210000176",
          "40",
          "68,5",
          "103,5",
          "—"
        ],
        [
          "0210000099",
          "50",
          "82,5",
          "117,5",
          "—"
        ],
        [
          "0210000220",
          "63",
          "94,5",
          "129,5",
          "—"
        ]
      ],
      "n1": "",
      "n2": "",
      "n3": "Gama completa de racorería en el catálogo: bajantes, distribuidores, abrazaderas, injertos y taladros de toma en carga.",
      "pend": "",
      "aviso": "",
      "ben": [
        [
          "No se oxida por dentro",
          "El aluminio no genera óxido, así que la red no pierde sección ni envía partículas a las herramientas."
        ],
        [
          "Se modifica sin obra",
          "Añadir una toma o mover una bajante no exige soldador ni parar la producción más de lo imprescindible."
        ],
        [
          "Menos pérdida de carga",
          "Interior liso y curvas de radio amplio: llega más presión al punto de uso con el mismo compresor."
        ],
        [
          "Ligera de montar",
          "Tramos manejables por una persona, sujeción con abrazadera y sin equipo de soldadura en obra."
        ],
        [
          "Toma en carga",
          "Los taladros con presión permiten añadir una derivación sin vaciar la red."
        ]
      ],
      "dis": [
        [
          "Tubería",
          [
            "Aluminio de Ø20 a Ø63 mm",
            "Interior liso",
            "Unión desmontable"
          ]
        ],
        [
          "Racorería",
          [
            "Manguitos de unión y reducidos",
            "Codos de 90º y 45º",
            "Tapones y racores de purga"
          ]
        ],
        [
          "Derivación",
          [
            "Bajantes y manguitos de derivación",
            "Distribuidores de 1 a 4 salidas",
            "Taladro simple y con presión"
          ]
        ]
      ]
    },
    "ENROLLADOR": {
      "eyebrow": "Redes de aire comprimido",
      "title": "Enrolladores automáticos",
      "claim": "Manguera recogida, sin tropiezos y sin arrastrarla por el suelo del taller.",
      "lead": "Una manguera por el suelo es un riesgo y un consumible: se pisa, se dobla y acaba con fugas. El enrollador la mantiene tensada, recogida y fuera del paso.",
      "fig": [
        [
          "1/4″ y 3/8″",
          "Racor",
          ""
        ],
        [
          "8×12 / 10×14",
          "Tubo",
          "mm"
        ],
        [
          "15 y 12 m",
          "Longitud",
          ""
        ],
        [
          "Automático",
          "Recogida",
          ""
        ]
      ],
      "cols": [
        "Racor",
        "Ø tubo<br><span class=\"u\">mm</span>",
        "Longitud<br><span class=\"u\">m</span>"
      ],
      "rows": [
        [
          "1/4″",
          "8 × 12",
          "15"
        ],
        [
          "3/8″",
          "10 × 14",
          "12"
        ]
      ],
      "n1": "",
      "n2": "",
      "n3": "",
      "pend": "",
      "aviso": "",
      "ben": [
        [
          "Menos accidentes",
          "La manguera deja de estar por el suelo: es la causa más tonta de caída en un taller."
        ],
        [
          "Alarga la vida de la manguera",
          "Sin pisadas ni dobleces forzados, la manguera dura varias veces más."
        ],
        [
          "Bloqueo por posiciones",
          "Se saca la longitud que hace falta y queda fijada, sin tirar del carrete todo el rato."
        ],
        [
          "Montaje en pared o techo",
          "Se coloca sobre el puesto de trabajo y deja el suelo libre."
        ],
        [
          "Dos medidas de racor",
          "1/4″ para herramienta ligera y 3/8″ cuando hace falta más caudal."
        ]
      ],
      "dis": [
        [
          "Tambor",
          [
            "Recogida automática por muelle",
            "Bloqueo por posiciones",
            "Soporte orientable"
          ]
        ],
        [
          "Manguera",
          [
            "Tubo de 8×12 o 10×14 mm",
            "12 o 15 m según modelo",
            "Racor de 1/4″ o 3/8″"
          ]
        ],
        [
          "Montaje",
          [
            "Pared o techo",
            "Tope de manguera",
            "Orientación libre"
          ]
        ]
      ]
    },
    "PURGA": {
      "eyebrow": "Tratamiento de aire comprimido",
      "title": "Purgas de condensado",
      "claim": "Tres tecnologías: temporizada, de boya y capacitiva de cero pérdidas.",
      "lead": "Todo el agua que el aire deja por el camino hay que sacarla. La diferencia entre una purga y otra es cuánto aire comprimido se te escapa con ella: una temporizada mal ajustada tira aire en cada ciclo, todo el año.",
      "fig": [
        [
          "10 m³/min",
          "Capacidad de compresor",
          "purga capacitiva"
        ],
        [
          "45 l/h",
          "Drenaje máximo",
          "a 16 bar"
        ],
        [
          "74 mm",
          "Altura de entrada",
          ""
        ],
        [
          "0,5 kg",
          "Peso",
          ""
        ]
      ],
      "cols": [
        "Tipo",
        "Conexión",
        "Alimentación",
        "Cómo actúa",
        "Pérdida de aire"
      ],
      "rows": [
        [
          "Purga capacitiva electrónica",
          "1/2″",
          "230 V AC",
          "Detecta el nivel real de condensado",
          "Ninguna"
        ],
        [
          "Purga temporizada",
          "1/2″",
          "220 V",
          "Abre a intervalos programados",
          "Sí, en cada ciclo"
        ],
        [
          "Purga de boya",
          "1/2″",
          "No necesita",
          "Mecanismo de boya, totalmente automático",
          "Mínima"
        ]
      ],
      "n1": "",
      "n2": "",
      "n3": "Datos de la purga capacitiva: capacidad máxima de compresor 10 m³/min, drenaje de hasta 45 litros de condensado por hora a 16 bar.",
      "pend": "",
      "aviso": "",
      "ben": [
        [
          "La capacitiva no tira aire",
          "Solo se activa cuando hay condensado de verdad. Lo que se ahorra en aire comprimido amortiza la diferencia de precio."
        ],
        [
          "Compacta",
          "74 mm de altura de entrada y medio kilo: entra en cualquier hueco de la sala."
        ],
        [
          "Sin intervención del usuario",
          "Ni en la instalación ni en la operación: se monta y se olvida."
        ],
        [
          "Una por punto bajo",
          "Calderín, secador y puntos bajos de la red necesitan la suya: el condensado se acumula donde el aire se enfría."
        ],
        [
          "El condensado es residuo",
          "Lleva aceite. Conviene enviarlo a un separador aceite-agua antes de verterlo."
        ]
      ],
      "dis": [
        [
          "Capacitiva",
          [
            "Sensor de nivel, sin pérdida de aire",
            "230 V AC",
            "Hasta 10 m³/min de compresor"
          ]
        ],
        [
          "Temporizada",
          [
            "Válvula solenoide con temporizador",
            "Tiempo y frecuencia regulables",
            "220 V"
          ]
        ],
        [
          "De boya",
          [
            "Mecanismo mecánico de boya",
            "Sin alimentación eléctrica",
            "Totalmente automática"
          ]
        ]
      ]
    },
    "PISTOLA": {
      "eyebrow": "Redes de aire comprimido",
      "title": "Pistolas de soplado",
      "claim": "Cinco versiones, incluida la de seguridad con silenciador.",
      "lead": "La pistola es la herramienta más usada de cualquier instalación y la que más aire gasta si no está bien elegida. Las versiones de seguridad limitan la presión de salida y reducen el ruido.",
      "fig": [
        [
          "5 versiones",
          "en la gama",
          ""
        ],
        [
          "100 a 300 mm",
          "Boquilla de acero",
          ""
        ],
        [
          "Seguridad",
          "Versión con silenciador",
          ""
        ],
        [
          "Progresiva",
          "Gatillo",
          ""
        ]
      ],
      "cols": [
        "Modelo",
        "Boquilla",
        "Gatillo"
      ],
      "rows": [
        [
          "Pistola de soplar Pro estándar",
          "Estándar",
          "Estándar"
        ],
        [
          "Pistola progresiva c/boquilla de acero 100 mm",
          "Acero, 100 mm",
          "Progresivo"
        ],
        [
          "Pistola progresiva c/boquilla de acero 200 mm",
          "Acero, 200 mm",
          "Progresivo"
        ],
        [
          "Pistola progresiva c/boquilla de acero 300 mm",
          "Acero, 300 mm",
          "Progresivo"
        ],
        [
          "Pistola progresiva de seguridad con silenciador",
          "Seguridad",
          "Progresivo"
        ]
      ],
      "n1": "",
      "n2": "",
      "n3": "Espirales de poliuretano de 5×8 mm disponibles en 3, 5, 8 y 12 m.",
      "pend": "",
      "aviso": "",
      "ben": [
        [
          "Gatillo progresivo",
          "Dosifica el aire en lugar de abrir a tope: menos consumo y más control en el trabajo fino."
        ],
        [
          "Boquillas de acero",
          "De 100 a 300 mm para llegar al fondo de un alojamiento sin acercar la mano."
        ],
        [
          "Versión de seguridad",
          "Con silenciador y presión de salida limitada, para cumplir en puestos con exposición continua."
        ],
        [
          "Menos ruido",
          "El soplado es de las fuentes de ruido más altas del taller y la más fácil de reducir."
        ],
        [
          "Espiral a juego",
          "Poliuretano de 5×8 mm en cuatro longitudes, para que la manguera no arrastre."
        ]
      ],
      "dis": [
        [
          "Cuerpo",
          [
            "Gatillo progresivo",
            "Conexión rápida",
            "Versión estándar y de seguridad"
          ]
        ],
        [
          "Boquillas",
          [
            "Acero de 100, 200 y 300 mm",
            "Boquilla estándar",
            "Silenciador en la de seguridad"
          ]
        ],
        [
          "Espirales",
          [
            "Poliuretano azul 5×8 mm",
            "3, 5, 8 y 12 m",
            "Recuperación elástica"
          ]
        ]
      ]
    },
    "SEPARADOR": {
      "eyebrow": "Separadores agua-aceite · Serie JEP Premium",
      "title": "Separadores agua-aceite JEP Premium",
      "claim": "De 2 a 60 m³/min, con menos de 5 ppm de aceite residual en el vertido.",
      "lead": "El condensado que sale de tu compresor lleva aceite, y verterlo al saneamiento sin tratar es una infracción. El separador lo filtra en varias etapas hasta dejar el efluente por debajo de <strong>5 ppm</strong>, que es lo que permite verterlo cumpliendo.",
      "fig": [
        [
          "2–60 m³/min",
          "Capacidad de compresor",
          ""
        ],
        [
          "< 5 ppm",
          "Aceite residual",
          "en el efluente"
        ],
        [
          "6 modelos",
          "en la serie",
          ""
        ],
        [
          "Carbón activado",
          "Etapa final",
          "según modelo"
        ]
      ],
      "cols": [
        "Modelo",
        "Capacidad máx. de compresor<br><span class=\"u\">m³/min</span>",
        "Aceite residual",
        "Indicador de desbordamiento",
        "Sensor de monitorización"
      ],
      "rows": [
        [
          "JEP 2 Premium",
          "2",
          "—",
          "—",
          "—"
        ],
        [
          "JEP 4.5 Premium",
          "4,5",
          "< 5 ppm",
          "Opcional",
          "Opcional"
        ],
        [
          "JEP 10 Premium",
          "10",
          "< 5 ppm",
          "Sí",
          "Opcional"
        ],
        [
          "JEP 20 Premium",
          "20",
          "< 5 ppm",
          "Sí",
          "Opcional"
        ],
        [
          "JEP 30 Premium",
          "30",
          "< 5 ppm",
          "Sí",
          "Opcional"
        ],
        [
          "JEP 60 Premium",
          "60",
          "< 5 ppm",
          "Sí",
          "Opcional"
        ]
      ],
      "n1": "",
      "n2": "",
      "n3": "El JEP 2 Premium es la solución compacta para instalaciones pequeñas; a partir del JEP 4.5 la serie declara efluente por debajo de 5 ppm. Todos separan aceite mineral, sintético y emulsiones estables.",
      "pend": "",
      "aviso": "",
      "ben": [
        [
          "Por debajo de 5 ppm",
          "La filtración en varias etapas deja el efluente con menos de 5 ppm de aceite, que es el umbral que permite verterlo cumpliendo la normativa ambiental."
        ],
        [
          "También con emulsiones",
          "Separa aceite mineral, sintético y emulsiones estables, que son las que atascan los separadores por gravedad de toda la vida."
        ],
        [
          "Indicador de desbordamiento",
          "Avisa antes de que el elemento sature. Sin él, el primer síntoma suele ser el vertido sin tratar."
        ],
        [
          "Válvula de prueba y botella",
          "Permite comprobar el valor de salida en ppm cuando lo pida una inspección, sin equipo externo."
        ],
        [
          "Cambio de elemento sencillo",
          "Elementos ergonómicos y drenaje seccionado: el mantenimiento no obliga a parar la línea."
        ]
      ],
      "dis": [
        [
          "Filtración",
          [
            "Varias etapas de adsorción",
            "Etapa final de carbón activado en los modelos grandes",
            "Elemento filtrante Jender de alta calidad"
          ]
        ],
        [
          "Control",
          [
            "Indicador visual de vida útil del elemento",
            "Indicador luminoso de desbordamiento",
            "Sensor opcional para monitorización remota"
          ]
        ],
        [
          "Instalación",
          [
            "Múltiples entradas de condensado",
            "Conectores de latón",
            "Compatible con purgas temporizadas y de cero pérdidas"
          ]
        ]
      ]
    },
    "HERRAMIENTA": {
      "eyebrow": "Redes de aire comprimido",
      "title": "Herramientas de montaje",
      "claim": "Lo que hace falta para montar una red de aluminio bien: cortar recto, quitar rebaba y apretar al par.",
      "lead": "La mayoría de las fugas de una red nueva no vienen del material, vienen del montaje: un corte torcido, una rebaba que muerde la junta o un racor apretado a ojo. Con la herramienta correcta eso no pasa.",
      "fig": [
        [
          "Ø6 a 67 mm",
          "Corte",
          ""
        ],
        [
          "Toma en carga",
          "Sin vaciar la red",
          ""
        ],
        [
          "Ø20 a 63",
          "Llaves",
          "bloqueo y apriete"
        ],
        [
          "4 pasos",
          "Marca, introduce, posiciona, cierra",
          ""
        ]
      ],
      "cols": [
        "Herramienta",
        "Medida",
        "Para qué"
      ],
      "rows": [
        [
          "@Corte y preparación del tubo"
        ],
        [
          "Cortatubo",
          "Ø 6 a 42 mm",
          "Corte perpendicular del tubo de aluminio"
        ],
        [
          "Cortatubo",
          "Ø 6 a 67 mm",
          "Para los diámetros mayores de la red"
        ],
        [
          "Quitarrebabas cónico",
          "Ø 20 a 50 mm",
          "Elimina la rebaba interior tras el corte"
        ],
        [
          "Escariador ajustable",
          "Ø 50 a 63 mm",
          "Calibra el extremo antes de meter el racor"
        ],
        [
          "@Toma en carga"
        ],
        [
          "Taladro simple 1/2″",
          "Ø 12 · L 150 mm",
          "Derivación con la red despresurizada"
        ],
        [
          "Taladro simple 1″",
          "Ø 20 · L 205 mm",
          "Derivación de mayor sección"
        ],
        [
          "Taladro con presión 1/2″",
          "L 202 mm",
          "Añade una toma sin vaciar la red"
        ],
        [
          "@Montaje del racor"
        ],
        [
          "Llaves de bloqueo",
          "Ø 20, 25, 32, 40, 50 y 63",
          "Sujetan el racor mientras se aprieta"
        ],
        [
          "Llaves de apriete",
          "Ø 20, 25, 32, 40, 50 y 63",
          "Cierran el racor a su par"
        ]
      ],
      "n1": "",
      "n2": "",
      "n3": "Secuencia de montaje del racor: marcar la introducción del tubo, introducirlo hasta la señal, posicionar las llaves y cerrar el racor.",
      "pend": "",
      "aviso": "",
      "ben": [
        [
          "El corte decide la estanqueidad",
          "Un corte perpendicular y sin rebaba es lo que permite que la junta del racor asiente. Con sierra de mano no se consigue."
        ],
        [
          "Toma en carga",
          "El taladro con presión añade una derivación sin vaciar la red: se amplia la instalación sin parar la producción."
        ],
        [
          "Apriete al par",
          "Las llaves de bloqueo y apriete cierran el racor en su punto: ni flojo, que fuga, ni pasado, que deforma la junta."
        ],
        [
          "Una medida por diámetro",
          "Juegos de Ø20 a Ø63, los mismos diámetros que la tubería de aluminio de la gama."
        ],
        [
          "Montaje repetible",
          "Con la secuencia de cuatro pasos, cualquier operario monta la red igual de bien."
        ]
      ],
      "dis": [
        [
          "Corte",
          [
            "Cortatubos de Ø6 a 42 y de Ø6 a 67 mm",
            "Quitarrebabas cónico de Ø20 a 50",
            "Escariador ajustable de Ø50 a 63"
          ]
        ],
        [
          "Derivación",
          [
            "Taladro simple de 1/2″ y 1″",
            "Taladro con presión de 1/2″",
            "Para toma en carga sin parar la red"
          ]
        ],
        [
          "Apriete",
          [
            "Llaves de bloqueo Ø20 a Ø63",
            "Llaves de apriete Ø20 a Ø63",
            "Secuencia de montaje en cuatro pasos"
          ]
        ]
      ]
    }
  };

  /* Figuras tecnicas: datos numericos por modelo tomados del Catalogo Jender General 2026.
     [modelo, kW, caudal 7,5 bar, caudal 10 bar, caudal 13 bar, ancho mm, largo mm] */
  const DIMS = {
    "JSC V": [
      [
        "JSC3 V",
        3,
        0.42,
        0.35,
        0.29,
        610,
        1110
      ],
      [
        "JSC4 V",
        4,
        0.57,
        0.48,
        0.35,
        610,
        1110
      ],
      [
        "JSC5 V",
        5.5,
        0.9,
        0.7,
        0.62,
        750,
        1170
      ],
      [
        "JSC7 V",
        7.5,
        1.23,
        0.97,
        0.82,
        750,
        1170
      ],
      [
        "JSC11 V",
        11,
        1.87,
        1.62,
        1.34,
        750,
        1170
      ],
      [
        "JSC15 V",
        15,
        2.43,
        2.11,
        1.8,
        750,
        1170
      ],
      [
        "JSC18 V",
        18.5,
        3.13,
        2.73,
        2.32,
        900,
        1350
      ],
      [
        "JSC 22V",
        22,
        3.67,
        3.22,
        2.77,
        900,
        1350
      ],
      [
        "JSC30 V",
        30,
        4.97,
        4.29,
        3.73,
        900,
        1350
      ],
      [
        "JSC37 V",
        37,
        6.21,
        5.4,
        4.61,
        1020,
        1390
      ],
      [
        "JSC45 V",
        45,
        7.46,
        6.43,
        5.55,
        1020,
        1390
      ]
    ],
    "JSC VD": [
      [
        "JSC 18VD",
        18.5,
        3.27,
        2.85,
        2.43,
        900,
        1600
      ],
      [
        "JSC 22VD",
        22,
        3.82,
        3.36,
        2.89,
        900,
        1600
      ],
      [
        "JSC 30VD",
        30,
        5.04,
        4.47,
        3.89,
        900,
        1600
      ],
      [
        "JSC 37VD",
        37,
        6.42,
        5.58,
        4.77,
        1150,
        1500
      ],
      [
        "JSC 45VD",
        45,
        7.62,
        6.7,
        5.79,
        1150,
        1500
      ],
      [
        "JSC 55VD",
        55,
        10.18,
        8.86,
        7.53,
        1450,
        1600
      ],
      [
        "JSC 75VD",
        75,
        13.29,
        11.74,
        10.17,
        1650,
        2000
      ]
    ],
    "JSC VTD": [
      [
        "JSC 3VTD",
        3,
        0.42,
        0.35,
        0.29,
        610,
        1690
      ],
      [
        "JSC 4VTD",
        4,
        0.57,
        0.48,
        0.35,
        610,
        1690
      ],
      [
        "JSC 5VTD",
        5,
        0.9,
        0.7,
        0.62,
        750,
        1850
      ],
      [
        "JSC 7VTD",
        8,
        1.23,
        0.97,
        0.82,
        750,
        1850
      ],
      [
        "JSC 11VTD",
        11,
        1.87,
        1.62,
        1.34,
        750,
        1850
      ],
      [
        "JSC 15VTD",
        15,
        2.43,
        2.11,
        1.8,
        750,
        1850
      ]
    ]
  };

  const SECS = [['beneficios', 'Beneficios'], ['diseno', 'Dise\u00f1o'], ['figuras', 'Dimensiones y caudal'], ['specs', 'Especificaciones t\u00e9cnicas'], ['descargas', 'Descargas']];

  /* Barras horizontales del caudal por modelo: una sola serie, un solo tono, etiquetas
     directas y tooltip con las tres presiones. Escala compartida con el eje en 0. */
  function figCaudal(k) {
    const d = DIMS[k]; if (!d) return '';
    const max = Math.max(...d.map(r => r[2]));
    const W = 100, filas = d.map(r => {
      const pct = r[3] / max * W;
      return `<div class="bar-row" tabindex="0"
          data-tip="${r[0]} · ${r[1]} kW — 7,5 bar: ${r[2].toFixed(2).replace('.', ',')} · 10 bar: ${r[3].toFixed(2).replace('.', ',')} · 13 bar: ${r[4].toFixed(2).replace('.', ',')} m³/min">
          <span class="bl">${r[0]}</span>
          <span class="bt"><i style="width:${pct}%"></i></span>
          <span class="bv">${r[3].toFixed(2).replace('.', ',')}</span>
        </span></div>`;
    }).join('');
    return `<figure class="fig">
      <figcaption><b>Caudal por modelo a 10 bar</b><span>m³/min · medido seg\u00fan ISO 1217:2009 Anexo C. Pasa el rat\u00f3n por cada barra para ver el caudal a 7,5 y 13 bar.</span></figcaption>
      <div class="bars">${filas}</div>
    </figure>`;
  }

  /* Vista superior a escala: la huella real del modelo mayor y el menor de la serie. */
  function figHuella(k) {
    const d = DIMS[k]; if (!d) return '';
    const a = d[0], b = d[d.length - 1];
    const esc = 0.085;                       // mm -> px
    const m2 = r => (r[5] * r[6] / 1e6).toFixed(2).replace('.', ',');
    const caja = r => `<div class="hu">
        <div class="pl" style="width:${Math.round(r[5] * esc)}px;height:${Math.round(r[6] * esc)}px">
          <span class="wd">${r[5]} mm</span><span class="ht">${r[6]} mm</span>
        </div>
        <b>${r[0]}</b><span>${m2(r)} m² de planta</span>
      </div>`;
    return `<figure class="fig">
      <figcaption><b>Vista superior a escala</b><span>Huella en planta del modelo menor y el mayor de la serie, dibujados a la misma escala con las medidas del cat\u00e1logo.</span></figcaption>
      <div class="huellas">${caja(a)}${caja(b)}</div>
    </figure>`;
  }

  /* Varias fotos de producto amontonadas dentro de un contenedor pensado para una sola:
     se descartan las repetidas y el resto se presenta como galeria en rejilla. */
  document.querySelectorAll('.media, .prose, .rcol, .gb > div').forEach(box => {
    const imgs = [...box.children].filter(c => c.tagName === 'IMG');
    if (imgs.length < 2) return;
    const gal = document.createElement('div');
    gal.className = 'gal';
    imgs[0].before(gal);
    const vistos = new Set();
    imgs.forEach(im => {
      const k = (im.getAttribute('src') || '').split('/').pop();
      if (vistos.has(k)) { im.remove(); return; }
      vistos.add(k);
      const fig = document.createElement('figure');
      fig.className = 'gi';
      fig.appendChild(im);
      gal.appendChild(fig);
    });
  });

  document.querySelectorAll('[data-gama]').forEach(sec => {
    const g = GAMA[sec.dataset.gama.trim()];
    if (!g) return;
    sec.className = 'section gama-sec';
    sec.id = 'modelos';
    sec.innerHTML = `<div class="wrap gama-layout">
      <aside class="gama-nav">
        <ul></ul>
        <div class="btns">
          <a class="btn btn-navy btn-sm" href="#contacto">Cont\u00e1ctenos</a>
          <a class="btn btn-ghost-navy btn-sm" href="acceso-clientes.html">Solicitar presupuesto</a>
          <a class="btn btn-ghost-navy btn-sm" href="posventa.html">Posventa</a>
        </div>
      </aside>
      <div class="gama-body">
        <div class="gama-intro">
          <span class="eyebrow">${g.eyebrow}</span>
          <h2>${g.title}</h2>
          <p class="claim">${g.claim}</p>
          <p class="lead">${g.lead}</p>
          <div class="keyfig">${g.fig.map(f => `<div><b>${f[0]}</b><span>${f[1]}${f[2] ? `<small>${f[2]}</small>` : ''}</span></div>`).join('')}</div>
        </div>

        <details class="gblock" id="g-beneficios" open><summary>Beneficios</summary><div class="gb">
          ${g.ben.map(b => `<div class="bitem"><h4>${b[0]}</h4><p>${b[1]}</p></div>`).join('')}
        </div></details>

        <details class="gblock" id="g-diseno" open><summary>Dise\u00f1o</summary><div class="gb">
          <div class="dis">${g.dis.map(d => `<div><h4>${d[0]}</h4><ul>${d[1].map(x => `<li>${x}</li>`).join('')}</ul></div>`).join('')}</div>
        </div></details>

        ${DIMS[sec.dataset.gama.trim()] ? `<details class="gblock" id="g-figuras" open><summary>Dimensiones y caudal</summary><div class="gb figs">
          ${figCaudal(sec.dataset.gama.trim())}
          ${figHuella(sec.dataset.gama.trim())}
        </div></details>` : ''}

        <details class="gblock" id="g-specs" open><summary>Especificaciones t\u00e9cnicas</summary><div class="gb">
          <div class="tbl-wrap">
            <table class="info-table spec-t">
              <thead><tr>${g.cols.map(c => `<th>${c}</th>`).join('')}</tr></thead>
              <tbody>${g.rows.map(r => r.length === 1
                ? `<tr class="grp"><td colspan="${g.cols.length}">${r[0].slice(1)}</td></tr>`
                : `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
            </table>
          </div>
          ${g.n1 ? `<p class="fnote"><sup>1</sup> ${g.n1}</p>` : ''}
          ${g.n2 ? `<p class="fnote"><sup>2</sup> ${g.n2}</p>` : ''}
          ${g.n3 ? `<p class="fnote">${g.n3}</p>` : ''}
          ${g.aviso ? `<p class="fnote pend" data-k="val" data-porque="El cat\u00e1logo general 2026 tabula los modelos de la serie hasta 75 kW, pero la gama se anuncia hasta 315 kW." data-falta="Datos de los modelos por encima de 75 kW, o corregir el rango declarado de la serie.">${g.aviso}</p>` : ''}
          ${g.pend ? `<p class="fnote pend" data-k="val" data-porque="La tabla se queda a nivel de serie porque es el \u00fanico dato publicado por Jender. CompAir detalla cada modelo con su refrigeraci\u00f3n, FAD a dos presiones, dimensiones y peso." data-falta="Listado de modelos de la serie con potencia, FAD a 8 y 10 bar, nivel sonoro, dimensiones y peso.">${g.pend}</p>` : ''}
        </div></details>

        <details class="gblock" id="g-descargas" open><summary>Descargas</summary><div class="gb">
          <div class="dl">
            <a class="dlcard" href="fichas-tecnicas.html"><span class="ic">${jIcon('file')}</span><b>Ficha t\u00e9cnica</b><small>Datos por modelo</small></a>
            <a class="dlcard" href="catalogo.html"><span class="ic">${jIcon('file')}</span><b>Cat\u00e1logo de la gama</b><small>PDF</small></a>
            <a class="dlcard" href="fichas-tecnicas.html"><span class="ic">${jIcon('shield')}</span><b>Declaraci\u00f3n de conformidad</b><small>Por modelo</small></a>
          </div>
          <div class="gama-foot">
            <div><h4>Garant\u00eda de 5 a\u00f1os</h4><p>Con contrato de mantenimiento de CST Ib\u00e9rica en vigor, revisiones en plazo y recambio original.</p><a class="btn btn-navy btn-sm" href="posventa.html">Ver condiciones</a></div>
            <div class="hl"><h4>\u00bfQu\u00e9 equipo te corresponde?</h4><p>Lo calculamos con tu caudal punta, tu presi\u00f3n de trabajo y tus horas de producci\u00f3n.</p><a class="btn btn-yellow btn-sm" href="#contacto">Solicitar estudio t\u00e9cnico</a></div>
          </div>
        </div></details>
      </div>
    </div>`;
    sec.setAttribute('data-k', 'new');
    sec.setAttribute('data-porque', "La página explicaba la tecnología pero no decía qué equipos hay ni con qué datos, y el botón «Ver productos» sacaba al visitante a un listado de referencias con precios. Se reproduce la estructura de las páginas de gama de CompAir: índice lateral fijo, secciones plegables de Beneficios y Diseño, tabla de especificaciones con las condiciones de medición según norma, y descargas.");


    /* La página entera cuelga del índice: la ficha sube justo debajo del hero y el resto
       de secciones se convierten en bloques plegables, respetando el orden original.
       Se quedan fuera el hero y el formulario de contacto. */
    const hero = document.querySelector('.hero');
    const cuerpo = sec.querySelector('.gama-body');
    const todas = [...document.querySelectorAll('body > section, main > section')];
    const iF = todas.indexOf(sec);
    const absorbibles = todas.filter(x => x !== sec && !x.classList.contains('hero') && x.id !== 'contacto');
    const antes = absorbibles.filter(x => todas.indexOf(x) < iF);
    const despues = absorbibles.filter(x => todas.indexOf(x) > iF);

    const bloquear = (el, idx) => {
      const h = el.querySelector('h1, h2, h3');
      const tit = h ? h.textContent.trim() : '';
      if (!tit) { el.remove(); return null; }
      const d = document.createElement('details');
      d.className = 'gblock'; d.id = 'g-p' + idx; d.open = true;
      const sum = document.createElement('summary'); sum.textContent = tit;
      const caja = document.createElement('div'); caja.className = 'gb';
      const dentro = el.querySelector('.wrap') || el;
      h.remove();
      while (dentro.firstChild) caja.appendChild(dentro.firstChild);
      d.append(sum, caja);
      el.remove();
      return d;
    };

    const intro = sec.querySelector('.gama-intro');
    let punto = intro;                       // se va moviendo para conservar el orden original
    antes.forEach((el, i) => { const d = bloquear(el, 'a' + i); if (d) { punto.after(d); punto = d; } });
    despues.forEach((el, i) => { const d = bloquear(el, 'd' + i); if (d) cuerpo.appendChild(d); });

    /* la ficha pasa a ir inmediatamente despues del hero */
    if (hero && hero.parentNode) hero.parentNode.insertBefore(sec, hero.nextSibling);

    /* el indice se rellena con los bloques que han quedado, en su orden */
    const lista = sec.querySelector('.gama-nav ul');
    lista.innerHTML = [...cuerpo.querySelectorAll(':scope > .gblock')].map((d, i) =>
      `<li><a href="#${d.id}"${i === 0 ? ' class="on"' : ''} title="${d.querySelector('summary').textContent.replace(/"/g, '&quot;')}">${d.querySelector('summary').textContent}</a></li>`).join('');

    /* tooltip de las barras: se reutiliza la ficha flotante del modo maqueta no,
       esta es propia de la figura y funciona siempre */
    const ft = document.createElement('div'); ft.className = 'fig-tip'; sec.appendChild(ft);
    sec.querySelectorAll('.bar-row').forEach(el => {
      const show = e => {
        ft.textContent = el.dataset.tip; ft.classList.add('on');
        const r = el.getBoundingClientRect(), s2 = sec.getBoundingClientRect();
        ft.style.left = Math.max(8, Math.min(r.left - s2.left, s2.width - ft.offsetWidth - 8)) + 'px';
        ft.style.top = (r.top - s2.top - ft.offsetHeight - 8) + 'px';
      };
      el.addEventListener('mouseenter', show); el.addEventListener('focus', show);
      el.addEventListener('mouseleave', () => ft.classList.remove('on'));
      el.addEventListener('blur', () => ft.classList.remove('on'));
    });

    /* el indice lateral marca la seccion visible y despliega la que se pulsa */
    const links = [...sec.querySelectorAll('.gama-nav ul a')];
    links.forEach(a => a.addEventListener('click', () => {
      const d = sec.querySelector(a.getAttribute('href'));
      if (d && !d.open) d.open = true;
    }));
    const io2 = new IntersectionObserver(es => {
      es.forEach(e => { if (!e.isIntersecting) return;
        links.forEach(l => l.classList.toggle('on', l.getAttribute('href') === '#' + e.target.id)); });
    }, { rootMargin: '-25% 0px -65% 0px' });
    sec.querySelectorAll('.gblock').forEach(d => io2.observe(d));
  });

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
