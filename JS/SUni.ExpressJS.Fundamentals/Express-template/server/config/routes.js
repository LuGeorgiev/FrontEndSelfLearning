const home = require('../controllers/home-controller');
const userController = require('../controllers/user-controller');
const restrictPages = require('../config/auth');

module.exports = (app) => {
    app.get('/', home.index);
    //app.get('/about', restrictPages.isAuthenticated, home.about); //NOW ABOUT is only for authenticated users
    app.get('/about', restrictPages.isInRole('Admin'), home.about); //NOW ABOUT for Admin Roles

    app.get('/register', userController.registerGet);
    app.post('/register', userController.registerPost);
    app.post('/logout', userController.logoutPost);
    app.get('/login', userController.loginGet);
    app.post('/login', userController.loginPost);


    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    })
}