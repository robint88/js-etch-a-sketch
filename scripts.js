$(document).ready(function(){


//NEED TO GET VALUE OF INPUT - NOT WORKING
	// const numInput = parseInt($('#number').val());
	// console.log(numInput);


	const button = $('#btn');

	$('button').on('click', clearGrid);

	//Create squares grid
	for(let i=0; i < 16; i++){
		for(let j=0; j < 16; j++){
			$('#squares').append('<div class="square"></div>')[j];
		}
	}
	//Change square colour once hovered over
	$('.square').on('mouseenter', function(){
		$(this).addClass('changed');
	});

	//Clear Grid
	function clearGrid(){
		$('.square').removeClass('changed');
	}

});