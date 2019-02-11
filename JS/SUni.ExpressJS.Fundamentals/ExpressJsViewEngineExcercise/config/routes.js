homeController = require('../controllers/home-controler');
booksController = require('../controllers/books-controller');

module.exports = (app) => {
    app.get('/', homeController.getIndex)
    app.get('/add', booksController.getAddBook)
    app.post('/add', booksController.postAddBook)
    app.get('/all', booksController.getAll)
    app.get('/details/:id', booksController.getDetails)
}