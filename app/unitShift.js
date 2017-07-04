 function shiftDown(instance) {
	var i = 0;
	setInterval(() => {
		i++;
		instance(i)
	}, 1000)
}



