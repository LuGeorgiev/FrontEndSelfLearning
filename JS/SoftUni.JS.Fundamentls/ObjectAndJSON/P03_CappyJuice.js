/* jshint esversion:6*/
function solve(array) {
    let juiceRepo = {};
    let bottles = {};

    for (const iterator of array) {
        const line = iterator.split(/ => /g);
        const juice = line[0];
        const qty = +line[1];

        if (juiceRepo.hasOwnProperty(juice)) {
            juiceRepo[juice] += qty;
        } else {
            juiceRepo[juice] = qty;
        }

        if (juiceRepo[juice] >= 1000) {
            bottles[juice] = parseInt(juiceRepo[juice] / 1000);
        }
    }
    let result = "";
    for (const key in bottles) {
        result += `${key} => ${bottles[key]}\n`;
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