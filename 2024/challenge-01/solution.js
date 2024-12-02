function prepareGifts(gifts) {
  const orderGifts = [...new Set(gifts)]
  return orderGifts.sort((a, b) => a - b)
}

const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)

const gifts2 = [6, 5, 5, 5, 5]
const preparedGifts2 = prepareGifts(gifts2)

const gifts3 = []
const preparedGifts3 = prepareGifts(gifts3)

console.log(preparedGifts1) // [1, 2, 3, 4, 5]
console.log(preparedGifts2) // [5, 6]
console.log(preparedGifts3) // []