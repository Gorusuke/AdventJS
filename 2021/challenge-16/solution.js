function decodeNumbers(symbols) {
  let number = 0
  const store = {
    '.': 1,
    ',': 5,
    ':': 10,
    ';': 50,
    '!': 100,
  }

  for (let index = 0; index < symbols.length; index++) {
    const symbol = symbols[index];
    const nextSymbol = symbols[index + 1];
    const value = store[symbol]
    const nextValue = store[nextSymbol]
    if (value < nextValue) number += -value
    else number += value
  }
  return number
}

console.log(decodeNumbers('...')) // 3
console.log(decodeNumbers('.,')) // 4 (5 - 1)
console.log(decodeNumbers(',.')) // 6 (5 + 1)
console.log(decodeNumbers(',...')) // 8 (5 + 3)
console.log(decodeNumbers('.;!')) // 49 (-1 -50 + 100)
console.log(decodeNumbers('.;')) // 49 (50 - 1)
console.log(decodeNumbers('!!!')) // 300
console.log(decodeNumbers(';!')) // 50
console.log(decodeNumbers(';.W')) // NaN
console.log(decodeNumbers('.........!')) // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
console.log(decodeNumbers('..,')) // 5 (-1 + 1 + 5)
console.log(decodeNumbers('..,!')) // 95 (1 - 1 - 5 + 100)