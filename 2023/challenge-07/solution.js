function drawGift(size, symbol) {
  const endLine = "#\n";
  if (size <= 1) return endLine;

  const hash = "#";
  const length = size * 2 - 1;
  let gift = " ".repeat(length - size) + hash.repeat(size - 1) + endLine;
  const topFace = symbol.repeat(size - 2);

  for (let i = 2; i < length; i++) {
    const prefixSpaces = " ".repeat(Math.max(length - size - i + 1, 0));
    const sideFace = hash + symbol.repeat(size - 2 - Math.abs(size - i));
    const line = prefixSpaces + hash + topFace + sideFace + endLine;
    gift += i !== size
      ? line
      : hash.repeat(size) + symbol.repeat(length - size - 1) + endLine;
  }
  return gift + "#".repeat(size - 1) + "#\n";
}

function drawGift2(size, symbol) {
  const hash = '#'

  let gift = []
  const max = Math.max(0, size - 2)
  const symbolsPlain = symbol.repeat(max)
  gift.push(hash.repeat(size) + symbol.repeat(max) + hash)

  for (let i of [...symbolsPlain].keys()) {
    gift.unshift(
      ' '.repeat(i + 1) +
      hash + symbolsPlain +
      hash + symbol.repeat(size - i - 3) + hash
    )
    gift.push(
      hash + symbolsPlain +
      hash + symbol.repeat(size - i - 3) + hash
    )
  }

  gift.unshift(' '.repeat(size - 1) + hash.repeat(size))
  gift.push(hash.repeat(size))

  gift = [gift, [hash]][+(size === 1)]
  return gift.join('\n') + '\n'
}


console.log(drawGift(4, '+'))
console.log(drawGift(5, '*'))
console.log(drawGift(1, '^'))
