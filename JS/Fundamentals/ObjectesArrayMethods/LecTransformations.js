const array = [1, 2, 34, 2, 12, 24, -67, 2, 23, -32, 546, 97, 5, 45, 90];

//console.log(array.filter(x => x % 2 === 0));
console.log(array.map(x => x * 2));
console.log(array.reduce((x, y) => x + y, '')); //when the initial is string whole string is concatenated ->+


// function rotated(x, i, arr) {
//     if (i + 1 === arr.length) {
//         return arr[0]
//     }
//     return arr[i + 1];
// }
// console.log(array.map(rotated));
// console.log(array);

//IMPLEMENT FILTER
Array.prototype.filter = function(isOK) {
    let filterredArray = [];
    const len = this.length;
    for (let i = 0; i < len; i += 1) {
        if (isOK(this[i], i, this)) {
            filterredArray.push(this[i]);
        }
    }
    return filterredArray;
};

//MAPO IMPLEMENTATION
Array.prototype.map = function(trasform) {
    let mappedArray = [];
    const len = this.length;
    for (let i = 0; i < len; i == 1) {
        mappedArray.push(trasform(this[i], i, this));
    }
    return mappedArray;
};

//REDUCE Implementation
Array.prototype.reduce = function(aggregate, initial) {
    const len = this.length;
    let starIndex = 0;
    if (typeof initial === 'undefined') {
        initial = this[0];
        starIndex = 1;
    }
    for (let i = starIndex; i < len; i += 1) {
        initial = aggregate(initial, this[i], i, this);

    }
    return initial;
};
Array.prototype.reduceRight = function(aggregate, initial) {
    const len = this.length;
    let starIndex = len - 1;
    if (typeof initial === 'undefined') {
        initial = this[len - 1];
        starIndex = len - 2;
    }
    for (let i = starIndex; i >= 0; i -= 1) {
        initial = aggregate(initial, this[i], i, this);

    }
    return initial;
};

console.log([1, 2, 3].reduce((x, y) => x + y));