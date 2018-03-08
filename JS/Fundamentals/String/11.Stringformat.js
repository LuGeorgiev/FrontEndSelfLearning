const frmt = '{0}, {1}, {0} text {2}';

function stringFormat() {
    let args = arguments,
        outputString = args[0],
        placeholder;

    for (let i = 1; i < args.length; i += 1) {
        placeholder = '{' + (i - 1) + '}';

        while (outputString.indexOf(placeholder) > -1) {
            outputString = outputString.replace(placeholder, args[i])
        }
    }
    return outputString;
}
console.log(stringFormat(frmt, 1, 'Pesho', 'Gosho'));