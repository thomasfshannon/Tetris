
function Game() {
	this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.audioBuffer = new Audio();
    this.audioBuffer.src = require('../tetris-theme.mp3');
    this.audioBuffer.controls = true;
    this.audioBuffer.autoplay = true;
    this.audioBuffer.loop = true;
    this.playing = true;
    this.source = this.audioContext.createMediaElementSource(this.audioBuffer)
    this.points = 0;
    this.lineCount = 0;

    document.getElementById('toggleMusic').addEventListener('click', () => {
        this.playing ? this.stopSong() : this.playSong();
    })
}

Game.prototype.autoPlay = function() {
    var analyser = this.audioContext.createAnalyser();  
    this.source.connect(analyser);
    analyser.connect(this.audioContext.destination);
}

Game.prototype.playSong = function() {
    this.audioBuffer.play();
    this.playing = true;
    changeBtn('Stop Music')
}

Game.prototype.stopSong = function() {
    this.audioBuffer.pause();
    this.playing = false;
    changeBtn('Start Music')
}

function changeBtn(text) {
    document.getElementById('toggleMusic').innerHTML = text;
}

Game.prototype.renderList = function() {
    let scores = localStorage.getItem('scores');
    if(scores) {
        let str = '';

        JSON.parse(scores).forEach((item, i) => {
            str+=`<li> ${i + 1} - ${item.points}</li>`
        });

        str = `<ul>${str}</ul>`;
        document.getElementById('scores').innerHTML = str;
    }
}

Game.prototype.playAgain = function(startGame) {
    let btn = document.getElementById('btn');
    let scores = document.getElementById('score-wrap');
    btn.classList.remove('hidden');
    scores.classList.remove('hidden');
    var self = this;
    btn.addEventListener('click', function() {
        this.classList.add('hidden');
        scores.classList.add('hidden');
        self.clearPoints(0);
        startGame();
    });
}

Game.prototype.addPoints = function(add) {
    this.points = this.points + add;
    document.getElementById('points').innerHTML = this.points;
}

Game.prototype.clearPoints = function(clear) {
    this.points = clear
    document.getElementById('points').innerHTML = this.points;
}

Game.prototype.addLine = function(num) {
    this.lineCount = this.lineCount + num;
    document.getElementById('line').innerHTML = this.lineCount;
}

Game.prototype.setScore = function() {
    let scores = localStorage.getItem('scores');
    if(!scores) {
        localStorage.setItem('scores', JSON.stringify([{id: 1,points: this.points, lineCount: this.lineCount}]))
    } else {
        let newScores = JSON.parse(scores);
        newScores.push({
            points: this.points,
            lineCount: this.lineCount
        });

        var sorted = newScores.sort((a, b) => {
            return a.points < b.points;
        })

        let cut = sorted.slice(0, 10);
        cut.sort((a, b) => {
            return a.points < b.points;
        })
        
        localStorage.setItem('scores', JSON.stringify(cut))

    }
}

const GAME = new Game();
export default GAME;
