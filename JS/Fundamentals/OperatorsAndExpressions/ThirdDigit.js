function solve(args) {
    const num = args[0];
    const thirdIsLast = num / 100 | 0;

    if (thirdIsLast % 10 === 7) {
        console.log('true');
    } else {
        console.log("false " + thirdIsLast % 10);
    }
}