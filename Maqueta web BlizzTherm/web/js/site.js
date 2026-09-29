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
    calculadora:   {h: W + 'calculadora.html', chg: true},
    industria:     {h: W + 'industria.html', chg: true},
    ganaderia:     {h: W + 'ganaderia.html', chg: true},
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
      '<li class="has chg" data-t="new" data-porque="Nuevo acceso a las dos rutas que pide el informe: industria y ganadería, cada una con su lenguaje y sus aplicaciones (Sección 07 · Industria / ganadería). Se suma la calculadora de potencia, que antes solo existía como PDF descargable.">' + a('industria', 'Soluciones' + CARET) +
        '<ul class="sub"><li>' + a('industria', 'Industria') + '</li><li>' + a('ganaderia', 'Ganadería') + '</li><li>' + a('calculadora', 'Calculadora de potencia') + '</li></ul></li>' +
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
      '<li>' + a('industria', 'Soluciones') + '<ul class="sub"><li>' + a('industria', 'Industria') + '</li><li>' + a('ganaderia', 'Ganadería') + '</li><li>' + a('calculadora', 'Calculadora de potencia') + '</li></ul></li>' +
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
    'distancias': 'ruler', 'combustible': 'fuel', 'instalación': 'wrench', 'duración': 'clock', 'cobertura': 'shield', 'exclusiones': 'xcircle', 'tramitación': 'clipboard', 'protección térmica': 'shield', 'seguridad': 'shield',
    'combustible y autonomía': 'fuel', 'cobertura y autonomía': 'clock'};
  /* la numeración se reinicia en cada bloque, no cada cuatro tarjetas: así un bloque
     de cinco numera 01–05 en lugar de volver a 01 en la quinta */
  document.querySelectorAll('.safety').forEach(function (box) {
    box.querySelectorAll('.s').forEach(function (s, i) {
      var lab = s.querySelector('span'); if (!lab) return;
      var d = document.createElement('div'); d.className = 'ico'; d.innerHTML = svg(LBL[lab.textContent.trim().toLowerCase()]);
      s.insertBefore(d, s.firstChild);
      var n = document.createElement('div'); n.className = 'num'; n.textContent = ('0' + (i + 1)).slice(-2); s.appendChild(n);
    });
  });
  /* el botón de WhatsApp de la banda hereda el color del botón, no el verde de la marca */
  document.querySelectorAll('a.js-wa').forEach(function (a) {
    a.innerHTML = ICO.wa + '<span>' + a.textContent.trim() + '</span>';
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


  /* ---------- tabla comparativa por familia (datos de ficha técnica) ---------- */
  var SPECS = {
    BTE: {
      t: 'Compara los cuatro <span class="hl">calefactores eléctricos</span>',
      s: 'Todos sin combustión, IP24 y con 85,0 % de eficiencia estacional. Lo que cambia es la potencia y la instalación que necesitan.',
      m: ['BTE 50', 'BTE 90', 'BTE 150', 'BTE 150R'],
      r: [
        ['Potencia nominal', ['5 kW', '9 kW', '15 kW', '15 kW'], 1],
        ['Potencia mínima', ['2,5 kW', '4,5 kW', '5 kW', '5 kW']],
        ['Modos', ['Ventilación / 2,5 / 5 kW', 'Ventilación / 4,5 / 9 kW', 'Ventilación / 5 / 10 / 15 kW', '5 / 10 / 15 kW']],
        ['Tensión', ['400 V ~ 50 Hz', '400 V 3~', '400 V 3~', '400 V 3~'], 1],
        ['Corriente nominal', ['7,2 A', '13,0 A', '21,7 A', '21,7 A']],
        ['Conexión', ['Fusible de 10 A', 'Acoplador industrial 5 polos', 'Acoplador industrial 5 polos', 'Acoplador industrial 5 polos'], 1],
        ['Protección térmica', ['Rearme automático, 70 °C', 'Rearme manual, 80 °C', 'Rearme manual, 140 °C', 'Limitador térmico']],
        ['Clase de protección', ['IP24', 'IP24', 'IP24', 'IP24']],
        ['Dimensiones', ['270 × 255 × 400 mm', '355 × 300 × 490 mm', '410 × 360 × 550 mm', '322 × 600 × 555 mm']],
        ['Peso', ['5,6 kg', '9,6 kg', '14,5 kg', '17,9 kg']]
      ]
    },
    BTI: {
      t: 'Compara los cuatro <span class="hl">infrarrojos</span>',
      s: 'Los cuatro queman gasóleo o queroseno. La diferencia decisiva: los BTC evacuan los humos por chimenea y valen para interior; los BTI no los evacuan.',
      m: ['BTI 20', 'BTI 45', 'BTC 13', 'BTC 18'],
      r: [
        ['Evacuación de humos', ['No', 'No', 'Chimenea', 'Chimenea'], 1],
        ['Dónde se usa', ['Exterior o muy ventilado', 'Exterior o muy ventilado', 'También en interior', 'También en interior'], 1],
        ['Potencia', ['20 kW', '40 kW', '13 kW', '18 kW'], 1],
        ['Superficie', ['—', '—', '70–90 m²', '110–140 m²']],
        ['Consumo', ['1,6 kg/h', '3,2 kg/h', '1 kg/h', '1,42 kg/h']],
        ['Depósito', ['10,5 L', '38 L', '22 L', '60 L']],
        ['Autonomía', ['—', '—', '~18 h', '~36 h']],
        ['Distancia mínima', ['2,5 m frontal, 1,5 m al resto', 'Ver manual', 'Ver manual', 'Ver manual']],
        ['Potencia eléctrica', ['110 W', '80 W', '60 W', '60 W']],
        ['Peso', ['18,2 kg', '28,4 kg', '41,3 kg', '62 kg']]
      ]
    },
    BTG: {
      t: 'Compara los dos <span class="hl">cañones a gas</span>',
      s: 'Los dos son de combustión directa: solo exterior o espacios muy ventilados. El BTG 30 se llama así por su potencia mínima, no por la nominal.',
      m: ['BTG 15', 'BTG 30'],
      r: [
        ['Potencia nominal', ['15,0 kW', '50,0 kW'], 1],
        ['Potencia mínima', ['-', '30,0 kW'], 1],
        ['Potencia calorífica', ['51.180 BTU', '170.600 BTU']],
        ['Consumo de gas', ['1,09 kg/h', '3,63 kg/h']],
        ['Combustible', ['GLP (G30)', 'GLP (G30)']],
        ['Categoría', ['I3B/P a 700 mbar', 'I3B/P a 700 mbar']],
        ['Inyector', ['0,90 mm', '1,4 mm']],
        ['Temperatura del aire', ['420 °C', '360 °C']],
        ['Encendido', ['Piezoeléctrico', 'Piezoeléctrico']],
        ['Corte por sobrecalentamiento', ['95 °C', '110 °C']],
        ['Alimentación', ['220–240 V, 0,07 kW', '220–240 V, 0,07 kW']]
      ]
    },
    BTD: {
      t: 'Compara los <span class="hl">cañones de gasóleo</span>',
      s: 'Cada potencia existe en dos versiones: <b>BTD</b> de combustión directa, para exterior o alta ventilación, y <b>BTH</b> con extracción de humos, que sí sirve en interior. Misma máquina base, con o sin chimenea.',
      m: ['BTD 20', 'BTD 30', 'BTD 50', 'BTH 30', 'BTH 50'],
      r: [
        ['Combustión', ['Directa', 'Directa', 'Directa', 'Con chimenea', 'Con chimenea'], 1],
        ['Dónde se usa', ['Exterior o muy ventilado', 'Exterior o muy ventilado', 'Exterior o muy ventilado', 'También en interior', 'También en interior'], 1],
        ['Potencia', ['20 kW', '30 kW', '51 kW', '30 kW', '51 kW'], 1],
        ['Caudal de aire', ['550 m³/h', '720 m³/h', '750 m³/h', '780 m³/h', '750 m³/h']],
        ['Consumo', ['1,65 kg/h', '2,4 kg/h', '4 kg/h', '2,4 kg/h', '4 kg/h']],
        ['Depósito', ['12 L', '19 L', '34 L', '50 L', '34 L']],
        ['Autonomía', ['6 h', '7 h', '7 h', '18 h', '7 h'], 1],
        ['Potencia eléctrica', ['230 W', '230 W', '340 W', '250 W', '340 W']],
        ['Corriente nominal', ['0,9 A', '1,1 A', '1,5 A', '1,5 A', '1,5 A']],
        ['Dimensiones', ['660 × 260 × 380 mm', '830 × 410 × 540 mm', '860 × 456 × 600 mm', '1110 × 490 × 750 mm', '860 × 456 × 600 mm']],
        ['Peso', ['10 kg', '18 kg', '21,8 kg', '34,4 kg', '21,8 kg']]
      ]
    }
  };
  document.querySelectorAll('[data-specs]').forEach(function (sec) {
    var k = sec.getAttribute('data-specs').trim(), d = SPECS[k];
    if (!d) return;
    sec.className = 'sec spec-sec chg';
    sec.setAttribute('data-t', 'new');
    sec.setAttribute('data-porque', 'Las cifras de cada modelo estaban repartidas entre la tarjeta de producto y la ficha en PDF, así que para comparar dos equipos había que abrir dos documentos. Esta tabla reúne los datos de las fichas técnicas oficiales en una sola vista, con la fila decisiva de cada familia destacada.');
    sec.innerHTML = '<div class="in"><div class="safe-head" style="align-items:center;text-align:center;margin:0 auto 26px">' +
        '<div class="eyebrow">Comparativa</div><h2 class="h2">' + d.t + '</h2><p>' + d.s + '</p></div>' +
      '<div class="cmp-wrap"><table class="spec"><thead><tr><th></th>' +
        d.m.map(function (m) { return '<th>' + m + '</th>'; }).join('') + '</tr></thead><tbody>' +
        d.r.map(function (row) {
          return '<tr' + (row[2] ? ' class="hi"' : '') + '><th scope="row">' + row[0] + '</th>' +
            row[1].map(function (v) { return '<td>' + v + '</td>'; }).join('') + '</tr>';
        }).join('') + '</tbody></table></div>' +
      '<p class="spec-src">Datos de las fichas técnicas oficiales de cada modelo. <a class="hl" data-pg="documentacion" href="' + W + 'documentacion.html">Descargar fichas y manuales</a></p></div>';
  });

  /* ---------- matriz de aplicación por familia ---------- */
  var APPS = ['Taller o nave cerrada', 'Nave con ventilación abundante', 'Obra o exterior', 'Explotación ganadera'];
  /* Columna de ganadería resuelta por familia: lo que decide es si la combustión queda
     con los animales, y eso sí consta en las fichas. Lo que sigue abierto por modelo
     (IP frente a amoniaco y lavado, distancias a cama y pienso) va en el tercer campo. */
  var GAN = {
    BTE: ['r', 'Sin combustión: no consume oxígeno ni emite gases',
          'Confirmar por modelo el grado IP frente al amoniaco y al lavado a presión de la nave. Los BTE son IP24: resisten salpicaduras, no el chorro directo.'],
    BTI: ['n', 'Sin evacuación: los gases se quedan con los animales', null],
    BTC: ['c', 'Gases fuera por chimenea; vigilar la distancia a cama y pienso',
          'Confirmar con el fabricante la distancia mínima a materiales combustibles y la protección frente al amoniaco.'],
    BTG: ['n', 'Combustión directa: los gases se quedan con los animales', null],
    BTD: ['n', 'Combustión directa: los gases se quedan con los animales', null],
    BTH: ['r', 'La opción para naves con animales: aire limpio y gases fuera',
          'Confirmar con el fabricante la protección frente al amoniaco y la distancia mínima a cama y pienso.']
  };
  var MX = {
    BTE: ['Eléctricos · 5 a 15 kW · BTE 50, 90, 150, 150R', [['r', 'Sin combustión en el punto de uso'], ['r', 'Según potencia necesaria'], ['c', 'Necesita toma eléctrica adecuada'], GAN.BTE]],
    BTI: ['Infrarrojos sin evacuación · 20 y 40 kW · BTI 20, 45', [['n', 'Sin evacuación de humos: usa los BTC'], ['r', 'Calor dirigido a puestos'], ['r', 'Muelles, carpas y puestos exteriores'], GAN.BTI]],
    BTC: ['Infrarrojos con extracción de humos · 13 y 18 kW · BTC 13, 18', [['r', 'Gases conducidos al exterior'], ['r', 'Calor dirigido'], ['c', 'Necesita instalación de chimenea'], GAN.BTC]],
    BTG: ['Gas directo · 15 y 50 kW · BTG 15, 30', [['n', 'Los gases quedan en el ambiente'], ['c', 'Solo con aporte de aire suficiente'], ['r', 'Alta potencia y rapidez'], GAN.BTG]],
    BTD: ['Gasóleo directo · 20 a 51 kW · BTD 20, 30, 50', [['n', 'Los gases quedan en el ambiente'], ['c', 'Solo con aporte de aire suficiente'], ['r', 'Máxima potencia y autonomía'], GAN.BTD]],
    BTH: ['Gasóleo indirecto · 30 y 51 kW · BTH 30, 50', [['r', 'Gases evacuados por chimenea'], ['r', 'Aire limpio y alta potencia'], ['r', 'Con conducto de humos'], GAN.BTH]]
  };
  var BADGE = {r: ['ok', 'Recomendado'], c: ['cond', 'Con condiciones'], n: ['no', 'No recomendado'], v: ['val', 'Consultar']};
  document.querySelectorAll('[data-matrix]').forEach(function (sec) {
    var fams = sec.getAttribute('data-matrix').split(',');
    sec.className = 'sec w1200 matrix-sec chg';
    sec.setAttribute('data-t', 'new');
    sec.setAttribute('data-porque', 'El informe pide indicar para cada equipo si es recomendado, condicionado o no recomendado según la aplicación, y no presentar ninguno como «ideal para ganaderías» sin validar especie, fase y ventilación (Sección 10 · Comparador mínimo · Aplicación; Sección 06 · Regla comercial; Sección 12 · Matriz de aplicación).');
    sec.innerHTML = '<div class="in"><div class="safe-head"><div class="eyebrow">Matriz de aplicación</div><h2 class="h2">¿Para qué uso es <span class="hl">cada equipo?</span></h2><p>Orientación por tecnología. En ganadería la regla es simple: si la combustión se queda en el aire que respiran los animales, el equipo no vale para una nave cerrada. La decisión final depende del volumen, la ventilación y las condiciones de instalación.</p></div>' +
      '<div class="cmp-wrap"><table class="mx"><thead><tr><th></th>' + APPS.map(function (x) { return '<th>' + x + '</th>'; }).join('') + '</tr></thead><tbody>' +
      fams.map(function (f) {
        var r = MX[f.trim()]; if (!r) return '';
        return '<tr><td class="fam">' + r[0] + '</td>' + r[1].map(function (c) {
          var b = BADGE[c[0]];
          var val = c[2] ? ' class="chg" data-t="prop" data-porque="La aptitud en ganadería se resuelve con lo que sí consta en ficha: si la combustión queda con los animales, el equipo no vale para una nave cerrada. Lo que sigue abierto por modelo es la resistencia al amoniaco y al lavado, y la distancia a cama y pienso." data-falta="' + esc(c[2]) + '"' : '';
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
    home: ['Nuevo: bloque de presentación de marca. BlizzTherm se explica como la marca de calor de Toolsplace, hermana de BlizzCool, sin dar por supuesto que se conoce.', 'Se retiran de la home las dos calculadoras: la calculadora térmica y el selector de temperatura del espacio de trabajo.', 'Posventa presentada por beneficios y no por planes: garantía de 1 año ampliable a 2, respuesta en 24 h (8 h con animales), repuestos en 48 h y revisión de pretemporada. Se retiran los cuatro niveles de servicio.', 'Los tres casos reales vacíos se sustituyen por «Qué documentamos de cada instalación»: qué se mide y se deja por escrito, sin inventar clientes.', 'Nuevo: cupón del 5 % a quien envíe fotos de sus equipos en uso que sirvan para publicar. Da un motivo real para conseguir los casos que faltan.', 'Confianza: origen, controles y cobertura redactados; potencias y «homologados» remitidos a la ficha técnica de cada modelo.', 'Comparador: se resuelve la familia de BTC 13 y 18 (infrarrojos con extracción de humos).', 'Nuevo: rutas industria y ganadería, comparador de tecnologías, posventa y confianza.', 'Banda de revisión pretemporada sin la coletilla «Plazas, fechas y precio por confirmar».', 'Erratas «galor» y «productos climáticos»; texto del cálculo sin «superficie a climatizar».'],
    electricos: ['Nueva tabla comparativa de los cuatro modelos con los datos de ficha: potencia, modos, tensión, intensidad, conexión, protección térmica, IP, medidas y peso.', 'Texto de cabecera propio de la tecnología eléctrica.', 'Seguridad con datos de ficha: 5 / 9 / 15 kW, 400 V, intensidades, acoplador de 5 polos, IP24 y 85 % de eficiencia estacional.', 'Nuevo apartado de protección térmica: rearme automático en el BTE 50 y manual en el 90 y el 150.', 'Nueva matriz de aplicación por uso.'],
    infrarrojos: ['Nueva tabla comparativa de los cuatro modelos, con la evacuación de humos y el uso permitido como primeras filas: es lo que decide entre un BTI y un BTC.', 'Texto de cabecera propio del infrarrojo.', 'Familia resuelta con las fichas: los BTC llevan extracción de humos y valen para interior; los BTI no la llevan y su ficha los limita a exterior o zonas muy ventiladas.', 'Distancias de seguridad del BTI 20 publicadas: 2,5 m por delante y 1,5 m al resto. Las del BTI 45 no vienen en su ficha.', 'Cobertura, depósito y autonomía de los BTC (70–90 m² / 18 h y 110–140 m² / 36 h).'],
    canones: ['Nuevo bloque «Directo o indirecto: ¿cuál necesitas?».', 'Nueva matriz de aplicación por uso.', 'Confirmación de ventilación antes de comprar BTG y BTD.'],
    gas: ['Nueva tabla comparativa de BTG 15 y BTG 30 con los datos de ficha: potencias nominal y mínima, consumo, inyector, categoría y corte por sobrecalentamiento.', 'Texto de cabecera con requisitos de ventilación.', 'Potencias reales: BTG 15 a 15 kW y BTG 30 a 50 kW nominales / 30 mínimos. Resuelve el «de 15 a 50 kW» que chocaba con los nombres de modelo.', 'Consumos, inyectores, temperatura del aire de salida y protección contra sobrecalentamiento.', 'La presión de gas del BTG 30 no se publica: su ficha se contradice (700 mbar en la categoría, 1500 en la presión).'],
    gasoil: ['Nueva tabla comparativa de los cinco modelos: cada potencia en sus dos versiones, BTD directa y BTH con extracción de humos.', 'Texto de cabecera que distingue directo e indirecto.', 'Tabla completa por modelo: potencia, caudal de aire, consumo, depósito y autonomía de BTD 20, 30, 50 y BTH 30.', 'Meta corregida: decía «De 51 a 20 kW», del revés.', 'Se explica que BTD y BTH del mismo número son la misma máquina con y sin chimenea: eso es lo que hace comparables sus cifras.'],
    postventa: ['Tarjeta Mantenimiento: texto corregido (hablaba de recambios).', 'Tarjeta Garantía: 1 año ampliable a 2 con el registro del equipo.', 'La tabla «Qué incluye nuestra posventa» deja de ser siete «Por definir»: cada fila lleva un compromiso concreto propuesto.', 'Se retira el programa de servicio en cuatro niveles (Essential, Preventive, Priority, Farm / Industry): obligaba a elegir un plan antes de entender qué se gana. En su lugar, qué va incluido de serie: garantía, respuesta en 24 h, repuestos en 48 h y diagnóstico a distancia.'],
    mantenimiento: ['«Cumplimiento de normativas»: se quita la garantía absoluta de conformidad.'],
    garantia: ['Se publica la garantía: 1 año, ampliable a 2 registrando el equipo.', 'El registro pasa a ofrecer algo a cambio: la ampliación encabeza la lista de motivos.', 'Condiciones completas: duración, cobertura, exclusiones y tramitación, con mano de obra incluida y 24 h de respuesta como propuesta a confirmar.'],
    renove: ['Título y descripción SEO sin «enfriadores».', '«Envío sin cargos» por validar.'],
    nosotros: ['Presentación de la marca: BlizzTherm como marca hermana de BlizzCool, para no dar por supuesto que ya se conoce.', 'Garantía y recambios: 1 año ampliable a 2, y piezas de desgaste en stock con expedición en 48 h.', '«Cómo respaldamos cada equipo»: procedencia, conformidad, controles y formación redactados; ya no hay seis apartados en rojo.', 'Título «Misión, valores y visión» en lugar de «Nuestros productos más vendidos».', 'Visión: «marca referente» en lugar de «mejor empresa a nivel nacional».', 'Botón «Quiero ser distribuidor».'],
    documentacion: ['Título sin «refrigeración».', 'Documentación de frío sustituida por ficha técnica y manual de los 15 modelos BlizzTherm.'],
    faqs: ['Texto de cabecera: «de calefacción» en lugar de «climática».', '5 preguntas de refrigeración sustituidas por preguntas de calefacción.', 'Nueva: «¿Quién es BlizzTherm?», que sitúa la marca como hermana de BlizzCool.', 'Nueva: «¿Qué garantía tienen los equipos?» — 1 año ampliable a 2.', 'Plazo de entrega acotado a península.'],
    contacto: ['Dirección nº 45 (antes nº 38) y mapa corregido.', 'Desplegable con familias BlizzTherm (antes productos de frío).', 'Nuevo bloque opcional con datos para el cálculo térmico.', 'Nueva opción en el desplegable para enviar fotos de equipos en uso y optar al cupón del 5 %.', 'Errata «estas» → «estás».'],
    videos: ['Título sin «refrigeración».', 'Vídeos de frío sustituidos por los tres de la campaña BlizzTherm que ya existen en la carpeta de marca; falta el visto bueno de marketing para publicarlos.'],
    blog: [],
    industria: ['Página nueva: segmentos industriales, mensajes clave y seguridad (Sección 05 del informe).', 'La llamada pasa de la calculadora a «Solicitar cálculo térmico».', 'Tiempo de calentamiento y alcance: se explica que se calculan para el espacio del cliente, en lugar de anunciar cifras sin medir.'],
    ganaderia: ['Página nueva: aplicaciones por especie, condiciones que se validan por modelo y regla comercial (Sección 06).', 'Las seis condiciones dejan de ser una bandera roja y pasan a ser la regla de la marca: ningún equipo se presenta como apto para ganadería sin comprobarlas en la instalación concreta.', 'El bloque de servicio deja de citar el «nivel Farm / Industry» y habla del beneficio: 8 h de respuesta y equipo de respaldo.'],
    distribuidores: ['Página nueva para la red de distribuidores (Sección 11 · prioridad 7).', 'Formación, repuestos y requisitos con propuesta concreta en lugar de «por validar».']
  };
  var sum = SUM[CUR] || [];
  /* la leyenda solo lista los estados que de verdad aparecen en esta página */
  var KEYS = [['mod', '#F5C400', 'Texto modificado'], ['new', '#19A34A', 'Bloque nuevo'],
              ['prop', '#2F6FEB', 'Propuesta a confirmar'], ['val', '#E0262D', 'Dato por validar']];
  lg.innerHTML = KEYS.filter(function (k) {
      return document.querySelector(k[0] === 'mod' ? '.chg:not([data-t]),.chg[data-t="mod"]' : '.chg[data-t="' + k[0] + '"]');
    }).map(function (k) { return '<div><b style="background:' + k[1] + '"></b>' + k[2] + '</div>'; }).join('') +
    '<div class="sum"><b>Cambios en esta página</b>' + (sum.length ? '<ul><li>' + sum.join('</li><li>') + '</li></ul>' : 'Sin cambios propios (solo el pie y la cabecera, comunes a todas).') + '</div>' +
    '<div class="sum" style="margin-top:6px;padding-top:6px"><span style="color:#666">En todas: pie con © BlizzTherm y correo corregido. El icono de BlizzCool de la cabecera se mantiene como en la web actual.<br><br><b>En azul</b>, las propuestas de la agencia: plazos, coberturas y compromisos redactados para la maqueta que hay que confirmar con operaciones antes de publicar. Las cifras técnicas de cada equipo (potencia útil, consumo, IP, distancias mínimas y aporte de aire) no se publican inventadas: se remiten a la ficha técnica y el manual de cada modelo.</span></div>';
  var tip = document.createElement('div'); tip.id = 'rv-tip';
  var toast = document.createElement('div'); toast.id = 'rv-toast';
  lg.title = 'Clic para mostrar u ocultar el resumen';
  lg.addEventListener('click', function () { lg.classList.toggle('min'); });
  /* el resumen arranca plegado: se abre solo si se pide, para no tapar la página */
  lg.classList.add('min');
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
  var curEl = null, sideX = 1, sideY = 1, ancX = 0, pend = null, raf = 0;
  var GAP = 28, MRG = 10;
  var isTouch = window.matchMedia('(hover: none)').matches;

  function hideTip() { tip.style.display = 'none'; curEl = null; }

  function fill(el) {
    var t = el.getAttribute('data-t') || 'mod';
    var antes = el.getAttribute('data-antes') || 'No existía en la web actual.';
    var h = '<h5>Antes</h5><div class="q">' + esc(antes) + '</div>' +
      '<h5>Por qué</h5><div>' + esc(el.getAttribute('data-porque') || '') + '</div>';
    if (el.getAttribute('data-falta')) h += '<h5>' + (t === 'prop' ? 'Qué hay que confirmar' : 'Qué falta') + '</h5><div>' + esc(el.getAttribute('data-falta')) + '</div>';
    tip.innerHTML = h;
    tip.className = (t === 'new' || t === 'val' || t === 'prop') ? t : '';
    tip.style.display = 'block';
  }

  /* El lado de la ficha (derecha o izquierda, debajo o encima) se decide una sola vez,
     al entrar en el elemento marcado. Mientras el cursor siga dentro del mismo bloque
     la ficha solo se recorta contra el borde de la ventana: antes cambiaba de lado a
     media pasada y daba un salto de más de 200 px dentro del mismo contenedor. */
  /* Si el elemento marcado despliega un submenú (los «has» de la cabecera), la ficha
     tiene que quedar más allá del desplegable: si no, lo tapa y no se puede elegir. */
  function keepClear(el) {
    var li = el.closest('li'), sub = li && li.querySelector('.sub');
    if (!sub || !sub.offsetParent) return 0;
    return sub.getBoundingClientRect().right + 14;
  }

  function place(cx, cy, el, fresh) {
    var r = el.getBoundingClientRect();
    var tw = tip.offsetWidth, th = tip.offsetHeight;
    var vw = document.documentElement.clientWidth;
    var vh = document.documentElement.clientHeight;
    var big = r.height >= 140;
    if (fresh) {
      ancX = cx + GAP;
      sideX = (cx + GAP + tw <= vw - MRG || cx - GAP - tw < MRG) ? 1 : -1;
      sideY = big
        ? ((cy + GAP + th <= vh - MRG || cy - GAP - th < MRG) ? 1 : -1)
        : ((r.bottom + 12 + th <= vh - MRG || r.top - 12 - th < MRG) ? 1 : -1);
    }
    /* la ficha va siempre a la derecha del cursor; solo salta al otro lado si no cabe */
    var x = sideX > 0 ? Math.max(big ? cx + GAP : ancX, keepClear(el)) : cx - tw - GAP;
    var y = big ? (sideY > 0 ? cy + GAP : cy - th - GAP)
                : (sideY > 0 ? r.bottom + 12 : r.top - th - 12);
    tip.style.left = Math.max(MRG, Math.min(x, vw - tw - MRG)) + 'px';
    tip.style.top = Math.max(MRG, Math.min(y, vh - th - MRG)) + 'px';
  }

  function showTip(e) {
    if (!body.classList.contains('review')) return;
    var t = e.target;
    if (!t || !t.closest) return;
    /* el panel de revisión flota sobre la página y tapa parte del contenido:
       si el cursor lo cruza, la ficha se queda como está en lugar de apagarse */
    if (t.closest('#rv-legend') || t.closest('#rv-toggle')) return;
    var el = t.closest('.chg');
    if (!el) { hideTip(); return; }
    var fresh = el !== curEl;
    if (fresh) { curEl = el; fill(el); }
    place(e.clientX, e.clientY, el, fresh);
  }

  document.addEventListener('mousemove', function (e) {
    pend = e;
    if (raf) return;
    raf = requestAnimationFrame(function () { raf = 0; if (pend) showTip(pend); });
  });
  /* la ficha no se queda colgada al salir de la ventana o al cambiar de pestaña */
  document.addEventListener('mouseleave', hideTip);
  window.addEventListener('blur', hideTip);
  window.addEventListener('resize', hideTip);
  /* en pantallas táctiles la ficha se abre al tocar el elemento marcado */
  document.addEventListener('click', function (e) {
    if (!body.classList.contains('review') || !isTouch) return;
    if (e.target.closest('.chg')) { curEl = null; showTip(e); }
  });
  document.addEventListener('scroll', hideTip, {passive: true});
})();
