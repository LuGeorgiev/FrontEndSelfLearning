/*jshint esversion: 6 */
const arr = [1, 2, 3, 5];
// const [x, y, z] = arr;
// console.log(x);
// console.log(y);
// console.log(z);

const [, y, z] = arr;
console.log(y);
console.log(z);

// swap values
let k = 15;
let l = 7;
[k, l] = [l, k];
//works with more than two variables, even can make opperations +- etc.
console.log(k);
console.log(l);

//canbe done with objects also
let person = {
    name: 'Vasil Levski',
    address: {
        country: 'Bulgaria',
        city: 'Every City'
    }
};

let { name, address } = person;
console.log(name);
console.log(address);