function compile(code) {
  let count = 0
  let stack = -1

  for (let i = 0; i < code.length; i++) {
    const symbol = code[i]
    if (symbol === '+') count++
    if (symbol === '-') count--
    if (symbol === '*') count *= 2
    if (symbol === '%') stack = i
    if (symbol === '<') {
      if (stack !== -1) {
        i = stack
        stack = -1
      }
    } else if (symbol === '¿') {
      if (count <= 0) i = code.indexOf('?', i)
    }
  }

  return count
}

console.log(compile('++*-')) // 3 => (1 + 1) * 2 - 1 = 3
console.log(compile('++%++<')) // 6 => 1 + 1 + 1 + 1 + 1 + 1 = 6
console.log(compile('++<--')) // 0 => 1 + 1 - 1 - 1 = 0
console.log(compile('++¿+?')) // 3 => 1 + 1 + 1 = 3
console.log(compile('--¿+++?')) // -2 => - 1 - 1 = -2
