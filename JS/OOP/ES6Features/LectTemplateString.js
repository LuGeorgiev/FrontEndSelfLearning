/*jshint esversion: 6 */
const people = {
    fname: 'pesho',
    lName: 'Goshoff'
}

console.log(`Fullname: ${people.fname} ${people.lName}`);

//arrow functions
const ppl = [{ //names of below 18 years
        fullname: 'Ivan',
        age: 76
    },
    {
        fullname: 'Krasi',
        age: 16
    },
    {
        fullname: 'Mira',
        age: 17
    }
];
/*
const fullnames =
    ppl.filter(function(person) {
        return person.age <= 18;
    }).map(function(person) {
        return person.fullname;
    });
console.log(fullnames);
*/

//do not use this with fat arrow. it is tricky
const fullnames = ppl
    .filter(pers => pers.age <= 18)
    .map(p => p.fullname);
console.log(fullnames);