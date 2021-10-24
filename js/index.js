// import '../scss/style.scss';

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
        // чет destroy() не работает как надо
        // swiper.destroy(); 

        let swipers = document.querySelectorAll('.swiper');
        swipers.forEach(element => element.classList.remove('swiper'));
        
        let wrappers = document.querySelectorAll('.swiper-wrapper');
        wrappers.forEach(element => element.classList.remove('swiper-wrapper'));

        let slides = document.querySelectorAll('.swiper-slide');
        slides.forEach(element => element.classList.remove('swiper-slide'));

        document.querySelector('.swiper-pagination').remove('div');
    };
};

// открытие текста
const btnMoreContent = document.querySelector('.content__btn-more');
const contentText = document.querySelector(".content__text");
btnMoreContent.addEventListener('click', function() {
    btnMoreContent.classList.toggle('btn-more--active');
    btnMoreContent.innerHTML = (btnMoreContent.innerHTML === 'Скрыть') ? btnMoreContent.innerHTML = 'Читать далее' : btnMoreContent.innerHTML = 'Скрыть';
    contentText.classList.toggle('content__text--hidden');
});

// открытие брендов
const btnMoreBrands = document.querySelector('.brands__btn-more');
const bandsWrapper = document.querySelector(".swiper-brands__wrapper");

btnMoreBrands.addEventListener('click', function() {
    btnMoreBrands.classList.toggle('btn-more--active');
    btnMoreBrands.innerHTML = (btnMoreBrands.innerHTML === 'Скрыть') ? btnMoreBrands.innerHTML = 'Показать все' : btnMoreBrands.innerHTML = 'Скрыть';
    bandsWrapper.classList.toggle('swiper-brands__wrapper--open');
});

// открытие видов техники
const btnMoreTech = document.querySelector('.tech__btn-more');
const techWrapper = document.querySelector(".swiper-tech__wrapper");

btnMoreTech.addEventListener('click', function() {
    btnMoreTech.classList.toggle('btn-more--active');
    btnMoreTech.innerHTML = (btnMoreTech.innerHTML === 'Скрыть') ? btnMoreTech.innerHTML = 'Показать все' : btnMoreTech.innerHTML = 'Скрыть';
    techWrapper.classList.toggle('swiper-tech__wrapper--open');
});

// открытие/закрытие aside-panel
const btnBurger = document.querySelector('.header__burger');
const btnAsideClose = document.querySelector('.panel-header__close');
const asidePanel = document.querySelector('.aside-panel');
const overlay = document.querySelector('.overlay');
let asidePanelOpen = false;

btnBurger.addEventListener('click', function() {
    asidePanel.classList.toggle('aside-panel--open', true)
    asidePanelOpen = true;
    overlay.classList.toggle('overlay--visibility--on', true)
});

btnAsideClose.addEventListener('click', function() {
    asidePanel.classList.toggle('aside-panel--open', false)
    asidePanelOpen = false;
    overlay.classList.toggle('overlay--visibility--on', false)
});

// открытие/закрытие right-panels
const btnCall = document.querySelector('.call');
const hederCall = document.querySelector('.header-call');
const panelCall = document.querySelector('.panel-call')

const btnChat = document.querySelector('.chat');
const hederChat = document.querySelector('.header-chat');
const panelChat = document.querySelector('.panel-feedback')

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
const closeCall = document.querySelector('.close-call');
const closeFeedback = document.querySelector('.close-feedback');

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
    panelCall.classList.toggle('panel-call--hidden', true)
    panelChat.classList.toggle('panel-feedback--hidden', true)
    overlay.classList.toggle('overlay--visibility--on', false)
});