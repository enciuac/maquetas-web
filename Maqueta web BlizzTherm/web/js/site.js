/* ==========================================================
   Maqueta BlizzTherm · cabecera, pie, componentes y modo revisión
   ========================================================== */
(function () {
  'use strict';
  var body = document.body;
  var R = body.getAttribute('data-root') || '';        // ruta a la raíz ('' en index, '../' en web/)
  var W = R === '' ? 'web/' : '';                       // ruta a la carpeta web/
  var LIVE = 'https://blizztherm.es';
  var UP = LIVE + '/wp-content/uploads/';
  var IMG = W + 'img/';
  var CUR = body.getAttribute('data-page') || '';

  /* ---------- páginas y si tienen cambios propios ---------- */
  var P = {
    home:          {h: R + 'index.html', chg: true},
    electricos:    {h: W + 'electricos.html', chg: true},
    infrarrojos:   {h: W + 'infrarrojos.html', chg: true},
    canones:       {h: W + 'canones.html', chg: true},
    gas:           {h: W + 'canones-gas.html', chg: true},
    gasoil:        {h: W + 'canones-gasoil.html', chg: true},
    postventa:     {h: W + 'post-venta.html', chg: true},
    mantenimiento: {h: W + 'mantenimiento.html', chg: true},
    garantia:      {h: W + 'registro-garantia.html', chg: true},
    renove:        {h: W + 'plan-renove.html', chg: true},
    nosotros:      {h: W + 'nosotros.html', chg: true},
    documentacion: {h: W + 'documentacion.html', chg: true},
    blog:          {h: W + 'blog.html', chg: false},
    videos:        {h: W + 'videos.html', chg: true},
    contacto:      {h: W + 'contacto.html', chg: true},
    faqs:          {h: W + 'faqs.html', chg: true},
    industria:     {h: W + 'industria.html', chg: true},
    ganaderia:     {h: W + 'ganaderia.html', chg: true},
    calculadora:   {h: W + 'calculadora.html', chg: true},
    distribuidores:{h: W + 'distribuidores.html', chg: true}
  };
  window.BZT = {R: R, W: W, UP: UP, IMG: IMG, LIVE: LIVE, P: P};

  function a(k, txt, extra) {
    var p = P[k];
    return '<a href="' + p.h + '" data-pg="' + k + '"' + (k === CUR ? ' class="act"' : '') + (extra || '') + '>' + txt + '</a>';
  }
  var CARET = '<svg class="caret" viewBox="0 0 320 512"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"/></svg>';
  var ICO = {
    search: '<svg viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>',
    cart: '<svg viewBox="0 0 576 512"><path d="M528.1 301.3l47.3-208C578.8 78.3 567.4 64 552 64H159.2l-9.2-44.8C147.8 8 137.9 0 126.5 0H24C10.7 0 0 10.7 0 24v16c0 13.3 10.7 24 24 24h69.9l70.2 343.4C147.3 417.1 136 435.2 136 456c0 30.9 25.1 56 56 56s56-25.1 56-56c0-15.7-6.4-29.8-16.8-40h209.6C430.4 426.2 424 440.3 424 456c0 30.9 25.1 56 56 56s56-25.1 56-56c0-22.2-12.9-41.3-31.6-50.4l5.5-24.3c3.4-15-8-29.3-23.4-29.3H218.1l-6.5-32h293.1c11.2 0 20.9-7.8 23.4-18.7z"/></svg>',
    bars: '<svg viewBox="0 0 448 512"><path d="M16 132h416c8.8 0 16-7.2 16-16V76c0-8.8-7.2-16-16-16H16C7.2 60 0 67.2 0 76v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16z"/></svg>',
    mail: '<svg viewBox="0 0 512 512"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg>',
    phone: '<svg viewBox="0 0 512 512"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/></svg>',
    pin: '<svg viewBox="0 0 384 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg>',
    id: '<svg viewBox="0 0 576 512"><path d="M528 32H48C21.5 32 0 53.5 0 80v16h576V80c0-26.5-21.5-48-48-48zM0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V128H0v304zm352-232c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zm0 64c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16zM176 192c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zM67.1 396.2C75.5 370.5 99.6 352 128 352h8.2c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h8.2c28.4 0 52.5 18.5 60.9 44.2 3.2 9.9-5.2 19.8-15.6 19.8H82.7c-10.4 0-18.8-10-15.6-19.8z"/></svg>',
    li: '<svg viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>',
    fb: '<svg viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>',
    ig: '<svg viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>',
    wa: '<svg viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>',
    chat: '<svg viewBox="0 0 512 512"><path d="M256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"/></svg>'
  };
  window.BZT.ICO = ICO;

  /* ---------- CABECERA ---------- */
  var hdr = document.getElementById('hdr');
  if (hdr) {
    var logo = '<img src="' + UP + '2025/12/LOGO_BLIZZTHERM-scaled-2048x399.png" onerror="this.onerror=null;this.src=\'' + IMG + 'logo-blizztherm.png\'" alt="BlizzTherm" width="286" height="56">';
    var sister = '<a class="sister" href="https://blizzcool.es" target="_blank" rel="noopener" title="BlizzCool"><img src="' + UP + '2025/12/Sin-titulo-100-x-100-px.png" onerror="this.onerror=null;this.src=\'' + IMG + 'blizzcool-icon.png\'" alt=""></a>';
    var desk =
      '<ul class="menu">' +
      '<li>' + a('electricos', 'Calefactores industriales eléctricos') + '</li>' +
      '<li>' + a('infrarrojos', 'Calefactores industriales por infrarrojos') + '</li>' +
      '<li class="has">' + a('canones', 'Cañon de calor industrial' + CARET) +
        '<ul class="sub"><li>' + a('gas', 'Cañon de calor a gas') + '</li><li>' + a('gasoil', 'Cañon de calor de gasoil') + '</li></ul></li>' +
      '<li class="has">' + a('postventa', 'Post-Venta' + CARET) +
        '<ul class="sub"><li>' + a('mantenimiento', 'Mantenimiento') + '</li><li>' + a('garantia', 'Registro de Garantía') + '</li><li>' + a('renove', 'Plan Renove') + '</li></ul></li>' +
      '<li class="has chg" data-t="new" data-porque="Nuevo acceso a las dos rutas que pide el informe (industria y ganadería) y a la calculadora térmica (Sección 07 · Industria / ganadería y Sección 04 · Herramientas comerciales).">' + a('industria', 'Soluciones' + CARET) +
        '<ul class="sub"><li>' + a('industria', 'Industria') + '</li><li>' + a('ganaderia', 'Ganadería') + '</li><li>' + a('calculadora', 'Calculadora térmica') + '</li></ul></li>' +
      '<li>' + a('nosotros', 'Nosotros') + '</li>' +
      '<li>' + a('blog', 'Blog') + '</li>' +
      '<li>' + a('contacto', 'Contacto') + '</li>' +
      '</ul>';
    var mob =
      '<nav class="mob-menu" id="mobmenu"><ul>' +
      '<li>' + a('electricos', 'Calefactores industriales eléctricos') + '</li>' +
      '<li>' + a('infrarrojos', 'Calefactores industriales por infrarrojos') + '</li>' +
      '<li>' + a('canones', 'Cañon de calor industrial') + '<ul class="sub"><li>' + a('gas', 'Cañon de calor a gas') + '</li><li>' + a('gasoil', 'Cañon de calor de gasoil') + '</li></ul></li>' +
      '<li>' + a('postventa', 'Post-Venta') + '<ul class="sub"><li>' + a('mantenimiento', 'Mantenimiento') + '</li><li>' + a('garantia', 'Registro de Garantía') + '</li><li>' + a('renove', 'Plan Renove') + '</li></ul></li>' +
      '<li>' + a('industria', 'Soluciones') + '<ul class="sub"><li>' + a('industria', 'Industria') + '</li><li>' + a('ganaderia', 'Ganadería') + '</li><li>' + a('calculadora', 'Calculadora térmica') + '</li></ul></li>' +
      '<li>' + a('nosotros', 'Nosotros') + '<ul class="sub"><li>' + a('documentacion', 'Documentación BlizzTherm') + '</li><li>' + a('blog', 'Blog') + '</li><li>' + a('videos', 'Videos') + '</li></ul></li>' +
      '<li>' + a('blog', 'Blog') + '</li>' +
      '<li>' + a('contacto', 'Contacto') + '</li>' +
      '</ul></nav>';
    hdr.className = 'hdr';
    hdr.innerHTML =
      '<div class="hdr-top"><div class="in">' +
        '<div class="hdr-logo">' + a('home', logo) + '</div>' +
        '<div class="hdr-search"><div class="srch">' + ICO.search + '<input type="search" placeholder="Buscar productos ..." aria-label="Buscar productos"></div></div>' +
        '<div class="hdr-right">' +
          '<span class="mob-only" style="color:#fff">' + ICO.search.replace('<svg', '<svg style="width:17px;height:17px;fill:#fff"') + '</span>' +
          '<span class="iva"><span>IVA</span><i></i></span>' +
          '<a class="cart" href="' + LIVE + '/carrito/" target="_blank" rel="noopener">' + ICO.cart + '<b>0</b></a>' +
          '<a class="acc" href="' + LIVE + '/mi-cuenta/" target="_blank" rel="noopener">Acceder o registrarme</a>' +
          sister +
          '<button class="burger" aria-label="Menú" id="burger">' + ICO.bars + '</button>' +
        '</div>' +
      '</div></div>' +
      '<div class="hdr-nav"><div class="in">' + desk + '</div></div>' + mob;
    document.getElementById('burger').addEventListener('click', function () {
      document.getElementById('mobmenu').classList.toggle('open');
    });
  }

  /* ---------- PIE ---------- */
  var ftr = document.getElementById('ftr');
  if (ftr) {
    ftr.className = 'ftr';
    ftr.innerHTML =
      '<div class="in"><div class="cols">' +
        '<div class="col" style="gap:32px">' +
          '<div class="grp"><h4>Contacto</h4><ul><li>' + ICO.mail +
            '<a class="chg" data-t="mod" href="mailto:info@blizztherm.es" data-antes="El texto decía info@blizztherm.es pero el enlace abría un correo a info@blizzcool.es." data-porque="Se corrige el enlace para que escriba a BlizzTherm: el pie conservaba datos de Blizzcool (Sección 02 · Hallazgos críticos).">info@blizztherm.es</a></li></ul></div>' +
          '<div class="grp"><h4><a href="https://toolsplace.es/" target="_blank" rel="noopener">Toolsplace, S.L.</a></h4><ul>' +
            '<li>' + ICO.phone + '<a href="tel:+34617879087">+34 617 879 087</a></li>' +
            '<li>' + ICO.pin + '<span>C/ Segorbe nº 45 - 03206 P. I. Carrús Elche (ALICANTE)</span></li>' +
            '<li>' + ICO.id + '<span>CIF: B42669192</span></li></ul></div>' +
        '</div>' +
        '<div class="col"><h4>Nosotros</h4><ul><li>' + a('blog', 'Blog') + '</li><li>' + a('contacto', 'Contacto') + '</li><li>' + a('distribuidores', 'Distribuidores', ' class="chg" data-t="new" data-porque="Acceso a la nueva página para distribuidores (Sección 11 · prioridad 7, red de distribuidores)."') + '</li></ul></div>' +
        '<div class="col"><h4>Categorías</h4><ul><li>' + a('electricos', 'Calefactores Eléctricos') + '</li><li>' + a('infrarrojos', 'Calefactores Infrarrojos') + '</li><li>' + a('gas', 'Cañones de Calor a Gas') + '</li><li>' + a('gasoil', 'Cañones de Calor a Gasoil') + '</li></ul></div>' +
        '<div class="col"><h4>Social</h4><div class="social">' +
          '<a href="https://www.linkedin.com/company/blizztherm/" target="_blank" rel="noopener" aria-label="Linkedin">' + ICO.li + '</a>' +
          '<a href="https://www.facebook.com/blizztherm" target="_blank" rel="noopener" aria-label="Facebook">' + ICO.fb + '</a>' +
          '<a href="https://www.instagram.com/blizztherm" target="_blank" rel="noopener" aria-label="Instagram">' + ICO.ig + '</a></div></div>' +
      '</div>' +
      '<div class="bottom"><div class="l"><p>© 2026 <span class="chg" data-t="mod" data-antes="© 2026 Blizzcool | Todos los derechos reservados" data-porque="El pie mantenía la identidad de Blizzcool; se sustituye por BlizzTherm (Sección 02 · Hallazgos críticos).">BlizzTherm</span> | Todos los derechos reservados</p></div>' +
        '<div class="r"><ul class="legal">' +
          '<li><a href="' + LIVE + '/aviso-legal/" target="_blank" rel="noopener">Aviso legal</a></li>' +
          '<li><a href="' + LIVE + '/politica-de-privacidad/" target="_blank" rel="noopener">Política de privacidad</a></li>' +
          '<li><a href="' + LIVE + '/politica-de-cookies/" target="_blank" rel="noopener">Política de cookies</a></li>' +
          '<li><a href="' + LIVE + '/terminos-y-condiciones/" target="_blank" rel="noopener">Términos y condiciones</a></li>' +
          '<li><a href="' + LIVE + '/envios-entrega-y-devoluciones/" target="_blank" rel="noopener">Envíos, Entrega y Devoluciones</a></li>' +
        '</ul></div></div></div>';
    var fabs = document.createElement('div');
    fabs.innerHTML = '<a class="fab-chat" href="' + P.contacto.h + '" data-pg="contacto" aria-label="Chat">' + ICO.chat + '</a>' +
      '<a class="fab-wa" href="https://wa.me/34617879087" target="_blank" rel="noopener" aria-label="WhatsApp">' + ICO.wa + '</a>';
    body.appendChild(fabs);
  }

  /* ---------- banda «¿No sabes qué … necesitas?» de las categorías ---------- */
  document.querySelectorAll('[data-help]').forEach(function (s) {
    s.className = 'sec dark w1140 help';
    s.innerHTML = '<div class="in"><div class="t"><h2>' + s.getAttribute('data-help') + '</h2><p>Cuéntanos tu espacio, tu uso y tu presupuesto. Te recomendamos el modelo más adecuado.</p></div>' +
      '<div class="row"><a class="btn-wa" href="https://wa.me/34617879087" target="_blank" rel="noopener">' + ICO.wa + 'Whatsapp</a>' +
      '<a class="btn-mail" href="https://mail.google.com/mail/" target="_blank" rel="noopener">' + ICO.mail + 'Email</a></div></div>';
  });

  /* ---------- iconos de los bloques de seguridad / tecnologías ---------- */
  var SI = {
    flame: '<path d="M12 22c4 0 7-2.7 7-6.8 0-3.6-2.4-6.3-4.2-8.2.1 2-1 3.6-2.5 4.1C12.8 7.6 11 4.4 8.5 2 8.8 6 5 8.6 5 13.6 5 18.6 8.5 22 12 22z"/>',
    wind: '<path d="M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h8"/>',
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>',
    drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    ruler: '<path d="M3 12h18M3 12l4-4M3 12l4 4M21 12l-4-4M21 12l-4 4"/>',
    fuel: '<path d="M4 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16M3 21h13M7 8h5M15 10h2a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V8l-3-3"/>',
    wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4 2.5-2.5z"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    shield: '<path d="M12 3 4 6v6c0 5 3.4 8.3 8 9 4.6-.7 8-4 8-9V6l-8-3z"/><path d="m9 12 2 2 4-4"/>',
    xcircle: '<circle cx="12" cy="12" r="9"/><path d="m15 9-6 6M9 9l6 6"/>',
    clipboard: '<rect x="6" y="4" width="12" height="17" rx="2"/><path d="M9 4V3h6v1M9 10h6M9 14h6M9 18h4"/>',
    chimney: '<path d="M3 21V11l6-4 6 4v10H3zM13 8V3h3v7"/><path d="M16 3c1.5-1.5 3.5-1 4.5 0"/>',
    home: '<path d="M3 21V9l9-6 9 6v12"/><path d="M8 21v-7h8v7M3 21h18"/>',
    gas: '<path d="M7 18a4 4 0 0 1-.6-8 5.5 5.5 0 0 1 10.6 1.5A3.3 3.3 0 0 1 17 18H7z"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>'
  };
  function svg(k) { return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' + (SI[k] || SI.info) + '</svg>'; }
  var LBL = {'combustión': 'flame', 'combustión y humos': 'flame', 'ventilación': 'wind', 'electricidad': 'bolt', 'ambiente': 'drop', 'tipo de calor': 'sun',
    'distancias': 'ruler', 'combustible': 'fuel', 'instalación': 'wrench', 'duración': 'clock', 'cobertura': 'shield', 'exclusiones': 'xcircle', 'tramitación': 'clipboard'};
  document.querySelectorAll('.safety .s').forEach(function (s, i) {
    var lab = s.querySelector('span'); if (!lab) return;
    var d = document.createElement('div'); d.className = 'ico'; d.innerHTML = svg(LBL[lab.textContent.trim().toLowerCase()]);
    s.insertBefore(d, s.firstChild);
    var n = document.createElement('div'); n.className = 'num'; n.textContent = ('0' + (i % 4 + 1)).slice(-2); s.appendChild(n);
  });
  document.querySelectorAll('[data-ico]').forEach(function (e) { e.innerHTML = svg(e.getAttribute('data-ico')); });
  document.querySelectorAll('.safe-sec > .in > h2').forEach(function (h) {
    var w = document.createElement('div'); w.className = 'safe-head';
    h.parentNode.insertBefore(w, h);
    w.innerHTML = '<div class="eyebrow">Antes de comprar</div>'; w.appendChild(h);
    var p = document.createElement('p');
    p.textContent = h.parentNode.parentNode.parentNode.getAttribute('data-sub') || 'Lo que conviene saber de cada equipo para usarlo con seguridad en tu espacio.';
    w.appendChild(p);
  });

  /* ---------- matriz de aplicación por familia ---------- */
  var APPS = ['Taller o nave cerrada', 'Nave con ventilación abundante', 'Obra o exterior', 'Explotación ganadera'];
  var GAN = ['v', 'Validar por especie, fase y ventilación'];
  var MX = {
    BTE: ['Eléctricos · BTE 50, 90, 150, 150R', [['r', 'Sin combustión en el punto de uso'], ['r', 'Según potencia necesaria'], ['c', 'Necesita toma eléctrica adecuada'], GAN]],
    BTI: ['Infrarrojos · BTI 20, 45', [['v', 'Según ficha: con o sin chimenea'], ['r', 'Calor dirigido a puestos'], ['r', 'Muelles, carpas y puestos exteriores'], GAN]],
    BTC: ['Infrarrojos con extracción de humos · BTC 13, 18', [['r', 'Gases conducidos al exterior'], ['r', 'Calor dirigido'], ['c', 'Necesita instalación de chimenea'], GAN]],
    BTG: ['Gas directo · BTG 15, 30', [['n', 'Los gases quedan en el ambiente'], ['c', 'Solo con aporte de aire suficiente'], ['r', 'Alta potencia y rapidez'], GAN]],
    BTD: ['Gasóleo directo · BTD 20, 30, 50', [['n', 'Los gases quedan en el ambiente'], ['c', 'Solo con aporte de aire suficiente'], ['r', 'Máxima potencia y autonomía'], GAN]],
    BTH: ['Gasóleo indirecto · BTH 30, 50', [['r', 'Gases evacuados por chimenea'], ['r', 'Aire limpio y alta potencia'], ['r', 'Con conducto de humos'], GAN]]
  };
  var BADGE = {r: ['ok', 'Recomendado'], c: ['cond', 'Con condiciones'], n: ['no', 'No recomendado'], v: ['val', 'Por validar']};
  document.querySelectorAll('[data-matrix]').forEach(function (sec) {
    var fams = sec.getAttribute('data-matrix').split(',');
    sec.className = 'sec w1200 matrix-sec chg';
    sec.setAttribute('data-t', 'new');
    sec.setAttribute('data-porque', 'El informe pide indicar para cada equipo si es recomendado, condicionado o no recomendado según la aplicación, y no presentar ninguno como «ideal para ganaderías» sin validar especie, fase y ventilación (Sección 10 · Comparador mínimo · Aplicación; Sección 06 · Regla comercial; Sección 12 · Matriz de aplicación).');
    sec.innerHTML = '<div class="in"><div class="safe-head"><div class="eyebrow">Matriz de aplicación</div><h2 class="h2">¿Para qué uso es <span class="hl">cada equipo?</span></h2><p>Orientación general por tecnología. La decisión final depende del volumen, la ventilación y las condiciones de instalación.</p></div>' +
      '<div class="cmp-wrap"><table class="mx"><thead><tr><th></th>' + APPS.map(function (x) { return '<th>' + x + '</th>'; }).join('') + '</tr></thead><tbody>' +
      fams.map(function (f) {
        var r = MX[f.trim()]; if (!r) return '';
        return '<tr><td class="fam">' + r[0] + '</td>' + r[1].map(function (c) {
          var b = BADGE[c[0]];
          var val = c[0] === 'v' ? ' class="chg" data-t="val" data-porque="La aptitud debe validarse por modelo antes de publicarla (Sección 06 · Condiciones que deben validarse por modelo)." data-falta="Validación técnica por modelo: aptitud con animales, IP, amoniaco, distancias y riesgo de incendio."' : '';
          return '<td' + val + '><span class="bdg ' + b[0] + '">' + b[1] + '</span><small>' + c[1] + '</small></td>';
        }).join('') + '</tr>';
      }).join('') + '</tbody></table></div></div>';
  });

  /* ---------- CARRUSEL ---------- */
  var slider = null;
  document.querySelectorAll('.slides').forEach(function (root) {
    var track = root.querySelector('.track');
    var slides = [].slice.call(track.children);
    var n = slides.length, i = 0, timer = null, stopped = false, hover = false;
    var speed = +root.getAttribute('data-speed') || 3000;
    track.appendChild(slides[0].cloneNode(true));
    track.insertBefore(slides[n - 1].cloneNode(true), slides[0]);
    function go(k, anim) {
      track.style.transition = anim === false ? 'none' : 'transform .5s ease';
      i = k;
      track.style.transform = 'translateX(' + (-(i + 1) * 100) + '%)';
    }
    track.addEventListener('transitionend', function () {
      if (i >= n) go(0, false);
      if (i < 0) go(n - 1, false);
    });
    function play() { clearInterval(timer); if (!stopped && !hover && !body.classList.contains('review')) timer = setInterval(function () { go(i + 1); }, speed); }
    function pause() { clearInterval(timer); }
    root.addEventListener('mouseenter', function () { hover = true; pause(); });
    root.addEventListener('mouseleave', function () { hover = false; play(); });
    root.querySelector('.sl-prev').addEventListener('click', function () { stopped = true; pause(); go(i - 1); });
    root.querySelector('.sl-next').addEventListener('click', function () { stopped = true; pause(); go(i + 1); });
    go(0, false);
    play();
    slider = {play: play, pause: pause};
  });

  /* ---------- fondo en pase de diapositivas (hero eléctricos) ---------- */
  document.querySelectorAll('.hero[data-ss]').forEach(function (h) {
    var layers = h.querySelectorAll('.ss'), k = 0;
    if (layers.length < 2) return;
    setInterval(function () { layers[k].classList.remove('on'); k = (k + 1) % layers.length; layers[k].classList.add('on'); }, 5000);
  });

  /* ---------- acordeones: uno abierto a la vez ---------- */
  document.querySelectorAll('.acc-n').forEach(function (acc) {
    acc.querySelectorAll('details').forEach(function (d) {
      d.addEventListener('toggle', function () {
        if (!d.open) return;
        acc.querySelectorAll('details').forEach(function (o) { if (o !== d) o.open = false; });
      });
    });
  });

  /* ---------- pestañas ---------- */
  document.querySelectorAll('.tabs').forEach(function (t) {
    var bs = t.querySelectorAll('.tabs-h button'), ps = t.querySelectorAll('.tab');
    bs.forEach(function (b, k) {
      b.addEventListener('click', function () {
        bs.forEach(function (x) { x.classList.remove('on'); }); ps.forEach(function (x) { x.classList.remove('on'); });
        b.classList.add('on'); ps[k].classList.add('on');
      });
    });
  });

  /* ---------- enlace «Contactar» con desplazamiento suave ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (l) {
    l.addEventListener('click', function (e) {
      var id = l.getAttribute('href').slice(1); var el = id && document.getElementById(id);
      if (el) { e.preventDefault(); el.scrollIntoView({behavior: 'smooth'}); }
    });
  });

  /* ==========================================================
     MODO REVISIÓN
     ========================================================== */
  var KEY = 'bztMaquetaReview';
  var tg = document.createElement('button');
  tg.id = 'rv-toggle'; tg.type = 'button';
  tg.innerHTML = '<i></i><span>Ver cambios (maqueta)</span>';
  var lg = document.createElement('div');
  lg.id = 'rv-legend';
  var SUM = {
    home: ['Diapositiva 2 con el nuevo encabezado y la propuesta de valor; «Solicitar cálculo térmico».', 'Gas y gasoil: aviso de ventilación y sin «100 %»; potencia de gas por validar.', 'Selector de temperatura: a partir de 26 °C recomienda mantenimiento y Plan Renove, con BlizzCool como enlace secundario.', 'Nuevo: rutas industria y ganadería, comparador de tecnologías, casos reales, posventa y confianza.', '«¿Por qué elegir…?»: potencias corregidas, calor rápido sin promesa, seguridad visible.', 'Nuevo: banda de revisión pretemporada; DISTRIBUIDOR enlaza a la página de distribuidores; accesos a industria, ganadería y calculadora.', 'Erratas «galor» y «productos climáticos»; texto del cálculo sin «superficie a climatizar».'],
    electricos: ['Texto de cabecera propio de la tecnología eléctrica.', 'Nuevo bloque de seguridad y condiciones de uso (electricidad y ambiente por validar).', 'Nueva matriz de aplicación por uso.'],
    infrarrojos: ['Texto de cabecera propio del infrarrojo.', 'Nuevo bloque de seguridad: combustión de BTI, distancias e IP por validar.', 'Nueva matriz de aplicación por uso.'],
    canones: ['Nuevo bloque «Directo o indirecto: ¿cuál necesitas?».', 'Nueva matriz de aplicación por uso.', 'Confirmación de ventilación antes de comprar BTG y BTD.'],
    gas: ['Texto de cabecera con requisitos de ventilación.', 'Nuevo bloque de seguridad: ventilación, consumo y distancias por validar.', 'Nueva matriz de aplicación.', 'Confirmación de ventilación antes de comprar.'],
    gasoil: ['Texto de cabecera que distingue directo e indirecto.', 'Explicación en cada pestaña (Directo / Indirecto).', 'Nuevo bloque de seguridad: ventilación, consumo, autonomía y chimenea por validar.', 'Nueva matriz de aplicación.', 'Confirmación de ventilación antes de comprar los BTD.'],
    postventa: ['Tarjeta Mantenimiento: texto corregido (hablaba de recambios).', 'Nueva tabla «Qué incluye nuestra posventa» con compromisos por definir.', 'Nuevo programa de servicio en 4 niveles (condiciones por validar).'],
    mantenimiento: ['«Cumplimiento de normativas»: se quita la garantía absoluta de conformidad.'],
    garantia: ['Nuevo bloque «Condiciones de la garantía» (duración, cobertura, exclusiones y tramitación por validar).'],
    renove: ['Título y descripción SEO sin «enfriadores».', '«Envío sin cargos» por validar.'],
    nosotros: ['Presentación de la marca (identidad por validar).', 'Título «Misión, valores y visión» en lugar de «Nuestros productos más vendidos».', 'Visión: «marca referente» en lugar de «mejor empresa a nivel nacional».', 'Nuevo bloque «Cómo respaldamos cada equipo».', 'Stories: «calentar» en lugar de «combatir el calor».', 'Botón «Quiero ser distribuidor».'],
    documentacion: ['Título sin «refrigeración».', 'Documentación de frío sustituida por ficha técnica y manual de los 15 modelos BlizzTherm.'],
    faqs: ['Texto de cabecera: «de calefacción» en lugar de «climática».', '5 preguntas de refrigeración sustituidas por preguntas de calefacción.', 'Plazo «24/72 h» por validar.'],
    contacto: ['Dirección nº 45 (antes nº 38) y mapa corregido.', 'Desplegable con familias BlizzTherm (antes productos de frío).', 'Nuevo bloque opcional con datos para el cálculo térmico.', 'Errata «estas» → «estás».'],
    videos: ['Título sin «refrigeración».', 'Vídeos de frío sustituidos por los de la campaña BlizzTherm (publicación por validar).'],
    blog: [],
    industria: ['Página nueva: segmentos industriales, mensajes clave y seguridad (Sección 05 del informe).'],
    ganaderia: ['Página nueva: aplicaciones por especie, condiciones que se validan por modelo y regla comercial (Sección 06).'],
    calculadora: ['Página nueva: calculadora térmica orientativa y coste por hora (Secciones 04 y 10). Coeficientes por validar.'],
    distribuidores: ['Página nueva para la red de distribuidores (Sección 11 · prioridad 7). Condiciones por validar.']
  };
  var sum = SUM[CUR] || [];
  lg.innerHTML = '<div><b style="background:#F5C400"></b>Texto modificado</div><div><b style="background:#19A34A"></b>Bloque nuevo</div><div><b style="background:#E0262D"></b>Dato por validar</div>' +
    '<div class="sum"><b>Cambios en esta página</b>' + (sum.length ? '<ul><li>' + sum.join('</li><li>') + '</li></ul>' : 'Sin cambios propios (solo el pie y la cabecera, comunes a todas).') + '</div>' +
    '<div class="sum" style="margin-top:6px;padding-top:6px"><span style="color:#666">En todas: pie con © BlizzTherm y correo corregido. El icono de BlizzCool de la cabecera se mantiene como en la web actual.</span></div>';
  var tip = document.createElement('div'); tip.id = 'rv-tip';
  var toast = document.createElement('div'); toast.id = 'rv-toast';
  lg.title = 'Clic para mostrar u ocultar el resumen';
  lg.addEventListener('click', function () { lg.classList.toggle('min'); });
  if (window.innerWidth < 768) lg.classList.add('min');
  body.appendChild(tg); body.appendChild(lg); body.appendChild(tip); body.appendChild(toast);

  function store(v) { try { localStorage.setItem(KEY, v ? '1' : '0'); } catch (e) {} }
  function stored() { try { return localStorage.getItem(KEY) === '1'; } catch (e) { return false; } }

  function marks() {
    var on = body.classList.contains('review');
    document.querySelectorAll('a[data-pg]').forEach(function (l) {
      var k = l.getAttribute('data-pg'), p = P[k];
      if (!p) return;
      var base = p.h;
      l.setAttribute('href', on ? base + '#cambios' : base);
      var li = l.closest('li');
      var off = on && !p.chg;
      (li || l).classList.toggle('nochg', off);
      if (!li) l.classList.toggle('nochg', off);
    });
  }
  function setReview(on) {
    body.classList.toggle('review', on);
    store(on);
    marks();
    if (slider) { on ? slider.pause() : slider.play(); }
    if (!on) tip.style.display = 'none';
    if (on && location.hash !== '#cambios') history.replaceState(null, '', '#cambios');
    if (!on && location.hash === '#cambios') history.replaceState(null, '', location.pathname + location.search);
    document.dispatchEvent(new CustomEvent('bzt:review', {detail: on}));
  }
  tg.addEventListener('click', function () { setReview(!body.classList.contains('review')); });
  setReview(location.hash === '#cambios' || stored());

  document.addEventListener('click', function (e) {
    if (!body.classList.contains('review')) return;
    var l = e.target.closest('a[data-pg]');
    if (l && P[l.getAttribute('data-pg')] && !P[l.getAttribute('data-pg')].chg) {
      e.preventDefault();
      toast.textContent = 'Esta página no tiene cambios propuestos: se mantiene igual que la web actual.';
      toast.style.display = 'block';
      clearTimeout(toast._t); toast._t = setTimeout(function () { toast.style.display = 'none'; }, 2600);
    }
  }, true);

  function esc(s) { return String(s).replace(/[&<>]/g, function (c) { return {'&': '&amp;', '<': '&lt;', '>': '&gt;'}[c]; }); }
  var curEl = null;
  function showTip(e) {
    if (!body.classList.contains('review')) return;
    var el = e.target.closest('.chg');
    if (!el) { tip.style.display = 'none'; curEl = null; return; }
    if (el !== curEl) {
      curEl = el;
      var t = el.getAttribute('data-t') || 'mod';
      var antes = el.getAttribute('data-antes') || 'No existía en la web actual.';
      var h = '<h5>Antes</h5><div class="q">' + esc(antes) + '</div>' +
        '<h5>Por qué</h5><div>' + esc(el.getAttribute('data-porque') || '') + '</div>';
      if (t === 'val' && el.getAttribute('data-falta')) h += '<h5>Qué falta</h5><div>' + esc(el.getAttribute('data-falta')) + '</div>';
      tip.innerHTML = h;
      tip.className = t === 'new' ? 'new' : (t === 'val' ? 'val' : '');
      tip.style.display = 'block';
    }
    // colocar la ficha junto al cursor sin tapar el elemento marcado
    var r = el.getBoundingClientRect(), tw = tip.offsetWidth, th = tip.offsetHeight;
    var vw = window.innerWidth, vh = window.innerHeight, x, y;
    if (r.height < 140) {                     // elemento pequeño: debajo o encima
      x = Math.min(Math.max(8, e.clientX - 30), vw - tw - 8);
      y = r.bottom + 12;
      if (y + th > vh - 8) y = r.top - th - 12;
      if (y < 8) y = Math.min(vh - th - 8, e.clientY + 22);
    } else {                                   // bloque grande: sigue al cursor
      x = e.clientX + 22; y = e.clientY + 22;
      if (x + tw > vw - 8) x = e.clientX - tw - 22;
      if (y + th > vh - 8) y = e.clientY - th - 22;
      if (x < 8) x = 8; if (y < 8) y = 8;
    }
    tip.style.left = x + 'px'; tip.style.top = y + 'px';
  }
  document.addEventListener('mousemove', showTip);
  /* en pantallas táctiles la ficha se abre al tocar el elemento marcado */
  document.addEventListener('click', function (e) {
    if (!body.classList.contains('review') || !window.matchMedia('(hover: none)').matches) return;
    if (e.target.closest('.chg')) { curEl = null; showTip(e); }
  });
  document.addEventListener('scroll', function () { tip.style.display = 'none'; curEl = null; }, {passive: true});
})();
