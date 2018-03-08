// var variable = 4; // global scope variable

// function func() {
//     var variable = 17; //local scope variable
//     console.log(variable);
// }
// console.log(variable);
// func();
// console.log(variable);

(function() {
    //var pesho; // if thsi not exist then PESHO is Global
    console.log(pesho);
    pesho = 9;
    console.log(pesho);

})();
console.log(pesho); //not defind for scope