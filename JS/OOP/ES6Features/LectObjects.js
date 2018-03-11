/*jshint esversion: 6 */
let person = {
    name: "Ivan",
    sex: 3
};

const obj = {
    number: 42,
    increment: function() { // of type: increment() ONLY
        this.number += 1;
    }
}
console.log(obj.number);
obj.increment();
console.log(obj.number);