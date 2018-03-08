let myArr = [5, 4, 9, -9, 3, 101, 1, 6, 4, 3, 4, 5, 10];

for (let i = 0; i < myArr.length - 1; i++) {
    let min = myArr[i],
        indexMin = i;
    for (let j = i; j < myArr.length; j++) {

        if (myArr[j] < min) {
            min = myArr[j];
            indexMin = j;
        }
    }

    myArr[i] = myArr[indexMin] + myArr[i];
    myArr[indexMin] = myArr[i] - myArr[indexMin];
    myArr[i] = myArr[i] - myArr[indexMin];
}

console.log(myArr);