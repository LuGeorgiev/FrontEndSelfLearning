// let str = '8   2  3  223   12  23';

// str.split(/ +/g)
//     .map(Number)
//     .forEach(x => console.log(x)); // speparates spaces or /\s+/g - all spaces \t\n included



let str = '8   2,,  3  22,3 ,,,  12  23';

str.split(/[ ,]+/g) // separets with a lot fo spaces and commas
    .map(Number)
    .forEach(x => console.log(x));