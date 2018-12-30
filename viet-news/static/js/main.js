/*
-----------------------------------------------
Theme: Nicstyle - News and Blog HTML Template
Version 2.0
Author: EXSYthemes
-----------------------------------------------
// ========== TABLE OF CONTENTS ============ //
	1. AFFIX
    2. SEARCH BAR
    3. NEWS TICKER
    4. TO TOP BUTTON
    5. SLICK SLIDER popular__content
    6. SLICK SLIDER popular__content__newspage
    7. SLICK SLIDER video__gallery
    8. SLICK SLIDER about us
    9. NAV MENU MOBILE
    10. CLOCK
    11. GOOGLE Map
-----------------------------------------------*/

/* ***************** start document load **********************/
$(document).ready(function() {
	"use strict";
	/*--------------------------------------------------------------------------
	 * 1. AFFIX
     * -------------------------------------------------------------------------*/
    $('#myAffix').affix({
        offset: {
            top: 100,
            bottom: function() {
                return (this.bottom = $('.footer').outerHeight(true))
            }
        }
    });
	/* Preloader js */
	setTimeout(function(){        
		$('.status').fadeOut();
		$('.preloader').delay(350).fadeOut('slow'); 
	}, 1000);
	/* END Preloader js */
    /* Header select city */
    $('.weather__city__list ul li').on('click', function(e) {
        e.preventDefault();

        $(this).siblings("li").removeClass("active");
        $(this).removeClass('active').addClass('active');

        var text_temp = $(this).find("a").data("t");
        var text = $(this).find("a").html();
        $(".weather__city").find('em').html(text);
        $(".weather__temperature__number span").html(text_temp);
        return false;
    });
    /* END Header select city */
    /* Header select exchange */
    $('.exchange__bank__list ul li').on('click', function(e) {
        e.preventDefault();

        $(this).siblings("li").removeClass("active");
        $(this).removeClass('active').addClass('active');

        var text = $(this).find("a").html();
        var text_dollar = $(this).find("a").data("d");
        var text_euro = $(this).find("a").data("e");
        $(".exchange__name").html(text);
        $(".exchange__course__dollar").html(text_dollar);
        $(".exchange__course__euro").html(text_euro);
        return false;
    });
    /* END header select exchange */
    /* Append aside if window < 767*/
    if($(window).width() < 767){
        $('.about-us .wrap .a-aside').append($('.about-us .wrap .col-sm-9'));
    }
    /* END Append aside if window < 767*/
    /* Validate form */
    $('#c-contact-form').validate({
        submitHandler: function() {
            // $(form).ajaxSubmit();
            $('#c-contact-form').html();
            $('.c-done').show();
            $('.c-done-submit').hide();
        },
        rules: {
            name: {
                required: true,
                minlength: 3
            },
            message: {
                required: true,
                minlength: 10
            },
            email: {
                required: true,
                email: true
            },
            website: {
                url: true
            }
        },
        messages: {
            name: "You forgot to specify a name",
            website: "Enter the name of the site",
            email: {
                required: "You forgot to specify e-mail",
                email: "Error! Field filled correctly"
            },
            message: "You forgot to specify a massage"
        },
        errorClass: "errorClass",
        validClass: "validClass",
        highlight: function(element, errorClass, validClass) {
            $(element).addClass(errorClass).removeClass(validClass);
            $(element.form).find("label[for=" + element.id + "]")
                .addClass(errorClass);
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass(errorClass).addClass(validClass);
            $(element.form).find("label[for=" + element.id + "]")
                .removeClass(errorClass);
        }
    });
    /* END Validate form */
    
    /* -------------------------------------------------------------------------*
     * 2. SEARCH BAR
     * -------------------------------------------------------------------------*/
     // Hide search wrap by default;
     $(".search-container").hide();
     $(".btn-search").on("click", function(e) {
         // Prevent default link behavior
         e.preventDefault();
         // Stop propagation
         e.stopPropagation();
         // Toggle search-wrap
         $(".search-container").slideToggle(500, function() {
             // Focus on the search bar
             // When animation is complete
             $("#search-bar").focus();
         });
     });
     // Close the search bar if user clicks anywhere
     $(document).on("click", function(e) {
         var searchWrap = $(".search-container");
         if (!searchWrap.is(e.target) && searchWrap.has(e.target).length === 0) {
             searchWrap.slideUp(500);
         }
     });
    
    /* -------------------------------------------------------------------------*
     * 3. NEWS TICKER
     * -------------------------------------------------------------------------*/
     $('.newsticker').easyTicker({
		direction: 'up',
		easing: 'easeOutSine',
		speed: 'slow',
		interval: 4000,
		height: 'auto',
		visible: 1,
		mousePause: 1,
		controls: {
			up: '.up',
			down: '.down'
		}
	});
	
    /* -------------------------------------------------------------------------*
     * 4. TO TOP BUTTON
     * -------------------------------------------------------------------------*/
	var back_to_top = $('#goTop');
    if (back_to_top.length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    back_to_top.addClass('show');
                } else {
                    back_to_top.removeClass('show');
                }
            };
        $(window).on('scroll', function() {
            backToTop();
        });
        back_to_top.on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    };
    
    /* -------------------------------------------------------------------------*
     * 5. SLICK SLIDER popular__content
     * -------------------------------------------------------------------------*/
    $('.popular__content').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
    ]
	});
    
    /* -------------------------------------------------------------------------*
     * 6. SLICK SLIDER popular__content__newspage
     * -------------------------------------------------------------------------*/
    $('.popular__content__newspage').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 2000,
	  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
    ]
	});
    
    /* -------------------------------------------------------------------------*
     * 7. SLICK SLIDER video__gallery
     * -------------------------------------------------------------------------*/
    $('.video__gallery').slick({
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 8000,
	  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1
      }
    },
    ]
	});
	
    /* -------------------------------------------------------------------------*
     * 8. SLICK SLIDER about us
     * -------------------------------------------------------------------------*/
    $('.a-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        cssEase: 'ease',
        infinite: false,
        dots: true,
        arrows: false
    });
		
});
/* ***************** END Document load *********************/
/* ************** Start document resize ********************/
$(window).resize(function() {
	"use strict";
    var height = 0;
    var autoHeight1 = $('.col-img_auto-height');
    var autoHeight2 = $('.col-border_auto-height');
    var autoHeight3 = $('.col-border_auto-height-small');
    $(autoHeight1).css('height', 'auto');
    autoHeight1.each(function() {
        if ($(this).height() > height) {
            height = $(this).height();
        }
    });
    autoHeight1.css('height', height);

    $(autoHeight2).css('height', 'auto');
    autoHeight2.each(function() {

        if ($(this).height() > height) {
            height = $(this).height();
        }
    });
    autoHeight2.css('height', height + 25);

    $(autoHeight3).css('height', 'auto');
    autoHeight3.each(function() {

        if ($(this).height() > height) {
            height = $(this).height();
        }
    });
    autoHeight3.css('height', height + 25);
}).resize();
/* **************** END Document resize ********************/
$(function() {
	"use strict";
    /* -------------------------------------------------------------------------*
     * 9. NAV MENU MOBILE
     * -------------------------------------------------------------------------*/
    var $menu = $(".overlapblackbg, .slideLeft");
    var $wsmenucontent = $(".wsmenucontent");
    var openMenu = function() {
        $($menu).removeClass("menuclose").addClass("menuopen")
    };
    var closeMenu = function() {
        $($menu).removeClass("menuopen").addClass("menuclose")
    };
    $("#navToggle").on('click', function() {
        if ($wsmenucontent.hasClass("menuopen")) {
            $(closeMenu)
        } else {
            $(openMenu)
        }
        return false;
    });
    $wsmenucontent.on('click', function() {
        if ($wsmenucontent.hasClass("menuopen")) {
            $(closeMenu)
        }
        return false;
    });
    $("#navToggle,.overlapblackbg").on('click', function() {
        $(".wsmenucontainer").toggleClass("mrginleft");
        return false;
    });
    $(".wsmenu-list li").has(".wsmenu-submenu, .wsmenu-submenu-sub, .wsmenu-submenu-sub-sub").prepend('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
    $(".wsmenu-list li").has(".megamenu").prepend('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
    $(".wsmenu-mobile").on('click', function() {
        $(".wsmenu-list").slideToggle("slow");
        return false;
    });
    $(".wsmenu-click").on('click', function() {
        $(this).siblings(".wsmenu-submenu").slideToggle("slow");
        $(this).children(".wsmenu-arrow").toggleClass("wsmenu-rotate");
        $(this).siblings(".wsmenu-submenu-sub").slideToggle("slow");
        $(this).siblings(".wsmenu-submenu-sub-sub").slideToggle("slow");
        $(this).siblings(".megamenu").slideToggle("slow");
        return false;
    });
    
    /* -------------------------------------------------------------------------*
     * 10. CLOCK
     * -------------------------------------------------------------------------*/
	function getDate() {
		var date = new Date();
		var weekday = date.getDay();
		var month = date.getMonth();
		var day = date.getDate();
		var year = date.getFullYear();
		var hour = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		if (hour < 10) hour = "0" + hour;
		if (minutes < 10) minutes = "0" + minutes;
		if (seconds < 10) seconds = "0" + seconds;
		var monthNames = ["January", "February", "Sep", "April", "May", "June", "July", "August",
			"September", "October", "December", "December"
		];
		var weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
			"Saturday"
		];
		var ampm = " PM ";
		if (hour < 12) ampm = " AM ";
		if (hour > 12) hour -= 12;
		var showDate = weekdayNames[weekday] + ", " + monthNames[month] + " " + day + ", " + year;
		var showTime = hour + ":" + minutes + ":" + seconds + ampm;
		document.getElementById('date').innerHTML = showDate;
		document.getElementById('time').innerHTML = showTime;
		requestAnimationFrame(getDate);
	}
	getDate();
	 var tempScrollTop = 0,
	currentScrollTop = 0;

    // header scroll fixed
	function headerScroll() {
		currentScrollTop = $(document).scrollTop();
		if (tempScrollTop < currentScrollTop ) {
			$('.header_down').removeClass('active');
			tempScrollTop = currentScrollTop;
		}		else if (tempScrollTop > currentScrollTop ) {
			$('.header_down').addClass('active');
			tempScrollTop = currentScrollTop;
		}
	};
	function addFidexClassForHeader() {
		var documentScroll = $(document).scrollTop(),
				headerHeight = $('.header').innerHeight() + 50;
		if (documentScroll > headerHeight) {
			$('.header_down').addClass('fixed');
		} else {
			$('.header_down').removeClass('fixed');
		}
	}
	$(window).on('scroll', function() {
		addFidexClassForHeader();
		headerScroll();
	});

    /* -------------------------------------------------------------------------*
     * 11. GOOGLE Map
     * -------------------------------------------------------------------------*/
	function initMap() {
	    var centerLatLng = new google.maps.LatLng(46.463851, 30.745439);

	    var mapOptions = {
	        center: centerLatLng, 
	    	scrollwheel: false,
	        zoom: 15              
	    };

	    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

	    var marker = new google.maps.Marker({
	        position: centerLatLng,              
	        map: map,
	        title: "text",
	        icon: ""      
	    });
	}
	google.maps.event.addDomListener(window, "load", initMap);
	/* end map */
});