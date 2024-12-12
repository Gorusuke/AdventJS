function calculatePrice(ornaments) {
  const seen = {
    '*': 1,
    'o': 5,
    '^': 10,
    '#': 50,
    '@': 100
  }
  const values = [seen[ornaments[0]]]
  for (let idx = 1; idx < ornaments.length; idx++) {
    const icon = ornaments[idx]
    let value = seen[icon]
    if (!value) return undefined
    if (value > values[idx - 1]) {
      values[idx - 1] = -values[idx - 1]
    }
    values.push(value)
  }
  return values.reduce((a, b) => a + b, 0)
}

function calculatePrice(ornaments) {
  const prices = {
    '*': 1,
    'o': 5,
    '^': 10,
    '#': 50,
    '@': 100,
  }

  let price = 0
  let prevPrice = 0
  for (const ornament of ornaments) {
    const currentPrice = prices[ornament]
    if (!currentPrice) return undefined
    price += currentPrice
    if (currentPrice > prevPrice) {
      price -= 2 * prevPrice
    }
    prevPrice = currentPrice
  }
  return price
}

console.log(calculatePrice('***'))  // 3   (1 + 1 + 1)
console.log(calculatePrice('*o'))   // 4   (5 - 1)
console.log(calculatePrice('o*'))   // 6   (5 + 1)
console.log(calculatePrice('*o*'))  // 5  (-1 + 5 + 1)
console.log(calculatePrice('**o*')) // 6  (1 - 1 + 5 + 1)
console.log(calculatePrice('o***')) // 8   (5 + 3)
console.log(calculatePrice('*o@'))  // 94  (-5 - 1 + 100)
console.log(calculatePrice('*#'))   // 49  (-1 + 50)
console.log(calculatePrice('@@@'))  // 300 (100 + 100 + 100)
console.log(calculatePrice('#@'))   // 50  (-50 + 100)
console.log(calculatePrice('#@Z'))  // undefined (Z es desconocido)
