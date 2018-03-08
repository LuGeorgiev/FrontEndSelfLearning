function solve(start, end) {

    var i,
        result = [];

    if (start === undefined || end === undefined) {
        throw { message: 'All or some of the parameters are not passed to the function' };
    }

    if (!isFinite(start) || !isFinite(end)) {
        throw { message: 'All or some of the input parameters are not numbers' };
    } else {
        start = +start;
        end = +end;
    }

    for (i = start; i <= end; i += 1) {

        if (isPrime(i)) {
            result.push(i);
        }
    }

    function isPrime(number) {

        var divisor,
            maxDivisor = Math.sqrt(number);

        if (number < 2) {
            return false;
        }

        for (divisor = 2; divisor <= maxDivisor; divisor += 1) {
            if (!(number % divisor)) {
                return false;
            }
        }

        return true;
    }


    return result;
}