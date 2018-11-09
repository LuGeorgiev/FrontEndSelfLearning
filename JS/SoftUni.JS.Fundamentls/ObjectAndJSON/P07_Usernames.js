/*jshint esversion:6*/

function solve(array) {
    const usernames = [];
    for (const name of array) {
        if (!usernames.includes(name)) {
            usernames.push(name);
        }
    }
    return usernames.sort((a, b) => a.length - b.length ||
        a.localeCompare(b)).join('\n');

    //This is my ugly way to solve teh task
    // return usernames
    //     .sort(function(a, b) {
    //         if (a.length == b.length) {
    //             if (a < b) {
    //                 return -1;
    //             } else if (a > b) {
    //                 return 1;
    //             } else {
    //                 return 0;
    //             }
    //         }
    //         return a.length - b.length;
    //     });
}

const input = ['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Donatello',
    'Biser',
    'Bounty',
    'Renard',
    'Renard',
    'Rot',
    'Rot'
];
console.log(solve(input));