/*jshint esversion:6*/

function solve(arr) {
    const nameRegexPattern = '\\*[A-Z][a-z]*(?= |\\t|$)';
    const telephoneRegexPattern = `\\+[0-9-]{10}(?= |\\t|$)`;
    const idRegexPattern = `\\![A-Za-z0-9]+(?= |\\t|$)`;
    const secretStrRegexPattern = `\\_[A-Za-z0-9]+(?= |\\t|$)`;
    let patterns = [];
    patterns.push(nameRegexPattern);
    patterns.push(telephoneRegexPattern);
    patterns.push(idRegexPattern);
    patterns.push(secretStrRegexPattern);

    for (let i = 0; i < arr.length; i++) {
        let textToCensor = arr[i];
        for (let j = 0; j < patterns.length; j++) {
            const regex = new RegExp(patterns[j], 'g');
            textToCensor = censore(textToCensor, regex);
        }
        console.log(textToCensor);
    }

    function censore(input, pattern) {
        let output = input;
        let match = pattern.exec(output);
        while (match) {
            output = output.replace(match[0], '|'.repeat(match[0].length));
            //console.log(output);
            match = pattern.exec(output);
        }
        return output;
    }
}

function solveLab(inputStr) {
    const nameRegexPattern = /\*[A-Z][a-z]*(?= |\t|$)/g;
    const telephoneRegexPattern = /\+[0-9-]{10}(?= |\t|$)/g;
    const idRegexPattern = /\![A-Za-z0-9]+(?= |\t|$)/g;
    const secretStrRegexPattern = /\_[A-Za-z0-9]+(?= |\t|$)/g;

    for (const lines of inputStr) {
        console.log(lines
            .replace(nameRegexPattern, m => "|".repeat(m.length))
            .replace(telephoneRegexPattern, m => "|".repeat(m.length))
            .replace(idRegexPattern, m => "|".repeat(m.length))
            .replace(secretStrRegexPattern, m => "|".repeat(m.length))
        );
    }
}


solveLab(['Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.',
    'I think it was +555-49-796',
    `I can't really remember...`,
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    `I really don't know what happened there.`,
    'This is all I saw, that night.'
]);