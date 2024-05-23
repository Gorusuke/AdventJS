function countTime(leds) {
  const zerosArr = leds.join('').split('1')
  zerosArr[0] += zerosArr.pop()
  return zerosArr.sort((a, b) => b.length - a.length)[0].length * 7
}

const leds = [0, 1, 1, 0, 1]

console.log(countTime(leds)) // 7
console.log(countTime([0, 0, 0, 1])) // 21
console.log(countTime([0, 0, 1, 0, 0])) // 28