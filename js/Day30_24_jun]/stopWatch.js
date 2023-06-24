// javascript code goes here

var seconds = 0;
var timerOn = false;
var intervalId;

function start() {
  if (!timerOn) {
    intervalId = setInterval(() => {
      seconds++;
      setTime();
    }, 1000);
    document.getElementById("start").setAttribute("disabled", true);
    document.getElementById("stop").removeAttribute("disabled");
    document.getElementById("pause").removeAttribute("disabled");

    timerOn = true;
  }
}

function pause() {
  if (timerOn) {
    // pause
    clearInterval(intervalId);
    timerOn = false;
    document.getElementById("pause").innerText = "continue";
  } else {
    // conitnue
    document.getElementById("pause").innerText = "pause";
    start();
  }
}

function stop() {
  document.getElementById("start").removeAttribute("disabled");
  document.getElementById("pause").setAttribute("disabled", true);
  document.getElementById("pause").innerText = "pause";
  document.getElementById("stop").setAttribute("disabled", true);
  clearInterval(intervalId);
  seconds = 0;
  timerOn = false;
  setTime();
}
function setTime() {
  const timer = document.getElementById("time");

  const h = parseInt(seconds / 3600);
  const m = parseInt((seconds / 60) % 60);
  const s = parseInt(seconds % 60);

  timer.innerText =
    (h < 10 ? "0" : "") +
    h +
    ":" +
    (m < 10 ? "0" : "") +
    m +
    ":" +
    (s < 10 ? "0" : "") +
    s;
}

let timerDiv = document.getElementById("time");
document.getElementById("pause").setAttribute("disabled", true);
document.getElementById("stop").setAttribute("disabled", true);
setTime();
