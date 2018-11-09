function solve(array) {
    let table = "<table>";
    for (const person of array) {
        const personObj = JSON.parse(person);
        table += `\n <tr>\n  <td>${personObj["name"]}</td>\n  <td>`;
        table += `${personObj["position"]}</td>\n  <td>`;
        table += `${personObj["salary"]}</td>\n </tr>`;
    }
    table += "\n</table>";
    return table;
}

const input = ['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
];

console.log(solve(input));