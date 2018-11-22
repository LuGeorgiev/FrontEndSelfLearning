/*jshint esversion:6*/
function timer() {
    let spanHours = $('#hours');
    let spanMinutes = $('#minutes');
    let spanSeconds = $('#seconds');
    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');
    let seconds = 0;
    let interval = null;
    startBtn.on('click', startTimer);
    stopBtn.on('click', stopTimer);

    function startTimer() {
        if (interval === null) {
            interval = setInterval(createTime, 100);
        }
    }

    function stopTimer() {
        clearInterval(interval);
        interval = null;
    }

    function createTime() {
        seconds++;
        spanHours.text(('0' + Math.floor(seconds / 60 / 60)).slice(-2));
        spanMinutes.text(('0' + Math.floor(seconds / 60) % 60).slice(-2));
        spanSeconds.text(('0' + seconds % 60).slice(-2));
    }

}