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
const input = +process.argv[2],
      start  = process.hrtime(), //start time
      result = getAllFactors(input), //get fractions
      end    = process.hrtime(start), //end time
      time   = ((end[0] * 1e9 + end[1]) / 1e6).toFixed(3); //Algo exec time in ms

console.log(
`Input: ${input}
Factors: ${result}
Match input: ${result.reduce((a, b) => a * b) === input}
Algo execution time: ${time}ms`
);

console.timeEnd("App execution time");
