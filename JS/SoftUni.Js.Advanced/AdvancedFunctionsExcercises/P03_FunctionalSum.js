/*jshint esversion:6*/
let add = (function() {
    let sum = 0;
    return function add(a) {
        sum += a;
        add.toString = function() {
            return sum;
        };
        return add;
    };
})();

console.log(add(2)(4)(-5).toString());