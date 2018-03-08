const expression = ')(a+b))'

function correctBrackets(arg) {
    let len = arg.length,
        bracketsCount = 0;
    for (let index = 0; index < arg.length; index += 1) {
        if (arg[index] === "(") {
            bracketsCount++;
        } else if (arg[index] === ")") {
            bracketsCount--;
        }
        if (bracketsCount < 0) {
            return false;
        }
    }
    if (bracketsCount > 0) {
        return false;
    }
    return true;
}

console.log(correctBrackets(expression));