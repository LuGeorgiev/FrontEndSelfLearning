'use strict'

const first = '1234',
    second = '1238abc',
    third = '0.15',
    forth = '3.14ivan',
    fifth = 'Infinity',
    sixth = '9999999999999999999999';

console.log(parseInt(sixth));
console.log(parseFloat(sixth));
console.log(Number(sixth));
console.log(+sixth);
console.log(sixth | 0);