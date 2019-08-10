class Person {
    constructor(name) {
        this.name = name;
    }
}

class Dog {
    constructor(breed) {
        this.breed = breed;
    }
}

// Just for one class, func etc.
//module.exports = Person; 

//to export a  lot of items
// module.exports = {
//     Person: Person,
//     Dog: Dog
// };

//Singleton
module.exports = new Person('Pesho');