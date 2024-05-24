function dryNumber(dry, numbers) {
  const numbersArr = Array.from({ length: numbers }).map((_, idx) => idx + 1)
  return numbersArr.filter((x) => String(x).includes(dry))
}

console.log(dryNumber(1, 15)) // [1, 10, 11, 12, 13, 14, 15]
console.log(dryNumber(2, 20)) // [2, 12, 20]
