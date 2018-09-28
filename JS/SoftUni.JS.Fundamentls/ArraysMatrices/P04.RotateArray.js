/*jshint esversion:6*/
function solve(arr) {
    const rotations = parseInt(arr[arr.length - 1] %
        (arr.length - 1));
    const myArr = arr.splice(0, arr.length - 1);

    for (let i = 0; i < rotations; i++) {
        const element = myArr.pop();
        myArr.unshift(element);

    }
    console.log(myArr.join(' '));
}

solve(['one', 'two', 'threw', 'sda', 'wqerf', 2]);