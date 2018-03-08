function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return factorial(n - 1) * n;
}
//console.log(factorial(13));

function fibonacchi(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return fibonacchi(n - 2) + fibonacchi(n - 1);
}
//console.log(fibonacchi(23));

//IIFE Imemdiately Invoked Function Expression
var life = function() {
    console.log("invoked");
    (function() { console.log('invoked!'); }()); // both ways are valid
    (function() { console.log('invoked!'); })(); // bracket syntaxis difference
}


// const counter = (function() {
//     let value = 0;

//     function getNext() {
//         value += 1;
//         return value;
//     }
//     return getNext;
// })(); // immediately invoked

// console.log(counter());
// console.log(counter());
// console.log(counter()); // this way counted CANNOT be set to 0 from outside

const counter = (function() { //for reset encapsulation
    let value = 0;

    function getNext() {
        value += 1;
        return value;
    }

    function resetCounter() {
        value = 0;
    }
    return {
        getNext: getNext,
        resetCounter: resetCounter
    };

})();
console.log(counter.getNext());
console.log(counter.getNext());
console.log(counter.getNext());
console.log(counter.resetCounter());
console.log(counter.getNext());
console.log(counter.getNext());