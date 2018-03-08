function solve(args) {


    let a = parseFloat(args[0]),
        b = parseFloat(args[1]),
        c = parseFloat(args[2]);

    if (a === 0 || b === 0 || c === 0) {
        console.log('0');
    } else {
        if (a < 0) {
            a = 0;
        } else {
            a = 1;
        }
        if (b < 0) {
            b
            b = 0;
        } else {
            b = 1;
        }
        if (c < 0) {
            c = 0;
        } else {
            c = 1;
        }

        if (a ^ b ^ c) {
            console.log('+');

        } else {
            console.log('-');
        }
    }
}