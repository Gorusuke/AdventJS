function getMaxGifts(giftsCities, maxGifts, maxCities) {
  return giftsCities
    .sort((a, b) => b - a)
    .reduce((acc, gift) => {
      const total = acc + gift
      if (maxCities === 0 || total > maxGifts || total === maxGifts - 1) return acc
      maxCities--
      return total
    }, 0)
}

const giftsCities = [12, 3, 11, 5, 7]
const maxGifts = 20
const maxCities = 3

// console.log(getMaxGifts(giftsCities, maxGifts, maxCities)) // 20
// la suma más alta de regalos a repartir
// visitando un máximo de 3 ciudades
// es de 20: [12, 3, 5]

// la suma más alta sería [12, 7, 11]
// pero excede el límite de 20 regalos y tendría
// que dejar alguna ciudad a medias.

console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3)) // 20 [3, 5, 7, 11, 12]
console.log(getMaxGifts([50], 15, 1)) // 0
console.log(getMaxGifts([50], 100, 1)) // 50
console.log(getMaxGifts([50, 70], 100, 1)) // 70
console.log(getMaxGifts([50, 70, 30], 100, 2)) // 100
console.log(getMaxGifts([50, 70, 30], 100, 3)) // 100
console.log(getMaxGifts([50, 70, 30], 100, 4)) // 100