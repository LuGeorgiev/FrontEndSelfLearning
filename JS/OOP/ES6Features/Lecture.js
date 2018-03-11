/*jshint esversion: 6 */
const ppl = [1, 2, 2, 3, 4, 3, 567, 8, 99, 0, 0];

for (const key in ppl) {
    console.log(key);
}

for (const iterator of ppl) {
    console.log(iterator);
}

let names = new Set(); //like in C# no repetitions of values
names.add("Lubo");
names.add("Lubo");
names.add("Miro");
names.add("Ivo");
names.add("Lubo");
for (const iterator of names) {
    console.log(iterator);
}


let dictionary = new Map(); // dictionary in C#
dictionary.set('Lubo', 30);
dictionary.set('Lubo', 40);
dictionary.set('Lubo', 38);
dictionary.set('Ivan', 28);
dictionary.set(4, 28);
dictionary.set('4', 'ujas');

for (const iterator of dictionary) {
    console.log(iterator["0"]);
    console.log(iterator["1"]);
    console.log(iterator);
}