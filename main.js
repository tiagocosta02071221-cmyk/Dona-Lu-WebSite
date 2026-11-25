document.querySelectorAll('[data-wa]').forEach(function(a){
var m=a.getAttribute('data-wa')||'Olá, Dona Lu! Gostaria de fazer uma encomenda.';
a.href='https://wa.me/5514997836322?text='+encodeURIComponent(m);a.target='_blank';a.rel='noopener';});

if ('IntersectionObserver' in window) {
var revealItems=document.querySelectorAll('.hero-grid > div, .hero-img, .head, .sub, .trio > div, .grid > .card, .feat, .steps > div, .final .wrap > *');
var revealObserver=new IntersectionObserver(function(entries){
var shown=0;
entries.forEach(function(entry){
if(entry.isIntersecting){
entry.target.style.setProperty('--reveal-delay',Math.min(shown*90,270)+'ms');
shown++;
entry.target.classList.add('is-visible');
} else {
entry.target.classList.remove('is-visible');
}
});
},{threshold:0.1,rootMargin:'0px 0px -32px 0px'});

revealItems.forEach(function(item){
item.classList.add('reveal');
revealObserver.observe(item);
});
document.documentElement.classList.add('js-reveal');
}