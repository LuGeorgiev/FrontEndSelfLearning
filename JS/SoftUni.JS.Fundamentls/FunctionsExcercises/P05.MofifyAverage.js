/*jshint esversion:6*/

function solve(num) {
    let digitsNumber = 0;
    let input = '' + num;
    let result = '';
    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        result += input[i];
        digitsNumber++;
        sum += parseInt(input[i]);
    }

    if (sum / digitsNumber > 5) {
        return result;
    } else {
        while (true) {
            result += '9';
            digitsNumber++;
            sum += 9;
            if (sum / digitsNumber > 5) {
                return result;
            }
        }
    }
}

console.log(solve(101));