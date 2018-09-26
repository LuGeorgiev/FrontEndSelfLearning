/*jshint esversion:6*/

function figure(n) {
    console.log('+' + ('-'.repeat(n - 2)) + '+' + ('-'.repeat(n - 2)) + '+');

    for (let i = 0; i < n / 2; i++) {
        console.log('|' + (' '.repeat(n - 2)) + '|' + (' '.repeat(n - 2)) + '|');
    }
    console.log('+' + ('-'.repeat(n - 2)) + '+' + ('-'.repeat(n - 2)) + '+');

    for (let i = 0; i < n / 2; i++) {
        console.log('|' + (' '.repeat(n - 2)) + '|' + (' '.repeat(n - 2)) + '|');
    }
    console.log('+' + ('-'.repeat(n - 2)) + '+' + ('-'.repeat(n - 2)) + '+');

}

figure(4);