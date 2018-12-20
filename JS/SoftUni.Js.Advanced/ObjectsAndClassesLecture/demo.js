/*jshunt esversion:6*/

let objHuman = {
    name: "Pesho",
    address: 'Mladost',
    walk: function() {}
};

//following can freez or seal given property
Object.defineProperty(objHuman, 'name', {
    value: 'Ivan',
    writable: true,
    enumerable: true,
    configurable: false
});

// empty gosho with prototype objHuman
let gosho = Object.create(objHuman);
gosho.name = "Gosho";
gosho.run = function() {};

//SECOND WAY for object creation
// WITH FUNCTION 5 way to create functions-call, apply, lambda..

//following is empty object that holds the prototype with WALK
function FunHuman() { // is will be called with NEW use capital letter
    this.name = 'Pesho';
    this.address = 'Mladost';
    this.walk = function() {};
}
FunHuman.apply({}); // create of function
let pesho = new FunHuman(); // one more way to create function
pesho.name = 'Pesho Golemiq';

//this is CORRECT WAY TO ADD FUNCTIONS
FunHuman.prototype.sleep = function() {}; //add new function to prototype


//classes DO NOT EXISTS in JS
class ClassHuman {
    constructor(name, address) {
        //In constructor are the properties/function each instance will have
        this.name = name || "Pesho";
        this.address = address || "Liulin";

        this._name = "";

        Object.freeze(this); //freezes whole object
    }


    get name() {
        return this._name;
    }

    set name(val) {
        this._name = val;
    }

    //following functions are attached to the prototype
    walk(a, b) {

    }
    sleep(a, b) {

    }

    static eat() {

    }
}
let peshoClass = new ClassHuman("Ivan", 'Center');
ClassHuman.eat();
peshoClass.eat(); // this is not defined