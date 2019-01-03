/*jshint esversion:6*/
class BookCollection {
    constructor(genre, room, capacity) {
        this.room = room;
        this.shelfGenre = genre;
        this.shelfCapacity = capacity;
        this.shelf = [];
    }
    get room() {
        return this._room;
    }
    set room(val) {
        //if (['livingRoom', 'bedRoom', 'closet'].includes(val)) {
        if ('livingRoom' !== val && 'bedRoom' !== val && 'closet' !== val) {
            throw new Error(`Cannot have book shelf in ${val}`);
        }
        this._room = val;
    }
    addBook(bookName, bookAuthor, genre) {
        const newBook = {
            bookName: bookName,
            bookAuthor: bookAuthor,
            genre: genre
        };

        if (this.shelf.length < this.shelfCapacity) {
            this.shelf.push(newBook);
        } else if (this.shelf.length === this.shelfCapacity) {
            this.shelf.shift();
            this.shelf.push(newBook);
        }
        this.shelf
            .sort((a, b) => a.bookAuthor.localeCompare(b.bookAuthor));

        return this;
    }
    throwAwayBook(bookName) {
        this.shelf = this.shelf
            .filter(b => b.bookName !== bookName);
    }
    showBooks(genre) {
        const result = this.shelf.filter(b => b.genre === genre);
        let output = `Results for search "${genre}":\n`;
        for (const book of result) {
            output += `\uD83D\uDCD6 ${book.bookAuthor} - "${book.bookName}"\n`;
        }
        return output;
    }
    get shelfCondition() {
        return this.shelfCapacity - this.shelf.length;
    }
    toString() {
        let result = '';
        if (this.shelf.length === 0) {
            return `It's an empty shelf`;
        } else {
            result += `"${this.shelfGenre}" shelf in ${this.room} contains:\n`;
            for (const book of this.shelf) {
                result += `\uD83D\uDCD6 "${book.bookName}" - ${book.bookAuthor}\n`;
            }
        }
        return result;
    }
}

let bedRoom = new BookCollection('Mixed', 'bedRoom', 5);
bedRoom.addBook("John Adams", "David McCullough", "history");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.showBooks("history"));