/* jshint esversion:6*/
function solve(array) {
    let juiceRepo = {};
    for (const iterator of array) {
        const line = iterator.split(/ => /g);
        const juice = line[0];
        const qty = +line[1];
        if (juiceRepo.hasOwnProperty(juice)) {
            juiceRepo[juice] += qty;
        } else {
            juiceRepo[juice] = qty;
        }
    }
    let result = "";
    for (const key in juiceRepo) {
        if (juiceRepo[key] > 1000) {
            result += `${key} => ${Math.floor(juiceRepo[key]/1000)}\n`;
        }
    }

    return result;
}

const input = ['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
];

console.log(solve(input));