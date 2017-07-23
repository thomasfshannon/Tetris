export default function Game() {
	this.audioContext = new (window.AudioContext || window.webkitAudioContext)()
}

Game.prototype.startSong = function() {
    var analyser = this.audioContext.createAnalyser();
    var source; 
    var audio0 = new Audio();   
    audio0.src = require('../tetris-theme.mp3');
    audio0.controls = true;
    audio0.autoplay = true;
    audio0.loop = true;
    source = this.audioContext.createMediaElementSource(audio0);
    source.connect(analyser);
    analyser.connect(this.audioContext.destination);
}