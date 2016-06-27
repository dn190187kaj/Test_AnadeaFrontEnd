$(document).ready(function(){
	$('.open_ava').on('click', function(){
		$('.open').addClass('display_b')
		$('.open').removeClass('display_n')
	})
	$('.close_ava').on('click', function(){
		$('.open').removeClass('display_b');
		$('.open').addClass('display_n')
	})
})