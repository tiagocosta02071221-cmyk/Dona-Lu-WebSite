document.querySelectorAll('[data-wa]').forEach(function(a){
var m=a.getAttribute('data-wa')||'Olá, Dona Lu! Gostaria de fazer uma encomenda.';
a.href='https://wa.me/5514997836322?text='+encodeURIComponent(m);a.target='_blank';a.rel='noopener';});
