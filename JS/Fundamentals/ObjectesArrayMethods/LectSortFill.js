const array = [1, 2, 34, 2, 12, 24, -67, 2, 23, -32, 546, 97, 5, 45, 90];

const people = [
    { name: 'Pesho', age: 22 },
    { name: 'Doncho', age: 97 },
    { name: 'Ivan', age: 16 },
    { name: 'Petkan', age: 56 },

];

//Sort by absolute value
//console.log(array);
//array.sort((x, y) => Math.abs(x) - Math.abs(y));

//Sort by AGE
// people.sort((x, y) => x.age - y.age);
// console.log(people);

//Sort ny name
console.log(people[0].toString());
people.forEach(function(person) {
    person.toString = function() {
        return this.name;
        //return this.fname +' '+this.lname; - // po dve imena
    };
});
console.log(people[0].toString());
people.sort();
console.log(people);

//FILL zapulva koloto elementa ima. NE DOBAVQ
array.fill(0, 1);
console.log(array);