



new Swiper('.swipe-container',{

	
	//количество слайдов 
	slidesPerView: 'auto',

	//количество пролистывания
	slidesPerGroup: 1,

	//отсутпы между слайдами
	spaceBetween: 30,

	//Бесконечность
	loop: true,

	//Скорость пролистывания
	speed: 10000,


//Свайпание

	//свайпы на ПК
	simulateTouch: false,
	//чувствительность
	touchRatio: 0,
	//другой курсор
	grabCursor: false,
	// Управление колесом мыши
	mousewheel: {
		// Чувствительность колёсика
		sensitivity: 0,
	},

	//FreeMode
	freeMode: false,


	loopFillGroupWithBlank: true,

	autoplay: {
		delay: 0, 
		disableOnInteraction: false,
		waitForTransition: true,
	}, 

	onlyExternal: true,



	/*
	breakpoints: {
		'@0.75': {
			slidesPerView: 1,
		},
		'@1.00': {
			slidesPerView: 2,
		},
		'@1.50': {
			slidesPerView: 3,
		}
	},
	*/

	/*
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		600: {
			slidesPerView: 2,
		},
		968: {
			slidesPerView: 3,
		}
	},
	*/


});







new Swiper('.swiper-containert',{


	navigation:{
		//Какой блок сделать стрелкой вперёд
		nextEl: '.class',
		//Какой блок сделать стрелкой назад
		prevEl: '.class',
	},

	//Навигация
	pagination:{

		//В какой блок отправить точки
		el: '.swiper-pagination',
		//кликабельность точек
		clickable: true,

	},



	//количество слайдов 
	slidesPerView: 1,



	//количество пролистывания
	slidesPerGroup: 1,



	//отсутпы между слайдами
	spaceBetween: 0,


	//Бесконечность
	loop: true,


	//Скорость пролистывания
	speed: 800,


	//Автовоспроизведение
	
	autoplay:{
		//интервал
		delay: 5000,
		//остановиться на последнем слайде
		stopOnLastSlide: false,
		//остановится после ручного управления
		disableOnInteraction: false,
	},
	
	


//Свайпание

	//свайпы на ПК
	simulateTouch: true,
	//чувствительность
	touchRatio: 1,
	//другой курсор
	grabCursor: false,


//Доп-Эффект


	effect: 'fade',

	
});





