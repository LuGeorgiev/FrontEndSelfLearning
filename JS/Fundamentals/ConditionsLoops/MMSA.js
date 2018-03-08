function solve(args) {


    let sum = 0,
        min = Number.MAX_SAFE_INTEGER,
        max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < args.length; i += 1) {
        let num = parseFloat(args[i]);
        sum += num;
        if (min > num) {
            min = num
        }
        if (max < num) {
            max = num
        }
    }
    console.log('min=' + min.toFixed(2));
    console.log('max=' + max.toFixed(2));
    console.log('sum=' + sum.toFixed(2));
    console.log('avg=' + (sum / args.length).toFixed(2));
}