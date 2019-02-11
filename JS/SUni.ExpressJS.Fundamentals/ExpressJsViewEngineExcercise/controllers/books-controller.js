const Book = require('../data/Book')

module.exports = {
    getAddBook: (req, res) => {
        res.render('books/add')
    },
    postAddBook: (req, res) => {
        let book = req.body;

        if (!book.title || !book.imageUrl) {
            book.error = 'Title and image are required!';
            res.render('books/add', book) // if sent {book} as object have to use book.title in hsb file
        }

        book.releaseDate = new Date(book.releaseDate);
        Book.create(book)
            .then(() => {
                res.redirect('/all')
            })
    },
    getAll: (req, res) => {
        Book
            .find()
            .sort('-releaseDate')
            .then(books => {
                res.render('books/all', { books })
            })
    },
    getDetails: (req, res) => {
        const id = req.params.id;

        Book
            .findById(id)
            .then(book => {
                res.render('books/details', book);
            })
    }
}