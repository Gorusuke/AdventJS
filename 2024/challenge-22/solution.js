function generateGiftSets(gifts) {
  const result = []

  function backtrack(start, currentCombo) {
    if (currentCombo.length > 0) {
      result.push([...currentCombo])
    }

    for (let i = start; i < gifts.length; i++) {
      currentCombo.push(gifts[i])
      backtrack(i + 1, currentCombo)
      currentCombo.pop()
    }
  }
  backtrack(0, [])
  return result.sort((a, b) => a.length - b.length)
}


console.log(generateGiftSets(['car', 'doll', 'puzzle']))
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

console.log(generateGiftSets(['ball']))
// [
//   ['ball']
// ]

console.log(generateGiftSets(['game', 'pc']))
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
