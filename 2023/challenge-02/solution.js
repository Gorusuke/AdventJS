function manufacture(gifts, materials) {
  const callback = gift => [...gift].every(l => materials.includes(l))
  return gifts.filter(callback);
}

// function manufacture(gifts, materials) {
//   const re = new RegExp("^[" + materials + "]+$")
//   return gifts.filter(gift => gift.match(re))
// }

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

const gifts1 = ['juego', 'puzzle']
const materials1 = 'jlepuz'

const gifts2 = ['libro', 'ps5']
const materials2 = 'psli'

console.log(manufacture(gifts, materials)) // ["tren", "oso"]
console.log(manufacture(gifts1, materials1)) // ["puzzle"]
console.log(manufacture(gifts2, materials2)) // []
