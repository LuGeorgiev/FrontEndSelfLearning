/*jshint esversion:6*/



function createHuman(name, eyeCol) {
    return {
        name: name,
        eyeCol: eyeCol,
        walk: function() {

        }
    };
}


let mammal = {
    legs: true,
    eyes: true,
    walk: function() {

    }
};
let animal = Object.create(mammal); //makes another object with PROTOTYPE mammal
animal.eyes = 2;

let human = {
    talk: function() {

    }
};

let cow = {
    prejiving: function() {

    }
};