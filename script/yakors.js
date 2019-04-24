function linkNav(tag){
    return document.querySelectorAll(tag);
}
var V = 0.51;
function routerSection(section){
    for (var i = 0; i < linkNav(section).length; i++) {
        linkNav(section)[i].addEventListener('click', function(e) { //по клику на ссылку
            e.preventDefault(); //отменяем стандартное поведение
            var w = window.pageYOffset,  // производим прокрутка прокрутка
                hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
            t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
                start = null;
            requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]
            function step(time) {
                if (start === null) start = time;
                var progress = time - start,
                    r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
                window.scrollTo(0,r);
                if (r != w + t) {
                    requestAnimationFrame(step)
                } else {
                    location.hash = hash  // URL с хэшем
                }
            }
        }, false);
    }
}
routerSection('.scroll-icon a');
routerSection('.menu-li a');
routerSection('.about-li a');
routerSection('.portfolio-li a');
routerSection('.contact-li a');
routerSection('.a');
routerSection('.btns-wrap a');