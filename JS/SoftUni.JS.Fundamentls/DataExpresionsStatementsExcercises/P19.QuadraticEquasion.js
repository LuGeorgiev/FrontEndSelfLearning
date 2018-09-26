/*jshint esversion:6*/

function quadraticEquasion(a, b, c) {
    //let [a, b, c] = input;

    const discriminant = b * b - 4 * a * c;

    if (discriminant < 0) {
        console.log('No');

    } else if (discriminant == 0) {
        console.log(b * -1 / (2 * a));
    } else {

        console.log((b * -1 - Math.sqrt(discriminant)) / (2 * a));
        console.log((b * -1 + Math.sqrt(discriminant)) / (2 * a));
    }
}

quadraticEquasion([6, 11, -35]);
quadraticEquasion([1, -12, 36]);
quadraticEquasion([5, 2, 1]);