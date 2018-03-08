function solve(args) {

    let a = parseFloat(args[0]),
        b = parseFloat(args[1]),
        temp;


    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }
    console.log(a + ' ' + b);
}