/* Tarjetas de producto (datos y orden tal cual aparecen en blizztherm.es) */
(function () {
  var B = window.BZT, L = B.LIVE;
  var DB = {
    BTC18:  ['Calefactor Infrarrojo con extracción de humos BTC 18', '1.663,75', '2026/08/BGO5201-18-1.webp', '/calefactor-industrial-infrarrojos/calefactor-por-infrarrojos-btc-18/', 'BTC-18'],
    BTC13:  ['Calefactor Infrarrojo con extracción de humos BTC 13', '1.439,90', '2026/08/BGO5201-13.webp', '/calefactor-industrial-infrarrojos/calefactor-por-infrarrojos-btc-13/', 'BTC-13'],
    BTI45:  ['Calefactor Infrarrojos BTI 45', '1.167,65', '2026/08/BGO1402-45.webp', '/calefactor-industrial-infrarrojos/calefactor-por-infrarrojos-bti-45/', 'BTI-45'],
    BTI20:  ['Calefactor Infrarrojos BTI 20', '617,10', '2026/08/BGO1402-20.webp', '/calefactor-industrial-infrarrojos/calefactor-por-infrarrojos-bti-20/', 'BTI-20'],
    BTE150R:['Calefactor Eléctrico BTE 150R', '490,05', '2026/08/BGP1307-150-90G.webp', '/calefactor-industrial-electrico/calefactor-electrico-bte-150r/', 'BTE-150R'],
    BTE150: ['Calefactor Eléctrico BTE 150', '229,90', '2026/08/IFH03-150G.webp', '/calefactor-industrial-electrico/calefactor-electrico-bte-150/', 'BTE-150'],
    BTE90:  ['Calefactor Eléctrico BTE 90', '151,25', '2026/08/IFH03-90G.webp', '/calefactor-industrial-electrico/calefactor-electrico-bte-90/', 'BTE-90'],
    BTE50:  ['Calefactor Eléctrico BTE 50', '104,06', '2026/08/IFH02-50G.webp', '/calefactor-industrial-electrico/calentador-electrico-bte-50/', 'BTE-50'],
    BTG15:  ['Calefactor Gas propano/butano BTG15', '114,95', '2026/08/BGA-1401-15-18.webp', '/canon-de-calor-industrial/gas/canon-de-calor-a-gas-btg-15/', 'BTG-15'],
    BTG30:  ['Calefactor Gas propano/butano BTG30', '192,39', '2026/08/BGA1401-50-18.webp', '/canon-de-calor-industrial/gas/canon-de-calor-a-gas-btg-30/', 'BTG-30'],
    BTD20:  ['Calefactor Diésel BTD 20', '332,75', '2026/08/BGO1401-20.webp', '/canon-de-calor-industrial/gasoil/canon-de-calor-gasoil-directo-btd-20/', 'BTD-20'],
    BTD30:  ['Calefactor Diésel BTD 30', '369,05', '2026/08/BGO1401-30.webp', '/canon-de-calor-industrial/gasoil/canon-de-calor-gasoil-directo-btd-30/', 'BTD-30'],
    BTD50:  ['Calefactor Diésel BTD 50', '446,49', '2026/08/BGO1401-50.webp', '/canon-de-calor-industrial/gasoil/canon-de-calor-gasoil-directo-btd-50/', 'BTD-50'],
    BTH30:  ['Calefactor Diesel con extracción de humos BTH30', '809,49', '2026/08/BGO-30B.webp', '/canon-de-calor-industrial/gasoil/canon-de-calor-gasoil-indirecto-bth-30/', 'BTH-30'],
    BTH50:  ['Calefactor Diesel con extracción de humos BTH50', '1.252,35', '2026/08/BGO-50B.webp', '/canon-de-calor-industrial/gasoil/canon-de-calor-gasoil-indirecto-bth-50/', 'BTH-50']
  };
  window.BZT.DB = DB;
  document.querySelectorAll('ul.products[data-list]').forEach(function (ul) {
    ul.innerHTML = ul.getAttribute('data-list').split(',').map(function (k) {
      var p = DB[k.trim()]; if (!p) return '';
      var url = L + p[3];
      var direct = /^(BTG|BTD)/.test(k.trim());
      var add = direct
        ? '<a class="add chg js-direct" data-t="new" data-url="' + url + '" href="' + url + '" target="_blank" rel="noopener" data-porque="Antes de comprar un equipo de combustión directa se pide confirmar el uso en exterior o con ventilación abundante, o se ofrece asesoramiento (Sección 12 · Riesgo «recomendar equipo inadecuado»: bloqueo de compra y revisión técnica).">Añadir al carrito</a>'
        : '<a class="add" href="' + url + '" target="_blank" rel="noopener">Añadir al carrito</a>';
      return '<li class="pcard"><a class="pimg" href="' + url + '" target="_blank" rel="noopener"><img loading="lazy" src="' + B.UP + p[2] + '" onerror="this.onerror=null;this.src=\'' + B.IMG + 'productos/' + p[4] + '.png\'" alt="' + p[0] + '" width="250" height="250"></a>' +
        '<a href="' + url + '" target="_blank" rel="noopener"><h3>' + p[0] + '</h3></a>' +
        '<div class="price">' + p[1] + '&nbsp;€ <small>(IVA incl.)</small></div>' +
        add + '</li>';
    }).join('');
  });

  /* confirmación antes de comprar equipos de combustión directa */
  var modal = null, target = '';
  function open(url) {
    target = url;
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'dmodal';
      modal.innerHTML = '<div class="dm-box" role="dialog" aria-modal="true" aria-labelledby="dm-t">' +
        '<button class="dm-x" aria-label="Cerrar">×</button>' +
        '<div class="dm-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/></svg></div>' +
        '<h3 id="dm-t">Equipo de combustión directa</h3>' +
        '<p>Los gases de la combustión quedan en el ambiente. Este equipo es para <b>exteriores o espacios con ventilación abundante</b>, no apto para interiores cerrados sin renovación de aire.</p>' +
        '<label class="dm-chk"><input type="checkbox"> Confirmo que lo usaré en exterior o con ventilación abundante</label>' +
        '<div class="dm-btns"><a class="btn dm-go" href="#" target="_blank" rel="noopener" aria-disabled="true">Continuar al producto</a>' +
        '<a class="dm-alt" href="' + B.P.contacto.h + '" data-pg="contacto">Prefiero que me asesoréis</a></div></div>';
      document.body.appendChild(modal);
      var chk = modal.querySelector('input'), go = modal.querySelector('.dm-go');
      chk.addEventListener('change', function () { go.setAttribute('aria-disabled', chk.checked ? 'false' : 'true'); });
      go.addEventListener('click', function (e) { if (!chk.checked) { e.preventDefault(); return; } go.href = target; close(); });
      modal.addEventListener('click', function (e) { if (e.target === modal || e.target.closest('.dm-x')) close(); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') close(); });
    }
    modal.querySelector('input').checked = false;
    modal.querySelector('.dm-go').setAttribute('aria-disabled', 'true');
    modal.querySelector('.dm-go').href = target;
    modal.classList.add('on');
  }
  function close() { if (modal) modal.classList.remove('on'); }
  document.addEventListener('click', function (e) {
    var b = e.target.closest('.js-direct'); if (!b) return;
    e.preventDefault(); open(b.getAttribute('data-url'));
  });
})();
