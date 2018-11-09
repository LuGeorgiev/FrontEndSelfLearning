function solve(arr) {
    const heroes = [];
    for (let i = 0; i < arr.length; i++) {
        const heroeArgs = arr[i].split(/ \/ /g);

        const heroeName = heroeArgs[0];
        const heroeLevel = +heroeArgs[1];
        let heroeItems = []
        if (heroeArgs.length > 2) {
            heroeItems = heroeArgs[2].split(/, /g);
        }
        heroes.push({
            name: heroeName,
            level: heroeLevel,
            Items: heroeItems
        });
    }
    return JSON.stringify(heroes);
}

const input = ['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
];

console.log(solve(input));