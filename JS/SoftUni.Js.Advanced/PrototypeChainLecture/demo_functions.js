function Human(age, anme) {
    this.name = name;
}
Human.prototype.walk = function() {
    console.log('human walking');
}
Human.prototype.work = function() {
    console.log('human work');
}




function Employee(age, name, jobTitle) {
    this.jobTitle = jobTitle;
}
Employee.prototype.work = function() {
    console.log('working');
}

//Object.assign(Employee.prototype, Human.prototype);

//OR easier way to INHERIT prototype:
Employee.prototype = Object.create(Human.prototype);
Employee.prototype.constructor = Employee; // this is important line
//Otherwise constructor is from Human



const human = Human(14, 'Gosho');