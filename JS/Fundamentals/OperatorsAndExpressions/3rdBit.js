function solve(args) {


    const num = +args[0];
    const result = (num >> 3) & 1;
    console.log(result);
}