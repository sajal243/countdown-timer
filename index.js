

(function () {
  var hour = document.querySelector("#hrs");
  var min = document.querySelector("#mins");
  var sec = document.querySelector("#secs");

  var start = document.querySelector(".start");
  var stop = document.querySelector(".stop");
  var reset = document.querySelector(".reset");
  var countDownTimer = null;

  start.addEventListener("click", function () {
    if (hour.value == 0 && min.value == 0 && sec.value == 0) {
      console.log("here");
      return;
    }

    function startInterval() {
      start.style.display = "none";
      stop.style.display = "initial";

      countDownTimer = setInterval(() => {
        timer();
      }, 1000);
    }

    startInterval();
  });

  function timer() {
    if (sec.value > 60) {
      min.value++;
      sec.value = parseInt(sec.value - 59);
      sec.value = `${sec.value < 10 ? "0" : ""}${sec.value}`;
    }

    if (min.value > 60) {
      hour.value++;
      min.value = parseInt(min.value - 60);
      min.value = `${min.value < 10 ? "0" : ""}${min.value}`;
    }

    if (hour.value == 0 && min.value == 0 && sec.value == 0) {
      hour.value = "";
      min.value = "";
      sec.value = "";
      stopInterval(countDownTimer);
    } else if (sec.value != 0) {
      sec.value = `${sec.value < 10 ? "0" : ""}${sec.value - 1}`;
    } else if (min.value != 0 && sec.value == 0) {
      sec.value = 59;
      min.value = `${min.value < 10 ? "0" : ""}${min.value - 1}`;
    } else if (hour.value != 0 && min.value == 0) {
      min.value = 60;
      hour.value = `${hour.value < 10 ? "0" : ""}${hour.value - 1}`;
    }

    return;
  }

  function stopInterval(state) {
    start.innerHTML = state === "pause" ? "Continue" : "Start";

    stop.style.display = "none";
    start.style.display = "initial";
    clearInterval(countDownTimer);
  }
  stop.addEventListener("click", function () {
    stopInterval("pause");
  });

  reset.addEventListener("click", function () {
    hour.value = "";
    min.value = "";
    sec.value = "";
    stopInterval(countDownTimer);
  });
})();