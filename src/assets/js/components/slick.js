$('.partners__slider').slick({
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1,

	responsive: [
		{
			breakpoint: 1201,
			settings: {
				slidesToShow: 4,
			}
		},

		{
			breakpoint: 771,
			settings: {
				slidesToShow: 3,
			}
		},

		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
			}
		},
	]

});