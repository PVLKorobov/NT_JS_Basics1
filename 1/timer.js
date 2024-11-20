getNumberString = function (input) {
    if (input > 9) { return String(input); }
    else { return `0${input}`; }
}

parseTime = function (inputString) {
    var timeValues = inputString.split(":");
    return Number(timeValues[0]) * 60 * 60 + Number(timeValues[1]) * 60 + Number(timeValues[2]);
}

getTimeString = function (timeSum) {
    var hours = ~~(timeSum/(60 * 60));
    var minutes = ~~((timeSum - hours*60*60)/60);
    var seconds = timeSum - hours*60*60 - minutes*60;
    return `${getNumberString(hours)}:${getNumberString(minutes)}:${getNumberString(seconds)}`;
}


document.addEventListener("DOMContentLoaded", () => {
    const timer = document.getElementById("timer");

    var time = parseTime(timer.textContent);

    var timerIntervalId = setInterval(() => {
        time -= 1;
        timer.textContent = getTimeString(time);
        if (time <= 0) {
            clearInterval(timerIntervalId);
            alert("Вы победили в конкурсе");
        }
    }, 1000)
})