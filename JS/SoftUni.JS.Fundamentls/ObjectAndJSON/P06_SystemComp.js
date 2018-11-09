/*jshint esversion:6*/
//TODO not solved
function solve(array) {
    const db = [];
    for (const inputLine of array) {
        const tokens = inputLine.split(" | ");
        const system = tokens[0];
        const componnet = tokens[1];
        const subComponnet = tokens[2];

        if (!db.hasOwnProperty(system)) {
            db[system] = [];
            db[system][componnet] = [];

        } else if (!db[system].hasOwnProperty(componnet)) {
            db[system][componnet] = [];
        }
        db[system][componnet].push(subComponnet);
    }

    let sortDb = db.sort(function(a, b) {
        if (b.length == a.length) {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        }
        return b.length - a.length;
    });



    let result = "";
    for (const key in sortDb) {
        result += `${key}\n`;
        for (const system in sortDb[key]) {
            result += `|||${system}\n`;
            for (const subSys of sortDb[key][system]) {
                result += `||||||${subSys}\n`;
            }
        }
    }

    return result;
}

const input = ['SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
];

console.log(solve(input));