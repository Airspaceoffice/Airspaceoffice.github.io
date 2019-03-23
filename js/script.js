/*

Style   : MobApp Script JS
Version : 1.0
Author  : Surjith S M
URI     : https://surjithctly.in/

Copyright © All rights Reserved 

*/

$(function () {
    "use strict";


    /*-----------------------------------
     * LOADING NAV BAR AND FOOTER
     *-----------------------------------*/
    function addSharedNavAndFooter() {
        var navBar =   '<div class="nav-menu fixed-top">' +
        '<div class="container">' +
        '<div class="row">' +
        '<div class="col-md-12">' +
        '<nav style="color: #ffff;" class="navbar navbar-dark navbar-expand-lg">' +
        '<a class="navbar-brand" href="./index.html"><img src="./images/logo.png" class="nav-logo" alt="logo"></a>' +
        '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span></button>' +
        '<div class="collapse navbar-collapse" id="navbar">' +
        '<ul class="navbar-nav ml-auto">' +
        /*'<li class="nav-item dropdown">' +
        '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Business Solutions' +
        '</a>'+
        '<div class="dropdown-menu" aria-labelledby="navbarDropdown">'+
          '<a class="dropdown-item" href="./office-by-airspace.html">Office by Airspace</a>' +
          '<div class="dropdown-divider"></div>' +
          '<a class="dropdown-item" href="./serviced-by-airspace.html">Serviced by Airspace</a>' +
        '</div>'+
        ' </li>'+
        '<li class="nav-item dropdown">' +
        '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Landlord Solutions' +
        '</a>'+
        '<div class="dropdown-menu" aria-labelledby="navbarDropdown">'+
          '<a class="dropdown-item" href="./powered-by-airspace.html">Powered by Airspace</a>' +
        '</div>'+
        ' </li>'+*/
        // '<li class="nav-item"> <a class="nav-link" href="./experience-manager.html">Experience Management</a> </li>' +
        '<li class="nav-item"> <a class="nav-link" href="./pricing.html">Pricing</a> </li>' +
        '<li class="nav-item"> <a class="nav-link" href="./office-app.html">Office App</a> </li>' +
        // '<li class="nav-item"> <a class="nav-link" href="./faq.html">FAQs</a> </li>' +
        // '<li class="nav-item"> <a class="nav-link" href="./landlord-partnerships.html">Landlords</a> </li>' +
        '<li class="nav-item dropdown">' +
        '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Partner With Us' +
        '</a>'+
        '<div class="dropdown-menu" aria-labelledby="navbarDropdown">'+
          '<a class="dropdown-item" href="./landlord-partnerships.html">Landlords</a>' +
          '<div class="dropdown-divider"></div>' +
          '<a class="dropdown-item" href="./vendor-partnerships.html">Service Vendors</a>' +
        '</div>'+
        ' </li>'+
        // '<li class="nav-item"> <a class="nav-link" href="./about.html">About</a> </li>'+
        '<li class="nav-item"> <a class="nav-link" target="_blank" href="https://airspace-management-app.firebaseapp.com">Sign In</a> </li>' +
        '<li class="nav-item lightbox-82797864536173"><a href="./get-started.html" class="btn btn-outline-light btn-sm my-3 my-sm-0 ml-lg-3 mt-lg-1">Get Started</a></li>'+
        /*'<li class="nav-item lightbox-82797864536173"><a href="spaces.html" class="btn btn-outline-light btn-sm my-3 my-sm-0 ml-lg-3 mt-lg-1">Find Space</a></li>'+*/
        '</ul>' +
        '</div>' +
        '</nav>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>';
        document.getElementById("navMenu").innerHTML = navBar; 

        document.getElementById("footerMenu").innerHTML =
            '<footer class="light-bg">' +
            '<div class="row pt-5">' +
            '<div class="col-lg-4 text-lg-center text-center">' +
            '<img class="circle-logo" src="./images/circle-logo.png">' +
            '</div>' +
            '<div class="col-lg-2 col-6 footer-col text-left">' +
            '<p style="color: black;" class="mt-3 mt-lg-0 mb-2"><b>Discover</b></p>' +
            '<div style="display: flex; flex-direction:column;">' +
            // '<a href="./about.html" class="my-1">About</a>' +
            // '<a href="./experience-manager.html" class="my-1">Experience Management</a>' +
            '<a href="./office-app.html" class="my-1">Airspace Office App</a>' +
            '<a href="./landlord-partnerships.html" class="my-1">Landlord Partnerships</a>' +
            '<a href="./vendor-partnerships.html" class="my-1">Vendor Partnerships</a>' +
            /*'<a href="./spaces.html" class="my-1">Spaces</a>' +*/
            '</div>' +
            '</div>' +
            '<div class="col-lg-2 col-6 footer-col text-left mb-3">' +
            '<p style="color: black;" class="mt-3 mt-lg-0 mb-2"><b>More</b></p>' +
            '<div style="display: flex; flex-direction:column;">' +
            '<a href="./blog.html" class="my-1">Blog</a>' +
            // '<a href="./careers.html" class="my-1">Careers</a>' +
            /*'<a href="./referrals.html" class="my-1">Refer a Tenant</a>' +*/
            '<a href="./terms.html" class="my-1">Terms</a>' + 
            '<a href="./privacy.html" class="my-1">Privacy</a>' +
            '</div>' +
            '</div>' +
            '<div class="col-lg-4 footer-col text-left">' +
            '<p style="color: black;" class="mb-2"><b>Contact Us</b></p>' +
            // '<p class="mb-2"> <span class="ti-location-pin mr-2"></span> 1485 Pacific St, Brooklyn, NY 11216 USA</p>' +
            '<div class=" d-block d-sm-inline-block">' +
            '<p class="mb-2">' +
            '<span class="ti-email mr-2"></span> <a class="mr-4" href="mailto:hello@airspaceoffice.co">hello@airspaceoffice.co</a></span>' +
            '</p>' +
            '<p class="mb-0">' +
            '<span class="ti-headphone-alt mr-2"></span> <a href="tel:3127245112">312-724-5112</a>' +
            '</p>' +
            '</div>' +
            '<br>' +
            '<div class="social-icons text-center text-lg-left mt-3">' +
            '<a target="_blank" href="https://www.instagram.com/airspace.office/"><span class="ti-instagram"></span></a>' +
            '<a target="_blank" href="https://www.linkedin.com/company/reserveairspace/"><span class="ti-linkedin"></span></a>' +
            '</div>' +
            '</div>' +
            '<div class="col-lg-2">' +
            '<div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="row mt-5">' +
            '<div class="col-12 text-center">' +
            '<p><small>COPYRIGHT © 2019. AIRSPACE. ALL RIGHTS RESERVED.</small></p>' +
            '</div>' +
            '</div>';
    }
    addSharedNavAndFooter();

    function addDrift() {
        !function () {
            var t = window.driftt = window.drift = window.driftt || [];
            if (!t.init) {
                if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
                t.invoked = !0, t.methods = ["identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on"],
                    t.factory = function (e) {
                        return function () {
                            var n = Array.prototype.slice.call(arguments);
                            return n.unshift(e), t.push(n), t;
                        };
                    }, t.methods.forEach(function (e) {
                        t[e] = t.factory(e);
                    }), t.load = function (t) {
                        var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
                        o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
                        var i = document.getElementsByTagName("script")[0];
                        i.parentNode.insertBefore(o, i);
                    };
            }
        }();
        drift.SNIPPET_VERSION = '0.3.1';
        drift.load('hgwb49xpenfu');
    }
    addDrift();

    /*-----------------------------------
     * FIXED  MENU - HEADER
     *-----------------------------------*/
    function menuscroll() {
        var $navmenu = $('.nav-menu');
        if ($(window).scrollTop() > 50) {
            $navmenu.addClass('is-scrolling');
        } else {
            $navmenu.removeClass("is-scrolling");
        }
    }
    menuscroll();

    $(window).on('scroll', function () {
        menuscroll();
    });
    /*-----------------------------------
     * NAVBAR CLOSE ON CLICK
     *-----------------------------------*/

    $('.navbar-nav > li:not(.dropdown) > a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    /* 
     * NAVBAR TOGGLE BG
     *-----------------*/
    var siteNav = $('#navbar');
    siteNav.on('show.bs.collapse', function (e) {
        $(this).parents('.nav-menu').addClass('menu-is-open');
    })
    siteNav.on('hide.bs.collapse', function (e) {
        $(this).parents('.nav-menu').removeClass('menu-is-open');
    })

    /*-----------------------------------
     * ONE PAGE SCROLLING
     *-----------------------------------*/
    // Select all links with hashes
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-toggle="tab"]').on('click', function (event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
    /*-----------------------------------
     * OWL CAROUSEL
     *-----------------------------------*/
    // var $testimonialsDiv = $('.testimonials');
    // if ($testimonialsDiv.length && $.fn.owlCarousel) {
    //     $testimonialsDiv.owlCarousel({
    //         items: 1,
    //         nav: true,
    //         dots: false,
    //         navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>']
    //     });
    // }

    // var $galleryDiv = $('.img-gallery');
    // if ($galleryDiv.length && $.fn.owlCarousel) {
    //     $galleryDiv.owlCarousel({
    //         nav: false,
    //         center: true,
    //         loop: true,
    //         autoplay: true,
    //         dots: true,
    //         navText: ['<span class="ti-arrow-left"></span>', '<span class="ti-arrow-right"></span>'],
    //         responsive: {
    //             0: {
    //                 items: 1
    //             },
    //             768: {
    //                 items: 3
    //             }
    //         }
    //     });
    // }
}); /* End Fn */