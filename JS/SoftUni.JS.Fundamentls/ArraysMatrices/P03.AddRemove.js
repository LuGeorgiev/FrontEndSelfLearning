/*jshint esversion:6*/
function solve(arr) {
    let counter = 0;
    const myArr = [];
    for (let i = 0; i < arr.length; i++) {
        counter++;
        if (arr[i] === 'add') {
            myArr.push(counter);
        } else if (arr[i] === 'remove') {
            myArr.pop();
        }
    }

    if (myArr.length == 0) {
        console.log('Empty')
    } else {
        console.log(myArr.join('\n'));
    }
}
solve(['add', 'add', 'remove', 'add', 'add']);