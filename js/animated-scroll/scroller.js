'use strict';

var navBar = document.getElementById('top-nav'),
    navItems = navBar.getElementsByTagName('a'),
    navBarHeight = navBar.offsetHeight,
    prevSelected = navBar.getElementsByClassName('active')[0],
    scrollItems = [],
    lastId,
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
    var item = navItems[i];

    var anchor = item.getAttribute('href');
    scrollItems.push(getElementFromAnchor(anchor));

    item.addEventListener('click', function(e) {
        e.preventDefault();
        scrollClick(this);
    });
}

function getElementFromAnchor(anchor) {
    return document.getElementById(anchor.slice(1));
}

//Get the div and offset of that div to scroll to
//Also unset and set the active class on current nav item
function scrollClick(item) {
    var anchor = item.getAttribute('href'),
        elem = getElementFromAnchor(anchor),
        offset = elem.offsetTop - navBarHeight;

    prevSelected.classList.remove('active');
    prevSelected = item.parentNode;
    prevSelected.classList.add('active');
    lastId = anchor;

    animateScrollTo(offset, scrollOptions);
}

//Bind to scroll to set navbar highlighted item
window.onscroll = function() {
    // Get container scroll position
    var fromTop = document.documentElement.scrollTop + navBarHeight;// + navBarHeight;// + 300; //Edit this + number for smaller/larger windows to change it
    if ((window.innerHeight + window.scrollY) > document.body.offsetHeight) {
        fromTop = document.body.offsetHeight;
    }

    // Get id of current scroll item
    var cur = scrollItems.filter(function(val){
        // if the div offset top is less than the current scroll plus 1/3 the window height
        if ((val.offsetTop - navBarHeight) < (fromTop + (window.innerHeight/3)))
            return val;
    });

    // Get the id of the current element
    cur = cur[cur.length-1];
    var id = cur ? cur.id : "about";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        prevSelected.classList.remove('active');
        prevSelected = document.getElementById(id + '-nav').parentNode;
        prevSelected.classList.add('active');
    }
};