// let x = [];
// for (let i = 1; i < 20; i++) {
//     //x[x.length] = i;
//     x.push(i);
// }
// console.log(x);
// for (let i in x) {
//     console.log(`x[${i}]=${x[i]}`);

// }

// 

// let array = [1, 5, 4, 3, 5, 4, 3, 5, 6, 7, 6, 5];

// let lastFound = -1;
// while (true) {
//     let index = array.indexOf(5, lastFound + 1);
//     if (index < 0) {
//         break;
//     }
//     console.log(index);
//     lastFound = index;
// }

[1, 2, 3, 4, 5, 6, 7]
.map(x => x * x)
    .filter(x => x % 2 === 1)
    .forEach(x => console.log(x));


//W advices

function solve(args) {
    let firstArray = args[0].split(' ').map(x => Number(x)); // na edin red preobrazuva; ili NUMBER nakraq

    let numArray = [];
    // for (let str of firstArray) {
    //     numArray.push(+str);
    // }
}