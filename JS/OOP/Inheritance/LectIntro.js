// //OLD STYLE (ES 5)
// function Person(name, age) {
//     this._name = name;
//     this._age = age;
// }
// Person.prototype.introduce = function() {
//     console.log(`Hi, my nama is ${this.name}!`);
// }

// Object.defineProperty(Person.prototype, 'age', {
//     get: function() {
//         return this._age;
//     },
//     set: function(newAge) {
//         this._age = newAge;
//     }
// });

// NEW STYLE ES_6
class Person {
    constructor(name, age) {
        if (typeof name !== 'string') {
            throw new Error('Name should eb string');
        }
        Person._validateAge(age);
        this._name = name; // creat when new instantion
        this._age = age; // creat when new instantion
    }
    static _validateAge(age) { // static methods
        if (typeof age !== 'number') {
            throw 'Age have to be number'
        }
        if (age < 0) {
            //age have to be positive
        }
    }
    introduce() { // attached to prototype
        console.log(`Hi, my name is ${this._name}!`);
    }
    get age() { // attached to prototype
        return this._age;
    }
    set age(newAge) { // attached to prototype
        Person._validateAge(newAge);
        if (newAge >= 0) { //another approach !! Silent way - without exception      
            this._age = newAge;
        }
    }
}

let p = new Person('Gosho', 17);
console.log(p.age);
p.introduce();
p.age = '';
console.log(p.age);