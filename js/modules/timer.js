function timer(deadLine) {
    
    const dayMs = 86400000,
          hoursMs = 3600000,
          minutsMs = 60000,
          secondsMs = 1000;

    function timerObj(endtime){
        const now = new Date(),
              total = Date.parse(endtime) - Date.parse(now),
              day = Math.floor(total / dayMs),
              hours = Math.floor((total / hoursMs) % 24),
              minuts = Math.floor((total / minutsMs) % 60),
              seconds = Math.floor((total / secondsMs) % 60);

        return {
            total,
            day,
            hours,
            minuts,
            seconds
        };
    }

    function getZero(num) {
        if (num < 10 && num >= 0) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function getTimer(endtime) {
        const timer = document.querySelector('.timer'),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minuts = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              interval = setInterval(setTimer, 1000);

              setTimer();
        function setTimer() {
            const total = timerObj(endtime); 
            days.innerHTML = getZero(total.day);
            hours.innerHTML = getZero(total.hours);
            minuts.innerHTML = getZero(total.minuts);
            seconds.innerHTML = getZero(total.seconds);

            if (total.total <= 0) {
                clearInterval(interval);
            }
        }

    }
    getTimer(deadLine);
}



export default timer;