function solve(arr) {
    const sortedArr = arr
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .sort((a, b) => a.length - b.length);
    console.log(sortedArr.join('\n'));
}

solve(['test', 'Deny', 'Omen', 'Default']);