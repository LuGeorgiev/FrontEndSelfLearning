const wheels = 40;


for (let i = 0; i < wheels / 4; i += 1) {
    for (let j = 0; j < wheels / 10; j += 1) {
        for (let k = 0; k < wheels / 3; k += 1) {
            if ((i * 4 + j * 10 + k * 3) === wheels) {
                console.log('cars: ' + i + ', trucks: ' + j + ', trikes:' + k);
            }
            if ((i * 4 + j * 10 + k * 3) > wheels) {
                break;
            }
        }
    }
}