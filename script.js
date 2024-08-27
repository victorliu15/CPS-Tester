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

function reset() {
  clicks = 0;
  startTime = null;
  clickNums = [];
  clearInterval(countdownInterval);
  clearInterval(cpsInterval);
  document.getElementById("cps").innerHTML = "CPS: 0";
  document.getElementById("timer").innerHTML = "Time Left: 0";
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

document
  .getElementById("clickingArea")
  .addEventListener("click", function (event) {
    if (timer == 0) {
      return;
    }
    if (!startTime) {
      startTime = new Date().getTime();
      cpsInterval = setInterval(updateCPS, 100);
      startCountdown();
    }
    clicks += 1;
    placeDot(event, this);
    let clickingArea = document.getElementById("clickingArea");
    clickingArea.classList.add("bounce");
    setTimeout(() => {
      clickingArea.classList.remove("bounce");
    }, 300);
  });

function placeDot(event, element) {
  const dot = document.createElement("div");
  dot.style.position = "absolute";
  dot.classList.add("click-dot");

  dot.style.left = `${event.clientX}px`;
  dot.style.top = `${event.clientY}px`;

  element.appendChild(dot);

  setTimeout(() => {
    dot.remove();
  }, 1000);
}

function clearSelect(selected) {
  let nums = [
    "oneSecond",
    "fiveSecond",
    "fifteenSecond",
    "thirtySecond",
    "sixtySecond",
  ];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != selected) {
      document.getElementById(nums[i]).style.backgroundColor = "transparent";
    }
  }
}

document.getElementById("oneSecond").addEventListener("click", function () {
  reset();
  timer = 1;
  document.getElementById("timer").innerHTML = "Time Left: 1";
  document.getElementById("oneSecond").style.backgroundColor = "#303030";
  clearSelect("oneSecond");
});
document.getElementById("fiveSecond").addEventListener("click", function () {
  reset();
  timer = 5;
  document.getElementById("timer").innerHTML = "Time Left: 5";
  document.getElementById("fiveSecond").style.backgroundColor = "#303030";
  clearSelect("fiveSecond");
});
document.getElementById("fifteenSecond").addEventListener("click", function () {
  reset();
  timer = 15;
  document.getElementById("timer").innerHTML = "Time Left: 15";
  document.getElementById("fifteenSecond").style.backgroundColor = "#303030";
  clearSelect("fifteenSecond");
});
document.getElementById("thirtySecond").addEventListener("click", function () {
  reset();
  timer = 30;
  document.getElementById("timer").innerHTML = "Time Left: 30";
  document.getElementById("thirtySecond").style.backgroundColor = "#303030";
  clearSelect("thirtySecond");
});
document.getElementById("sixtySecond").addEventListener("click", function () {
  reset();
  timer = 60;
  document.getElementById("timer").innerHTML = "Time Left: 60";
  document.getElementById("sixtySecond").style.backgroundColor = "#303030";
  clearSelect("sixtySecond");
});
