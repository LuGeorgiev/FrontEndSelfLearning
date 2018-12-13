/*jshint esversion:6*/
let assert = require('chai').assert;

let mathEnforcer = {
    addFive: function(num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function(num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function(num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe('MathEnforcer Unit Tests', function() {
    describe('Test Add Five', function() {
        describe('Test when argument is not correct(should return undefined)', function() {
            it('Input is string', function() {
                const input = "1";
                const result = mathEnforcer.addFive(input);
                assert.isUndefined(result);
            });
            it('Input is empty array', function() {
                const input = [];
                const result = mathEnforcer.addFive(input);
                assert.isUndefined(result);
            });
            it('Input is array', function() {
                const input = [1];
                const result = mathEnforcer.addFive(input);
                assert.isUndefined(result);
            });
        });
        describe('Test when argument is correct number(return number + 5)', function() {
            it('Input Positive number', function() {
                const input = 5;
                const result = mathEnforcer.addFive(input);
                assert.equal(result, 10);
            });
            it('Input Negative number', function() {
                const input = -5;
                const result = mathEnforcer.addFive(input);
                assert.equal(result, 0);
            });
            it('Input floating point number', function() {
                const input = 2.5;
                const result = mathEnforcer.addFive(input);
                assert.equal(result, 7.5);
            });
        });
    });
    describe('Test Subtract Ten', function() {
        describe('Argument is invalid (should return undefined)', function() {
            it('Input is string', function() {
                const input = "1";
                const result = mathEnforcer.subtractTen(input);
                assert.isUndefined(result);
            });
            it('Input is empty array', function() {
                const input = [];
                const result = mathEnforcer.subtractTen(input);
                assert.isUndefined(result);
            });
            it('Input is array', function() {
                const input = [1];
                const result = mathEnforcer.subtractTen(input);
                assert.isUndefined(result);
            });
        });
        describe('Test when argument is correct number(return number - 10)', function() {
            it('Input Positive number', function() {
                const input = 5;
                const result = mathEnforcer.subtractTen(input);
                assert.equal(result, -5);
            });
            it('Input Negative number', function() {
                const input = -5;
                const result = mathEnforcer.subtractTen(input);
                assert.equal(result, -15);
            });
            it('Input floating point number', function() {
                const input = 2.5;
                const result = mathEnforcer.subtractTen(input);
                assert.equal(result, -7.5);
            });
        });
    });
    describe('Test SUM', function() {
        describe('When Arguments are not numbers(should return undefined)', function() {
            it('First argument is string', function() {
                const num1 = '1';
                const num2 = 2;
                const result = mathEnforcer.sum(num1, num2);
                assert.isUndefined(result);
            });
            it('Second argument is string', function() {
                const num1 = 1;
                const num2 = '2';
                const result = mathEnforcer.sum(num1, num2);
                assert.isUndefined(result);
            });
            it('Both arguments are strings', function() {
                const num1 = '1';
                const num2 = '2';
                const result = mathEnforcer.sum(num1, num2);
                assert.isUndefined(result);
            });
        });
        describe('When Arguments are correct (should return sum)', function() {
            it('Two positive inputs', function() {
                const num1 = 1;
                const num2 = 2;
                const result = mathEnforcer.sum(num1, num2);
                assert.equal(result, 3);

            });
            it('Two negative inputs', function() {
                const num1 = -1;
                const num2 = -2;
                const result = mathEnforcer.sum(num1, num2);
                assert.equal(result, -3);

            });
        });
    });
});