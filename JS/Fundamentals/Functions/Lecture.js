// const getCount = function() {
//     let counter = 0;

//     return function() {
//         counter += 1;
//         return counter;
//     };
// }();
// console.log(getCount());
// console.log(getCount());


// function sum(x, y) { // moje i bez parametri t.e. sum()
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }
// let x = sum(1, 4, 5, 6);
// console.log(x);

//Default values for y
// function add(x, y = 0) { //return; - bez argument vrushta indefined
//     return x + y;
// }
// let x = add(4, 5);
// console.log(x);
// x = add(4);
// console.log(x);

// //Print triangle
// function printTriangle(n) {
//     function printToN(n) {
//         let arr = [];
//         for (let i = 1; i <= n; i += 1) {
//             arr.push(i);
//         }
//         console.log(arr.join(' '));
//     }
//     for (let i = 0; i < n; i += 1) {
//         printToN(i);
//     }
//     for (let i = n; i > 0; i -= 1) {
//         printToN(i);
//     }
// }
// printTriangle(16);

function test() {
    console.log(arguments);
    for (let i in arguments) {
        console.log(arguments[i]);

    }
}

test(3, 5, undefined, 'askd', 42);