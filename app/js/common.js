$(function() {

	var menuEight = document.querySelector('.menu-button');

	function addClassFunEight(){
		this.classList.toggle("clickMenuEight");
	}

	menuEight.addEventListener('click', addClassFunEight);


	svg4everybody();

});
