function maxGifts(houses) {
  const houseArr = []
  houseArr[0] = houses[0]
  houseArr[1] = Math.max(houses[0], houses[1])

  let idx = 2

  for (const gifts of houses.slice(2)) {
    houseArr[idx] = Math.max(houseArr[idx - 1], houseArr[idx - 2] + gifts)
    idx++
  }

  return houseArr[houses.length - 1]
}

console.log(maxGifts([2, 4, 2])) // 4 (4)
console.log(maxGifts([5, 1, 1, 5])) // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])) // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])) // 103 (3 + 100)
