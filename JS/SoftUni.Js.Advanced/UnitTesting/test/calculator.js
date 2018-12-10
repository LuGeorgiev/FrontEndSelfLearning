/*jshint esversion:6*/
let assert = require('chai').assert;

function createCalculator() {
    let value = 0;
    return {
        add: function(num) {
            value += Number(num);
        },
        subtract: function(num) {
            value -= Number(num);
        },
        get: function() {
            return value;
        }
    }
}

describe.only("createCalculator", () => { //will run only this for it also
    it('should return obj with all properties', () => {
        const properties = ["get", "add", "subtract"];

        const result = createCalculator();

        assert.isObject(result);
        assert.isTrue(properties.every((prop) => Object.keys(result).includes(prop)));
        //OR
        assert.containsAllKeys(result, properties);

        Object.keys(result).forEach((key) => {
            assert.isFunction(result[key]);
        });
    });
    describe("get", () => {
        it('should return default value', () => {
            const calculator = createCalculator();
            const result = calculator.get();
            assert.equal(result, 0);
        });
    });
    describe("complicated cases", () => {
        let calculator;
        beforeEach(() => {
            calculator = createCalculator();
        });

        it('should create and double add', () => {
            //const calculator = createCalculator();

            calculator.add(2);
            calculator.add(3);
            const result = calculator.get();

            assert.equal(result, 5);
        });
        it('should create and double subtrackt', () => {
            //const calculator = createCalculator();

            calculator.subtract(2);
            calculator.subtract(3);
            const result = calculator.get();

            assert.equal(result, -5);
        });
        it('should create and subtract', () => {
            //const calculator = createCalculator();

            calculator.add(5.3);
            calculator.subtract(1.1);
            const result = calculator.get();

            assert.closeTo(result, 4.2, 0.1); //float number are hard to be equal
        });
    });
});