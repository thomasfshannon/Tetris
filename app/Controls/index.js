export function bindController(shape) {
	console.log(shape)
	document.addEventListener('keydown', function(e) {
		switch(e.code) {
			case 'ArrowLeft':
				shape.shiftLeft();
				break;
			case 'ArrowRight':
				shape.shiftRight();
				break;
			case 'ArrowUp':
				shape.rotate();

				break;
			case 'ArrowDown':
				// 
				break;
			default:
				break;
		}	
	});
}
