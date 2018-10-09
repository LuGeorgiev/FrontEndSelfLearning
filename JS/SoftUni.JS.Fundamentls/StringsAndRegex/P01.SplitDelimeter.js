/*jshint esversion:6*/
function solve(input, delimeter) {

    console.log(input
        .split(delimeter)
        .filter(x => x.length > 0)
        .join('\n'));
}

solve('One-Two-Three-Four-Five', '-');