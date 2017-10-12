package primeFactor

import (
  "testing"
  "github.com/stretchr/testify/assert"
)

func TestFind(t *testing.T) {
  primeFactors := Find(198273912)
  result := 1
  for i := 0; i < len(primeFactors); i++ {
    result *= primeFactors[i]
  }

  assert.Equal(t, result, 198273912)
}

func BenchmarkFind(b *testing.B) {
  for n := 0; n < b.N; n++ {
    Find(198273912)
  }
}
