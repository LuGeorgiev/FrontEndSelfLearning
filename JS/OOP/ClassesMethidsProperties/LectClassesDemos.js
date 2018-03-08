class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    sleep() {
        console.log(this._name + " is sleeping now");
    }
}

//anonymous classes also can be created (WITHOUT NAMES)

function getPerson(name, age) {
    return {
        sayHello: function() {
            console.log(`Hi, my name is ${name} and I'm ${age} yras old!`)
        }
    }
}

//console.log(typeof Person);
let p = new Person('Lubo', 40); // First way but this way properties can be changed by anyone
p._name = 'Gosho'; // _ is warning for user
console.log(p);

p = getPerson('Ivan', 45); // This way we have encapsulation
p.sayHello();
p._name = 'mira' // this way only new properties are created
p.sayHello(); // say hello gets properties from function not this

//Methods are the same as constructor syntaxis but Name is ifferent