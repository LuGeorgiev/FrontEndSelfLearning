/*jshint esversion:6*/

const secondPerson = {
    name: "Gosho"
};

const obj = {
    name: "Pesho",
    walk: function(prefix, address) {
        return `${prefix} ${this.name} with address ${address}`;
    }
};

const thirdPerson = {
    name: "Pencho"
};

//4 ways to call a function
obj.walk();
const result = obj.walk.call(secondPerson, "Mr", "Sofia"); // change the THIS scope/ call teh function
obj.walk.apply(secondPerson, ["Mrs", "Varna"]); //difference is that arument is arr / call teh function
const myWalk = obj.walk.bind(thirdPerson); // new function / change THIS scope
console.log(myWalk('mrS', 'Varna'));
console.log(result);