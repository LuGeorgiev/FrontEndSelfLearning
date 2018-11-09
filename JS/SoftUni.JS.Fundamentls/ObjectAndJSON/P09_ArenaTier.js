/*jshint esversion:6*/
function solve(array) {
    for (const command of array) {
        if (command == 'Ave Cesar') {
            printResults();
        } else if (command.indexOf(' vs ') > 0) {
            fight(command);
        } else {
            addEntity(command);
        }
    }

    const glatiators = [];

    function addEntity(gladiatorStr) {
        const tokens = gladiatorStr.split(/ -> /g).filter(x => x.length > 0);
        const name = tokens[0];
        const technique = tokens[1];
        const skill = +tokens[2];

        if (gladiators[name] == undefined) {
            const gladiator = {};
            gladiator
        }
    }

    function fight(input) {

    }

    function printResults() {

    }
}

const input = ['Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar'
];
console.log(solve(input));