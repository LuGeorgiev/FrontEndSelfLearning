/*jshint esversion:6*/
function modifyCar(initialCar) {
    let modifiedCar = {};
    modifiedCar.model = initialCar.model;
    let engine;
    if (initialCar.power <= 90) {
        engine = {
            power: 90,
            volume: 1800
        };
    } else if (initialCar.power <= 120) {
        engine = {
            power: 120,
            volume: 2400
        };
    } else if (initialCar.power <= 200) {
        engine = {
            power: 200,
            volume: 2500
        };
    }
    modifiedCar.engine = engine;
    modifiedCar.carriage = {
        type: initialCar.carriage,
        color: initialCar.color
    };
    if (initialCar.wheelsize % 2 === 0) {
        initialCar.wheelsize--;
    }
    let wheels = [];
    for (let i = 0; i < 4; i++) {
        wheels.push(initialCar.wheelsize);
    }
    modifiedCar.wheels = wheels;

    return modifiedCar;
}

console.log(modifyCar({
    model: 'VW Golf II',
    power: 130,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));