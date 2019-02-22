const home = require('../controllers/home-controller');
const userController = require('../controllers/user-controller');
const restrictPages = require('../config/auth');
const productController = require('../controllers/product-controller');
const orderController = require('../controllers/order-controller');

module.exports = (app) => {
    app.get('/', home.index);
    app.get('/index.html', home.index);

    app.get('/register', userController.registerGet);
    app.post('/register', userController.registerPost);
    app.post('/logout', userController.logoutPost);
    app.get('/login', userController.loginGet);
    app.post('/login', userController.loginPost);

    app.get('/product/create', restrictPages.isInRole('Admin'), productController.createGet);
    app.post('/product/create', restrictPages.isInRole('Admin'), productController.createPost);

    app.get('/order/place/:id', restrictPages.isAuthenticated, orderController.placeGet);
    app.post('/order/place', restrictPages.isAuthenticated, orderController.placePost);
    app.get('/order/:id', restrictPages.isAuthenticated, orderController.details);
    app.get('/order', restrictPages.isAuthenticated, orderController.status);


    app.all('*', (req, res) => {
        res.status(404);
        res.send('404 Not Found');
        res.end();
    })
}