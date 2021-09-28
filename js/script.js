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
    if (winWidth > 768) {
        swiper.destroy();
        document.querySelector('.swiper').classList.remove('swiper');
        document.querySelector('.swiper-wrapper').classList.remove('swiper-wrapper');

        let slides = document.querySelectorAll('.swiper-slide');        
        for ( let i = 0; i < slides.length; i++) {
            slide = slides[i];
            slide.classList.remove('swiper-slide')
        };
        
        document.querySelector('.swiper-pagination').remove('div');
    };
};


console.log(winWidth)
console.log(winWidth > 768)