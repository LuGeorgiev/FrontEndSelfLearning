//console.log('Hello, Lubo'.replace(/l/, '@')); // two slash mmeans REGEXn
//this way replaces first met l

//console.log('Hello, Lubo'.replace(/l/g, '@')); //g - global
//console.log('He12313123llo, L232323ubo'.replace(/[0-9]/g, '@'));

// let regex = /[0-9]/g; //equal to next
// regex = new RegExp("\\[", "g"); // second is teh flag. i fomitted only first symol will chaneg
// console.log('He123131[23llo, L2[[32323ubo'.replace(regex, '@'));

// let telephone = /^\+[0-9]{10}$/; //10 digits from begining to end
// console.log(telephone.test('phone'));
// console.log(telephone.test('42'));
// console.log(telephone.test('56778719289'));
// console.log(telephone.test('+1234567890'));
// console.log(telephone.test('+123456789045'));

let regex = /[0-9]/g; // result updates and can seek th3 next symbols
console.log(regex.exec('182736nmbmjkad qe 78  09 dlk0')); //string do not have to be changed
console.log(regex.exec('182736nmbmjkad qe 78  09 dlk0'));
console.log(regex.exec('182736nmbmjkad qe 78  09 dlk0'));
console.log(regex.exec('182736nmbmjkad qe 78  09 dlk0'));
console.log('abvs565as'.match(regex)); // do not return index but gives all regEx in array