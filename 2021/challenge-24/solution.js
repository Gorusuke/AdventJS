
function checkIsSameTree(treeA, treeB) {
  const treeAString = JSON.stringify(treeA)
  const treeBString = JSON.stringify(treeB)
  const pattern = new RegExp('^[0-9]+$', 'i')
  const numbersTreeA = [...treeAString].filter(x => pattern.test(x))
  const numbersTreeB = [...treeBString].filter(x => pattern.test(x))
  const sumTreeA = numbersTreeA.reduce((acc, curr) => Number(acc) + Number(curr), 0)
  const sumTreeB = numbersTreeB.reduce((acc, curr) => Number(acc) + Number(curr), 0)
  return sumTreeA === sumTreeB
}

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

const tree3 = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

const tree4 = {
  value: 1,
  right: { value: 3, left: null, right: null },
  left: { value: 2, left: null, right: null }
}

console.log(checkIsSameTree(tree, tree)) // true
console.log(checkIsSameTree(tree, tree2)) // false
console.log(checkIsSameTree(tree2, tree2)) // true
console.log(checkIsSameTree(tree3, tree4)) // true
