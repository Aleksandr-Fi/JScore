
let winWidth = window.screen.width;
console.log(winWidth)
console.log(winWidth > 768)
const swiper = new Swiper('.swiper', {

    pagination: {
        el: '.swiper-pagination',
        clicable: true,
    },
    slidesPerView: 'auto',
    
});

    dest()

console.log((window.matchMedia('(min-width: 768px)')).matches)
function dest() {
    if (winWidth > 768) {
        swiper.destroy();

        document.querySelector('.swiper').classList.remove('swiper');
        document.querySelector('.swiper-slide').classList.remove('swiper-slide');
        document.querySelector('.swiper-wrapper').classList.remove('swiper-wrapper')
        document.querySelector('.swiper-pagination').classList.remove('div')
    }
}

