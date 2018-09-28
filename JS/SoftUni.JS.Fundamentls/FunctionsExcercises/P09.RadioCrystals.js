/*jshint esversion:6*/
function solve(args) {
    let cut = (num) => num * 0.25;
    let lap = (num) => num * 0.8;
    let grid = (num) => num - 20;
    let etch = (num) => num - 2;
    let xRay = (num) => num + 1;
    let transport = (num) => Math.floor(num);
    const targetTchickness = args[0];
    const operations = [transport, cut, lap, grid, etch, xRay];
    const operationsName = ['Transporting and washing', 'Cut', 'Lap',
        'Grind', 'Etch', 'X-ray'
    ];

    for (let i = 1; i < args.length; i++) {
        let currenThickness = args[i];
        console.log(`Processing chunk ${currenThickness} microns`);
        for (let op = 1; op < operations.length; op++) {

            let operationsCount = 0;
            while (true) {
                if (operations[op](currenThickness) < targetTchickness && op <= 3) {
                    break;
                }

                currenThickness = operations[op](currenThickness);
                operationsCount++;

                if (op === 4 &&
                    (currenThickness === targetTchickness - 1 ||
                        currenThickness === targetTchickness)) {
                    break;
                }
                if (op == 5 && currenThickness === targetTchickness) {
                    break;
                }

            }
            if (operationsCount > 0) {
                console.log(`${operationsName[op]} x${operationsCount}`);
                currenThickness = operations[0](currenThickness);
                if (op !== 5) {
                    console.log(operationsName[0]);
                }
            }
            if (currenThickness === targetTchickness) {
                console.log(`Finished crystal ${targetTchickness} microns`);
                break;
            }
        }
    }
}

solve([1000, 4000, 8100]);