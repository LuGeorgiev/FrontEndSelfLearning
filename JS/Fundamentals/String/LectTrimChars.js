//Trims char symbols from a string

// String.prototype.trimChars = function(chars) {
//     let startIndex = 0;
//     while (startIndex < this.length) {
//         if (chars.indexOf(this[startIndex]) < 0) {
//             break;
//         }
//         startIndex += 1;
//     }
//     let endIndex = this.length - 1;
//     while (startIndex < endIndex) {
//         if (chars.indexOf(this[endIndex]) < 0) {
//             break;
//         }
//         endIndex -= 1;
//     }
//     return this.substring(startIndex, endIndex + 1);
// }
//console.log(',  .. ; ;; Hi, Pesho ,,,;'.trimChars(' ,;.'));

// Second approach without a lot of itteration for each 
String.prototype.trimChars = function(chars) {
    let disabledChars = {};
    for (let char of chars) {
        disabledChars[char] = true;
    }
    let startIndex = 0;
    while (startIndex < this.length) {
        if (!disabledChars[this[startIndex]]) {
            break;
        }
        startIndex += 1;
    }
    let endIndex = this.length - 1;
    while (startIndex < endIndex) {
        if (!disabledChars[this[endIndex]]) {
            break;
        }
        endIndex -= 1;
    }
    return this.substring(startIndex, endIndex + 1);
}
console.log(',  .. ; ;; Hi, Pesho ,,,;'.trimChars(' ,;.'));