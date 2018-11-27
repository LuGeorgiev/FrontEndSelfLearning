const sum = [1, 2, 3, 4, 4].reduce((acc, cur) => {
    acc += cur;

    return acc;
}, 0);

console.log(sum);