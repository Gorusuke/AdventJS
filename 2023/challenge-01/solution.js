function findFirstRepeated(gifts) {
  return gifts.find((el, idx) => gifts.indexOf(el) != idx) ?? -1
}

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)

console.log(firstRepeatedId) // 3
console.log(firstRepeatedId2) // -1
console.log(firstRepeatedId3) // 5
