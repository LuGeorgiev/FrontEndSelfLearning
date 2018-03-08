// //object is an instance fo given class; object type and class are equal
// //no instances exist in JS. Here we just copy objects
// // There is Object Type with varaety of Objects that copies the Type
// let pesho = { //define obj
//     name: 'Pesho', // defien property
//     age: 42,
//     grades: [1, 2, 3, 4, 5, 7],
//     becomeOlder: function() {
//         this.age += 1; // akoe bez THIS. shte tursi AGE nagore
//     }
// };
// console.log(pesho.age);
// pesho.becomeOlder();
// console.log(pesho.age);

// type of null is object like  - reference type

//let x = new String('1 2 3 4 5')   // new suzdava nov obekt, ako se izpusne JS go pravi avtomatichno


// //Creat objects. This way when creating new everything have to be copied
// let minkov, georgiev;

// minkov = {
//     fname: 'Doncho',
//     lname: 'Minkov',
//     toString: function() {
//         return this.fname + ' ' + this.lname; //this is VERY omportant
//     }
// };

// georgiev = {
//     fname: 'Georgi',
//     lname: 'Georgiev',
//     toString: function() {
//         return this.fname + ' ' + this.lname;
//     }
// };

// //Creating objects with finction:
// function makePerson(fname, lname) {
//     return {
//         fname: fname,
//         lname: lname,
//         toString: function() { //V JS toString NE se overridva, a napravo se podmenq za tozi obekt
//             return this.fname + ' ' + this.lname; //this is VERY omportant
//         }
//     };
// }
// let pesho = makePerson('Pesho', 'peshpv');
// let gosho = makePerson('Georgi', 'Goshov');

// console.log(pesho.fname); //both ways are equal
// console.log(gosho['fname']); // in this way we can change the property name because it is STRING
// // Asociativni masivi. Mogat da se INDEKSIRAT po stringove, a ne samo nomera

// // Premahvane an dumi ot string:
// const wordAray = 'word pesho word ivan nice job ivan Pesho coding'.split(' ');
// console.log(wordAray);

// let words = {};
// for (let word of wordAray) {
//     words[word] = true;
// };
// console.log(words);

// Prebroqvamne na dumi ot string:
const wordAray = 'word pesho word ivan nice job ivan Pesho coding job job'.split(' ');
console.log(wordAray);
let words = {};
for (let word of wordAray) {
    if (words.hasOwnProperty(word)) { // proverqva dali e i undefined
        words[word] += 1;
    } else {
        words[word] = 1;
    }

};
console.log(words);
console.log(Object.keys(words)); // - vrushta masiv ot kliuchovete BEZ red. Hash code order
// Asociative arrays nas NO length, Indexof etc NB!!!