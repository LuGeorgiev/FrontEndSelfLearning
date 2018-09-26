/*jshint esversion:6*/

function solve(arr) {
    let number = arr[0];
    for (let i = 1; i < arr.length; i++) {
        number = cook(number, arr[i]);
        console.log(Number(number.toFixed(1)));
    }

    function cook(number, operation) {
        if (operation == 'chop') {
            return number / 2;
        } else if (operation == 'dice') {
            return Math.sqrt(number);
        } else if (operation == 'spice') {
            return ++number;
        } else if (operation == 'bake') {
            return number * 3;
        } else if (operation == 'fillet') {
            return number * 0.8;
        } else {
            throw Error('incorrect input');
        }
    }
}


//solve([32, 'chop', 'chop', 'chop', 'chop', 'chop', 'chop']);
solve([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);