/*jshint esversion:6*/

const storage = require('./storage');

function putMyGDPRSensitiveInfo() {
    storage.put('name', 'Lubomir');
    storage.put('familyName', 'Georgiev');
    storage.put('age', '40');
    storage.put('hobbies', {
        games: [
            'Diablo 3',
            'Magic The Gathering',
            'UFO: Alien Invasion'
        ],
        movies: [
            'Game of Thrones',
            'The Godfather',
            'Beautiful Mind',
            'Ghandi'
        ],
        sport: [
            'Calisthetics',
            'Skiing',
            'Boxing'
        ]
    });
}

function getMyGDPRSensitiveInfo() {
    let name = storage.get('name');
    let familyName = storage.get('familyName');
    let age = storage.get('age');
    let hobbies = storage.get('hobbies');

    console.log("Name: " + name + ' ' + familyName);
    console.log(`Age: ${age}`);
    for (const hobby in hobbies) {
        console.log(`--${hobby}: ${hobbies[hobby].join(', ')}`);
    }
}

//test save info to "db"
// putMyGDPRSensitiveInfo();
// storage.saveSync();

//getMyGDPRSensitiveInfo();

//load test
storage.load()
    .then(() => {
        getMyGDPRSensitiveInfo();
    })
    .catch((err) => {
        console.log("Could not read file!");
    });