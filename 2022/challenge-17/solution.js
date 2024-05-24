function carryGifts2(gifts, maxWeight) {
  if (gifts.every(x => x.length > maxWeight)) return []
  const result = []
  for (let idx = 1; idx <= gifts.length; idx++) {
    const gift = gifts[idx] || ''
    const prevGift = gifts[idx - 1];
    const sumGiftsLength = gift.length + prevGift.length
    if (sumGiftsLength <= maxWeight) {
      result.push(gift ? `${prevGift} ${gift}` : prevGift)
      idx += 1
    } else {
      result.push(prevGift)
    }
  }
  return result
}

function carryGifts(gifts, maxWeight) {
  if (gifts.every(gift => gift.length > maxWeight)) return [];

  const result = [];
  let currentSack = [];
  let currentWeight = 0;

  for (const gift of gifts) {
    const giftWeight = gift.length;
    if (currentWeight + giftWeight <= maxWeight) {
      currentSack.push(gift);
      currentWeight += giftWeight;
    } else {
      result.push(currentSack.join(' '));
      currentSack = [gift];
      currentWeight = giftWeight;
    }
  }

  if (currentSack.length) result.push(currentSack.join(' '));

  return result;
}

console.log(carryGifts(['game', 'bike', 'book', 'toy'], 10)) // ['game bike', 'book toy']
console.log(carryGifts(['game', 'bike', 'book', 'toy'], 7)) // ['game', 'bike', 'book toy']
console.log(carryGifts(['game', 'bike', 'book', 'toy'], 4)) // ['game', 'bike', 'book', 'toy']
console.log(carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)) // ['toy', 'gamme', 'toy', 'bike']
console.log(carryGifts(['toy', 'toy', 'toy', 'toy'], 2)) // []
