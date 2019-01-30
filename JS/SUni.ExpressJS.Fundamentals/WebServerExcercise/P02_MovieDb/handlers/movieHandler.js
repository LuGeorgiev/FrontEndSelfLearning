const qs = require('querystring');

let movies = require('../config/dataBase');
const moviePlaceholder = '{{repace-me}}';
const movieTemplate = `
<div class="movie">
    <img class="moviePoster" src=${moviePlaceholder}/>
</div>`;

const errorTemplate = `
<div id="errorBox"><h2 id="errMsg">Please fill all fields</h2></div>`;
const successTemplate = `
<div id="successBox"><h2 id="successMsg">Successfully added</h2></div>`;

module.exports = (req, res) => {
    let pathname = req.urlData.pathname;
    if (pathname === '/movies/all' && req.method === "GET") {
        moviesHtml = movies
            .map(m => movieTemplate
                .replace(moviePlaceholder, decodeURIComponent(m.moviePoster)))
            .join("");

        res.view('views/viewAll.html', moviesHtml);
    } else if (pathname === '/movies/add' && req.method === "GET") {
        res.view('views/addMovie.html');
    } else if (pathname === '/movies/add' && req.method === "POST") {
        let body = [];
        req.on('data', (chunck) => {
            body.push(chunck);
        }).on('end', () => {
            body = Buffer.concat(body).toString();
            let movieData = qs.parse(body);
            if (!movieData.moviePoster || !movieData.movieTitle) {
                res.view('../views/addMovie.html', errorTemplate);
                return;
            }

            movies.push(movieData);
            res.view('../views/addMovie.html', successTemplate);

        });
    } else {
        return true;
    }
}