
document.addEventListener("DOMContentLoaded", Swiper);

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
        document.querySelector('.swiper-wrapper').classList.remove('swiper-wrapper');

        let slides = document.querySelectorAll('.swiper-slide');
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('swiper-slide')
        };

        document.querySelector('.swiper-pagination').remove('div');
    };
};

let btnMoreContent = document.querySelector('.content__btn-more');
btnMoreContent.addEventListener('click', function() {
    btnMoreContent.classList.toggle('btn-more--active');
    btnMoreContent.innerHTML = (btnMoreContent.innerHTML === 'Скрыть') ? btnMoreContent.innerHTML = 'Читать далее' : btnMoreContent.innerHTML = 'Скрыть';
});

let btnMoreBrands = document.querySelector('.brands__btn-more');
let bandsWrapper = document.querySelector(".swiper-brands__wrapper");

btnMoreBrands.addEventListener('click', function() {
    btnMoreBrands.classList.toggle('btn-more--active');
    btnMoreBrands.innerHTML = (btnMoreBrands.innerHTML === 'Скрыть') ? btnMoreBrands.innerHTML = 'Показать все' : btnMoreBrands.innerHTML = 'Скрыть';
    bandsWrapper.classList.toggle('swiper-brands__wrapper--open');
});