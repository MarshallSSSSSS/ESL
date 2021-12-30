document.addEventListener('DOMContentLoaded', function() {

	//Swiper Sliders

	const introSlider = new Swiper('.intro-slider', {
		loop: true,
		autoplay: {
			delay: 5000,
			loop: true,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	const tabsSlider = new Swiper('.content-slider', {
		slidesPerView: 4,
        slidesPerGroup: 4,
        loop: false,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: '.content-slider__next',
    		prevEl: '.content-slider__prev',
			navigationHide: false,
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				allowTouchMove: false,
			},
			576: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				allowTouchMove: false,
			},
			768: {
			  slidesPerView: 2,
			  slidesPerGroup: 2,
			},
			992: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			1200: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
			1400: {
				slidesPerView: 4,
				slidesPerGroup: 4,
			},
		  },
	});

	//Табы

	const tabs = document.querySelector('.tabs');
	const tabsBtn = document.querySelectorAll('.btn__tabs');
	const tabsContents = document.querySelectorAll('.tabs__content');

	if (tabs) {
		tabs.addEventListener('click', (e) => {
			if (e.target.classList.contains('btn__tabs')) {
				const tabsPath = e.target.dataset.tabsPath;
				tabsBtn.forEach(el => {el.classList.remove('btn__tabs-active')});
				document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('btn__tabs-active');
				tabsHandler(tabsPath);
			}
		});
	}

	const tabsHandler = (path) => {
		tabsContents.forEach(el => {el.classList.remove('tabs__content-active')});
		document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content-active');
	};

	//Счётчик

	const startingMinutes = 16;
	let time = startingMinutes * 60;

	const countdownEL = document.getElementById('countdown');

	setInterval(updateCountdown, 1000);

	function updateCountdown() {
		const minutes = Math.floor(time / 60);
		let seconds = time % 60;

		seconds = seconds < 10 ? '0' + seconds : seconds;

		countdownEL.innerHTML = `Осталось: ${minutes}мин ${seconds}сек`;

		time--;

		time = time < 0 ? 0 : time; 
	}

	//Якорь

	const anchors = document.querySelectorAll('a[href*="#"]')

	for (let anchor of anchors) {
		anchor.addEventListener('click', function(e) {
			e.preventDefault();
			const blockID = anchor.getAttribute('href')
			document.querySelector('' + blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	}
});