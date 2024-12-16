function removeSnow(s) {
  for (let idx = 0; idx < s.length; idx++) {
    const actualLetter = s[idx]
    const nextLetter = s[idx + 1]
    if (actualLetter === nextLetter) {
      s = s.split(actualLetter + nextLetter).join('')
      return removeSnow(s)
    }
  }
  return s;
}

function removeSnow(s) {
  let idx = 0;
  while (idx < s.length) {
    const actualLetter = s[idx];
    const nextLetter = s[idx + 1];
    if (actualLetter === nextLetter) {
      s = s.split(actualLetter + nextLetter).join('');
      idx = 0
    } else idx++
  }
  return s;
}

console.log(removeSnow('zxxzoz')) // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

console.log(removeSnow('abcdd')) // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

console.log(removeSnow('zzz')) // -> "z"
// 1. Eliminamos "zz", quedando "z"

console.log(removeSnow('a')) // -> "a"
// No hay montículos repetidos

console.log(removeSnow("azxxzy")) // -> ay
// 1. Eliminamos "xx", quedando "azzy"
// 2. Eliminamos "zz", quedando "ay"