const input = 'We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.';
let tempStr = [];

//Unsuccessful recursion
String.prototype.removeOrgCase = function(start) {
    const inQuote = '<orgcase>',
        outQuote = '</orgcase>';
    let //tempStr = [],
        indexIn = 0,
        indexOut = 0;

    indexIn = this.indexOf(inQuote, start);
    //recursion bottom
    if (indexIn === -1) {
        tempStr.push(this.substr(start + outQuote.length));
    }
    if (indexIn !== -1) {
        indexOut = this.indexOf(outQuote, indexIn);
        this.removeOrgCase(indexOut);

        tempStr.unshift(this.substring(indexIn + inQuote.length, indexOut));
        tempStr.unshift(this.substring(start + outQuote.length, indexIn));
    }

    return tempStr.join('');
}
console.log(input)
console.log(input.removeOrgCase(0));







// String.prototype.removeOrgCase = function() {
//     const inQuote = '<orgcase>',
//         outQuote = '</orgcase>';

//     let tempStr = [],
//         indexIn = 0,
//         indexOut = -10;

//     while (true) {
//         indexIn = this.indexOf(inQuote, indexIn);
//         if (indexIn === -1) {
//             break;
//         } else {
//             tempStr.pop();
//         }
//         tempStr.push(this.substring(indexOut + 10, indexIn));
//         indexOut = indexIn;
//         indexOut = this.indexOf(outQuote, indexOut);
//         tempStr.push(this.substring(indexIn + 9, indexOut));
//         tempStr.push(this.substring(indexOut + 10));
//         indexIn++;
//     }
//     return tempStr.join('');
// }

// String.prototype.strToUpperCase = function() {
//     const inQuote = '<upcase>',
//         outQuote = '</upcase>';

//     let tempStr = [],
//         indexIn = 0,
//         indexOut = -9;

//     while (true) {
//         indexIn = this.indexOf(inQuote, indexIn);
//         if (indexIn === -1) {
//             break;
//         } else {
//             tempStr.pop();
//         }
//         tempStr.push(this.substring(indexOut + 9, indexIn));
//         indexOut = indexIn;
//         indexOut = this.indexOf(outQuote, indexOut);
//         tempStr.push(this.substring(indexIn + 8, indexOut).toUpperCase());
//         tempStr.push(this.substring(indexOut + 9));
//         indexIn++;
//     }
//     return tempStr.join('');
// }
// String.prototype.strToLowerCase = function() {
//     const inQuote = '<lowcase>',
//         outQuote = '</lowcase>';

//     let tempStr = [],
//         indexIn = 0,
//         indexOut = -10;

//     while (true) {
//         indexIn = this.indexOf(inQuote, indexIn);
//         if (indexIn === -1) {
//             break;
//         } else {
//             tempStr.pop();
//         }
//         tempStr.push(this.substring(indexOut + 10, indexIn));
//         indexOut = indexIn;
//         indexOut = this.indexOf(outQuote, indexOut);
//         tempStr.push(this.substring(indexIn + 9, indexOut).toLowerCase());
//         tempStr.push(this.substring(indexOut + 10));
//         indexIn++;
//     }
//     return tempStr.join('');
// }

// console.log(input);

// console.log(input.removeOrgCase().strToLowerCase().strToUpperCase());