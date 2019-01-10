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

    function getWeather() {
        let locationName = $('#location').val();

        //Get all locations codes (async 1)
        $.get(host + 'locations.json')
            .then(parseData)
            .catch(handleEror);

        //Find given location code
        function parseData(codes) {
            let code = undefined;
            for (const loc of codes) {
                if (loc.name == locationName) {
                    code = loc.code;
                    break;
                }
            }
            //Request today's forecast (async 2)
            //Request upcoming forecast (async 2)
            Promise.all([
                    $.get(host + `forecast/today/${code}.json`),
                    $.get(host + `forecast/upcoming/${code}.json`)
                ])
                .then(handleForecast)
                .catch(handleEror);
        }

        function handleForecast([today, upcoming]) {
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
        }

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