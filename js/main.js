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

	$('.reviews__slider-i').slick({
		arrows: false,
		fade: true,
		asNavFor: '.reviews__slider-t'
	});
	$('.reviews__slider-t').slick({
		fade: true,
		asNavFor: '.reviews__slider-i'
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



	$('.slick-arrow').empty()



	// ===== SLIDERS ===== END =====

})