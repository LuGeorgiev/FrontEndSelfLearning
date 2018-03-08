const array = [1, 2, 34, 2, 12, 24, -67, 2, 23, -32, 546, 97, 5, 45, 90];

console.log(array.find(x => x > 10 && x <= 20)); // returns undef is not met
console.log(array.findIndex(x => x > 10 && x <= 20));

//IMPLEMENT FIND
Array.prototype.find = function(isOK) {
    const len = this.length;
    for (let i = 0; i < len; i += 1) {
        if (isOK(this[i], i, this)) {
            return this[i];
        }
    }
};

//IMPLEMENTATION FINDINDEX
Array.prototype.findIndex = function(isOK) {
    const len = this.length;
    for (let i = 0; i < len; i += 1) {
        if (isOK(this[i], i, this)) {
            return i;
        }
    }
    return -1;
};