/*jshint esversion:6*/

function solve(line, word) {
    const regexString = '\\b' + word + '\\b';
    const regex = new RegExp(regexString, 'ig');

    const matches = line.match(regex);
    if (matches !== null) {
        console.log(matches.length);
    } else {
        console.log(0)
    }
}

solve('The waterfall was so high, that the child couldn’t see its peak.', 'the');