// Write a function for creating persons.
// Each person must have firstname, lastname, age and gender (true is female, false is male)
// Generate an array with ten person with different names, ages and gender
function makePerson(firstname, lastname, age, gender) {
    return {

        firstName: firstname,
        lastName: lastname,
        age: age,
        gender: gender,
        // toString: function() {
        //     return this.firstName + ' ' + this.lastName + ' ' + this.age + ' ' + this.gender;
        // }
    };
}

const persons = [
    makePerson('Ivan', 'Petrov', 67, false),
    makePerson('Petq', 'Georgieva', 31, true),
    makePerson('Atanas', 'Ivanov', 19, false),
    makePerson('Anavas', 'Georgiev', 47, false),
    makePerson('Iliq', 'Martinov', 67, false),
    makePerson('Mira', 'Ludata', 37, true),
    makePerson('Lira', 'Krasiva', 17, true),
    makePerson('Bira', 'Makaronova', 47, true),
    makePerson('Mariq', 'Petrova', 11, true),
    makePerson('Ivan', 'Naumov', 66, false),
];

// // Write a function that checks if an array of person contains only people of age (with age 18 or greater)
// // Use only array methods and no regular loops (for, while)
//
// console.log(persons.every(x => x.age > 18));

// // Write a function that prints all underaged persons of an array of person
// // Use Array#filter and Array#forEach
// // Use only array methods and no regular loops (for, while)
//
// console.log(persons
//     .filter(x => x.age < 18)
//     .forEach(x => console.log(x.firstName + ' ' + x.lastName))
// );

// Write a function that calculates the average age of all females, extracted from an array of persons
// Use Array#filter

let avgFemaleAge = (persons.filter(x => x.gender).reduce((x, y) => x + y.age, 0)) /
    persons.filter(x => x.gender).length;
console.log(avgFemaleAge);

// Write a function that finds the youngest male person in a given array of people and prints his full name
// Use only array methods and no regular loops (for, while)
// Use Array#find

let youngest = persons.filter(x => !x.gender).sort((x, y) => x.age - y.age);
console.log(youngest[0].firstName + ' ' + youngest[0].lastName);

// Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
// Use Array#reduce

const GroupFirstNameLetter = persons.reduce(function(group, person) {
    const letter = person.firstName[0];

    if (group[letter]) {
        group[letter].push(person);
    } else {
        group[letter] = [person];
    }

    return group;
}, {});

console.log(GroupFirstNameLetter['B']);