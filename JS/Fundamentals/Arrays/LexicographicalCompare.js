'use strict';

const first = 'Hello45',
    second = 'hello',
    minLegth = (first.length >= second.length) ? second.length : first.length;
let isEqual = true;

for (let i = 0; i < minLegth; i++) {

    if (first[i] > second[i]) {
        console.log('>');
        isEqual = false;
        break;
    } else if (first[i] < second[i]) {
        console.log('<');
        isEqual = false;
        break;
    }
}

if (isEqual) {
    if (first.length === second.length) {
        console.log('=');
    } else if (first.length < second.length) {
        console.log('<');
    } else {
        console.log('>');
    }
}