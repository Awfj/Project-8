$(function() {
	//change element's position
	var spotChange = function() {
		var viewportWidth = $(window).outerWidth();
		if (viewportWidth <= 768) {
			$(".js-nav-sec__link").appendTo(".js-header__nav-main--links");
			$(".js-header__nav-main--logo").prependTo(".js-header__nav-sec");
			$(".js-header__nav-main--misc").appendTo(".js-header__respons");
		} else {
			$(".js-nav-sec__link").appendTo(".js-header__nav-sec--links");
			$(".js-header__nav-main--logo").prependTo(".js-header__nav-main");
			$(".js-header__nav-main--misc").appendTo(".js-header__nav-main");
		} if (viewportWidth <= 480) {
			$(".js-mav-main__cart").appendTo(".js-header__nav-main--links");
		} else {
			$(".js-mav-main__cart").appendTo(".js-header__nav-main--misc");
		}
	};
	$(window).resize(function(){
		spotChange();
	});
	spotChange();

	//header - hidden menu
	$('.js-header__respons--btn').click(function() {
		if (!$('.js-header__nav-main--links').hasClass('js-active-menu')) {
			$('.js-header__nav-main--links').addClass('js-active-menu');
			$('.js-active-menu').hide().slideDown(400);
		} else {
			$('.js-active-menu').slideUp(400);
			function active_menu() {
				$('.js-header__nav-main--links').removeClass('js-active-menu');
			} setTimeout(active_menu, 400);
		}
	});

	//nav <= 768 hide on click
	$(document).click(function(event){
		var viewportWidth = $(window).outerWidth();
		if (viewportWidth <= 768) {
			if (!$(event.target).closest('header, .js-active-menu, .js-header__nav-main--links').length) {
				$('.js-header__nav-main--links').slideUp(400);
				function active_menu() {
					$('.js-header__nav-main--links').removeClass('js-active_menu');
				} setTimeout(active_menu, 400);
			}
		}
	});	

	//nav > 768 hide on click
	$(window).on('load, resize', function mobileViewUpdate() {
		var viewportWidth = $(window).outerWidth();
		if (viewportWidth > 768) {
			$('.js-header__nav-main--links').show();
		}
	});


});
