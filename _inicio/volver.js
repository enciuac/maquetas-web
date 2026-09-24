/* Botón flotante "Volver al inicio" del selector de maquetas */
(function () {
  try { if (window.top !== window.self) return; } catch (e) { return; }
  var s = document.currentScript, src = s && s.getAttribute('src') || '';
  var home = src.replace(/_inicio\/volver\.js.*$/, '') + 'index.html';
  function add() {
    if (document.getElementById('mq-volver')) return;
    var st = document.createElement('style');
    st.textContent = '#mq-volver{position:fixed;left:0;top:50%;transform:translateY(-50%);z-index:2147483000;display:flex;align-items:center;gap:8px;background:#111827;color:#fff!important;font:600 13px/1 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;text-decoration:none!important;padding:12px 14px 12px 10px;border-radius:0 10px 10px 0;box-shadow:0 6px 20px rgba(0,0,0,.25);opacity:.9;transition:opacity .2s,padding .2s}' +
      '#mq-volver:hover{opacity:1;padding-left:16px}#mq-volver svg{width:18px;height:18px;flex:none}' +
      '#mq-volver span{max-width:0;overflow:hidden;white-space:nowrap;transition:max-width .25s}#mq-volver:hover span,#mq-volver:focus span{max-width:160px}' +
      '@media (max-width:767px){#mq-volver{padding:9px 7px 9px 5px;opacity:.75;top:62%}#mq-volver svg{width:15px;height:15px}}@media print{#mq-volver{display:none}}';
    document.head.appendChild(st);
    var a = document.createElement('a');
    a.id = 'mq-volver'; a.href = home; a.title = 'Volver al selector de maquetas';
    a.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/></svg><span>Todas las maquetas</span>';
    document.body.appendChild(a);
  }
  if (document.body) add(); else document.addEventListener('DOMContentLoaded', add);
})();
