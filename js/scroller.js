'use strict';

var navBar = document.getElementById('top-nav'),
    navItems = navBar.getElementsByTagName('a'),
    scrollOptions = {
        // duration of the scroll per 1000px, default 500
        speed: 600,

        // minimum duration of the scroll
        minDuration: 250,

        // maximum duration of the scroll
        maxDuration: 3000,

        // should animated scroll be canceled on user scroll/keypress
        // if set to "false" user input will be disabled until animated scroll is complete
        cancelOnUserAction: true
    };

for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function(e) {
        e.preventDefault();
        scrollClick(this);
    });
}

function scrollClick(item) {
    var anchor = item.getAttribute('href').slice(1),
        elem = document.getElementById(anchor),
        offset = elem.offsetTop - navBar.offsetHeight;

    animateScrollTo(offset, scrollOptions);
}