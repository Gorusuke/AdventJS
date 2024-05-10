function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = -1;

  if (prices.every(price => price === minPrice)) {
    return maxProfit;
  }

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else {
      let profit = prices[i] - minPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }

  return maxProfit;
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
const pricesEth = [10, 20, 30, 40, 50, 60, 70]
const pricesDoge = [18, 15, 12, 11, 9, 7]
const pricesAda = [3, 3, 3, 3, 3]

console.log(maxProfit(pricesBtc)) // -> 16 (compra a 18, vende a 34)
console.log(maxProfit(pricesEth)) // -> 60 (compra a 10, vende a 70)
console.log(maxProfit(pricesDoge)) // -> -1 (no hay ganancia posible)
console.log(maxProfit(pricesAda)) // -> -1 (no hay ganancia posible)
