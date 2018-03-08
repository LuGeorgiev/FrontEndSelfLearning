const array = [1, 2, 34, 2, 12, 24, -67, 2, 23, -32, 546, 97, 5, 45, 90];

//array.forEach(x => console.log(x));
array.map((_, i) => i + 1)
    .forEach(x => console.log(x));
console.log(array);

//IMPELENT FOREACH
Array.prototype.forEach = function(func) {
    const len = this.length;
    for (let i = 0; i < len; i += 1) {
        func(this[i], i, this);
    }
};