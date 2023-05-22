const play = document.getElementById('play');
const reset = document.getElementById('reset');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let workIndicator = document.getElementById('work');
let breakIndicator = document.getElementById('break');


minutes.innerText = "00";
seconds.innerText = "00";

function p() {
   
minutes.innerText = "00";
seconds.innerText = "00"; 
}


function startCount() {

    workIndicator.classList.add("work-active");
    play.classList.add("inactive");
    reset.classList.remove("inactive");
    workIndicator.classList.add("work-active");
    minutes.innerText = 24;
    seconds.innerText = 59;

    let setTimer = setInterval(() => {
        seconds.innerText--;
        if (seconds.innerText < 0) {
            minutes.innerText--;
            seconds.innerText = 59;
        }

        if (minutes.innerText < 0 && workIndicator.classList.contains("work-active")) {
            minutes.innerText = 4;
            seconds.innerText = 59;
            workIndicator.classList.remove("work-active");
            breakIndicator.classList.add("break-active");
        }

        if (minutes.innerText < 0 && breakIndicator.classList.contains("break-active")) {
            minutes.innerText = 24;
            seconds.innerText = 59;
            workIndicator.classList.add("work-active");
            breakIndicator.classList.remove("break-active");
        }
       

    }, 1000);
}

function endCount() {
    location.reload()
}

play.addEventListener("click", startCount, {once: true});
reset.addEventListener("click", endCount);