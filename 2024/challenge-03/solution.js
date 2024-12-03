function organizeInventory(inventory) {
  return inventory.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = {}
    }

    if (acc[item.category][item.name]) {
      acc[item.category][item.name] += item.quantity
    } else {
      acc[item.category][item.name] = item.quantity
    }

    return acc
  }, {})
}

function organizeInventory(inventory) {
  const groupByCategory = Object.groupBy(inventory, ({ category }) => category)
  const organized = {}

  Object.keys(groupByCategory).forEach(category => {
    organized[category] = groupByCategory[category].reduce((acc, item) => {
      if (acc[item.name]) acc[item.name] += item.quantity
      else acc[item.name] = item.quantity
      return acc
    }, {})
  })

  return organized
}

const inventary = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

const inventary2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' }
]

console.log(organizeInventory(inventary)) // 1
console.log(organizeInventory(inventary2)) // 2

// 1
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

// 2
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }