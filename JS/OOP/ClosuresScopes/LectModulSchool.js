const peopleList = (function() {
    const people = [];

    function addPerson(name, age, gender) {
        if (typeof name !== 'string') {
            throw 'Name is not a string'
        }
        if (!name.match(/^[A-Z][a-z]+$/)) {
            throw 'Name contains invalid symbol';
        }


        //more checks
        people.push({
            name: name,
            age: age,
            gender: gender
        });
    }

    function getPeople() {
        //return people; // this gives reference to function which is not nice approach
        return people.map(p => { //this will make a deep copy of object
            return {
                name: p.name,
                age: p.age,
                gender: p.gender
            };
        });
    }
    return {
        addPerson: addPerson,
        getPeople: getPeople
    };
})();

peopleList.addPerson('Lubo', 40, true);
let plist = peopleList.getPeople();


// let plist = peopleList.getPeople(); //correct
// console.log(plist);

plist[0].name = 'In valid';
console.log(plist);