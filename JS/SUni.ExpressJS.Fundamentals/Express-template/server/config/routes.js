const home = require('../controllers/home-controller');

module.exports = (app) => {
    app.get('/', home.index);
    app.get('/about', home.about);


    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    })
}