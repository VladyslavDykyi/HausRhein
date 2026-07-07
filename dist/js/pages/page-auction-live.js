const swiper = new Swiper(".mySwiper", {
	grabCursor: true,
	slidesPerView: 1,
	autoHeight: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});