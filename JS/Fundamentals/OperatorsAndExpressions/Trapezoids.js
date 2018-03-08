function solve(args) {

    const a = parseFloat(args[0]),
        b = parseFloat(args[1]),
        h = parseFloat(args[2]);

    const area = (a + b) * h / 2;

    console.log(area.toFixed(7));
}