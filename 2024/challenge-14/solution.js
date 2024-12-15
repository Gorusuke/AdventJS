function minMovesToStables(reindeer, stables) {
  reindeer.sort((a, b) => a - b)
  stables.sort((a, b) => a - b)
  let numbers = 0
  for (let idx = 0; idx < reindeer.length; idx++) {
    const rein = reindeer[idx]
    const stable = stables[idx]
    const value = rein - stable
    numbers += (Math.abs(value))
  }
  return numbers
}

console.log(minMovesToStables([2, 6, 9], [3, 8, 5])) // -> 3
console.log(minMovesToStables([1, 1, 3], [1, 8, 4])) // -> 8
console.log(minMovesToStables([5, 15, 10], [8, 18, 12])) // -> 8
console.log(minMovesToStables([30, 20, 10], [35, 25, 15])) // -> 15
