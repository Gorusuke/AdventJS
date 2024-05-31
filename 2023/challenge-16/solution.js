function transformTree(tree) {
  function generateTree(idx) {
    if (tree[idx] == null) return null
    return {
      value: tree[idx],
      left: generateTree(idx * 2 + 1),
      right: generateTree(idx * 2 + 2),
    }
  }
  const result = generateTree(0)
  return result
}


console.log(transformTree([])) // null
console.log(transformTree([1]))
// {
//   "value": 1,
//   "left": null,
//   "right": null
// }
console.log(transformTree([1, 2, 3]))
// {
//   "value": 1,
//   "left": {
//     "value": 2,
//     "left": null,
//     "right": null
//   },
//   "right": {
//     "value": 3,
//     "left": null,
//     "right": null
//   }
// }