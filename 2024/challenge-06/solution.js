function inBox(box) {
  for (let idx = 0; idx < box.length; idx++) {
    const element = box[idx]
    for (let j = 0; j < element.length; j++) {
      const symbol = element[j];
      if (symbol === '*' && (element[j + 1] === '#' || element[j + 1] === ' ') &&
        (element[j - 1] === '#' || element[j - 1] === ' ') && idx !== 0 && idx !== box.length - 1) return true
    }
  }
  return false
}

function inBox(box) {
  const newBox = box.slice(1, box.length - 1)
  const filteredBox = newBox.filter(x => x.includes('*') && (x[x.length - 1] !== '*' || x[0] !== '*'))
  return Boolean(filteredBox.length)
}

function inBox(box) {
  for (let i = 1; i < box.length - 1; i++) {
    const row = box[i]
    if (row.includes('*') && row[0] !== '*' && row[row.length - 1] !== '*') {
      return true
    }
  }
  return false
}

console.log(inBox([
  "###",
  "#*#",
  "###"
])) // ➞ true

console.log(inBox([
  "####",
  "#* #",
  "#  #",
  "####"
])) // ➞ true

console.log(inBox([
  "*####",
  "#   #",
  "#  #*",
  "####"
])) // ➞ false

console.log(inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
])) // ➞ false

console.log(inBox([
  "####",
  "#  #",
  "##*#"
])) // ➞ false