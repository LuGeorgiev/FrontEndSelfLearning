/* jshint esversion:6*/
function Person(firstName = "", lastName = "", age = "", email = "") {
    //if (firstName) {}
    this.firstName = firstName;
    //if (lastName) {}
    this.lastName = lastName;
    //if (age) {}
    this.age = age;
    //if (email) {}
    this.email = email;
}

Person.prototype.toString = function() {
    return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
}

function createPeople() {
    return [
        new Person('Maria', 'Ivanova', 22, 'maria@gbg.bg'),
        new Person('Ivan'),
        new Person('Petar', 'Georgiev'),
        new Person('Lubo', 'Mitrov', 22),
    ];
}

const person = new Person('Maria', 'Ivanova', 22, 'maria@gbg.bg');
console.log(person.toString());
const peopple = createPeople();
peopple.forEach((person) => {
    console.log(person.toString());
});