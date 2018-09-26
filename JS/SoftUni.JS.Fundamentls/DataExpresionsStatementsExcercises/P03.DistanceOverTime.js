/*jshint esversion:6*/
function solve(input) {
    let velocityA = input[0];
    let velocityB = input[1];
    let time = input[2];
    let hoursTravelled = time / 3600;
    let distanceKM = Math.abs(velocityA * hoursTravelled - velocityB * hoursTravelled);
    console.log(distanceKM * 1000);
}

solve([0, 60, 3600]);
solve([11, 10, 120]);
solve([5, -5, 40]);