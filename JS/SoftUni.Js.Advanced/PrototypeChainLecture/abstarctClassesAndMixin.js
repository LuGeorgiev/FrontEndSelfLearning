//Mixin - class uses another class prototypes without "Inherit" it

class Employee {

}

const utils = {
    toJSON: function() {
        console.log(`${this.Id}`);
    }
}
class Spaceship {
    constructor() {
        this.Id = '2345'
    }
}

class Computer {
    constructor() {
        this.Id = 'aDADE';
    }
}

//This way Computer uses additionally utils proto 
Object.assign(Computer.prototype, utils);

const comp = new Computer();
comp.toJSON();
const spaceship = new Spaceship();
spaceship.toJSON();;