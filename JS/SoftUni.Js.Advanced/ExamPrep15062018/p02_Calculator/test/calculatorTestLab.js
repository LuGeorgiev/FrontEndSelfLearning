let expect = require('Chai').expect;
let Calculator = require('../Calculator');
describe('constructor', function() {
    let calculator;
    beforeEach(function() {
        calculator = new Calculator();
    });
    it('expenses property should be empty arr', function() {
        let result = calculator.expenses;
        expect(result).to.be.eql([]);
    });
    describe('Add function', function() {
        it('add string and numbers', function() {
            calculator.add('Pesho');
            calculator.add(10);
            calculator.add(1.5);
            let result = calculator.expenses;
            expect(result).to.be.eql(['Pesho', 10, 1.5]);
        });
        it('add objects array', function() {
            calculator.add(['Pesho', 1]);
            calculator.add({});
            let result = calculator.expenses;
            expect(result).to.be.eql([
                ['Pesho', 1], {}
            ]);
        });
    });
    describe('Devide', function() {
        it('test with no numbers', function() {
            let result = () => calculator.divideNums();
            expect(result).to.throw('There are no numbers in the array!');
        });
        it('test with one numbers', function() {
            calculator.add('Pesho');
            calculator.add(-9.9);
            let result = calculator.divideNums();
            expect(result).to.be.closeTo(-9.9, 0.01);
        });
        it('test with two and more numbers', function() {
            calculator.add('Pesh');
            calculator.add(-9.9);
            calculator.add(9);
            calculator.add(9.5);
            let result = calculator.divideNums();
            expect(result).to.be.closeTo(-0.115, 0.01);
        });
        it('test zero div', function() {
            calculator.add('Pesh');
            calculator.add(-9.9);
            calculator.add(0);
            calculator.add(9);

            let result = calculator.divideNums();
            expect(result).to.eql('Cannot divide by zero');
        });
    });
    describe('toString', function() {
        it('test empty expenses', function() {
            let result = calculator.toString();
            expect(result).to.be.eql('empty array');
        });
        it('test with 3 elements', function() {
            calculator.add('Pesho');
            calculator.add({});
            calculator.add(300);
            let result = calculator.toString();
            expect(result).to.be.eql('Pesho -> [object Object] -> 300');
        });
    });
    describe('Oredr By', function() {
        it('empty', function() {
            let result = calculator.orderBy();
            expect(result).to.be.eql('empty');
        });
        it('order numbers', function() {
            calculator.add(4);
            calculator.add(1);
            calculator.add(-9.9);
            let result = calculator.orderBy();
            expect(result).to.be.eql('-9.9, 1, 4');
        });
        it('order mixed types', function() {
            calculator.add(4);
            calculator.add(1);
            calculator.add("Pesho");
            calculator.add(-9.9);
            let result = calculator.orderBy();
            expect(result).to.be.eql('-9.9, 1, 4, Pesho');
        });
    });

});