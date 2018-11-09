/*jshint esversion:6*/
function solve(array) {
    const unsortedArrs = [];
    for (const inputStr of array) {
        const arr = inputStr
            .substr(1, inputStr.length - 2)
            .split(', ')
            .filter(x => x.length > 0)
            .map(x => Number(x))
            .sort((a, b) => b - a);

        if (unsortedArrs.length == 0) {
            unsortedArrs.push(arr);
        } else {
            let arrIsUnique = true;
            arrIsUnique = isUnique(arr);
            if (arrIsUnique) {
                unsortedArrs.push(arr);
            }
        }
    }

    const sortedArr = unsortedArrs.sort((a, b) => a.length - b.length);
    let result = '';
    for (const sorted of sortedArr) {
        result += '[' + sorted.join(', ') + ']\n';
    }

    function isUnique(arrTocompare) {
        for (const iterator of unsortedArrs) {
            if (iterator.length != arrTocompare.length) {
                continue;
            }
            for (let i = 0; i < iterator.length; i++) {
                if (iterator[i] !== arrTocompare[i]) {
                    continue;
                }
            }
            return false;
        }
        return true;
    }

    //return unsortedArrs;
    return result;
}

const input = ["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"
];
console.log(solve(input));