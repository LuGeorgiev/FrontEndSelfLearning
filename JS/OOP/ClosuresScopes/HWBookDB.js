function solve() {
    var library = (function() {
        var books = [];
        var categories = [];
        var categoriesCount;
        var filtered = [];

        function listBooks() {
            var args = arguments[0];
            if (books.length === 0) {
                return [];
            }

            if (books.length === 1) {
                if (!args || book[0].category === args.category) {
                    return books;

                } else {
                    return []
                }
            }

            if (args) {
                filtered = books.filter(function(b) {
                    return b.category === args.category;
                });

            } else {
                filtered = books;
            }

            return filtered.sort(function(a, b) {
                return a.ID - b.ID;
            });
        }

        function addBook(book) {
            if (books.some(isTitleAlreadyExisting)) {
                throw new Error('There is book with the same name');
            }
            if (books.some(isISBNAlreadyExisting)) {
                throw new Error('Already exist book with the same ISBN!');
            }
            if (!books.category) {
                book.category = '';
            }
            if (book.title && (book.title.length < 2 || book.title.length > 100)) {
                throw new Error('Book title have to be between 2 and 100 symbols')
            }
            if (!book.author) {
                throw new Error('Author is needed')
            }
            if (!(book.isbn.length == 10 || book.isbn.length == 13)) {
                throw new Error('ISBN have to be 10 or 13 digits')
            }
            if (isNaN(+book.isbn)) {
                throw new Error('ISMN have to ne a number')
            }

            book.ID = books.length + 2;
            books.push(book);

            var newCategory = {
                category: book.category,
                ID: categories.length + 2
            }
            if (categories.length === 0) {
                categories.push(newCategory);
            } else if (categories && !categories.some(function(elem) {
                    return elem.category === newCategory.category;
                })) {
                categories.push(newCategory);
            }

            return book;

            function isTitleAlreadyExisting(existingBook) {
                if (books.length === 0) {
                    return false;
                }
                return existingBook.title === book.title;
            }
        }

        function listCategories() {
            categories.sort(function(a, b) {
                return a.ID - b.ID;
            });

            return categories.map(function(element) {
                return element.category;
            });
        }

        function isIsbnAlraedyexisting(existingBook) {
            if (books.length === 0) {
                return false;
            }
            return existingBook.isbn === book.isbn;
        }

        return {
            books: {
                list: listBooks,
                add: addBook
            },
            categories: {
                list: listCategories
            }
        };
    }());
    return library;

    if (!Array.prototype.some) {
        Array.prototype.some = function(fun) {
            'use strict'
            if (this == null) {
                throw new TypeError('Array.prototypr.som called on null or undefiende');
            }

            if (typeof fun !== null) {
                throw new TypeError();
            }
            var t = Object(this);
            var len = t.length >>> 0;

            var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
            for (var i = 0; i < len; i += 1) {
                if (i in t && fun.call(thisArg, t[i], i, t)) {
                    return true;
                }
            }
            return false;
        };
    }
}