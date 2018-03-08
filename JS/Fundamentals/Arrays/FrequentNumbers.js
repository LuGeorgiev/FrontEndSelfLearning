const strinArr = ['13', '4', '1', '1', '4',
    '2', '3', '4', '4', '1', '2', '4'
];
let numb = strinArr.map(x => parseInt(x)).sort(function(a, b) { return a - b });

let maxCountIndex = 0,
    maxCoun = 1,
    currentCount = 1;
for (let i = 0; i < numb.length - 1; i++) {
    if (numb[i] !== numb[i + 1] || i === (numb.length - 1)) {
        if (currentCount > maxCoun) {
            maxCoun = currentCount;
            maxCountIndex = i;
        }
        currentCount = 0;
    }
    currentCount++;
}
console.log(numb[maxCountIndex] + ' (' + maxCoun + ' times)');