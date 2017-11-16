$(document).ready(function(){


	const btn = $('#btn');
	const reset = $('#reset');

	$(btn).on('click', clearGrid);
	$(reset).on('click', resetSize);


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

	//------FUNCTIONS------//

	//Clear Grid
	function clearGrid(){
		$('.square').removeClass('changed');
	}

	//Change grid size
	function resetSize(){
		$('#reset').on('click', function(){
			//Reset grid size
			let popup = prompt('What size grid? (Number must be greater than 16)');
			console.log(popup);
		});
	}

});