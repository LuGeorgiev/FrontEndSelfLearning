class Mammal {
    constructor(age) {
        this._age = age;
    }
    walk() {
        console.log("Calling mammal walk");
        //some code
        //sthis.x....;
        //this.y...;
    }
}
//super() invokec the base class constructor
class Person extends Mammal { // Inheritance reuse all methods validations etc.
    constructor(name, age) {
        super(age) //constructor are invokeed from main class
            //super have to be used BEFORE using THIS. This way "this" is defined
        this._name = name;
    }


    say(text) {
        console.log(`${this._name}: ${text} `);
    }

    walk() { //- this way walk is overriden 
        super.walk(); //this way first Mammal walk will be invoked
        console.log("Person walk invoking");
    }
}

class Zebra extends Mammal {
    constructor(age, fName, lName) {
        super(age);
        this._fName = fName;
        this._lName = lName;
    }
    get fullName() { // or we can throw exception because Mamals do not have names
        return this._fName + ' ' + this._lName;
    }
    set fullName(newName) {
        this._fName = newName.split(' ')[0];
        this._lName = newName.split(' ')[1];
    }
}

//multiple inheritance can be used with chain inheritance
let p = new Person('Pesho', 19);
p.say('hello');
p.walk();

let z = new Zebra(3, "petrova", 'Golqmata');
z.walk();
console.log(z.fullName);