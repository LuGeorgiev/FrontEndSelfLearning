/*jshint esversion:6*/

function solve(line) {
    let variables = [];
    const regex = /\b_([A-Za-z]+)\b/g;
    let match = regex.exec(line);

    while (match) {
        variables.push(match[1]);
        match = regex.exec(line);
    }

    console.log(variables.join(','));
}

solve('The _id and _age variables are both integers.');