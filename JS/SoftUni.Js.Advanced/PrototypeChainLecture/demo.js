class Human {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('walkin');
    }
}

class Employee extends Human {
    constructor(name, jobTitle) {
        super(name);
        this.jobTitle = jobTitle;
        this.drunkMilk = function() {

        }
    }

    work() {
        console.log('working');
    }
}

const pesho = new Employee('Pesho', 'Manger');
console.log();