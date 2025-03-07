function fixGiftList(received, expected) {
  const missing = {}
  const extra = {}
  const receivedCount = received.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1
    return acc
  }, {})
  const expectedCount = expected.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1
    return acc
  }, {})
  for (const item in expectedCount) {
    if (receivedCount[item] === undefined) {
      missing[item] = expectedCount[item]
    } else if (receivedCount[item] < expectedCount[item]) {
      missing[item] = expectedCount[item] - receivedCount[item]
    }
  }
  for (const item in receivedCount) {
    if (expectedCount[item] === undefined) {
      extra[item] = receivedCount[item]
    } else if (receivedCount[item] > expectedCount[item]) {
      extra[item] = receivedCount[item] - expectedCount[item]
    }
  }

  return { missing, extra }
}

console.log(fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball']))
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

console.log(fixGiftList(
  ['book', 'train', 'kite', 'train'],
  ['train', 'book', 'kite', 'ball', 'kite']
))
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

console.log(fixGiftList(
  ['bear', 'bear', 'car'],
  ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
))
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

console.log(fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear']))
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }
