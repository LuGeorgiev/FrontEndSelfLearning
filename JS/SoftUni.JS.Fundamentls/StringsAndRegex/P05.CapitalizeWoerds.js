/*jshint esversion:6*/

function solve(input) {

    console.log(input
        .split(' ')
        .filter(x => x.length > 0)
        .map(x => capitalize(x))
        .join(' '));


    function capitalize(word) {
        let result = word[0].toUpperCase();
        for (let i = 1; i < word.length; i++) {
            result += word[i].toLowerCase();
        }
        return result;
    }
}

solve('Was that Easy? tRY thIs onE for SiZe!');