var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];

Array.prototype.remove = function(rem) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (this[i] !== rem) {
            result.push(this[i]);
        }
    }
    return result;
}

let newArr = arr.remove(1);
for (const i of newArr) {
    console.log(i);
}