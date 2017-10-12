'use strict';
console.time("App execution time");

// === MAIN === //
function getAllFactors(num){
    const factors = [];

    for (let i = 2; i <= num; i++){
        while (num % i === 0) {
            factors.push(i);
            num /= i;
        }
    }

    return factors;
}



// === RESULT === //
const input = +process.argv[2];

const start  = process.hrtime(); //start time
const result = getAllFactors(input); //get fractions
const end    = process.hrtime(start); //end time
const time   = ((end[0] * 1e9 + end[1]) / 1e6).toFixed(3); //Algo exec time in ms

console.log("Input:", input);
console.log("Factors:", result);
console.log("Match input:", result.reduce((a, b) => a * b) === input);
console.log("Algo execution time:", time + "ms");

console.timeEnd("App execution time");
