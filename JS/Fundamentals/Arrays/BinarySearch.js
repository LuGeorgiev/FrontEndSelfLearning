'use strict';
const input = ['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32'],
    valueToSearch = 32,
    numLine = input.map(x => parseInt(x)).sort(function(a, b) { return a - b });

let startIndex = 0,
    endIndex = numLine.length - 1,
    isFind = false,
    index = (endIndex - startIndex) / 2 | 0;

while (true) {
    if (numLine[index] === valueToSearch) {
        isFind = true;
        break;
    } else if (numLine[startIndex] === valueToSearch) {
        index = startIndex;
        isFind = true;
        break;
    } else if (numLine[endIndex] === valueToSearch) {
        index = endIndex;
        isFind = true;
        break;
    } else if (numLine[index] > valueToSearch) {
        endIndex = index;
    } else {
        startIndex = index;
    }
    startIndex += 1;
    endIndex -= 1;
    index = (endIndex + startIndex) / 2 | 0;
    if (startIndex === index || endIndex === index) {
        break;
    }
}
console.log(numLine);

if (isFind) {
    while (numLine[index] === numLine[index - 1]) {
        index -= 1;
    }
    console.log('value of: ' + numLine[index] + ' was found on index: ' + index);
} else {
    console.log('value of: ' + valueToSearch + ' was not found!');
}