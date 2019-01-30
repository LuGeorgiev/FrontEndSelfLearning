/*jshint esversion:6*/
const fs = require('fs');
let storage = {};

module.exports = {
    put: (key, value) => {
        if (typeof(key) !== 'string') {
            throw new Error('Key is not string');
        }
        if (typeof(value) === 'undefined') {
            throw new Error('Value should not ne undefined!');
        }
        if (storage[key]) {
            throw new Error('Key already exists!');
        }
        storage[key] = value;
    },
    get: (key) => {
        if (typeof(key) !== 'string') {
            throw new Error('Key is not string');
        }
        if (!storage[key]) {
            throw new Error('Key does not exist!');
        }
        return storage[key];
    },
    saveSync: () => {
        fs.writeFileSync('./database/storage.json', JSON.stringify(storage, null, 4));
        console.log('Saved successfully!');
    },
    loadSync: () => {
        storage = JSON.parse(fs.readFileSync('./database/storage.json'));
    },
    load: () => {
        return new Promise((resolve, reject) => {
            let data = fs.readFile('./database/storage.json', (err, data) => {
                if (err) {
                    reject(err);
                    console.dir(err);
                    return;
                }
                storage = JSON.parse(data);
                resolve();
            });
        });
    }
}