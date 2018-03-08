const applyFunctionOverall = new Function('f', ' return f(11)'); // decaration via constructor DO NOT USE
function printMsg(msg) { console.log('youre message is: ' + msg); } // funct declaratrion
//Declaration is 'compiled' befoer teh program starts and func can be used even BEFORE declaration

var printMsgs = function(msg) { console.log(msg); }; // this is function expression
//this is anonymous function and the variable can be used as function

//console.log(printMsg.toString()); // returns teh full funcion description

function maxElement() {
    let args = [];
    for (let i = 0; i < arguments.length; i += 1) {
        args.push(arguments[i]);
    }
    //return args.reduce((x, y) => Math.max(x, y));
    return Math.max.apply(this, args);
}
//console.log(maxElement(2, 3, 4, 5, 789, 21, -4));

[1, 2, 4, 56, 7].map(x => x * 2)
    .forEach((x, i, arr) => console.log(x + ' ' + arr[i - 1])); // DO NOT USE this here