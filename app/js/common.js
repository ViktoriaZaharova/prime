$(document).ready(function () {

    // load header+footer all pages
    $(function () {
        var includes = $('[data-include]');
        jQuery.each(includes, function () {
            var file = 'views/' + $(this).data('include') + '.html';
            $(this).load(file);
        });
    });


    // tabs
    $('.tabs-wrap li a').click(function (e) {
        e.preventDefault();
    });
    $('.tabs-wrap li').click(function () {
        $('.tabs-wrap li').removeClass('active');
        $(this).addClass('active').closest('.tabs-wrap').find('.tab_content').removeClass('active');

        var selectTab = $(this).find('a').attr("href");

        $(selectTab).addClass('active');
    });

    $('.popular-question__wrapper li h3').click(function () {
        $(this).toggleClass('in').siblings('.b_hidden').slideToggle();
    });

    // active links menu
    $('.submenu li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if (location === link) {
            $(this).addClass('current').parents('.submenu').parents('li').addClass('click');
        }
    });

    $('.sidebar-menu > li > a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if (location === link) {
            $(this).parent().addClass('click');
        }
    });
    // active links menu end

    // maps hover
    var regions = [
        {
            "region_name": "Санкт-Петербург и Ленинградская область",
            "region_code": "loc-city",
            "population": 9794525
        }
    ];

    var temp_array = regions.map(function (item) {
        return item.population;
    });

    var highest_value = Math.max.apply(Math, temp_array);

    $(function () {

        for (i = 0; i < regions.length; i++) {

            $('#' + regions[i].region_code)
                .css({'fill': '#dd5226' + regions[i].population / highest_value + ')'})
                .data('region', regions[i]);
        }

        $('.maps #loc-city').mouseover(function () {
            var region_data = $(this).data('region');
            $('<div class="info_panel">' +
                region_data.region_name + '<br>' + '</div>'
            )
                .appendTo('body');
        })
            .mouseout(function () {
                $('.info_panel').remove();
            })
            .mousemove(function (e) {
                var mouseX = e.pageX, //X coordinates of mouse
                    mouseY = e.pageY; //Y coordinates of mouse

                $('.info_panel').css({
                    top: mouseY - 70,
                    left: mouseX - ($('.info_panel').width() / 2)
                });
            });

    });

    // list support click
    $('.list-support > li h5').click(function () {
        $(this).parent().toggleClass('active').find('.box-hidden').fadeToggle();
    });



});

$(function () {
    // slick slider
    $('.description-project-slider-1').slick({
        slidesToShow: 1,
        asNavFor: '.project-photo-slider',
        arrows: false,
        infinite: false

    });

    var $slider = $('.project-photo-slider-1');

    if ($slider.length) {
        var currentSlide;
        var slidesCount;
        var sliderCounter = document.createElement('div');
        sliderCounter.classList.add('slider__counter');

        var updateSliderCounter = function(slick) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = slick.slideCount;
            $(sliderCounter).text(currentSlide + ' из ' +slidesCount);
        };

        $slider.on('init', function(event, slick) {
            $slider.append(sliderCounter);
            updateSliderCounter(slick);
        });

        $slider.on('afterChange', function(event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);
        });

        $slider.slick({
            asNavFor: '.description-project-slider-1',
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            infinite: false
        });
    }

});

$(function () {
    // slick slider
    $('.description-project-slider-2').slick({
        slidesToShow: 1,
        asNavFor: '.project-photo-slider',
        arrows: false,
        infinite: false

    });

    var $slider = $('.project-photo-slider-2');

    if ($slider.length) {
        var currentSlide;
        var slidesCount;
        var sliderCounter = document.createElement('div');
        sliderCounter.classList.add('slider__counter');

        var updateSliderCounter = function(slick) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = slick.slideCount;
            $(sliderCounter).text(currentSlide + ' из ' +slidesCount);
        };

        $slider.on('init', function(event, slick) {
            $slider.append(sliderCounter);
            updateSliderCounter(slick);
        });

        $slider.on('afterChange', function(event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);
        });

        $slider.slick({
            asNavFor: '.description-project-slider-2',
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            infinite: false
        });
    }

});

$(function () {
    // slick slider
    $('.photo-slider').slick({
        slidesToShow: 1,
        asNavFor: '.description-photo-slider',
        arrows: false,
        infinite: false

    });

    var $slider = $('.description-photo-slider');

    if ($slider.length) {
        var currentSlide;
        var slidesCount;
        var sliderCounter = document.createElement('div');
        sliderCounter.classList.add('slider__counter');

        var updateSliderCounter = function(slick) {
            currentSlide = slick.slickCurrentSlide() + 1;
            slidesCount = slick.slideCount;
            $(sliderCounter).text(currentSlide + ' из ' +slidesCount);
        };

        $slider.on('init', function(event, slick) {
            $slider.append(sliderCounter);
            updateSliderCounter(slick);
        });

        $slider.on('afterChange', function(event, slick, currentSlide) {
            updateSliderCounter(slick, currentSlide);
        });

        $slider.slick({
            asNavFor: '.photo-slider',
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
            infinite: false
        });
    }
});

