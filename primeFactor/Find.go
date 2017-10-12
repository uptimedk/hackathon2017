package primeFactor

import (
  "math"
)

func dividable(n int, i int) (bool) {
  return n % i == 0
}

func setLimit(number int) int {
  return int(math.Sqrt(float64(number)))
}

func lookForPrimeFactor(number int, i int, limit int, found []int) []int {
  if dividable(number, i) {
    return lookForPrimeFactor(number / i, i, limit, append(found, i))
  }

  if (i <= limit || limit == 0) {
    if limit == 0 { limit = setLimit(number) }
    return lookForPrimeFactor(number, i + 1, limit, found)
  }

  if number > 2 {
    found = append(found, number)
  }

  return found
}

func Find(number int) []int {
  return lookForPrimeFactor(number, 2, 0, []int{})
}
