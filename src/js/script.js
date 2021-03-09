

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
            }
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active')
            .removeClass('catalog__content_mobile');

    });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    }

    toggleSlide('.catalog-item__back');
    toggleSlide('.catalog-item__link');


    // Modal

    $('[data-modal=consultation]').on('click', () => {
        $('.overlay, #consultation').fadeIn('slow');
    })

    $('.modal__close').on('click', () => {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    })


    $('.btn_min').each(function (i) {
        $(this).on('click', () => {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
            console.log(i);
        })
    })


    // Validate form

    function validateForm(form) {
        $(form).each(function () {
            $(this).validate({
                rules: {
                    userName: {
                        required: true,
                        minlength: 2
                    },
                    userPhone: "required",
                    userEmail: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    userName: {
                        required: "Пожалуйста, введите свое имя",
                        minlength: jQuery.validator.format("Введите минимум {0} символа!")
                    },
                    userPhone: "Пожалуйста, введите свой телефон",
                    userEmail: {
                        required: "Пожалуйста, введите свою почту",
                        email: "Неправильно введен адрес почты"
                    }
                }
            });
        });
    };

    validateForm('#consultation-form');
    validateForm('#consultation form');
    validateForm('#order form');

    // Mask

    $('input[name=userPhone]').mask("+7 (999) 999-99-99");


    // Mailer

    $('form').submit(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
            $('form').trigger('reset');
        });
        return false;
    })


    // Pageup

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn('slow');
        } else {
            $('.pageup').fadeOut();
        };
    });

    // Smooth scroll

    $(function () {
        $("a[href^='#']").click(function () {
            var _href = $(this).attr("href");
            $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
            return false;
        });
    });

    // WOW.js
    new WOW().init();

});