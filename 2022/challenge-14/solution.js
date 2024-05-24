function getOptimalPath(path) {
  const pathCopy = path.map(row => [...row]);
  for (let i = pathCopy.length - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      const number = pathCopy[i + 1][j]
      const nextNumber = pathCopy[i + 1][j + 1]
      pathCopy[i][j] += Math.min(number, nextNumber);
      console.log({ pathCopy, min: Math.min(number, nextNumber) })
    }
  }
  return pathCopy[0][0];
}

console.log(getOptimalPath([[0], [2, 3]])) // 2 => 0 -> 2
console.log(getOptimalPath([[0], [3, 4], [9, 8, 1]])) // 5 => 0 -> 4 -> 1
console.log(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])) // 8 => 1 -> 1 -> 5 -> 1


/*
           0
          2 3
______________________________
            0
           3 4
          9 8 1
______________________________
            1
           1 5
          7 5 8
         9 4 1 3
*/