/*jshint esversion:6*/
function solve(lines) {
    const dnaStr = ['AT', 'CG', 'TT', 'AG', 'GG'];
    let dashCount = 0;
    let dashCountRising = true;

    for (let i = 0; i < lines; i++) {
        let result = '';
        result = '-'.repeat(dashCount) + result;
        result += '-'.repeat(dashCount);

        if (dashCountRising) {
            dashCount++;
        } else {
            dashCount--;
        }

        if (dashCount === 3) {
            dashCountRising = false;
            dashCount = 1;
        } else if (dashCount == -1) {
            dashCountRising = true;
            dashCount = 1;
        }

        const dnaIndex = i % 5;
        result = dnaStr[dnaIndex][0] + result;
        result += dnaStr[dnaIndex][1];

        const straCount = (6 - result.length) / 2;
        result = '*'.repeat(straCount) + result;
        result += '*'.repeat(straCount);

        console.log(result);
    }
}

solve(10);