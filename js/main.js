$(document).ready(function () {
	$('.partners__slider-body').slick({
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 2,
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
	});

	$('.slick-arrow').empty()
})