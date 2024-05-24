function decorateTree(base) {
  const options = {
    PP: 'P',
    PR: 'B',
    PB: 'R',
    RR: 'R',
    RP: 'B',
    RB: 'P',
    BB: 'B',
    BP: 'R',
    BR: 'P',
  }
  const newBase = base.split(' ').slice(1)
  const result = newBase.reduce(tree => {
    const topTree = tree[0].split(' ')
    const top = topTree.slice(0, -1).reduce((acc, letter, i) => {
      const key = (letter + topTree[i + 1])
      return acc.concat(options[key])
    }, [])
    return [top.join(' '), ...tree]
  }, [base])
  return result
}

console.log(decorateTree('B B'))
console.log(decorateTree('B P R P'))
console.log(decorateTree('B B P R P R R'))
console.log(decorateTree('R R P R R'))

// ['B', 'B B']

// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

// [
//   "B",
//   "R P",
//   "B P P",
//   "P R B R",
//   "P P B B P",
//   "B R B B B R",
//   "B B P R P R R"
// ]

// [
//   "R",
//   "R R",
//   "P B P",
//   "R B B R",
//   "R R P R R"
// ]
