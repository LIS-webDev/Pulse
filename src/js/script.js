$(document).ready(function () {
    $('.carousel__inner').slick({
        infinite: true,
        autoHeight: true,
        slidesToShow: 1,
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow-red.svg" alt="arrow-left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow-red.svg" alt="arrow-right"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true,

                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,

                }
            },

        ]
    });
});