/*jshint esversion:6*/

function solve(grad) {
    let gradNormalized = grad % 400;
    gradNormalized = gradNormalized * 360 / 400;
    if (gradNormalized < 0) {
        gradNormalized = 360 + gradNormalized;
    }
    console.log(gradNormalized);
}

solve(100);
solve(400);
solve(850);
solve(-50);