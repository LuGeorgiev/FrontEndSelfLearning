/*jshint esversion:6*/
function solve(array) {
    const db = new Map();
    for (const inputLine of array) {
        const [system, componnet, subComponnet] = inputLine.split(" | ");

        if (!db.has(system)) {
            db.set(system, new Map());
        }
        if (!db.get(system).get(componnet)) {
            db.get(system).set(componnet, []);
        }
        db.get(system).get(componnet).push(subComponnet);
    }

    let sortedDb = Array.from(db.keys())
        .sort((a, b) => db.get(b).size - db.get(a).size)
        .sort();


    let result = "";
    for (const key of sortedDb) {
        result += `${key}\n`;
        const sortedComponents = Array.from(db.get(key).keys())
            .sort((a, b) => db.get(key).get(b).length - db.get(key).get(a).length);

        for (const system of sortedComponents) {
            result += `|||${system}\n`;
            for (const subSys of db.get(key).get(system)) {
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