/*jshint esversion:6*/

function solve(inches) {
    const inchesLeft = inches % 12;
    const feets = (inches - inchesLeft) / 12;

    console.log(`${feets}'-${inchesLeft}"`);
}

solve(36);
solve(55);
solve(11);