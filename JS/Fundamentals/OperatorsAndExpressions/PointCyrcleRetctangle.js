'use strict'

function solve(args) {

    const x = parseFloat(args[0]),
        y = parseFloat(args[1]);

    const distPointToCircle = Math.sqrt((x - 1) * (x - 1) + (y - 1) * (y - 1));
    let isInCircle;
    if (distPointToCircle <= 1.5) {
        isInCircle = 'inside';
    } else {
        isInCircle = 'outside';
    }

    let isInRectangle = (x >= -1) && (x <= 5) && (y >= -1) && (y <= 1);

    if (isInRectangle) {
        isInRectangle = 'inside';
    } else {
        isInRectangle = 'outside';
    }

    console.log(isInCircle + ' circle ' + isInRectangle + ' rectangle');
}