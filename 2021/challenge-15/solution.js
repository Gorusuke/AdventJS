function checkSledJump(heights) {
  const maxHeight = Math.max(...heights)
  const length = heights.length <= 3 ? maxHeight + 1 : maxHeight
  const before = heights.slice(0, length)
  const after = heights.slice(length, heights.length)

  if ((before.length === heights.length && heights.length > 3) ||
    maxHeight < Math.max(...after, after.length) || maxHeight === heights.length) {
    return false
  }
  return true

}

console.log(checkSledJump([1, 2, 3, 2, 1])) // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])) // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])) // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])) // -> true: sube y baja de forma estricta

console.log(checkSledJump([2, 4, 4, 6, 2])) // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])) // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])) // false: sube y baja y sube... ¡no vale!
console.log(checkSledJump([1, 2, 3, 4, 3, 2, 1, 2, 3])) // false: sube y baja y sube... ¡no vale!
console.log(checkSledJump([0, 0, 0])) // false: todos son iguales