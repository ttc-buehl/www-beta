'use strict';

(function init() {
    var nav = document.querySelector('nav')
    var toggle = document.querySelector('.nav-toggle')

    function toggleMenu() {
        if (nav.classList.contains('open')) {
            nav.classList.remove('open')
        } else {
            nav.classList.add('open')
        }
    }

    function hideMenu(ev) {
        var target = ev.target;
        if (target.closest('nav') || target.closest('.nav-toggle')) return;
        nav.classList.remove('open')
    }

    toggle.addEventListener('click', toggleMenu)
    document.addEventListener('click', hideMenu)
})()