/*jshint esversion: 6 */

//IFie
/*
const getNext = (function() {
    let counter = -1;

    return function() {
        counter += 1;
        return counter;
    };
}());
console.log(getNext());
console.log(getNext());
console.log(getNext());
console.log(getNext());
*/
//in Es6 we have Generator functions
const getNextId = (function* getNextId() {
    let counter = 0;

    while (true) {
        yield counter;
        counter += 1;
    }
}());
console.log(getNextId);

//Symbols
let s = Symbol.iterator;
console.log(s);