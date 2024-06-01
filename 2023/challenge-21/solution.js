function findBalancedSegment(message) {
  let result = []
  let count = 0
  for (let i = 0; i < message.length; i++) {
    let value = message[i]
    let internalCount = 1
    for (let j = i + 1; j < message.length; j++) {
      value += message[j]
      internalCount++
      if (internalCount / value === 2 && internalCount > count) {
        result = [i, j]
        count = internalCount
      }
    }
  }
  return result
}

console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])) // [2, 5]
console.log(findBalancedSegment([1, 1, 0])) // [1, 2]
console.log(findBalancedSegment([1, 1, 1])) // no hay segmentos equilibrados: []
