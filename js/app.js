$(document).ready(function(){

	//I can guarantee that all the elements have loaded
	$('img').on('click', function(){
		console.log('One of the images was clicked');
		var clickedImage = $(this);
		clickedImage.toggleClass('img-circle');
	});

	$("#login-form").on('submit', function(event){
		event.preventDefault();

		var email = $("#email").val();
		console.log(email);
	});

	$("#country").on('change', function(){
		console.log($(this).val());
	});

	$("#email").on('focus', function(){
		console.log('focus');
	}).on('blur', function(){
		console.log('blur');
	});

	$(window).on('keyup', function(event){
		if (event.keyCode == 65){
			console.log('A character pressed')
		}
	});

	$(window).on('scroll', function(event){
		// console.log($(this).scrollTop());
	});

});