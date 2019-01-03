const assert = require('Chai').assert;
const sut = require('../Calculator');

describe('Calculator Tests', function() {
    it('Has property expenses of type []', function() {
        let calculator = new sut();
        assert.isArray(calculator.expenses);
    });
    it('Expense property has length 0', function() {
        let calculator = new sut();
        assert.equal(calculator.expenses.length, 0);
    });
    it('Add pushes any date in expenses', function() {
        let calculator = new sut();
        calculator.add(1);
        calculator.add('test');
        //assert
        assert.equal(calculator.expenses.length, 2);
        assert.equal(calculator.expenses[1], 'test');
    });
    // it('Devide throws if there is no numbers', function() {
    //     let calculator = new sut();
    //     calculator.add('test');
    //     calculator.add('toThrow');
    //     //assert
    //     assert.throws(() => calculator.divideNums, Error, 'There are no numbers in the array!');
    // });
    it('toString Returns correct output', function() {
        let calculator = new sut();
        calculator.add('test');
        calculator.add('toThrow');
        //assert
        assert.equal(calculator.toString(), 'test -> toThrow');
    });
    it('toString Returns empty array in nothing added', function() {
        let calculator = new sut();
        //assert
        assert.equal(calculator.toString(), 'empty array');
    });
    it('OrderBy Returns empty array in nothing added', function() {
        let calculator = new sut();
        //assert
        assert.equal(calculator.orderBy(), 'empty');
    });
    it('OrderBy Returns ordered numbers if all entries are numbers', function() {
        let calculator = new sut();
        calculator.add(3);
        calculator.add(1);
        calculator.add(9);
        calculator.add(4);
        //assert
        assert.equal(calculator.orderBy(), '1, 3, 4, 9');
    });
    it('OrderBy Returns ordered strings if all entries are strings', function() {
        let calculator = new sut();
        calculator.add('gh');
        calculator.add('cd');
        calculator.add('ab');
        calculator.add('ef');
        //assert
        assert.equal(calculator.orderBy(), 'ab, cd, ef, gh');
    });
});