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

function anotherWay(number) {
    let numberAsString = number.toString();

    function getAVG(numberAsString) {
        let sum = 0;
        for (const digit of numberAsString) {
            sum += Number(digit);
        }
        return sum / numberAsString.length;
    }

    let addNine = (num) => num + '9';
    let average = getAVG(numberAsString);

    while (average <= 5) {
        numberAsString = addNine(numberAsString);
        average = getAVG(numberAsString);
    }
    console.log(numberAsString);
}

console.log(solve(101));