
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

let btnMore = document.querySelector('.btn-more');

btnMore.addEventListener('click', function() {
    btnMore.classList.toggle('btn-more--active');
    btnMore.innerHTML = (btnMore.innerHTML === 'Скрыть') ? btnMore.innerHTML = 'Показать все' : btnMore.innerHTML = 'Скрыть';
    document.querySelector(".swiper-brands__wrapper").classList.toggle('swiper-brands__wrapper--open');
});