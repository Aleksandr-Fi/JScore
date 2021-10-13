document.addEventListener("DOMContentLoaded", new Swiper);

const swiper = new Swiper('.swiper', {

    pagination: {
        el: '.swiper-pagination',
        clicable: true,
    },

    slidesPerView: 'auto',
});

const winWidth = window.matchMedia('(min-width: 768px)');

dest();

function dest() {
    if (winWidth.matches) {
        swiper.destroy();
        document.querySelector('.swiper').classList.remove('swiper');
        // document.querySelector('.swiper-wrapper').classList.remove('swiper-wrapper');

        // let swipers = document.querySelectorAll('.swiper');
        // console.log('swipers');
        // for (let i = 0; i < swipers.length; i++) {
        //     swipers[i].classList.remove('swiper-wrapper')
        // };
        let wrappers = document.querySelectorAll('.swiper-wrapper');
        for (let i = 0; i < wrappers.length; i++) {
            wrappers[i].classList.remove('swiper-wrapper')
        };
        let slides = document.querySelectorAll('.swiper-slide');
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('swiper-slide')
        };

        document.querySelector('.swiper-pagination').remove('div');
    };
};

let btnMoreContent = document.querySelector('.content__btn-more');
let contentText = document.querySelector(".content__text");
btnMoreContent.addEventListener('click', function() {
    btnMoreContent.classList.toggle('btn-more--active');
    btnMoreContent.innerHTML = (btnMoreContent.innerHTML === 'Скрыть') ? btnMoreContent.innerHTML = 'Читать далее' : btnMoreContent.innerHTML = 'Скрыть';
    contentText.classList.toggle('content__text--hidden');
});

// открытие брендов
let btnMoreBrands = document.querySelector('.brands__btn-more');
let bandsWrapper = document.querySelector(".swiper-brands__wrapper");

btnMoreBrands.addEventListener('click', function() {
    btnMoreBrands.classList.toggle('btn-more--active');
    btnMoreBrands.innerHTML = (btnMoreBrands.innerHTML === 'Скрыть') ? btnMoreBrands.innerHTML = 'Показать все' : btnMoreBrands.innerHTML = 'Скрыть';
    bandsWrapper.classList.toggle('swiper-brands__wrapper--open');
});

// открытие видов техники
let btnMoreTech = document.querySelector('.tech__btn-more');
let techWrapper = document.querySelector(".swiper-tech__wrapper");

btnMoreTech.addEventListener('click', function() {
    btnMoreTech.classList.toggle('btn-more--active');
    btnMoreTech.innerHTML = (btnMoreTech.innerHTML === 'Скрыть') ? btnMoreTech.innerHTML = 'Показать все' : btnMoreTech.innerHTML = 'Скрыть';
    techWrapper.classList.toggle('swiper-tech__wrapper--open');
});

// открытие/закрытие aside-panel
let btnBurger = document.querySelector('.header__burger');
let btnAsideClose = document.querySelector('.panel-header__close');
let asidePanel = document.querySelector('.aside-panel');
let overlay = document.querySelector('.overlay');
let asidePanelOpen = false;

btnBurger.addEventListener('click', function() {
    asidePanel.classList.toggle('aside-panel--open', true)
    asidePanelOpen = true;
    console.log(asidePanelOpen);
    overlay.classList.toggle('overlay--visibility--on', true)
});

btnAsideClose.addEventListener('click', function() {
    asidePanel.classList.toggle('aside-panel--open', false)
    asidePanelOpen = false;
    console.log(asidePanelOpen);
    overlay.classList.toggle('overlay--visibility--on', false)
});

// открытие/закрытие right-panels
let btnCall = document.querySelector('.call');
let hederCall = document.querySelector('.header-call');
let panelCall = document.querySelector('.panel-call')

let btnChat = document.querySelector('.chat');
let hederChat = document.querySelector('.header-chat');
let panelChat = document.querySelector('.panel-feedback')

btnCall.addEventListener('click', function() {
    panelCall.classList.toggle('panel-call--hidden')
    panelChat.classList.toggle('panel-feedback--hidden', true)
    if (asidePanelOpen) {
        overlay.classList.toggle('overlay--visibility--on', true)
    } else {
        overlay.classList.toggle('overlay--visibility--on')
    }
});

hederCall.addEventListener('click', function() {
    panelCall.classList.toggle('panel-call--hidden')
    panelChat.classList.toggle('panel-feedback--hidden', true)
    overlay.classList.toggle('overlay--visibility--on', true)
});

btnChat.addEventListener('click', function() {
    panelChat.classList.toggle('panel-feedback--hidden')
    panelCall.classList.toggle('panel-call--hidden', true)
    if (asidePanelOpen) {
        overlay.classList.toggle('overlay--visibility--on', true)
    } else {
        overlay.classList.toggle('overlay--visibility--on')
    }
});

hederChat.addEventListener('click', function() {
    panelChat.classList.toggle('panel-feedback--hidden')
    panelCall.classList.toggle('panel-call--hidden', true)
    overlay.classList.toggle('overlay--visibility--on', true)
});

// закрытие right-panels 
let closeCall = document.querySelector('.close-call');
let closeFeedback = document.querySelector('.close-feedback');

closeCall.addEventListener('click', function() {
    panelCall.classList.toggle('panel-call--hidden', true)
    if (asidePanelOpen) {
        overlay.classList.toggle('overlay--visibility--on', true)
    } else {
        overlay.classList.toggle('overlay--visibility--on', false)
    }
});

closeFeedback.addEventListener('click', function() {
    panelChat.classList.toggle('panel-feedback--hidden', true)
    if (asidePanelOpen) {
        overlay.classList.toggle('overlay--visibility--on', true)
    } else {
        overlay.classList.toggle('overlay--visibility--on', false)
    }
});

// off panel effects
overlay.addEventListener('click', function() {
    asidePanel.classList.toggle('aside-panel--open', false)
    asidePanelOpen = false;
    // console.log(asidePanelOpen);
    panelCall.classList.toggle('panel-call--hidden', true)
    panelChat.classList.toggle('panel-feedback--hidden', true)
    overlay.classList.toggle('overlay--visibility--on', false)
});