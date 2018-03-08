const input = [
    'Penka', 'Hristova', '61',
    'System', 'Failiure', '88',
    'Bat', 'Man', '16',
    'Malko', 'Kote', '72'
];

let people = [];

for (let i = 0; i < input.length; i += 3) {
    people.push({
        firstame: input[i],
        lastname: input[i + 1],
        age: input[i + 2]
    });
}
people.sort((x, y) => x.age - y.age);
console.log(people[0].firstame + ' ' + people[0].lastname);