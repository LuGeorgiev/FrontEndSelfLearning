/*jshint esversion:6*/
function solve(arr) {
    const delimeter = arr[arr.length - 1];
    const myArr = arr.splice(0, arr.length - 1);

    console.log(myArr.join(delimeter));
}
solve(['one', 'two', 'threw', '-']);