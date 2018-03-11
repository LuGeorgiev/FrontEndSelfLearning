/*jshint esversion: 6 */
function add(...args) {
    console.log(args.reduce((x, y) => x + y, 0));
}

add(1, 4, 5, 7, 8);

const arr = [1, 4, 5, 7, 8];

const [first, ...rest] = arr;
console.log(first);
console.log(rest);