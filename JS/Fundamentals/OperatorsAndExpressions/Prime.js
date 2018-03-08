'use strict'

function solve(args) {

    const num = parseInt(args[0]);
    let isPrime = 1;


    if (num < 1) {
        return false;
    } else {
        if (num === 1) {
            return true;
        } else {


            for (let index = 2; index * index <= num; index += 1) {
                if (num % index === 0) {
                    isPrime = 0;
                    break;
                }
            }
            if (isPrime) {
                return true;
            } else {
                return false;
            }
        }
    }
}