$(document).ready(function () {

	const window_width = $(window).width();

	if (window_width < 992) {

		$(window).scroll(function () {

			const scrolled = $(this).scrollTop();
			let offset = $(this).innerHeight() / 2;


			if ($('.order').length > 0) {

				let arr = [
					'.order__item--1',
					'.order__item--2',
					'.order__item--3',
					'.order__item--4',
					'.order__item--5'
				]

				for (let i = 0; i < arr.length; i++) {

					let element = $(arr[i]).offset().top;

					if (scrolled > element - offset) {
						$(arr[i]).addClass('_active');
					} else if (scrolled < element - offset) {
						$(arr[i]).removeClass('_active');
					}
				}
			}


			if ($('.purchase-list').length > 0) {

				let arr = [
					'.purchase-list__item--1',
					'.purchase-list__item--2',
					'.purchase-list__item--3',
					'.purchase-list__item--4',
					'.purchase-list__item--5'
				]

				for (let i = 0; i < arr.length; i++) {

					let element = $(arr[i]).offset().top;

					if (scrolled > element - offset) {
						$(arr[i]).addClass('_active');
					} else if (scrolled < element - offset) {
						$(arr[i]).removeClass('_active');
					}
				}
			}


			if ($('.about').length > 0) {
				let aboutToggleBox = $('.about__toggle-box--1').offset().top;
				let aboutToggleBox2 = $('.about__toggle-box--2').offset().top;

				if (scrolled > aboutToggleBox - offset) {
					$('.about__toggle-box--1').addClass('_active');
					$('.about__toggle-box--2').removeClass('_active');
				}
				if (scrolled > aboutToggleBox2 - offset) {
					$('.about__toggle-box--2').addClass('_active');
					$('.about__toggle-box--1').removeClass('_active');
				}
			}


			if (window_width < 576) {

				if ($('.partners').length > 0) {

					let arr = [
						'.partners__slider-item--1',
						'.partners__slider-item--2',
						'.partners__slider-item--3',
						'.partners__slider-item--4',
						'.partners__slider-item--5',
						'.partners__slider-item--6',
						'.partners__slider-item--7',
						'.partners__slider-item--8'
					]

					for (let i = 0; i < arr.length; i++) {

						let element = $(arr[i]).offset().top;

						if (scrolled > element - offset) {
							$(arr[i]).addClass('_active');
						} else if (scrolled < element - offset) {
							$(arr[i]).removeClass('_active');
						}
					}

				}

			}

		})

	} else if (window_width > 992) {

		if ($('.about').length > 0) {
			$('.about__toggle-box--1').mouseenter(() => {
				$('.about__toggle-box--2').removeClass('_active');
				$('.about__toggle-box--1').addClass('_active');
			});
			$('.about__toggle-box--2').mouseenter(() => {
				$('.about__toggle-box--1').removeClass('_active');
				$('.about__toggle-box--2').addClass('_active');
			});
		}

	}




	// ===== MOBILE Menu ===== START =====

	$('.header__burger-btn').on('click', () => {
		$('.header__burger-btn').toggleClass('_active')
		$('.mobile-menu').toggleClass('_active')
		if ($('.header__burger-btn').hasClass('_active')) {
			$('body').css({
				'overflow': 'hidden'
			})
		} else {
			$('body').css({
				'overflow': 'auto'
			})
		}
	})

	// ===== MOBILE Menu ===== END =====



	// ===== POPUP Form ===== START =====

	// $(document).mouseup((e) => {
	// 	var div = $('.popup__form')
	// 	if (!div.is(e.target) && div.has(e.target).length === 0) {
	// 		$('#popUp').removeClass('_active')
	// 	}
	// });

	$('.consultate-btn').on('click', () => {
		$('#popUp').addClass('_active')
	})

	$('.popup__btn').on('click', () => {
		$('#popUp').removeClass('_active')
	})



	$('.slide-popup__btn').on('click', () => {
		$('.slide-popup').removeClass('_active')
	})


	$('#prodConstrCart1').on('click', (e) => {
		e.preventDefault();
		$('#popSlider1').addClass('_active')
	})
	$('#prodConstrCart2').on('click', (e) => {
		e.preventDefault();
		$('#popSlider2').addClass('_active')
	})
	$('#prodConstrCart3').on('click', (e) => {
		e.preventDefault();
		$('#popSlider3').addClass('_active')
	})
	$('#prodConstrCart4').on('click', (e) => {
		e.preventDefault();
		$('#popSlider4').addClass('_active')
	})
	$('#prodConstrCart5').on('click', (e) => {
		e.preventDefault();
		$('#popSlider5').addClass('_active')
	})


	// ===== POPUP Form ===== END =====




	// ===== SLIDERS ===== START =====

	$('.partners__slider-body').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 576,
				settings: 'unslick'
			}
		]
	});

	$('#iSlider').slick({
		arrows: false,
		fade: true,
		asNavFor: '#tSlider'
	});
	$('#tSlider').slick({
		fade: true,
		asNavFor: '#iSlider'
	});

	$('#iSlider2').slick({
		arrows: false,
		fade: true,
		asNavFor: '#tSlider2'
	});
	$('#tSlider2').slick({
		fade: true,
		asNavFor: '#iSlider2'
	});

	$('#iSlider3').slick({
		arrows: false,
		fade: true,
		asNavFor: '#tSlider3'
	});
	$('#tSlider3').slick({
		fade: true,
		asNavFor: '#iSlider3'
	});

	$('#iSlider4').slick({
		arrows: false,
		fade: true,
		asNavFor: '#tSlider4'
	});
	$('#tSlider4').slick({
		fade: true,
		asNavFor: '#iSlider4'
	});

	$('.gallery__slider-body').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 376,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
		]
	});



	$('#popSlider1 .slide-popup__slider').on(`init reInit`, function (event, slick) {
		$('#popSlider1 .slide-popup__slider-counter').text('Показано ' + (1 + ' из ' + slick.slideCount));
	})
	$('#popSlider1 .slide-popup__slider').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
		$('#popSlider1 .slide-popup__slider-counter').text('Показано ' + (currentSlide + 1 + ' из ' + slick.slideCount));
	})
	$('#popSlider1 .slide-popup__slider').slick({
		slidesToShow: 1,
		dots: false
	});

	$('#popSlider2 .slide-popup__slider').on(`init reInit`, function (event, slick) {
		$('#popSlider2 .slide-popup__slider-counter').text('Показано ' + (1 + ' из ' + slick.slideCount));
	})
	$('#popSlider2 .slide-popup__slider').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
		$('#popSlider2 .slide-popup__slider-counter').text('Показано ' + (currentSlide + 1 + ' из ' + slick.slideCount));
	})
	$('#popSlider2 .slide-popup__slider').slick({
		slidesToShow: 1,
		dots: false
	});

	$('#popSlider3 .slide-popup__slider').on(`init reInit`, function (event, slick) {
		$('#popSlider3 .slide-popup__slider-counter').text('Показано ' + (1 + ' из ' + slick.slideCount));
	})
	$('#popSlider3 .slide-popup__slider').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
		$('#popSlider3 .slide-popup__slider-counter').text('Показано ' + (currentSlide + 1 + ' из ' + slick.slideCount));
	})
	$('#popSlider3 .slide-popup__slider').slick({
		slidesToShow: 1,
		dots: false
	});

	$('#popSlider4 .slide-popup__slider').on(`init reInit`, function (event, slick) {
		$('#popSlider4 .slide-popup__slider-counter').text('Показано ' + (1 + ' из ' + slick.slideCount));
	})
	$('#popSlider4 .slide-popup__slider').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
		$('#popSlider4 .slide-popup__slider-counter').text('Показано ' + (currentSlide + 1 + ' из ' + slick.slideCount));
	})
	$('#popSlider4 .slide-popup__slider').slick({
		slidesToShow: 1,
		dots: false
	});

	$('#popSlider5 .slide-popup__slider').on(`init reInit`, function (event, slick) {
		$('#popSlider5 .slide-popup__slider-counter').text('Показано ' + (1 + ' из ' + slick.slideCount));
	})
	$('#popSlider5 .slide-popup__slider').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
		$('#popSlider5 .slide-popup__slider-counter').text('Показано ' + (currentSlide + 1 + ' из ' + slick.slideCount));
	})
	$('#popSlider5 .slide-popup__slider').slick({
		slidesToShow: 1,
		dots: false
	});



	// ===== SLIDERS ===== END =====



	// ===== PRICE LIST ===== START =====

	$('.reviews').on('change', () => {
		if ($('#rWindows').prop('checked')) {
			$('.reviews__sliders-body').removeClass('_active')
			$('#windowsRereviewsSlider').addClass('_active')
			$('#iSlider').slick({
				arrows: false,
				fade: true,
				asNavFor: '#tSlider'
			});
			$('#tSlider').slick({
				fade: true,
				asNavFor: '#iSlider'
			});
		} else {
			$('#iSlider').slick('unslick');
			$('#tSlider').slick('unslick');
			$('#windowsRereviewsSlider').removeClass('_active')
		}

		if ($('#rDoors').prop('checked')) {
			$('.reviews__sliders-body').removeClass('_active')
			$('#doorsRereviewsSlider').addClass('_active')
			$('#iSlider2').slick({
				arrows: false,
				fade: true,
				asNavFor: '#tSlider2'
			});
			$('#tSlider2').slick({
				fade: true,
				asNavFor: '#iSlider2'
			});
		} else {
			$('#iSlider2').slick('unslick');
			$('#tSlider2').slick('unslick');
			$('#doorsRereviewsSlider').removeClass('_active')
		}

		if ($('#rAlumWindows').prop('checked')) {
			$('.reviews__sliders-body').removeClass('_active')
			$('#alumWindowsRereviewsSlider').addClass('_active')
			$('#iSlider3').slick({
				arrows: false,
				fade: true,
				asNavFor: '#tSlider3'
			});
			$('#tSlider3').slick({
				fade: true,
				asNavFor: '#iSlider3'
			});
		} else {
			$('#iSlider3').slick('unslick');
			$('#tSlider3').slick('unslick');
			$('#alumWindowsRereviewsSlider').removeClass('_active')
		}

		if ($('#rBalconies').prop('checked')) {
			$('.reviews__sliders-body').removeClass('_active')
			$('#balconiesRereviewsSlider').addClass('_active')
			$('#iSlider4').slick({
				arrows: false,
				fade: true,
				asNavFor: '#tSlider4'
			});
			$('#tSlider4').slick({
				fade: true,
				asNavFor: '#iSlider4'
			});
		} else {
			$('#iSlider4').slick('unslick');
			$('#tSlider4').slick('unslick');
			$('#balconiesRereviewsSlider').removeClass('_active')
		}
	})

	if (window_width > 576) {

		$('.prices').on('change', () => {
			if ($('#pWindows').prop('checked') && $('#partnerWds').prop('checked')) {
				$('.prices__item-offer').removeClass('_active')
				$('#windowsWdsPriceList').addClass('_active')
			} else {
				$('#windowsWdsPriceList').removeClass('_active')
			}

			if ($('#pWindows').prop('checked') && $('#partnerSteko').prop('checked')) {
				$('.prices__item-offer').removeClass('_active')
				$('#windowsStekoPriceList').addClass('_active')
			} else {
				$('#windowsStekoPriceList').removeClass('_active')
			}

			if ($('#pWindows').prop('checked') && $('#partnerRehau').prop('checked')) {
				$('.prices__item-offer').removeClass('_active')
				$('#windowsRehauPriceList').addClass('_active')
			} else {
				$('#windowsRehauPriceList').removeClass('_active')
			}

			if ($('#pWindows').prop('checked') && $('#partnerViknar').prop('checked')) {
				$('.prices__item-offer').removeClass('_active')
				$('#windowsViknarPriceList').addClass('_active')
			} else {
				$('#windowsViknarPriceList').removeClass('_active')
			}

			if ($('#pWindows').prop('checked') && $('#partnerOpenT').prop('checked')) {
				$('.prices__item-offer').removeClass('_active')
				$('#windowsOpenTPriceList').addClass('_active')
			} else {
				$('#windowsOpenTPriceList').removeClass('_active')
			}

			// ------------------------------------------------------

			if ($('#pDoors').prop('checked') && $('#partnerWds').prop('checked')) {
				$('.prices__item-offer').removeClass('_active')
				$('#doorsWdsPriceList').addClass('_active')
			} else {
				$('#doorsWdsPriceList').removeClass('_active')
			}

			if ($('#pDoors').prop('checked') && $('#partnerSteko').prop('checked')) {
				$('.prices__item-offer').removeClass('_active')
				$('#doorsStekoPriceList').addClass('_active')
			} else {
				$('#doorsStekoPriceList').removeClass('_active')
			}

			if ($('#pDoors').prop('checked') && $('#partnerRehau').prop('checked')) {
				$('.prices__item-offer').removeClass('_active')
				$('#doorsRehauPriceList').addClass('_active')
			} else {
				$('#doorsRehauPriceList').removeClass('_active')
			}

			if ($('#pDoors').prop('checked') && $('#partnerViknar').prop('checked')) {
				$('.prices__item-offer').removeClass('_active')
				$('#doorsViknarPriceList').addClass('_active')
			} else {
				$('#doorsViknarPriceList').removeClass('_active')
			}

			if ($('#pDoors').prop('checked') && $('#partnerOpenT').prop('checked')) {
				$('.prices__item-offer').removeClass('_active')
				$('#doorsOpenTPriceList').addClass('_active')
			} else {
				$('#doorsOpenTPriceList').removeClass('_active')
			}

			// ----------------------------------------------------------

			if ($('#pAlumWindows').prop('checked') && $('#partnerWds').prop('checked')) {
				$('.prices__item-offer').removeClass('_active')
				$('#alumWindowsWdsPriceList').addClass('_active')
			} else {
				$('#alumWindowsWdsPriceList').removeClass('_active')
			}

			if ($('#pAlumWindows').prop('checked') && $('#partnerSteko').prop('checked')) {
				$('.prices__item-offer').removeClass('_active')
				$('#alumWindowsStekoPriceList').addClass('_active')
			} else {
				$('#alumWindowsStekoPriceList').removeClass('_active')
			}

			if ($('#pAlumWindows').prop('checked') && $('#partnerRehau').prop('checked')) {
				$('.prices__item-offer').removeClass('_active')
				$('#alumWindowsRehauPriceList').addClass('_active')
			} else {
				$('#alumWindowsRehauPriceList').removeClass('_active')
			}

			if ($('#pAlumWindows').prop('checked') && $('#partnerViknar').prop('checked')) {
				$('.prices__item-offer').removeClass('_active')
				$('#alumWindowsViknarPriceList').addClass('_active')
			} else {
				$('#alumWindowsViknarPriceList').removeClass('_active')
			}

			if ($('#pAlumWindows').prop('checked') && $('#partnerOpenT').prop('checked')) {
				$('.prices__item-offer').removeClass('_active')
				$('#alumWindowsOpenTPriceList').addClass('_active')
			} else {
				$('#alumWindowsOpenTPriceList').removeClass('_active')
			}

			// ---------------------------------------------------


			if ($('#pBalconies').prop('checked') && $('#partnerWds').prop('checked')) {
				$('.prices__item-offer').removeClass('_active')
				$('#balconiesWdsPriceList').addClass('_active')
			} else {
				$('#balconiesWdsPriceList').removeClass('_active')
			}

			if ($('#pBalconies').prop('checked') && $('#partnerSteko').prop('checked')) {
				$('.prices__item-offer').removeClass('_active')
				$('#balconiesStekoPriceList').addClass('_active')
			} else {
				$('#balconiesStekoPriceList').removeClass('_active')
			}

			if ($('#pBalconies').prop('checked') && $('#partnerRehau').prop('checked')) {
				$('.prices__item-offer').removeClass('_active')
				$('#balconiesRehauPriceList').addClass('_active')
			} else {
				$('#balconiesRehauPriceList').removeClass('_active')
			}

			if ($('#pBalconies').prop('checked') && $('#partnerViknar').prop('checked')) {
				$('.prices__item-offer').removeClass('_active')
				$('#balconiesViknarPriceList').addClass('_active')
			} else {
				$('#balconiesViknarPriceList').removeClass('_active')
			}

			if ($('#pBalconies').prop('checked') && $('#partnerOpenT').prop('checked')) {
				$('.prices__item-offer').removeClass('_active')
				$('#balconiesOpenTPriceList').addClass('_active')
			} else {
				$('#balconiesOpenTPriceList').removeClass('_active')
			}

		})

	} else if (window_width < 576) {
		$('.prices').on('change', () => {

			if ($('#mobileProductsTabs option[value=0]').prop('selected')
				&& $('#mobilePartnersTabs option[value=0]').prop('selected')) {

				$('.prices__item-offer').removeClass('_active')
				$('#windowsWdsPriceList').addClass('_active')
			} else {
				$('#windowsWdsPriceList').removeClass('_active')
			}

			if ($('#mobileProductsTabs option[value=0]').prop('selected')
				&& $('#mobilePartnersTabs option[value=1]').prop('selected')) {

				$('.prices__item-offer').removeClass('_active')
				$('#windowsStekoPriceList').addClass('_active')
			} else {
				$('#windowsStekoPriceList').removeClass('_active')
			}

			if ($('#mobileProductsTabs option[value=0]').prop('selected')
				&& $('#mobilePartnersTabs option[value=2]').prop('selected')) {

				$('.prices__item-offer').removeClass('_active')
				$('#windowsRehauPriceList').addClass('_active')
			} else {
				$('#windowsRehauPriceList').removeClass('_active')
			}

			if ($('#mobileProductsTabs option[value=0]').prop('selected')
				&& $('#mobilePartnersTabs option[value=3]').prop('selected')) {

				$('.prices__item-offer').removeClass('_active')
				$('#windowsViknarPriceList').addClass('_active')
			} else {
				$('#windowsViknarPriceList').removeClass('_active')
			}

			if ($('#mobileProductsTabs option[value=0]').prop('selected')
				&& $('#mobilePartnersTabs option[value=4]').prop('selected')) {

				$('.prices__item-offer').removeClass('_active')
				$('#windowsOpenTPriceList').addClass('_active')
			} else {
				$('#windowsOpenTPriceList').removeClass('_active')
			}

			// --------------------------------------------------------

			if ($('#mobileProductsTabs option[value=1]').prop('selected')
				&& $('#mobilePartnersTabs option[value=0]').prop('selected')) {

				$('.prices__item-offer').removeClass('_active')
				$('#doorsWdsPriceList').addClass('_active')
			} else {
				$('#doorsWdsPriceList').removeClass('_active')
			}

			if ($('#mobileProductsTabs option[value=1]').prop('selected')
				&& $('#mobilePartnersTabs option[value=1]').prop('selected')) {

				$('.prices__item-offer').removeClass('_active')
				$('#doorsStekoPriceList').addClass('_active')
			} else {
				$('#doorsStekoPriceList').removeClass('_active')
			}

			if ($('#mobileProductsTabs option[value=1]').prop('selected')
				&& $('#mobilePartnersTabs option[value=2]').prop('selected')) {

				$('.prices__item-offer').removeClass('_active')
				$('#doorsRehauPriceList').addClass('_active')
			} else {
				$('#doorsRehauPriceList').removeClass('_active')
			}

			if ($('#mobileProductsTabs option[value=1]').prop('selected')
				&& $('#mobilePartnersTabs option[value=3]').prop('selected')) {

				$('.prices__item-offer').removeClass('_active')
				$('#doorsViknarPriceList').addClass('_active')
			} else {
				$('#doorsViknarPriceList').removeClass('_active')
			}

			if ($('#mobileProductsTabs option[value=1]').prop('selected')
				&& $('#mobilePartnersTabs option[value=4]').prop('selected')) {

				$('.prices__item-offer').removeClass('_active')
				$('#doorsOpenTPriceList').addClass('_active')
			} else {
				$('#doorsOpenTPriceList').removeClass('_active')
			}

			// --------------------------------------------------------

			if ($('#mobileProductsTabs option[value=2]').prop('selected')
				&& $('#mobilePartnersTabs option[value=0]').prop('selected')) {

				$('.prices__item-offer').removeClass('_active')
				$('#alumWindowsWdsPriceList').addClass('_active')
			} else {
				$('#alumWindowsWdsPriceList').removeClass('_active')
			}

			if ($('#mobileProductsTabs option[value=2]').prop('selected')
				&& $('#mobilePartnersTabs option[value=1]').prop('selected')) {

				$('.prices__item-offer').removeClass('_active')
				$('#alumWindowsStekoPriceList').addClass('_active')
			} else {
				$('#alumWindowsStekoPriceList').removeClass('_active')
			}

			if ($('#mobileProductsTabs option[value=2]').prop('selected')
				&& $('#mobilePartnersTabs option[value=2]').prop('selected')) {

				$('.prices__item-offer').removeClass('_active')
				$('#alumWindowsRehauPriceList').addClass('_active')
			} else {
				$('#alumWindowsRehauPriceList').removeClass('_active')
			}

			if ($('#mobileProductsTabs option[value=2]').prop('selected')
				&& $('#mobilePartnersTabs option[value=3]').prop('selected')) {

				$('.prices__item-offer').removeClass('_active')
				$('#alumWindowsViknarPriceList').addClass('_active')
			} else {
				$('#alumWindowsViknarPriceList').removeClass('_active')
			}

			if ($('#mobileProductsTabs option[value=2]').prop('selected')
				&& $('#mobilePartnersTabs option[value=4]').prop('selected')) {

				$('.prices__item-offer').removeClass('_active')
				$('#alumWindowsOpenTPriceList').addClass('_active')
			} else {
				$('#alumWindowsOpenTPriceList').removeClass('_active')
			}

			// --------------------------------------------------------

			if ($('#mobileProductsTabs option[value=3]').prop('selected')
				&& $('#mobilePartnersTabs option[value=0]').prop('selected')) {

				$('.prices__item-offer').removeClass('_active')
				$('#balconiesWdsPriceList').addClass('_active')
			} else {
				$('#balconiesWdsPriceList').removeClass('_active')
			}

			if ($('#mobileProductsTabs option[value=3]').prop('selected')
				&& $('#mobilePartnersTabs option[value=1]').prop('selected')) {

				$('.prices__item-offer').removeClass('_active')
				$('#balconiesStekoPriceList').addClass('_active')
			} else {
				$('#balconiesStekoPriceList').removeClass('_active')
			}

			if ($('#mobileProductsTabs option[value=3]').prop('selected')
				&& $('#mobilePartnersTabs option[value=2]').prop('selected')) {

				$('.prices__item-offer').removeClass('_active')
				$('#balconiesRehauPriceList').addClass('_active')
			} else {
				$('#balconiesRehauPriceList').removeClass('_active')
			}

			if ($('#mobileProductsTabs option[value=3]').prop('selected')
				&& $('#mobilePartnersTabs option[value=3]').prop('selected')) {

				$('.prices__item-offer').removeClass('_active')
				$('#balconiesViknarPriceList').addClass('_active')
			} else {
				$('#balconiesViknarPriceList').removeClass('_active')
			}

			if ($('#mobileProductsTabs option[value=3]').prop('selected')
				&& $('#mobilePartnersTabs option[value=4]').prop('selected')) {

				$('.prices__item-offer').removeClass('_active')
				$('#balconiesOpenTPriceList').addClass('_active')
			} else {
				$('#balconiesOpenTPriceList').removeClass('_active')
			}






		})
	}

	// ===== PRICE LIST ===== END =====

})