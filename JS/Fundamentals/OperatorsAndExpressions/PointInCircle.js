function solve(args) {
    const x = args[0],
        y = args[1];

    const distance = Math.sqrt(x * x + y * y);

    if (distance <= 2) {
        console.log('yes ' + distance.toFixed(2));
    } else {
        console.log('no ' + distance.toFixed(2));

    }
}