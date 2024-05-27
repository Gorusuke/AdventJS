function maxDistance(movements) {
  let moveR = movements.length - movements.replaceAll('>', '').length
  let moveL = movements.length - movements.replaceAll('<', '').length
  let count = movements.length - (moveR + moveL)
  return Math.abs(moveR - moveL) + count
}

function maxDistance2(movements) {
  let count = 0
  let mL = 0
  let mR = 0
  for (const move of movements) {
    if (move === '>') mR++
    else if (move === '<') mL++
    else count++
  }
  return Math.max(Math.abs(mR - mL) + count, Math.abs(mL - mR) + count);
}

const movements = '>>*<'
const result = maxDistance(movements)

const movements2 = '<<<>'
const result2 = maxDistance(movements2)

const movements3 = '>***>'
const result3 = maxDistance(movements3)

console.log(result) // -> 2
console.log(result2) // -> 2
console.log(result3) // -> 5
