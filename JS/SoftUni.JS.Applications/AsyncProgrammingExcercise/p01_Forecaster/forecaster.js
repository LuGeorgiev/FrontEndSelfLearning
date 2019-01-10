/*jshint esversion:6*/

//Compile data and display
//Handle errors
function attachEvents() {
    const host = 'https://judgetests.firebaseio.com/';
    const symbols = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;'
    }


    $('#submit').on('click', getWeather);

    async function getWeather() {
        let locationName = $('#location').val();
        let codes = [];
        try {
            codes = await $.get(host + 'locations.json');
        } catch (err) {
            handleEror(err);
        }

        let code = undefined;
        for (const loc of codes) {
            if (loc.name == locationName) {
                code = loc.code;
                break;
            }
        }
        let [today, upcoming] = [{}, {}];
        try {
            [today, upcoming] = await Promise
                .all([
                    $.get(host + `forecast/today/${code}.json`),
                    $.get(host + `forecast/upcoming/${code}.json`)
                ]);
            if (today == null || upcoming == null) {
                throw new Error('Invalid data');
            }
        } catch (err) {
            handleEror(err);
        }
        const todayDiv = $('#current');
        const upcomingDiv = $('#upcoming');
        const symbol = symbols[today.forecast.condition];

        const htmlSymbol = `<span class="condition symbol">${symbol}</span>`;
        const htmlContent = `<span class="condition">
            <span class = "forecast-data">${today.name}</span>
            <span class = "forecast-data">${today.forecast.low}&#176; / ${today.forecast.high}&#176;</span>
            <span class = "forecast-data">${today.forecast.condition}</span>
            </span>`;
        todayDiv.empty();
        todayDiv.append('<div class="label">Current condition</div>')
        todayDiv.append(htmlSymbol);
        todayDiv.append(htmlContent);

        upcomingDiv.empty();
        upcomingDiv.append('<div class="label">Three-day forecast</div>');
        for (const day of upcoming.forecast) {
            upcomingDiv.append(renderUpcomig(day));
        }
        $('#forecast').show();

        function renderUpcomig(data) {
            const symbol = symbols[data.condition];

            return `<span class="upcoming">
            <span class="symbol">${symbol}</span>
            <span class = "forecast-data">${data.low}&#176; / ${data.high}&#176;</span>
            <span class = "forecast-data">${data.condition}</span>
            </span>`;
        }

        function handleEror() {
            $('#forecast').text('Error');
            $('#forecast').show();
        }
    }
}