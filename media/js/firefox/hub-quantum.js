/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function (Mozilla, Waypoint) {
    'use strict';

    // Basic feature detect for 1st class JS features.
    function cutsTheMustard() {
        return 'querySelector' in document &&
                'querySelectorAll' in document &&
                'addEventListener' in window &&
                typeof window.matchMedia !== 'undefined' &&
                typeof HTMLMediaElement !== 'undefined';
    }

    // Returns an elements position offset from the top of the page.
    function findPos(obj) {
        var top = 0;
        do {
            top += obj.offsetTop;
            obj = obj.offsetParent;
        } while (obj);

        return top;
    }

    function scrollToElem(e) {
        e.preventDefault();
        var targetName = e.target.getAttribute('href').replace(/#/, '');
        var targetElem = document.getElementById(targetName);

        if (targetElem) {
            Mozilla.smoothScroll({
                top: findPos(targetElem)
            });
        }
    }

    if (cutsTheMustard()) {
        document.querySelector('main').className = 'supports-videos';

        var stickyNavLinks = document.querySelectorAll('.feature-videos-nav a');

        for (var i = 0; i < stickyNavLinks.length; i++) {
            // Scroll smoothly to the linked section
            stickyNavLinks[i].addEventListener('click', scrollToElem, false);
        }
    }

})(window.Mozilla, window.Waypoint);
