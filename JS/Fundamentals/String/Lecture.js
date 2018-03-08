//Replace
let str = `Hello!, Lubo what is your gender?`;
//console.log(str.replace('Lubo', 'Ivan'));

let startIndex = 0;
while (true) {
    let index = str.toLowerCase().indexOf('l', startIndex);
    if (index < 0) {
        break;
    }
    // console.log(index);
    startIndex = index + 1;
}
//str.substr and sub.string are different in terms of length or end index
console.log(str.substr(str.indexOf('your ') + 5, 6));