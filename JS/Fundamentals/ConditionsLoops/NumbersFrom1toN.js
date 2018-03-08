function solve(args) {
    const n = +args[0];
    let result = '';
    for (let index = 1; index < n; index += 1) {
        result += index + ' ';
    }
    result += n;
    console.log(result);
}