class Cat { //ES6 sintaxis
    constructor(name) {
        this._name = name;
        this._silenced = false;
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

    // silence() {
    //     this.meow = function() {};   // this way teh cat will be silenced but function is changed 
    // }                        // bad approach. if new property is dded challaneg can be solved
}

const penka = new Cat('Penla');
penka.meow();
penka.meow();
penka.silence();
penka.meow();
penka.meow();

function Dog(name) { //THIS is NOT ES6 syntaxis OLD syntaxis
    this._name = name;
    this._silenced = false;
    this.bark = function() {
        if (this._silenced) {
            return;
        }
        console.log(`${this._name} say barks!!`);
    }
    this.silence = function() {
        this._silenced = true;
    }
}

const d = new Dog('Sharo');

d.bark();
d.silence();
d.bark();
d.bark();