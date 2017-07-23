var timing = 250,
    i = 0,
    output = document.getElementById('output');

function loop() {
  i++;
  output.innerHTML = i;
  window.setTimeout(loop, timing);
}

document.querySelector('input[type="range"]').addEventListener('change', function (e) {
  timing = parseInt(this.value);
});

loop();