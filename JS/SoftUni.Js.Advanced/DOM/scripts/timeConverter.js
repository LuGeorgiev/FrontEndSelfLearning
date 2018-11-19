/*jshint esversion:6*/

function attachEventsListeners() {
    const inputDays = document.getElementById('days');
    const inputHours = document.getElementById('hours');
    const inputMinutes = document.getElementById('minutes');
    const inputSeconds = document.getElementById('seconds');

    document.getElementById('daysBtn').addEventListener("click", convertDays);
    document.getElementById('hoursBtn').addEventListener("click", convertHours);
    document.getElementById('minutesBtn').addEventListener("click", convertMinutes);
    document.getElementById('secondsBtn').addEventListener("click", convertSeconds);


    function convertDays() {
        const days = Number(inputDays.value);
        const hours = days * 24;
        const minutes = hours * 60;
        const seconds = minutes * 60;

        inputHours.value = hours;
        inputMinutes.value = minutes;
        inputSeconds.value = seconds;
    }

    function convertMinutes() {
        const minutes = Number(inputMinutes.value);
        const hours = minutes / 60;
        const days = hours / 24;
        const seconds = minutes * 60;

        inputDays.value = days;
        inputHours.value = hours;
        inputSeconds.value = seconds;
    }

    function convertHours() {
        const hours = Number(inputHours.value);
        const days = hours / 24;
        const minutes = hours * 60;
        const seconds = minutes * 60;

        inputDays.value = days;
        inputMinutes.value = minutes;
        inputSeconds.value = seconds;

    }

    function convertSeconds() {
        const seconds = Number(inputSeconds.value);
        const minutes = seconds / 60;
        const hours = minutes / 60;
        const days = hours / 24;

        inputHours.value = hours;
        inputMinutes.value = minutes;
        inputDays.value = days;

    }
}