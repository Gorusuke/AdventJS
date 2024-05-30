function checkIsValidCopy(original, copy) {
  let index = 0
  let isCopyValid = true
  const symbolSequence = '#+:. '

  for (const letter of original) {
    const copyLetter = copy[index++]
    const symbolIndex = symbolSequence.indexOf(letter)

    const symbols = [
      symbolSequence,
      symbolSequence.slice(symbolIndex, symbolSequence.length),
    ][+(symbolIndex !== -1)]

    const hasLetter = `${letter}${letter.toLowerCase()}${symbols}`.includes(
      copyLetter,
    )

    const isEqualToSpace = letter === ' '
    const isCopyEqualToSpace = copyLetter === ' '

    const isCharValid = [hasLetter, isCopyEqualToSpace][
      +isEqualToSpace
    ]

    isCopyValid = [isCopyValid, isCharValid][+isCopyValid]
  }

  return isCopyValid
}

console.log(checkIsValidCopy('Santa Claus is coming', 'sa#ta Cl#us i+ comin#')) // true
console.log(checkIsValidCopy('s#nta Cla#s is coming', 'p#nt: cla#s #s c+min#'))// false (por la p inicial)
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')) // true)
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')) // false (hay un # donde no debería)
