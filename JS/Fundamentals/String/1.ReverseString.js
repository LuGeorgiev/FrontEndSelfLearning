const test = ['wee', 'sds', 'aasas', 'sasassa'];

// function reverse(arg) {
//     const len = arg.length;
//     let result = '';
//     for (let i = len - 1; i >= 0; i -= 1) {
//         result += arg[i];
//     }
//     return result;
// }

// console.log(reverse(test));

console.log(reverse('sample'));

function reverse(string) {
    var reversed = [];

    for (var ind = string.length - 1; ind >= 0; ind--) {
        reversed.push(string[ind]);
    }

    return reversed.join('');
}