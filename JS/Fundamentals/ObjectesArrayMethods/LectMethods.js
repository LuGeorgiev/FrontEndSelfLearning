const arr = [2, 3, 4, 9, 6];

// function isOdd(x) {
//     return x % 2 === 1;
// }

// function areSmallerThan100(x) {
//     return x < 100;
// }
// //const result = arr.every(isOdd) // if ALL are odds
// //const result = arr.every(areSmallerThan100) // if ALL are <100

// //write MYevery
// arr.every = function(isOK) {
//     for (const x of this) {
//         if (!isOK(x)) {
//             return false;
//         }
//     }
//     return true;
// };

// let result = arr.every(x => x < 100);
// console.log('every ' + result);
// result = arr.some(x => x < 0);
// console.log('some ' + result);
// let sorted = arr.sort((x, y) => y - x);
// console.log(sorted);

// to check if odd inxed has odd value:
console.log(arr.every((x, i) => x % 2 === i % 2));