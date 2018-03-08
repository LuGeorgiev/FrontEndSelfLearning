var n = 10;

// function getRandomDigit() {
//     return (Math.random() * 10) | 0;
// }

// function isOdd(item) {
//     return !!(item % 2);
// }

// function digitToDigitName(digit) {
//     return ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
//         'nine'
//     ][digit];
// }

// let digitsName = Array.from({ length: n })
//     .fill(0)
//     .map(getRandomDigit)
//     .filter(isOdd)
//     .map(digitToDigitName);
// console.log(digitsName);

//ES 2015
var digitsNames = Array.from({ length: n })
    .fill(0)
    .map(x => Math.random() * 10 | 0)
    .filter(x => !!(x % 2))
    .map(x => ['zero', 'one', 'two', 'three',
        'four', 'five', 'six', 'seven', 'eight', 'nine'
    ][x]);
console.log(digitsNames);