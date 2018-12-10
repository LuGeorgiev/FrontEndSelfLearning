/*jshint esversion:6*/
let assert = require("chai").assert;

function sum(params) {
    let sum = 0;
    for (num of params) {
        sum += Number(num);
    }
    return sum;
}

describe("sum", function() {
    it("should return 3 for [1, 2]", function() {
        //A
        const input = [1, 2];
        //A
        const result = sum(input);
        //A
        assert.equal(result, 3);
    });
    it("should return -3 for [-1, -2]", function() {
        //A
        const input = [-1, -2];
        //A
        const result = sum(input);
        //A
        assert.equal(result, -3);
    });
    it("should return 0 for empty arr", function() {
        //A
        const input = [];
        //A
        const result = sum(input);
        //A
        assert.equal(result, 0);
    });
    it("should throw if not arr", function() {
        //A
        const input = null;
        //A
        //const result = sum(input);
        //A
        assert.throws(function() {
            sum(input);
        });
    });
    it("should retutn NaN if arr contaibs string", function() {
        //A
        const input = [1, 'pesho'];
        //A
        const result = sum(input);
        //A
        assert.isNaN(sum(input));
    });
    it("should retutn 1 if 1", function() {
        //A
        const input = [1];
        //A
        const result = sum(input);
        //A
        assert.equal(result, 1);
    });
});