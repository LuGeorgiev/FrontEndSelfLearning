const n = 4, //1...n values
    k = 3; // k elements

let arr = new Array();

for (let i = 0; i < k; i++) {
    arr.push(1);

}

do {
    //print subset
    console.log(arr);


    //increse with one the last element
    arr[arr.length - 1] += 1;
    //check for overload and shift one left 
    if (arr[arr.length - 1] > n) {
        for (let i = arr.length - 1; i > 0; i -= 1) {
            if (arr[i] > n) {
                arr[i] = 1;
                arr[i - 1] += 1;
            }
        }
    }
} while (arr[0] <= n);