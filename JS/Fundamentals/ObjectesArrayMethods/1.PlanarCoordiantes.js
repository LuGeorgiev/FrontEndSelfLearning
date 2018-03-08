const coordinates = ['7', '7', '2', '2',
    '5', '6', '2', '2',
    '95', '-14.5', '0', '-0.123'
];

const len = coordinates.length;
let linesArr = [];

for (let i = 0; i < len; i += 4) {
    linesArr.push({
        x1: parseFloat(coordinates[i]),
        y1: parseFloat(coordinates[i + 1]),
        x2: parseFloat(coordinates[i + 2]),
        y2: parseFloat(coordinates[i + 3])
    });
};

let lineLenght = [];
for (let i = 0; i < linesArr.length; i++) {
    const oX = linesArr[i].x1 - linesArr[i].x2,
        oY = linesArr[i].y1 - linesArr[i].y2,
        lineLen = Math.sqrt(oX * oX + oY * oY);
    console.log(lineLen.toFixed(2));
    lineLenght.push(lineLen);
};
const aPlusB = lineLenght[0] + lineLenght[1] > lineLenght[2],
    aPlusC = lineLenght[0] + lineLenght[2] > lineLenght[1],
    cPlusB = lineLenght[2] + lineLenght[1] > lineLenght[0];

if (aPlusB && aPlusC && cPlusB) {
    console.log('Triangle can be built');
} else {
    console.log('Triangle can not be built');
}