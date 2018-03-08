let input = `We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. 
We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else`;

String.prototype.removeOrgCase = function() {
    const inQuote = '<orgcase>',
        outQuote = '</orgcase>';
    let indexIn = 0,
        indexOut = 0,
        output;

    indexIn = this.indexOf(inQuote);
    indexOut = this.indexOf(outQuote, indexIn);

    if (indexIn > 0) {
        (this.substring(0, indexIn) +
            this.substring(indexIn + inQuote.length, indexOut) +
            this.substring(indexOut + outQuote.length))
        .removeOrgCase();
    }
    //recursion bottom
    else if (indexIn === -1) {
        input = this.toString();
    }
}
input.removeOrgCase();
console.log(input);


// String.prototype.replaceAll = function(search, replacement) {
//     let target = this;
//     return target.replace(new RegExp(search, 'g'), replacement);
// };

// input = input.replaceAll('<orgcase>', '')
// input = input.replaceAll('</orgcase>', '')
// console.log(input)