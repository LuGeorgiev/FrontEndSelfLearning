var PrintNameMixin = function(Base) { //metods which can be used from each class
    return class extends Base {
        printName() {
            console.log(this._name);
        }
    };
};


let NameValidationMIxin = function(Base) {
    return class extends Base {
        _ValidateName(name) {
            if (typeof name !== 'string') {
                throw "Name must ne a string"
            }
            if (name.length === 0) {
                throw 'Name must not be empty'
            }
        }
    }
};

class Person extends PrintNameMixin(NameValidationMIxin(Object)) {
    constructor(name) {
        super();
        this._ValidateName(name);
        this._name = name;
    }
}

class Traktor extends PrintNameMixin(Object) {
        constructor(name) { // VAlidation is not added because name can be numbers
            super();
            this._name = name;
        }
    }
    //this way no comman parent or inheritance between Traktor and Person was imlemented

let p = new Person('Zebra');
p.printName();

let t = new Traktor(15);
t.printName();