/*jshint esversion:6*/

function solve(arr) {
    for (let i = 0; i < arr.length; i += 3) {
        if (insideVolume(arr[i], arr[i + 1], arr[i + 2])) {
            console.log('inside');
        } else {
            console.log('outside');
        }
    }

    function insideVolume(x, y, z) {
        let inXRange = x >= 10 && x <= 50;
        let inYRange = y >= 20 && y <= 80;
        let inZRange = z >= 15 && z <= 50;

        if (inXRange && inYRange && inZRange) {
            return true;
        }

        return false;
    }
}



solve([13.1, 50, 31.5,
    50, 80, 50, -5, 18, 43
]);