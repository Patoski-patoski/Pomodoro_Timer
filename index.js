const play =  document.getElementById('play');
let minutes =  document.getElementById('minutes');
let seconds =  document.getElementById('seconds');

window.addEventListener("load", () =>
{
    minutes.innerText = "00";
    seconds.innerText = "00";
})

function startCount() 
{
        minutes.innerText = 05;
        seconds.innerText = 10;

        let countDown = setInterval(() =>
        {
            seconds.innerText -= 1;
            if (seconds.innerText <= 0) 
            {
                minutes.innerText -= 1;
                seconds.innerText = 10;                // clearInterval(seconds.innerText);
            }

            if (minutes.innerText <= 0) {
                minutes.innerText = "04";
                seconds.innerText = 59;
            }
            if (minutes.innerText <= 0) {
                minutes.innerText = "24";
                seconds.innerText = 59
            }
          
        },1000);

        function clearCountDowon() {
            clearInterval(countDown)
        }
        
}
