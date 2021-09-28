const swiper = new Swiper('.swiper', {

    pagination: {
        el: '.swiper-pagination',
        clicable: true,
    },

    slidesPerView: 'auto',
});

let winWidth = window.screen.width;

dest();

function dest() {
    if (winWidth >= 768) {
        swiper.destroy();
        document.querySelector('.swiper').classList.remove('swiper');
        document.querySelector('.swiper-wrapper').classList.remove('swiper-wrapper');

        let slides = document.querySelectorAll('.swiper-slide');
        for (let i = 0; i < slides.length; i++) {
            slide = slides[i];
            slide.classList.remove('swiper-slide')
        };

        document.querySelector('.swiper-pagination').remove('div');
    };
};

let btnMore = document.querySelector('.btn-more');
console.log(btnMore);

btnMore.onclick = function () {
    console.log('кнопка нажата');
    console.log(document.querySelector('.btn-more--active'));
    if (document.querySelector('.btn-more--active') == null) {
        console.log('не правда');
        btnMore.classList.add('btn-more--active');
        console.log(document.querySelector(".swiper-brands__wrapper"));
        document.querySelector(".swiper-brands__wrapper").classList.add('swiper-brands__wrapper--open')
    } else {
        console.log('правда');
        btnMore.classList.remove('btn-more--active');
        document.querySelector(".swiper-brands__wrapper").classList.remove('swiper-brands__wrapper--open')
    }
}