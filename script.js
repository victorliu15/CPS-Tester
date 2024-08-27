let clicks = 0;
let startTime = null;
let timer = 0;
let countdownInterval = null;
let cpsInterval = null;
let finalCPS = 0;
let clickNums = [];

function averageCPS(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += parseInt(nums[i]);
  }
  return total / nums.length;
}

function updateCPS() {
  if (startTime) {
    let currentTime = new Date().getTime();
    let elapsedTime = (currentTime - startTime) / 1000;
    let cps = (clicks / elapsedTime).toFixed(2);
    clickNums.push(cps);
    document.getElementById("cps").innerHTML =
      "Average CPS: " + averageCPS(clickNums).toFixed(2);
  }
}

function startCountdown() {
  countdownInterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.getElementById("timer").innerHTML = "Time Left: " + timer;
    } else {
      clearInterval(countdownInterval);
      clearInterval(cpsInterval);
      let finalTime = (new Date().getTime() - startTime) / 1000;
      finalCPS = (clicks / finalTime).toFixed(2);
      document.getElementById("cps").innerHTML = "Final CPS: " + finalCPS;
      document.getElementById("timer").innerHTML = "Time Left: 0";
    }
  }, 1000);
}

document.getElementById("clickingArea").addEventListener("click", function () {
  if (!startTime) {
    startTime = new Date().getTime();
    cpsInterval = setInterval(updateCPS, 100);
    startCountdown();
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
