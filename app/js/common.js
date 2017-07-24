$(document).ready(function () {

	$(window).scroll(function(){
		if($(this).scrollTop()>120 && $(window).width() >= 992){
			$('#top-nav').addClass('fixed');
		}
		else if ($(this).scrollTop()<120 && $(window).width() >= 992){
			$('#top-nav').removeClass('fixed');
		}
	});

	//слайдер
	$(".owl-carousel").owlCarousel({
		loop: true,
		smartSpeed: 1000,
		responsive : {
			0 : {
				items: 1,
				nav: true,
			}
		},
		navText: ""
	});

	//кнопка верхнего меню
	$(".toggle_menu").click(function() {
			$(".sandwich").toggleClass("active");
		});

	$(".flex-container li a").click(function() {
		if ($(window).width() < 992) {
			$("#top-nav").fadeOut(600);
			$(".sandwich").toggleClass("active");
		}
	});

	$(".toggle_menu").click(function() {
		if ($("#top-nav").is(":visible")) {
			$("#top-nav").slideToggle(600);
		} else {
			$("#top-nav").slideToggle(600);
		}	
	});

	function widthDetect() {
		if ($(window).width() >= 992) {
			$("#top-nav").show();
		};
		if ($(window).width() < 992) {
			$("#top-nav").hide();
			$(".sandwich").removeClass("active");
		};
		if ($(window).width() > 768) {
			$(".search").css('display', 'flex');
		};
		if (($(window).width() <= 768) && $('.search-button span.glyphicon').hasClass('glyphicon-search')) {
			$(".search").css('display', 'none');
		};
	};

	widthDetect();

	$(window).resize(function() {
		widthDetect();
	});

	//аккордеон футера
	$('.accordion li:first-child').click(function(){
		if ($(window).width() < 768) {
			if ($(this).siblings('li').is(":hidden")) {
				$(this).siblings('li').slideToggle(600);
				$(this).children('h3').removeClass('h3-bg2').addClass('h3-bg1');
			} else {
				$(this).siblings('li').slideToggle(600);
				$(this).children('h3').removeClass('h3-bg1').addClass('h3-bg2');
			}
		}
	});

	//кнопка search
	$(".search-button").click(function() {
			if($(this).children("span.glyphicon").hasClass('glyphicon-search')){
				$(this).children('span.glyphicon').removeClass('glyphicon-search');
				$(this).children('span.glyphicon').addClass('glyphicon-plus');
			} else {
				$(this).children('span.glyphicon').removeClass("glyphicon-plus");
				$(this).children('span.glyphicon').addClass("glyphicon-search");
			};
			if ($(".search").is(':visible')) {
				$(".search").slideToggle(400);
			} else {
				$(".search").slideToggle(400).css('display', 'flex');
			}	
		});

}); //ready end


	//Google maps

	function initMap() {
		var map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: 25.9461570, lng: -80.1435150},
			zoom: 15,
			scrollwheel: false,
			disableDefaultUI: true,
			styles: [
				{elementType: 'geometry', stylers: [{color: '#f2f6fb'}]},
				{elementType: 'labels.text.stroke', stylers: [{color: '#b6babf'},{ visibility: 'off' }]},
				{elementType: 'labels.text.fill', stylers: [{color: '#000409'}]},	
				{
					featureType: 'water',
					elementType: 'geometry',
					stylers: [{color: '#0049b0'}]
				},
				{ 
					featureType: 'water',
					elementType: 'labels.text',
					stylers: [{ color: '#777a80'}]
				},
				{
					featureType: 'road',
					elementType: 'geometry',
					stylers: [{color: '#292d32'}]
				},
				{ "featureType": "road", "elementType": "geometry.stroke", "stylers": [ { "color": "#fff" } ] },
				{ "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [ { "visibility": "off" } ] },
				{ "featureType": "poi", "stylers": [ { "visibility": "off" } ] },
				{ "featureType": "road", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] },
				{ "featureType": "road.highway", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },
				{ "featureType": "administrative", "elementType": "labels", "stylers": [ { "color": "#94989d" } ] },
			]
		});
	};