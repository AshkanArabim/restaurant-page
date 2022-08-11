const events = (function() {
    function addClasses(element) {
        for(let i = 1 ; i < arguments.length ; i++) {
            element.classList.add(arguments[i]);
        }
    }
    function removeClasses(element) {
        for(let i = 1 ; i < arguments.length ; i++) {
            element.classList.remove(arguments[i]);
        }
    }

    const selector = document.querySelector('.selector');
    const menuBtn = document.querySelector('#menubtn');
    const homeBtn = document.querySelector('#homebtn');
    const aboutBtn = document.querySelector('#aboutbtn');

    const menu = document.querySelector('.menu');
    const home = document.querySelector('.home');
    const about = document.querySelector('.about');
    
    menuBtn.addEventListener('click', () => {
        selector.classList.add('atmenu');
        selector.classList.remove('atabout');
        menu.classList.add('showpage');
        home.classList.remove('showpage');
        about.classList.remove('showpage');
    });
    homeBtn.addEventListener('click', () => {
        removeClasses(selector, 'atmenu', 'atabout');
        menu.classList.remove('showpage');
        home.classList.add('showpage');
        about.classList.remove('showpage');
    });
    aboutBtn.addEventListener('click', () => {
        selector.classList.add('atabout');
        selector.classList.remove('athome');
        menu.classList.remove('showpage');
        home.classList.remove('showpage');
        about.classList.add('showpage');
    });
}) ();