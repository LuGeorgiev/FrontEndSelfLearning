function Person(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
}

let people = [
    { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
    { firstname: 'Bay', lastname: 'Ivan', age: 81 },
    { firstname: 'John', lastname: 'Doe', age: 42 },
    { firstname: 'Pesho', lastname: 'Pesho', age: 22 },
    { firstname: 'Asdf', lastname: 'Xyz', age: 81 },
    { firstname: 'Gosho', lastname: 'Gosho', age: 22 }
];


function groupedBy(arg) {
    let grouped = {},
        i = 0;
    for (i = 0; i < people.length; i += 1) {
        let key = people[i][arg].toString();
        if (typeof(grouped[key]) === 'undefined') {
            grouped[key] = [];
        }
        grouped[key].push(' ' + people[i].firstname + ' ' + people[i].lastname + ' age: ' + people[i].age);
    }
    for (const key in grouped) {
        console.log(key + ': [' + grouped[key] + '] ');
    }
}


groupedBy('firstname');