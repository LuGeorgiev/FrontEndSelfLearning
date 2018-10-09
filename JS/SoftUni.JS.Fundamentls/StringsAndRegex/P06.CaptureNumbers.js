/*jshint esversion:6*/

function solve1() {
    let numbers = '';
    for (let i = 0; i < arguments[0].length; i++) {
        let matches = arguments[0][i].match(/\d+/g);
        if (matches !== null) {
            numbers += matches.join(' ');
            numbers += ' ';
        }
    }
    console.log(numbers);
}

solve1(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45'
]);