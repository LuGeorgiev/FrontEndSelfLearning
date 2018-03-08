//Module Pattern
var controls = (function() {
    function formatResult(name, value) { // the visible member creayes closure 
        return name + ' says the result is ' + value;
    }
    class Calculator {
        constructor(name) {
            this.name = name;
            this.value = 0;
        };
        add(x) { this.result += +x };
        substract(x) { this.result -= +x };
        showResults() {
            console.log(formatResult(this.name, this.result));
        };
    };
    return { //visible method
        getCalculator: (name) => new Calculator(name) // this is the public part anonymous func
    };
}());

controls.getCalculator('First')
    .add(7).showResults().substract(2).showResults(); // this way can chain a lot fo members