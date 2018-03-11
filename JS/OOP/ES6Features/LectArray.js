/*jshint esversion: 6 */


const arr = Array.from({ length: 10 })
    .map(() => 3);
for (const x of arr) {
    console.log(x);
}

function sum() {
    return Array.from(arguments) //reduce Array-like objects
        .reduce((x, y) => x + y, 0);
}

const arrg = [1, 2, 3, 4, 5, 75, 2, 2, 1];
console.log(sum(...arrg)); // sread operator

const arr1 = [1, 2, 3];
const arr2 = [3, 5, 6];

const result = [...arr1, ...arr2]; // concatenates arrays
console.log(result);


function map2(arr, f) {
    if (arr === []) {
        return [];
    }
    const [x, ...xs] = arr;
    return [f(x), ...map2(xs, f)];
}