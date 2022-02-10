"use strict";

window.addEventListener('load', function () {

    //1. behavior when main menu is visible or hidden
    var menuCollapse = document.getElementById('navbarMenuCollapse');
    menuCollapse.addEventListener('shown.bs.collapse', function () {
        document.body.classList.add('menu-visible');
    });
    menuCollapse.addEventListener('hidden.bs.collapse', function () {
        document.body.classList.remove('menu-visible');
    });

    var bsCollapse = new bootstrap.Collapse(menuCollapse, {
        toggle: false
    });

    //close menu when a link is clicked fo example
    [].forEach.call(document.querySelectorAll('#navbarMenuCollapse a:not(.dropdown-toggle)'), function (el) {
        el.addEventListener('click', function (event) {
            bsCollapse.hide();
        });
    });
    // close the menu when user click outside on the menu screen
    var fullscreenMenuBg = document.querySelector('.nav-fullscreen-lg .nav-bg');
    fullscreenMenuBg.addEventListener('click', function (event) {
        bsCollapse.hide();
        return false;
    });
    //2. toggle hide-header class of header on scoll down or up
    var prevScrollpos = window.pageYOffset;
    var pageHeader = document.querySelector('.navbar-top');
    window.addEventListener("scroll", function () {
        // window.onscroll = function() {
        var currScrollpos = window.pageYOffset;
        if (currScrollpos > prevScrollpos && currScrollpos > 64) {
            if (!pageHeader.classList.contains('hide-header')) {
                pageHeader.classList.add('hide-header');
            };
        } else {
            pageHeader.classList.remove('hide-header');
        }
        prevScrollpos = window.pageYOffset;

        // add scrolled class to body if document is scrolled
        if (window.pageYOffset > 4) {
            if (!document.body.classList.contains('scrolled')) {
                document.body.classList.add('scrolled');
            }
        } else {
            document.body.classList.remove('scrolled');
        }
    });

    //3. custom vh (viewport height) unit to fix on resize or scroll on mobile
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    window.addEventListener("resize", function () {
        // update on resize
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    })

    //4. Swiper Slider
    let swiperSliderSimpleA = new Swiper('.slider-simple-a.swiper-container', {
        navigation: {
            nextEl: '.swiper-container.slider-simple-a .slider-next',
            prevEl: '.swiper-container.slider-simple-a .slider-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 5000,
        },
        spaceBetween: 0,
        slidesPerView: 'auto',
        centeredSlides: true,
        speed: 600, // Slide speed
        // centeredSlidesBounds: true,
    });

    // Gallery Slider
    let swiperSliderGalleryA = new Swiper('.slider-gallery-a.swiper-container', {
        navigation: {
            nextEl: '.swiper-container.slider-gallery-a .slider-next',
            prevEl: '.swiper-container.slider-gallery-a .slider-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 5000,
        },
        spaceBetween: 0,
        slidesPerView: 'auto',
        centeredSlides: true,
        effect: 'fade',
        speed: 600, // Slide speed
        // centeredSlidesBounds: true,
    });

    let swiperSliderSimpleB = new Swiper('.slider-simple-b.swiper-container', {
        // navigation: {
        //     nextEl: '.swiper-container.slider-simple-b .slider-next',
        //     prevEl: '.swiper-container.slider-simple-b .slider-prev',
        // },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 5000,
        },
        effect: 'fade',
    });

    //5. Scroll slider
    try {
        var scrollSlider = new ScrollSlider('.scroll-simple-a', {
            scale1: 0.1
        });
        scrollSlider.init();
    }
    catch (error) {
        console.log('scroll-slider not available')
    }

    try {
        // Section Scroller
        var sectionScroller = new SectionScroll('.sections-scroll ', {
            sectionClass: 'section',
            navDotContainer :'.nav-dot-menu',
            changeOnSectionColor: '.change-on-section-color, .nav-dot-menu .nav-link'
        });
        sectionScroller.init();
    }
    catch (error) {
        console.log('sections-scroll not available')
    }
    /* var sectionScroller = new SectionScroll('.sections-scroll ', {
        sectionClass: 'section',
        navDotContainer :'.nav-dot-menu',
        changeOnSectionColor: '.change-on-section-color, .nav-dot-menu .nav-link'
    });
    sectionScroller.init(); */

    //6. Rellax parallax
    try {
        var rellax = new Rellax('.rellax', {
            breakpoints: [576, 768, 1201]
        });
    } catch (error) {
        console.log('rellax-js not available')
    }

    //7. Scroll animation
    try {
        var scrollAnim = new ScrollAnim('.scroll-anim');
        scrollAnim.init();

    }
    catch (error) {
        console.log('scroll-anim not available')
    }

    // 8. page loader
    // document loaded, all script init executed, so hide loading screen
    var pageLoader = document.querySelector('#page-loader');
    if (pageLoader) {
        pageLoader.classList.add('p-hidden');
    }
    document.body.classList.add('page-loaded');

});
