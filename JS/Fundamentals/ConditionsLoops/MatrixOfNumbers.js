function solve(args) {

    const n = +args[0];

    for (let i = 1; i <= n; i += 1) {
        let line = '';
        for (let k = i; k < n + i; k += 1) {
            line += k + ' '
        }
        console.log(line);
    }
}