/* Maqueta Blizzcool · comportamiento de la réplica + modo «Ver cambios» (v13) */
(function () {
  'use strict';
  var BZ = window.BZ = { paused: false };
  var body = document.body;

  function settings(el) {
    try { return JSON.parse(el.getAttribute('data-settings') || '{}'); } catch (e) { return {}; }
  }
  function toast(msg) {
    var t = document.createElement('div');
    t.className = 'bz-toast';
    t.textContent = msg;
    body.appendChild(t);
    setTimeout(function () { t.classList.add('bz-show'); }, 10);
    setTimeout(function () { t.classList.remove('bz-show'); setTimeout(function () { t.remove(); }, 300); }, 2600);
  }
  BZ.toast = toast;
  window.bzFormDemo = function (e) {
    if (e) e.preventDefault();
    toast('Maqueta: este formulario no envía datos.');
    return false;
  };

  /* ---------- menú: móvil ---------- */
  document.querySelectorAll('.elementor-menu-toggle').forEach(function (t) {
    t.addEventListener('click', function () {
      var on = !t.classList.contains('elementor-active');
      t.classList.toggle('elementor-active', on);
      t.setAttribute('aria-expanded', on ? 'true' : 'false');
      var dd = t.parentNode.querySelector('.elementor-nav-menu__container.elementor-nav-menu--dropdown');
      if (dd) {
        dd.classList.toggle('bz-dd-open', on);
        var wd = t.closest('.elementor-widget-nav-menu');
        if (on && wd && wd.classList.contains('elementor-nav-menu--stretch')) {
          var r = wd.getBoundingClientRect();
          var hb = t.closest('.elementor-location-header');
          dd.style.position = 'fixed';
          dd.style.width = document.documentElement.clientWidth + 'px';
          dd.style.left = '0px';
          dd.style.top = (hb ? hb.getBoundingClientRect().bottom : r.bottom) + 'px';
        }
      }
    });
  });
  document.querySelectorAll('nav.elementor-nav-menu--dropdown .sub-arrow').forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault(); e.stopPropagation();
      var li = a.closest('li');
      li.classList.toggle('bz-open');
      a.parentNode.classList.toggle('highlighted');
    });
  });

  /* ---------- fondo en pase de diapositivas (hero) ---------- */
  document.querySelectorAll('[data-settings*="background_slideshow_gallery"]').forEach(function (el) {
    var st = settings(el);
    var imgs = (st.background_slideshow_gallery || []).map(function (g) { return g.url; });
    if (!imgs.length) return;
    var dur = st.background_slideshow_slide_duration || 5000;
    var tdur = st.background_slideshow_transition_duration || 500;
    var ss = document.createElement('div');
    ss.className = 'elementor-background-slideshow swiper swiper-initialized swiper-horizontal';
    var wr = document.createElement('div');
    wr.className = 'swiper-wrapper';
    imgs.concat([imgs[0]]).forEach(function (u) {
      var sl = document.createElement('div');
      sl.className = 'elementor-background-slideshow__slide swiper-slide';
      var im = document.createElement('div');
      im.className = 'elementor-background-slideshow__slide__image';
      im.style.backgroundImage = 'url("' + u + '")';
      sl.appendChild(im); wr.appendChild(sl);
    });
    ss.appendChild(wr);
    el.insertBefore(ss, el.firstChild);
    var i = 0, n = imgs.length;
    var fade = (st.background_slideshow_slide_transition || '') === 'fade';
    function go() {
      if (BZ.paused) return;
      i++;
      wr.style.transition = 'transform ' + tdur + 'ms ease';
      wr.style.transform = 'translateX(' + (-100 * i) + '%)';
      if (i === n) {
        setTimeout(function () { wr.style.transition = 'none'; wr.style.transform = 'translateX(0)'; i = 0; }, tdur + 20);
      }
    }
    if (!fade) setInterval(go, dur + tdur);
  });

  /* ---------- carruseles de productos (loop carousel) ---------- */
  function bp() { var w = window.innerWidth; return w <= 767 ? 'mobile' : (w <= 1024 ? 'tablet' : 'desktop'); }
  document.querySelectorAll('.elementor-widget-loop-carousel').forEach(function (w) {
    var st = settings(w);
    var sw = w.querySelector('.swiper');
    var wr = w.querySelector('.swiper-wrapper');
    if (!sw || !wr) return;
    var slides = Array.prototype.slice.call(wr.children);
    sw.classList.add('swiper-initialized', 'swiper-horizontal');
    var idx = 0;
    var gap = (st.image_spacing_custom && st.image_spacing_custom.size != null) ? +st.image_spacing_custom.size : 10;
    function per() {
      var b = bp();
      var v = b === 'mobile' ? (st.slides_to_show_mobile || 1) : b === 'tablet' ? (st.slides_to_show_tablet || 2) : (st.slides_to_show || 3);
      return Math.min(+v, slides.length);
    }
    function layout(anim) {
      var p = per();
      slides.forEach(function (s) { s.style.width = '0px'; });
      var W = sw.getBoundingClientRect().width;
      var sWidth = (W - gap * (p - 1)) / p;
      var max = Math.max(0, slides.length - p);
      if (idx > max) idx = 0;
      if (idx < 0) idx = max;
      wr.style.display = 'flex';
      wr.style.transition = anim ? 'transform .5s ease' : 'none';
      slides.forEach(function (s) { s.style.width = sWidth + 'px'; s.style.marginRight = gap + 'px'; s.style.flexShrink = '0'; });
      wr.style.transform = 'translateX(' + (-(sWidth + gap) * idx) + 'px)';
      var bullets = w.querySelectorAll('.swiper-pagination-bullet');
      bullets.forEach(function (b, k) { b.classList.toggle('swiper-pagination-bullet-active', k === idx); });
    }
    var pag = w.querySelector('.swiper-pagination');
    function buildPag() {
      if (!pag) return;
      pag.innerHTML = '';
      var count = Math.max(1, slides.length - per() + 1);
      for (var k = 0; k < count; k++) {
        var b = document.createElement('span');
        b.className = 'swiper-pagination-bullet';
        (function (k) { b.addEventListener('click', function () { idx = k; layout(true); }); })(k);
        pag.appendChild(b);
      }
      pag.classList.add('swiper-pagination-bullets', 'swiper-pagination-horizontal');
    }
    var prev = w.querySelector('.elementor-swiper-button-prev');
    var next = w.querySelector('.elementor-swiper-button-next');
    if (prev) prev.addEventListener('click', function () { idx--; layout(true); });
    if (next) next.addEventListener('click', function () { idx++; layout(true); });
    var hover = false;
    if (st.pause_on_hover === 'yes') {
      w.addEventListener('mouseenter', function () { hover = true; });
      w.addEventListener('mouseleave', function () { hover = false; });
    }
    if (st.autoplay === 'yes') {
      setInterval(function () { if (!hover && !BZ.paused) { idx++; layout(true); } }, st.autoplay_speed || 5000);
    }
    buildPag(); layout(false);
    window.addEventListener('resize', function () { buildPag(); layout(false); });
  });

  /* ---------- listado de entradas (widget Posts): proporción de miniaturas ---------- */
  document.querySelectorAll('.elementor-posts-container').forEach(function (c) {
    c.classList.add('elementor-has-item-ratio');
  });

  /* ---------- vídeo ---------- */
  document.querySelectorAll('.elementor-widget-video').forEach(function (w) {
    var st = settings(w);
    var box = w.querySelector('.elementor-video') || w.querySelector('.elementor-wrapper');
    if (!box || box.querySelector('iframe,video')) return;
    if (st.video_type === 'youtube' && st.youtube_url) {
      var m = st.youtube_url.match(/(?:v=|youtu\.be\/|embed\/|shorts\/)([\w-]{11})/);
      if (m) {
        var f = document.createElement('iframe');
        f.src = 'https://www.youtube.com/embed/' + m[1];
        f.setAttribute('allowfullscreen', '');
        f.className = 'elementor-video';
        f.style.cssText = 'width:100%;height:100%;border:0';
        box.appendChild(f);
      }
    }
  });

  /* ---------- acordeón: solo uno abierto (como en la web) ---------- */
  document.querySelectorAll('.e-n-accordion').forEach(function (acc) {
    var items = acc.querySelectorAll(':scope > details');
    items.forEach(function (d) {
      d.addEventListener('toggle', function () {
        if (d.open) items.forEach(function (o) { if (o !== d) o.open = false; });
      });
    });
  });

  /* ---------- propuestas alternativas (comparar opciones de diseño) ---------- */
  document.querySelectorAll('.bz-alts').forEach(function (box) {
    box.querySelectorAll('.bz-alt-switch button').forEach(function (b) {
      b.addEventListener('click', function () {
        var n = b.getAttribute('data-show');
        box.classList.toggle('show-2', n === '2');
        box.querySelectorAll('.bz-alt-switch button').forEach(function (x) { x.classList.toggle('on', x === b); });
      });
    });
  });

  /* ---------- menú de escritorio: desplegables con retardo (como smartmenus) ---------- */
  document.querySelectorAll('.elementor-nav-menu--main .elementor-nav-menu li.menu-item-has-children').forEach(function (li) {
    var t = null;
    li.addEventListener('mouseenter', function () {
      clearTimeout(t);
      Array.prototype.forEach.call(li.parentNode.children, function (s) { if (s !== li) { s.classList.remove('bz-hover'); var a = s.querySelector(':scope > a'); if (a) a.classList.remove('highlighted'); } });
      li.classList.add('bz-hover');
      var a = li.querySelector(':scope > a'); if (a) a.classList.add('highlighted');
    });
    li.addEventListener('mouseleave', function () {
      t = setTimeout(function () {
        li.classList.remove('bz-hover');
        var a = li.querySelector(':scope > a'); if (a) a.classList.remove('highlighted');
      }, 400);
    });
  });

  /* ---------- modo «Ver cambios» (mismo funcionamiento que la maqueta de Jender) ---------- */
  var changed = window.BZ_CHANGED || [];
  var nChg = document.querySelectorAll('[data-chg]').length;
  var nNew = document.querySelectorAll('[data-new]').length;
  var nPend = document.querySelectorAll('[data-pend]').length;
  var hasChanges = nChg + nNew + nPend > 0;

  // franja superior
  var note = document.createElement('div');
  note.className = 'replica-note' + (hasChanges ? ' has-chg' : '');
  note.textContent = hasChanges
    ? 'PÁGINA CON PROPUESTAS · Contenido actual de blizzcool.es con los cambios del informe (' + nChg + ' CAMBIO · ' + nNew + ' NUEVO · ' + nPend + ' VALIDAR). Pasa el ratón por los recuadros para ver el texto anterior o el motivo.'
    : 'RÉPLICA · Contenido actual de blizzcool.es, sin cambios.';
  body.insertBefore(note, body.firstChild);

  // botón y leyenda
  var hint = document.createElement('div');
  hint.className = 'review-hint';
  hint.innerHTML = 'Pasa el ratón por los recuadros: <b>Amarillo</b> texto modificado · <i>Verde</i> bloque añadido · <u>Rojo</u> dato por validar · <s>Menú en gris</s> páginas sin cambios (réplicas)';
  body.appendChild(hint);
  var sw = document.createElement('button');
  sw.type = 'button';
  sw.className = 'review-toggle';
  sw.innerHTML = '<span class="sw"></span>Ver cambios <small>(maqueta)</small>';
  body.appendChild(sw);
  var tip = document.createElement('div');
  tip.className = 'blocked-tip';
  tip.textContent = 'Página sin cambios (réplica). Desactiva «Ver cambios» para navegar.';
  body.appendChild(tip);

  function slugOf(href) {
    if (!href || /^https?:/.test(href)) return null;
    var f = href.split('#')[0].split('?')[0];
    if (!/\.html$/.test(f)) return null;
    return f.split('/').pop().replace('.html', '');
  }
  // menú: páginas sin cambios propios -> li.nochg (se ponen en gris y se bloquean en «Ver cambios»)
  function liHasChg(li) {
    var a = li.querySelector(':scope > a');
    var s = a ? slugOf(a.getAttribute('href')) : null;
    if (s && changed.indexOf(s) >= 0) return true;
    return Array.prototype.some.call(li.querySelectorAll(':scope > ul > li'), liHasChg);
  }
  document.querySelectorAll('.elementor-location-header .elementor-nav-menu li').forEach(function (li) {
    if (!liHasChg(li)) li.classList.add('nochg');
  });
  document.querySelectorAll('.elementor-location-header .elementor-widget-fibosearch, .elementor-location-header .elementor-widget-shortcode').forEach(function (w) {
    w.classList.add('nochg-w');
  });

  var KEY = 'blizzcool-maqueta-cambios';
  function set(on) {
    body.classList.toggle('show-changes', on);
    BZ.paused = on;
    try { localStorage.setItem(KEY, on ? '1' : '0'); } catch (e) {}
  }
  var on = location.hash === '#cambios';
  try { on = on || localStorage.getItem(KEY) === '1'; } catch (e) {}
  set(on);
  sw.addEventListener('click', function () { set(!body.classList.contains('show-changes')); });

  // ficha flotante al pasar el ratón: no tapa el texto y separa «Antes» y «Por qué»
  var card = document.createElement('div');
  card.className = 'bz-hovercard';
  body.appendChild(card);
  function escH(t) { return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  document.addEventListener('mouseover', function (e) {
    if (!body.classList.contains('show-changes')) { card.classList.remove('on'); return; }
    var m = e.target.closest && e.target.closest('[data-chg],[data-new],[data-pend]');
    if (!m) { card.classList.remove('on'); return; }
    var k, v, h = '';
    if (m.hasAttribute('data-chg')) { k = 'CAMBIO'; v = m.getAttribute('data-chg'); }
    else if (m.hasAttribute('data-new')) { k = 'NUEVO'; v = m.getAttribute('data-new'); }
    else { k = 'VALIDAR'; v = m.getAttribute('data-pend'); }
    var parts = v.split(/\n\n/);
    parts.forEach(function (p) {
      var mm = p.match(/^(Antes|Por qué):\s*([\s\S]*)$/);
      if (mm) h += '<div class="r"><span>' + mm[1] + '</span>' + escH(mm[2]) + '</div>';
      else h += '<div class="r"><span>' + (k === 'VALIDAR' ? 'Qué falta' : 'Por qué') + '</span>' + escH(p) + '</div>';
    });
    card.className = 'bz-hovercard on k-' + k.toLowerCase();
    card.innerHTML = '<b>' + k + '</b>' + h;
  });
  document.addEventListener('mousemove', function (e) {
    if (!card.classList.contains('on')) return;
    var w = card.offsetWidth, hh = card.offsetHeight;
    var x = e.clientX + 18, y = e.clientY + 20;
    if (x + w > window.innerWidth - 12) x = Math.max(12, e.clientX - w - 18);
    if (y + hh > window.innerHeight - 12) y = Math.max(12, e.clientY - hh - 16);
    card.style.left = x + 'px'; card.style.top = y + 'px';
  });

  var tipT;
  document.addEventListener('click', function (e) {
    if (!body.classList.contains('show-changes')) return;
    var li = e.target.closest && e.target.closest('.elementor-location-header li.nochg, .elementor-location-header .nochg-w');
    if (li) {
      e.preventDefault(); e.stopPropagation();
      tip.classList.add('on'); clearTimeout(tipT); tipT = setTimeout(function () { tip.classList.remove('on'); }, 2200);
    }
  }, true);
  // «Ver cambios» se mantiene al cambiar de página (#cambios en los enlaces)
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href]');
    if (!a || e.defaultPrevented) return;
    var h = a.getAttribute('href');
    if (!/\.html(#.*)?$/.test(h)) return;
    var base = h.split('#')[0];
    if (body.classList.contains('show-changes')) a.setAttribute('href', base + '#cambios');
    else if (/#cambios$/.test(h)) a.setAttribute('href', base);
  });
})();
