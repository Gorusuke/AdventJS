function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50]
  const coinsArr = Array.from({ length: coins.length }).map(() => 0)

  for (let idx = coins.length - 1; idx >= 0; idx--) {
    const coin = coins[idx];
    const result = Math.floor(change / coin)
    coinsArr[idx] = result
    change %= coin
  }

  return coinsArr
}


console.log(getCoins(51)) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
console.log(getCoins(3)) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
console.log(getCoins(5)) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
console.log(getCoins(16)) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
console.log(getCoins(100)) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
console.log(getCoins(100)) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
