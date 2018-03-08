const n = 4, //values
    k = 3; //elements

let areDifferent = true,
    arr = [];

//arr initializzation
for (let i = 0; i < k; i++) {
    arr.push(1);
}

do {
    //check for repetitions
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                areDifferent = false;
                break;
            }
        }
    }
    //print if no repetitions
    if (areDifferent) {
        console.log(arr);
    }
    //increse with one the last element
    arr[arr.length - 1] += 1;
    //check for overload and shift one left 
    if (arr[arr.length - 1] > n) {
        for (let i = arr.length - 1; i > 0; i -= 1) {
            if (arr[i] > arr.length) {
                arr[i] = 1;
                arr[i - 1] += 1;
            }
        }

    }
    areDifferent = true;
} while (arr[0] <= n);