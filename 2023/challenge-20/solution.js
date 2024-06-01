function distributeGifts(weights) {
  const averages = []
  for (const [i, row] of weights.entries()) {
    averages[i] = []
    for (const [j, col] of row.entries()) {
      const nextCol = row[j + 1]
      const prevCol = row[j - 1]
      const prevRow = weights[i - 1]?.[j]
      const nextRow = weights[i + 1]?.[j]
      const values = [col, prevCol, nextCol, prevRow, nextRow]

      const total = values.reduce((acc, value) => acc + (value ?? 0), 0)
      const divisor = values.reduce((a, b) => a + +(b != null), 0)
      const average = Math.round(total / divisor)
      averages[i][j] = average
    }
  }
  return averages
}

const input = [
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4]
]

console.log(distributeGifts(input)) // [[5, 3, 3], [6, 5, 3], [7, 6, 4]]
