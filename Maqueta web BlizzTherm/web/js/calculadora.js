/* Calculadora de potencia BlizzTherm
   Formula del documento de seleccion:  kW = V x dT x K / 860
   Verificada contra la tabla del PDF (dT = 30 C): reproduce sus 16 filas. */
(function () {
  var calc = document.getElementById('calc');
  if (!calc) return;

  var FAM = {
    electrico:  { txt: 'Eléctrico',         h: 'electricos.html',     pg: 'electricos'  },
    infrarrojo: { txt: 'Infrarrojo',        h: 'infrarrojos.html',    pg: 'infrarrojos' },
    gas:        { txt: 'Gas',               h: 'canones-gas.html',    pg: 'gas'         },
    directo:    { txt: 'Gasoil directo',    h: 'canones-gasoil.html', pg: 'gasoil'      },
    indirecto:  { txt: 'Gasoil indirecto',  h: 'canones-gasoil.html', pg: 'gasoil'      }
  };
  var ORDEN = ['electrico', 'infrarrojo', 'gas', 'directo', 'indirecto'];

  var MODELOS = [
    { ref: 'BTE 50',   kw: 5,  fam: 'electrico'  },
    { ref: 'BTE 90',   kw: 9,  fam: 'electrico'  },
    { ref: 'BTE 150',  kw: 15, fam: 'electrico'  },
    { ref: 'BTE 150R', kw: 15, fam: 'electrico'  },
    { ref: 'BTC 13',   kw: 13, fam: 'infrarrojo' },
    { ref: 'BTC 18',   kw: 18, fam: 'infrarrojo' },
    { ref: 'BTI 20',   kw: 20, fam: 'infrarrojo' },
    { ref: 'BTI 45',   kw: 40, fam: 'infrarrojo' },
    { ref: 'BTG 15',   kw: 15, fam: 'gas'        },
    { ref: 'BTG 30',   kw: 50, fam: 'gas', nota: 'dos etapas, 30-50 kW' },
    { ref: 'BTD 20',   kw: 20, fam: 'directo'    },
    { ref: 'BTD 30',   kw: 30, fam: 'directo'    },
    { ref: 'BTD 50',   kw: 51, fam: 'directo'    },
    { ref: 'BTH 30',   kw: 30, fam: 'indirecto'  },
    { ref: 'BTH 50',   kw: 51, fam: 'indirecto'  }
  ];

  var $ = function (id) { return document.getElementById(id); };
  var K = 0.5;
  var nf = function (n, d) { return n.toLocaleString('es-ES', { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); };

  $('ciso').addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('.iso') : null;
    if (!b) return;
    var all = this.querySelectorAll('.iso');
    for (var i = 0; i < all.length; i++) all[i].classList.remove('on');
    b.classList.add('on');
    K = parseFloat(b.getAttribute('data-k'));
    render();
  });

  var ids = ['sup', 'alt', 'text', 'tobj'];
  for (var i = 0; i < ids.length; i++) $(ids[i]).addEventListener('input', render);

  function num(id, min) {
    var v = parseFloat($(id).value);
    if (isNaN(v)) return null;
    if (min !== undefined && v < min) return null;
    return v;
  }

  function render() {
    var sup = num('sup', 1), alt = num('alt', 1);
    var te = num('text'), to = num('tobj');
    var V = (sup !== null && alt !== null) ? sup * alt : null;
    var dT = (te !== null && to !== null) ? to - te : null;

    $('vol').textContent = V === null ? '—' : nf(V);
    $('dt').textContent = dT === null ? '—' : nf(dT);

    if (V === null || dT === null || dT <= 0) {
      $('kw').textContent = '—';
      $('formula').textContent = dT !== null && dT <= 0 ? 'La temperatura deseada debe ser mayor que la exterior.' : '';
      $('modelos').innerHTML = '';
      $('aviso').textContent = '';
      return;
    }

    var kw = V * dT * K / 860;
    $('kw').innerHTML = nf(kw, 1).replace(',0', '') + ' <small>kW</small>';
    $('formula').textContent = nf(V) + ' m³ × ' + nf(dT) + ' °C × ' + String(K).replace('.', ',') + ' ÷ 860';

    // Por cada familia, el equipo mas pequeno que llega a la potencia pedida
    var html = '', sinCobertura = 0, maxUds = 1;
    for (var f = 0; f < ORDEN.length; f++) {
      var fam = ORDEN[f], cand = null, mayor = null;
      for (var m = 0; m < MODELOS.length; m++) {
        var mo = MODELOS[m];
        if (mo.fam !== fam) continue;
        if (!mayor || mo.kw > mayor.kw) mayor = mo;
        if (mo.kw >= kw && (!cand || mo.kw < cand.kw)) cand = mo;
      }
      if (!mayor) continue;
      var F = FAM[fam], fila;
      if (cand) {
        fila = '<b>' + cand.ref + '</b><span>' + nf(cand.kw) + ' kW' + (cand.nota ? ' · ' + cand.nota : '') + '</span>';
      } else {
        var n = Math.ceil(kw / mayor.kw);
        if (n > maxUds) maxUds = n;
        sinCobertura++;
        fila = '<b>' + n + ' × ' + mayor.ref + '</b><span>Un solo equipo no llega: ' + n + ' unidades de ' + nf(mayor.kw) + ' kW</span>';
      }
      html += '<a class="cmod' + (cand ? '' : ' multi') + '" href="' + F.h + '" data-pg="' + F.pg + '">' +
              '<i>' + F.txt + '</i>' + fila + '</a>';
    }
    $('modelos').innerHTML = html;
    if (maxUds > 3) {
      // A partir de cierta potencia el reparto de equipos deja de ser una eleccion
      // de catalogo y pasa a ser un proyecto: donde van, como se reparte el calor
      // y como se ventila. Se dirige al estudio en vez de dar un numero de unidades.
      $('aviso').innerHTML = 'Con esta potencia ya no basta con elegir un equipo: hay que decidir cuántos, dónde van y cómo se ventila. Eso es un estudio térmico.' +
        '<a class="cbtn" data-pg="contacto" href="contacto.html">Pedir estudio térmico</a>';
    } else if (sinCobertura) {
      $('aviso').textContent = 'En las familias marcadas ningún equipo alcanza la potencia por sí solo; se indica cuántas unidades harían falta.';
    } else {
      $('aviso').textContent = '';
    }
  }

  render();
})();
