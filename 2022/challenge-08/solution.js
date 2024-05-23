function checkPart(part) {
  return [...part].some((_, index) => {
    const word = part.substring(0, index) + part.substring(index + 1)
    return word === [...word].reverse().join('')
  })
}

console.log(checkPart("uwu")) // true
console.log(checkPart("miidim")) // true
console.log(checkPart("midu")) // false
