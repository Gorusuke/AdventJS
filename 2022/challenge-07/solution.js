function getGiftsToRefill(a1, a2, a3) {
  const newArray = [...a1, ...a2, ...a3];
  const cleanArray = [...new Set([...newArray])];
  return cleanArray.filter(el => a1.includes(el) + a2.includes(el) + a3.includes(el) === 1);
}

const a1 = ['bici', 'coche', 'bici', 'bici']
const a2 = ['coche', 'bici', 'muñeca', 'coche']
const a3 = ['bici', 'pc', 'pc']

console.log(getGiftsToRefill(a1, a2, a3)) // ['muñeca', 'pc']
