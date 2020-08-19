/*! */

// Acknowledgements:
// This portfolio was built was assistance from the following templates:
//     - https://startbootstrap.com/themes/stylish-portfolio/
//     - https://github.com/StartBootstrap/startbootstrap-stylish-portfolio
//     - https://startbootstrap.com/themes/resume/
//     - https://github.com/StartBootstrap/startbootstrap-resume
// "Start Bootstrap is an open source library of free Bootstrap themes and templates.
// All of the free themes and templates on Start Bootstrap are released under the MIT license,
// which means you can use them for any purpose, even for commercial projects."


(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#sideNav",
    });
})(jQuery); // End of use strict
