// left = 37
// up = 38
// right = 39
// down = 40

document.addEventListener('keydown', function(e) {
	console.log(e.code)
	switch(e.code) {
		case 'arrowLeft':
			console.log('left');
			break;
		case 'arrowRight':
			console.log('right');
			break;
		case 'arrowUp':
			// do nothing
			break;
		case 'arrowDown':
			// 
			break;
		default:
			break;
	}	
});