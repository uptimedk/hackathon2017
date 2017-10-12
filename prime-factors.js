const pushAndDividedByPrime = (i) => {
  i.factors.push(i.prime)
  i.number /= i.prime
  return i
}

const incrementPrime = (i) => {
  i.prime += 1
  return i
}

const pushNumber = (i) => {
  i.factors.push(i.number)
  return i
}

const step1 = i =>
  (i.number > i.prime * i.prime ? step2(i) : pushNumber(i))

const step2 = i =>
  (i.number % i.prime === 0 ? step1(pushAndDividedByPrime(i)) : step1(incrementPrime(i)))

const getMathStr = i =>
  i.factors.join(' * ')

const primeFactorsStr = number =>
  `${number} = ${getMathStr(step2({ number, prime: 2, factors: [] }))}`

const primeFactors = number =>
  step2({ number, prime: 2, factors: []}).factors

module.exports = {
  pushAndDividedByPrime,
  incrementPrime,
  pushNumber,
  step1,
  step2,
  getMathStr,
  primeFactorsStr,
  primeFactors
}
