$(document).ready(function(){

	const btn = $('#btn');
	const reset = $('#reset');
	let gridSize = 16;

	$(btn).on('click', clearGrid);
	$(reset).on('click', resetGridSize);
	makeGrid(gridSize);

	//------FUNCTIONS------//

	//Create squares grid
	function makeGrid(size) {

		for(let i=0; i < size; i++){
			let row = '<div class="row">';
			for(let j=0; j < size; j++){
				row+= '<div class="square"></div>';
			}
			row += '</div>';
			$('#squares').append(row);
		}
		let squareSize = ((420 - (gridSize * 2))  / gridSize) + 'px';
		$('.square').css({'height': squareSize, 'width': squareSize});
		//Change colour on hover
		$('.square').on('mouseenter', function(){
			$(this).addClass('changed');
		});
	}

	//Clear Grid
	function clearGrid(){
		$('.square').removeClass('changed');
	}

	//Change grid size
	function resetGridSize(){
		gridSize = prompt('Input a number greater than 16');
			if(gridSize >= 16){
			//Reset grid size
			$('.square').remove();
			console.log(gridSize);
			makeGrid(gridSize);
		} else {
			notLarge();
		}
	}

	// Grid size less than 16
	function notLarge(){
		alert('That number is lower than 16! Try again');
		resetGridSize();
	}


});