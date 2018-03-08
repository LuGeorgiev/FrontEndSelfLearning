//let str = '11x11 1 pesho 11 gosho11';
//console.log(str.match(/[a-z]1*/g)); // * - zero or more repetitions. One letter and letter and some 1

//console.log(str.match(/[a-z]*1*/g)); // one or more letters

//console.log(str.match(/[a-z]+1+/g)); //+ one  or more times
//console.log(str.match(/[a-z]+1?/g)); //? zero or one time

// console.log(str.match(/1+.1*/g));
// console.log(str.match(/1*.1+/g));
// console.log(str.match(/.+/g)); //match EVERYTHING
// console.log(str.match(/\.\+/g)); // matches symbol . or +

//let str = 'pesho vze na dosho qicata i mu gi schupi na gosho v glavata';
//console.log(str.match(/pesho|gosho|v\S*/g)); // all pesho, gosho and words begnning with v
//console.log(str.match(/(P|p)esho/g)); // pesho with small or capital
// console.log(str.match(/[Pp]esho)/g)); // same as previous

let str = '123c   5s67 9c   7rf';
console.log(str.match(/[0-9a-f]+/g)); //matches hexidecimal digits
console.log(str
    .split(/\s+./g)
    .map(x => x.match(/[0-9a-f]+/g))
    .map(x => !!x)); // last made the true or false

// let str = '123c ^  5s- 96^7 9c   7rf';
// console.log(str.match(/[^^]+/g)); // Not to be ^ split with ^