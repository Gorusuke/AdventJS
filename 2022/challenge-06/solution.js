function createCube(size) {
  let top = ''
  let bottom = ''

  const repeated = (n, fSymbol, sSymbol) => {
    return `${' '.repeat(size - n)}${fSymbol.repeat(n)}${sSymbol.repeat(size)}\n`
  }

  for (let i = 1; i <= size; i++) {
    top += repeated(i, `/\\`, `_\\`)
    bottom = repeated(i, `\\/`, `_/`) + bottom
  }

  return top + bottom.slice(0, bottom.length - 1)
}

const cubeOfOne = createCube(1)
const cubeOfTwo = createCube(2)
const cube = createCube(3)

console.log(cubeOfOne);
console.log(cubeOfTwo);
console.log(cube);
