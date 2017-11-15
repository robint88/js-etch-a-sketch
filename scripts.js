$(document).ready(function(){

	for(let i=0; i < 16; i++){
		$('.squares').append('<div class="square">Alright</div>');
	}
	//Change square colour once hovered over
	$('.square').on('mouseenter', function(){
		$(this).addClass('changed');
	});

});