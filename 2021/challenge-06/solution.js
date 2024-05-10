function sumPairs(numbers, result) {
  let elements = null;
  numbers.every((value, index) =>
    numbers.every((num, i) =>
      (value + num) === result && index !== i
        ? (elements = [value, num], false)
        : true
    ))
  return elements
}

function sumPairs2(numbers, result) {
  let elements = null;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    for (let j = 0; j < numbers.length; j++) {
      const value = numbers[j]
      const isEqual = (number + value) === result
      if (isEqual && j !== i) {
        elements = [number, value]
        return elements
      }
    }
  }
  return elements
}


console.log(sumPairs([3, 5, 7, 2], 10)) // [3, 7]
console.log(sumPairs([-3, -2, 7, -5], 10)) // null
console.log(sumPairs([2, 2, 3, 1], 4)) // [2, 2]
console.log(sumPairs([6, 7, 1, 2], 8)) // [6, 2]
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6)) // [1, 5]