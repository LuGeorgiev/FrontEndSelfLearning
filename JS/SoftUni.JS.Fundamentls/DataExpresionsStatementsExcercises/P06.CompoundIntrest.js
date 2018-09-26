/*jshint esversion:6*/

function solve(args) {
    const pSum = args[0];
    const intrest = args[1];
    const period = args[2];
    const time = args[3];

    const member = 1 + intrest / (100 * (12 / period));
    const poweredMember = Math.pow(member, time * (12 / period));
    const result = pSum * poweredMember;

    console.log(result.toFixed(2));
}

solve([1500, 4.3, 3, 6]);
solve([100000, 5, 12, 25]);