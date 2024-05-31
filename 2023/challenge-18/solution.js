function drawClock(time) {
  const full = '***'
  const open = '* *'
  const start = '*  '
  const end = '  *'
  const spaces = ' '
  const middle = '*'
  const numbers = {
    0: [full, open, open, open, open, open, full],
    1: [end, end, end, end, end, end, end],
    2: [full, end, end, full, start, start, full],
    3: [full, end, end, full, end, end, full],
    4: [open, open, open, full, end, end, end],
    5: [full, start, start, full, end, end, full],
    6: [full, start, start, full, open, open, full],
    7: [full, end, end, end, end, end, end],
    8: [full, open, open, full, open, open, full],
    9: [full, open, open, full, end, end, full],
    ':': [spaces, spaces, middle, spaces, middle, spaces, spaces]
  }
  const result = [...numbers[time[0]]]
  let pos = 0
  const [num1, num2, num3, num4] =
    [numbers[time[1]], numbers[':'], numbers[time[3]], numbers[time[4]]]
  for (let row of result) {
    const str = row + ' ' + num1[pos] + ' ' + num2[pos]
      + ' ' + num3[pos] + ' ' + num4[pos]
    result[pos] = [...str]
    pos++
  }
  return result
}

console.log(drawClock('01:30')) // ⬇️

// [
//   ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
//   ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
//   ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
//   ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', ' ', '*'],
//   ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
//   ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
//   ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*']
// ]
