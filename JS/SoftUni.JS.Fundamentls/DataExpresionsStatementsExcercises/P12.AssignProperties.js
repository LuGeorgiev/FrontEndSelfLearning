/*jshint esversion:6*/

function solve(args) {
    const assigned = {};
    assigned[args[0]] = args[1];
    assigned[args[2]] = args[3];
    assigned[args[4]] = args[5];

    console.log(assigned);
}

solve(['name', 'Pesho', 'age', '23', 'gender', 'male']);
solve(['ssid', '90127461', 'status', 'admin', 'expires', '600']);