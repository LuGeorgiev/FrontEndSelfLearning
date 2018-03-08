function solve(args) {

    const number = args[0];
    //const number = 21;

    if (number % 5 || number % 7) {
        console.log('false ' + number);
    } else {
        console.log('true ' + number);
    }
}