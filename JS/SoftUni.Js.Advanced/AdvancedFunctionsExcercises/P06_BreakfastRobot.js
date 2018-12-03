/*jshint esversion:6*/

const solve = (function() {
    const apple = {
        carb: 1,
        flavour: 2
    };
    const coke = {
        carb: 10,
        flavour: 20
    };
    const burger = {
        carb: 5,
        fat: 7,
        flavour: 3
    };
    const omlet = {
        protein: 5,
        fat: 1,
        flavour: 1
    };
    const cheverme = {
        protein: 10,
        carb: 10,
        fat: 10,
        flavour: 10
    };
    let inStock = {
        carb: 0,
        flavour: 0,
        fat: 0,
        protein: 0
    };
    let repository = {
        omlet: omlet,
        apple: apple,
        coke: coke,
        burger: burger,
        cheverme: cheverme,
        inStock: inStock,
        prepare: prepare,
        report: report,
        restock: restock
    };

    function prepare(item, qty) {
        for (const key in repository[`${item}`]) {
            if (repository.inStock[`${key}`] - repository[`${item}`][`${key}`] * parseInt(qty) < 0) {
                return `Error: not enough ${key} in stock `;
            }
        }
        for (const key in repository[`${item}`]) {
            repository.inStock[`${key}`] -= repository[`${item}`][`${key}`] * parseInt(qty);
        }
        return "Success";
    }

    function restock(item, qty) {
        if (item === 'carbohydrate') {
            item = 'carb';
        }
        repository.inStock[item] += Number(qty);
        return "Success";
    }

    function report() {
        const prot = repository.inStock.protein;
        const carbos = repository.inStock.carb;
        const fats = repository.inStock.fat;
        const flavours = repository.inStock.flavour;
        return `protein=${prot} carbohydrate=${carbos} fat=${fats} flavour=${flavours}`;
    }

    return function(input) {
        let [command, item, qty] = input.split(' ').filter(x => x.length > 0);
        if (command === 'restock') {
            //repository.inStock[item] += Number(qty);
            return repository.restock(item, qty);
        } else if (command === 'prepare') {
            return repository.prepare(item, qty);
        } else {
            return repository.report();
        }
    };
})();

// console.log(solve('prepare cheverme 1'));
// console.log(solve('restock protein 10'));
// console.log(solve('prepare cheverme 1'));
// console.log(solve('restock carbohydrate 10'));
// console.log(solve('prepare cheverme 1'));
// console.log(solve('restock fat 10'));
// console.log(solve('prepare cheverme 1'));
// console.log(solve('restock flavour 10'));
// console.log(solve('prepare cheverme 1'));
// console.log(solve('report'));

console.log(solve('restock carbohydrate 10'));
console.log(solve('restock flavour 10'));
console.log(solve('prepare apple 1'));
console.log(solve('restock fat 10'));
console.log(solve('prepare burger 1'));
console.log(solve('report'));