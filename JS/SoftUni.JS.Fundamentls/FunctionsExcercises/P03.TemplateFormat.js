/*jshint esversion:6*/

function solve(arr) {
    var output = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n';

    for (let i = 0; i < arr.length; i += 2) {
        output = xmlFormat(arr[i], arr[i + 1], output);
    }

    console.log(output + '</quiz>');

    function xmlFormat(question, answer, result) {
        result += '\t<question>\n';
        result += `\t\t${question}\n`;
        result += '\t</question>\n';
        result += '\t<answer>\n';
        result += `\t\t${answer}\n`;
        result += '\t</answer>\n';

        return result;
    }
}

solve(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"
]);