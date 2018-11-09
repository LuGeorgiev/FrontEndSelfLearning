/* jshint esversion:6*/
function solve(array) {
    let catalogue = {};
    for (const iterator of array) {
        const line = iterator.split(/ : /g);
        const product = line[0];
        const price = +line[1];

        catalogue[product] = price;
    }
    const sortedCatalogue = {};
    Object.keys(catalogue)
        .sort()
        .forEach((key) => sortedCatalogue[key] = catalogue[key]);
    let result = "";
    let firstLetter = "";
    for (const key in sortedCatalogue) {
        if (key[0] !== firstLetter) {
            result += `${key[0]}\n`;
            firstLetter = key[0];
        }

        result += ` ${key}: ${sortedCatalogue[key]}\n`;
    }

    return result;
}

const input = ['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10'
];


console.log(solve(input));