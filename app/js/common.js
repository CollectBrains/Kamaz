$(function() {

	$(".overlay-close").on("mouseover", function () {
		$(".overlay").fadeOut(300);
	});

	$(document).on('scroll', function () {
		if($(document).scrollTop() >= 5) {
			$('.main-header').addClass('top');
		}
		else {
			$('.main-header').removeClass('top');
		}
	});

	$(".menu-link").on("click", function () {
		$(".overlay.primary").fadeToggle(300);
	});

	$("#crew").on( "mouseenter",( function () {
		$(".overlay.crew").fadeIn(300)}));
	$("#crew").on("mouseleave", function () {
		$(".overlay.crew").fadeOut(300);
	});

	$("#auto").on( "mouseenter",( function () {
		$(".overlay.auto").fadeIn(300)}));
	$("#auto").on("mouseleave", function () {
		$(".overlay.auto").fadeOut(300);
	});

	$("#master").on( "mouseenter",( function () {
		$(".overlay.master").fadeIn(300)}));
	$("#master").on("mouseleave", function () {
		$(".overlay.master").fadeOut(300);
	});


	var menuEight = document.querySelector('.menu-button');

	function addClassFunEight(){
		this.classList.toggle("clickMenuEight");
	}

	menuEight.addEventListener('click', addClassFunEight);


	svg4everybody();

	scaleVideoContainer();

	initBannerVideoSize('.video-container .poster img');
	initBannerVideoSize('.video-container .filter');
	initBannerVideoSize('.video-container video');

	$(window).on('resize', function() {
		scaleVideoContainer();
		scaleBannerVideoSize('.video-container .poster img');
		scaleBannerVideoSize('.video-container .filter');
		scaleBannerVideoSize('.video-container video');
	});

});

function scaleVideoContainer() {

	var height = $(window).height() + 5;
	var unitHeight = parseInt(height) + 'px';
	$('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

	$(element).each(function(){
		$(this).data('height', $(this).height());
		$(this).data('width', $(this).width());
	});

	scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

	var windowWidth = $(window).width(),
		windowHeight = $(window).height() + 5,
		videoWidth,
		videoHeight;

	// console.log(windowHeight);

	$(element).each(function(){
		var videoAspectRatio = $(this).data('height')/$(this).data('width');

		$(this).width(windowWidth);

		if(windowWidth < 1000){
			videoHeight = windowHeight;
			videoWidth = videoHeight / videoAspectRatio;
			$(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

			$(this).width(videoWidth).height(videoHeight);
		}

		$('.homepage-hero-module .video-container video').addClass('fadeIn animated');

	});
}


