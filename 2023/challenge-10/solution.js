function createChristmasTree(ornaments, height) {
  let lenght = (height * (height + 1)) / 2;
  let useOrnaments = ornaments.repeat(lenght);
  let result = '';

  for (let i = 0, idx = 0; i < height; i++) {
    const res = [...useOrnaments.slice(idx, idx + i + 1)].join(' ')
    result += `${' '.repeat(height - i - 1)}${res}\n`;
    idx += i + 1
  }
  return `${result}${'|'.padStart(height, ' ')}\n`;
}

console.log(createChristmasTree("x", 3))
console.log(createChristmasTree("xo", 4))
console.log(createChristmasTree("123", 5))
console.log(createChristmasTree("*@o", 3))
