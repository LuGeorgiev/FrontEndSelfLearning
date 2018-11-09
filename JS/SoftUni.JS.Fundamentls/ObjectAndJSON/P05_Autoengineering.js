/*jshint esversion:6*/
function solve(array) {
    const autoRepository = {};
    for (const inputLine of array) {
        const tokens = inputLine.split(" | ");
        const mark = tokens[0];
        const model = tokens[1];
        const quantity = +tokens[2];

        if (!autoRepository.hasOwnProperty(mark)) {
            autoRepository[mark] = {};
            autoRepository[mark][model] = 0;

        } else if (!autoRepository[mark].hasOwnProperty(model)) {
            autoRepository[mark][model] = 0;
        }

        autoRepository[mark][model] += quantity;
    }

    let result = "";
    for (const key in autoRepository) {
        result += `${key}\n`;
        for (const mark in autoRepository[key]) {
            result += `###${mark} -> ${autoRepository[key][mark]}\n`;
        }

    }

    return result;
}

const input = ['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Lada | Jigula | 12',
    'Citroen | C4 | 22',
    'BMW | X6 | 3',
    'Citroen | C5 | 10',
];
console.log(solve(input));