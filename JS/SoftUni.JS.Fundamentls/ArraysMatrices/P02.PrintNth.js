/*jshint esversion:6*/
function solve(arr) {
    const nTh = parseInt(arr[arr.length - 1]);
    const myArr = arr.splice(0, arr.length - 1);

    console.log(myArr.filter((e, i) => i % nTh == 0).join('\n'));
}
solve(['one', 'two', 'threw', 'sda', 'wqerf', 2]);