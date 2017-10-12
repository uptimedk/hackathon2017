const {
  pushAndDividedByPrime,
  incrementPrime,
  pushNumber,
  step2,
  getMathStr,
  primeFactorsStr,
  primeFactors
} = require('./prime-factors')

const testNumber = 198273912
const getInitObj = () => ({ number: testNumber, prime: 2, factors: [] })

test('pushAndDividedByPrime', () => {
  const o = getInitObj()
  expect(o.factors.length).toBe(0)
  expect(o.number).toBe(testNumber)
  pushAndDividedByPrime(o)
  expect(o.factors.length).toBe(1)
  expect(o.number).toBe(testNumber / o.prime)
})

test('incrementPrime', () => {
  const o = getInitObj()
  expect(o.prime).toBe(2)
  incrementPrime(o)
  expect(o.prime).toBe(3)
})

test('pushNumber', () => {
  const o = getInitObj()
  expect(o.factors.length).toBe(0)
  pushNumber(o)
  expect(o.factors.length).toBe(1)
})

test('step2', () => {
  const o = getInitObj()
  const result = step2(o)
  expect(result.factors).toEqual([2, 2, 2, 3, 61, 135433])
})

test('getMathStr', () => {
  const o = getInitObj()
  o.factors = [1, 2, 3, 4]
  expect(getMathStr(o)).toBe('1 * 2 * 3 * 4')
})

test('primeFactorsStr', () => {
  expect(primeFactorsStr(testNumber))
    .toBe('198273912 = 2 * 2 * 2 * 3 * 61 * 135433')
})

test('primeFactors', () => {
  expect(primeFactors(testNumber))
    .toEqual([2, 2, 2, 3, 61, 135433])
})
