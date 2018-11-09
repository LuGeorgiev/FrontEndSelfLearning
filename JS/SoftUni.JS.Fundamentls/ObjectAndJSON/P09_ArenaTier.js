/*jshint esversion:6*/
function solve(array) {
    const gladiators = [];
    for (const command of array) {
        if (command == 'Ave Cesar') {
            return gladiators;
            //printResults();
        } else if (command.indexOf(' vs ') > 0) {
            fight(command);
        } else {
            addEntity(command);
        }
    }


    function addEntity(gladiatorStr) {
        const tokens = gladiatorStr.split(/ -> /g).filter(x => x.length > 0);
        const name = tokens[0];
        const technique = tokens[1];
        const skill = +tokens[2];

        if (typeof gladiators[name] == 'undefined') {
            gladiators[name] = {};
            gladiators[name][technique] = skill;
            gladiators[name]['totalSkill'] = skill;
        } else if (!gladiators[name].hasOwnProperty(technique)) {
            gladiators[name][technique] = skill;
            gladiators[name]['totalSkill'] += skill;
        } else if (gladiators[name][technique] < skill) {
            const difference = skill - gladiators[name][technique];
            gladiators[name][technique] = skill;
            gladiators[name]['totalSkill'] += difference;

        }

    }

    function fight(input) {
        const index = input.indexOf(' vs ');
        const firstName = input.substr(0, index);
        const secondName = input.substr(index + 4);
        const firstExists = typeof gladiators[firstName] == 'undefined';
        const secondExists = typeof gladiators[secondName] == 'undefined';

        if (firstExists || secondExists) {
            return null;
        }
        const hasCommonTechniques = Object
            .keys(gladiators[firstName])
            .forEach((key) => {
                if (typeof gladiators[secondName][key] != 'undefined')
                    return true;
            });
        if (hasCommonTechniques) {

        }


    }

    function printResults() {}
    return gladiators;
}

const input = ['Pesho -> Duck -> 400',
    'Gladius -> Heal -> 200',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'
];

console.log(solve(input));