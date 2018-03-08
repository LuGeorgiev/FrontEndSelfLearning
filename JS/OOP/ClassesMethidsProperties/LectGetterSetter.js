const VALIDATOR = { // To have all validation on a separate place for simplicity
    validateAge: function(age) {
        if (age < 0) {
            throw new Error('Age must be positive');
        }
    }
}

class Cat { //ES6 sintaxis. ONLY constructor, gatter and setter can be defined here
    constructor(name) {
            this._name = name;
            this._silenced = false;
            this.age = 0; // there is setter. Hence NO need to keep _age
        }
        // Static methods
    static whatDoesTheCats() { //can be static GETER and SETTER
        return 'meow';
    }

    meow() {
        if (this._silenced) {
            return;
        }
        console.log(this._name + ' says Meoww');
    }
    silence() {
        this._silenced = true;
    }
    get age() { //age gatter // this is property !!!
        return this._age; // if we type age here we will have Recursion without bottom
    }
    set age(newAge) {
        //validation
        VALIDATOR.validateAge(newAge);
        this._age = newAge; // do not miss _age to escape endless recurssion
    }

    get name() { // define only gatter
        return this._name;
    }
    set name(x) { // or define setter to throe expeption. PUT ANYTHING IN BRACKETS
        throw new Error('Name cannot be changed');
    }

}

const p = new Cat('Penla');
p.meow();
console.log(p.age); // getter is function without parametters  ()-NOT need
p.age = 7;
console.log(p.age);
p.name = 'BAuu' // throw ecxeption
console.log(Cat.whatDoesTheCats());

Cat.prototype.name = 'ivan'

// NEW creates new objects and attache all methods from prototype are attacjed to NEW Object.(non-static)
// VIA prototype we can EXTEND the classes
// Except get/set in ES6 we have - configurable, enumerable, value and writable

//OLD Syntaxis:
function Dog(name) { //THIS is NOT ES6 syntaxis OLD syntaxis
    this._name = name;
    this._silenced = false;
}
Dog.prototype.bark = function() {
    if (this._silenced) {
        return;
    }
    console.log(`${this._name} say barks!!`);
};
Dog.prototype.silence = function() {
        this._silenced = true;
    }
    //Object.defineProperty()


const d = new Dog('Sharo');