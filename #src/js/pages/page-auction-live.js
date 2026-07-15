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
document.addEventListener('DOMContentLoaded', function() {
	const sidebarList = document.querySelector('.sidebarL__list');
	const btnWrapper = document.querySelector('.btn-wrapper');
	const btn = document.querySelector('.btn-wrapper .btn.btn-primary');
	const currentLot = document.querySelector('.sidebarL__item[data-hr-status="current"]');
	
	if (!currentLot || !btnWrapper || !btn) return;
	
	// ====== ПРОКРУТКА ДО ЕЛЕМЕНТА ======
	function scrollToCurrentLot() {
		const currentLotRect = currentLot.getBoundingClientRect();
		const sidebarListRect = sidebarList.getBoundingClientRect();
		
		const scrollOffset = currentLotRect.top - sidebarListRect.top + sidebarList.scrollTop;
		
		sidebarList.scrollTo({
			top: scrollOffset,
			behavior: 'smooth'
		});
	}
	
	// ====== INTERSECTION OBSERVER ======
	const observer = new IntersectionObserver(function(entries) {
		entries.forEach(function(entry) {
			btnWrapper.classList.toggle('hidden', entry.isIntersecting);
		});
	}, {
		root: sidebarList,
		threshold: 0
	});
	
	observer.observe(currentLot);
	
	// ====== КЛІК ПО КНОПЦІ ======
	btn.addEventListener('click', function(e) {
		e.preventDefault();
		scrollToCurrentLot();
	});
});