function solve(args) {


    const a = parseFloat(args[0]),
        b = parseFloat(args[1]),
        c = parseFloat(args[2]);

    if (a >= b && a >= c) {
        console.log(a);
    } else {
        if (b >= a && b >= c) {
            console.log(b);
        } else {
            console.log(c);
        }
    }
}