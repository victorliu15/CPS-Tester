let clicks = 0;
let startTime = null;
let timer = 0;
function updateCPS() {
  if (startTime) {
    let currentTime = new Date().getTime();
    let elapsedTime = (currentTime - startTime) / 1000;
    let cps = (clicks / elapsedTime).toFixed(2);

    document.getElementById("cps").innerHTML = "CPS: " + cps;
  }
}

setInterval(updateCPS, 100);

document.getElementById("clickingArea").addEventListener("click", function () {
  if (!startTime) {
    startTime = new Date().getTime();
  }
  clicks += 1;
  let clickingArea = document.getElementById("clickingArea");
  clickingArea.classList.add("bounce");
  setTimeout(() => {
    clickingArea.classList.remove("bounce");
  }, 300);
});

document.getElementById("oneSecond").addEventListener("click", function () {
  timer = 1;
  document.getElementById("timer").innerHTML = "Time Left: 1";
});
document.getElementById("fiveSecond").addEventListener("click", function () {
  timer = 5;
  document.getElementById("timer").innerHTML = "Time Left: 5";
});
document.getElementById("fifteenSecond").addEventListener("click", function () {
  timer = 15;
  document.getElementById("timer").innerHTML = "Time Left: 15";
});
document.getElementById("thirtySecond").addEventListener("click", function () {
  timer = 30;
  document.getElementById("timer").innerHTML = "Time Left: 30";
});
document.getElementById("sixtySecond").addEventListener("click", function () {
  timer = 60;
  document.getElementById("timer").innerHTML = "Time Left: 60";
});
