function solve(args) {

    const a = +args[0],
        b = +args[1],
        c = +args[2],
        d = b * b - 4 * a * c;


    if (a === 0) {
        console.log('x1=' + (-c / b).toFixed(2));
    } else if (d < 0) {
        console.log('no real roots');

    } else if (d === 0) {
        console.log('x1=x2=' + (-b / (2 * a)).toFixed(2));
    } else {
        let x1 = (-b + Math.sqrt(d)) / (2 * a);
        let x2 = (-b - Math.sqrt(d)) / (2 * a);

        if (x1 > x2) {
            let temp = x1;
            x1 = x2;
            x2 = temp;
        }
        console.log('x1=' + x1.toFixed(2) + '; x2=' + x2.toFixed(2));
    }
}