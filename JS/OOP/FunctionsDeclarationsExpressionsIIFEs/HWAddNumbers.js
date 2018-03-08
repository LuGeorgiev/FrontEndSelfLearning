function solve() {
    return function(numbers) {
        for (let i = 0; i < numbers.length; i++) {
            if (Number.isNaN(Number(numbers[i]))) {
                throw '';
            }

        }
        if (numbers.length === 0) {
            return null;
        }

        return numbers.reduce((x, y) => (+x) + (+y), 0)
    }
}