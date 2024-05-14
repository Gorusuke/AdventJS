function canMouseEat(direction, game) {
  const symbol = '*'
  const mouseSymbol = 'm'
  const flatGame = game.flat()
  const hasSymbol = flatGame.includes(symbol)
  const roomLength = game[0].length
  let mouseIndex = null
  let symbolIndexArr = []
  if (hasSymbol) {
    for (let idx = 0; idx < flatGame.length; idx++) {
      const space = flatGame[idx];
      symbolIndexArr = space === symbol ? [...symbolIndexArr, idx] : [...symbolIndexArr]
      mouseIndex = space === mouseSymbol ? idx : mouseIndex
    }
    if (mouseIndex) {
      if (direction === 'up') mouseIndex = mouseIndex - roomLength
      if (direction === 'down') mouseIndex = mouseIndex + roomLength
      if (direction === 'left') mouseIndex = mouseIndex - 1
      if (direction === 'right') mouseIndex = mouseIndex + 1
    }

    return symbolIndexArr.includes(mouseIndex)
  }
  return hasSymbol;
}

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

const room3 = [
  [" ", " ", " "],
  [" ", "m", " "],
  [" ", " ", " "]
]

const room4 = [['*', 'm']]

const room5 = [
  ["*", "*", "*"],
  ["*", "m", "*"],
  ["*", "*", "*"]
]

console.log(canMouseEat('up', room))   // false
console.log(canMouseEat('down', room))   // true
console.log(canMouseEat('right', room))   // false
console.log(canMouseEat('left', room))   // false

console.log(canMouseEat('up', room2))   // false
console.log(canMouseEat('down', room2))   // false
console.log(canMouseEat('right', room2))   // true
console.log(canMouseEat('left', room2))   // false

console.log(canMouseEat('up', room3)) // false
console.log(canMouseEat('down', room3)) // false
console.log(canMouseEat('right', room3)) // false
console.log(canMouseEat('left', room3)) // false

console.log(canMouseEat('up', room4)) // false
console.log(canMouseEat('down', room4)) // false
console.log(canMouseEat('right', room4)) // false
console.log(canMouseEat('left', room4)) // true

console.log(canMouseEat('up', room5)) // true
console.log(canMouseEat('down', room5)) // true
console.log(canMouseEat('right', room5)) // true
console.log(canMouseEat('left', room5)) // true