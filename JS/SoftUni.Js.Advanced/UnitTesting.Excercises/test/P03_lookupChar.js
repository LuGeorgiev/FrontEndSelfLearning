/*jshint esversion:6*/

let assert = require('chai').assert;

function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('Lookup Char Unit Tests', function(params) {
    describe('Will return undefined', function() {
        it('Pass an object in input(should return undefinied)', function() {
            const result = lookupChar({}, 5);

            assert.isUndefined(result);
        });
        it('Pass floating index input(should return undefinied)', function() {
            const result = lookupChar('Ivan', 0.5);

            assert.isUndefined(result);
        });
        it('Pass [] index input(should return undefinied)', function() {
            const result = lookupChar('Ivan', []);

            assert.isUndefined(result);
        });
    });
    describe('Index corectness tests', function() {
        it('Pass negative index(should retur Incorrect Index)', function() {
            const result = lookupChar('Ivan', -5);

            assert.equal(result, 'Incorrect index');
        });
        it('Pass index higher than string length(should retur Incorrect Index)', function() {
            const result = lookupChar('Ivan', 15);

            assert.equal(result, 'Incorrect index');
        });
        it('Pass index as long as string length(should retur Incorrect Index)', function() {
            const result = lookupChar('Ivan', 4);

            assert.equal(result, 'Incorrect index');
        });
    });
    describe('Correct output after correct input', function() {
        it('Pass string and correct index', function() {
            const result = lookupChar('Ivan', 2);

            assert.equal(result, 'a');
        });
        it('Pass string and first index', function() {
            const result = lookupChar('Ivan', 0);

            assert.equal(result, 'I');
        });
        it('Pass string and last index', function() {
            const result = lookupChar('Ivan', 3);

            assert.equal(result, 'n');
        });
    });
});