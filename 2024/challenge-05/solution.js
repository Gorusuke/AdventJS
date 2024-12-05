function organizeShoes(shoes) {
  const sizes = {}
  const result = []

  shoes.forEach(shoe => {
    if (!sizes[shoe.size]) {
      sizes[shoe.size] = { I: 0, R: 0 }
    }
    sizes[shoe.size][shoe.type]++
  })

  Object.entries(sizes).forEach(([key, value]) => {
    const pairs = Math.min(value.I, value.R)
    for (let i = 0; i < pairs; i++) {
      result.push(Number(key))
    }
  })

  return result
}

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

console.log(organizeShoes(shoes)) // [38, 42]
console.log(organizeShoes(shoes2)) // [38, 38]
console.log(organizeShoes(shoes3)) // [42]