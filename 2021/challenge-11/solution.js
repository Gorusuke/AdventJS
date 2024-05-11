function shouldBuyFidelity(times) {
  const entrance = 12
  const fidelity = 250
  const percentage = 75 / 100

  let costWithFidelity = fidelity
  let costWithOutFidelity = 0

  for (let i = 1; i <= times; i++) {
    costWithOutFidelity = entrance * times;
    costWithFidelity += entrance * Math.pow(percentage, i)
  }

  return costWithOutFidelity > costWithFidelity
}


console.log(shouldBuyFidelity(1)) // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100)) // true -> Mejor comprar tarjeta fidelidad
console.log(shouldBuyFidelity(48)) // true
