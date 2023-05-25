const play = document.getElementById('play');
const reset = document.getElementById('reset');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let workTime = document.getElementById('work');
let breakTime = document.getElementById('break');
let pomodoroCounter = document.getElementById('count');

starterTimer();

function starterTimer() {
    minutes.innerText = "00";
    seconds.innerText = "00";
}

let setTiming;
let interval;
pomodoroCounter.innerText = 0;

function startCount() {
    endCount();
    workTime.classList.add("work-active");
    play.classList.add("inactive");
    reset.classList.remove("inactive");
    minutes.innerText = 24;
    seconds.innerText = 59;

    setTiming = setInterval(() => {
        seconds.innerText--;
        if (seconds.innerText < 0) {
            minutes.innerText--;
            seconds.innerText = 59;
        }

        // break time
        if (minutes.innerText < 0 && workTime.classList.contains("work-active")) {
            pomodoroCounter.innerText++;
            minutes.innerText = 4;
            seconds.innerText = 59;
            workTime.classList.remove("work-active");
            breakTime.classList.add("break-active");
        }
        //work
        if (minutes.innerText < 0 && breakTime.classList.contains("break-active")) {
            minutes.innerText = 24;
            seconds.innerText = 59;
            workTime.classList.add("work-active");
            breakTime.classList.remove("break-active");
        }

        if (pomodoroCounter.innerText == 4) {
            saveCount();
            bigRest();
        }

    }, 1000);
}

function bigRest() {
    pomodoroCounter.innerText = `Hello, Its four Podomoro already. Time to have a longer rest!`
    minutes.innerText = 29;
    seconds.innerText = 59;
    interval = setInterval(() => {
        seconds.innerText--;
        if (seconds.innerText < 0) {
            minutes.innerText--;
            seconds.innerText = 59;
        }
        if (minutes.innerText < 0) {
            saveCount();
        }
    }, 1000)
}

function endCount() {
    clearInterval(setTiming);
    clearInterval(interval);
    starterTimer();
    pomodoroCounter.innerText = 0;
    play.classList.remove("inactive");
    reset.classList.add("inactive");
    workTime.classList.remove("work-active");
    breakTime.classList.remove("break-active");
}
function saveCount() {
    clearInterval(setTiming);
    starterTimer();
    pomodoroCounter.innerText = 4;
    workTime.classList.remove("work-active");
    breakTime.classList.add("break-active");
}

play.addEventListener("click", startCount);
reset.addEventListener("click", endCount);