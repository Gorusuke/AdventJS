function findMissingNumbers(nums) {
  const missingNumbers = []
  const max = Math.max(...nums)
  const numbers = Array.from({ length: max }, (_, i) => i + 1)
  for (const number of numbers) {
    if (!nums.includes(number)) missingNumbers.push(number)
  }
  return missingNumbers
}

function findMissingNumbers(nums) {
  return Array
    .from({ length: Math.max(...nums) }, (_, i) => i + 1)
    .filter(num => !nums.includes(num))
}

function findMissingNumbers(nums) {
  const missingNumbers = []
  const max = Math.max(...nums)
  for (let i = 1; i <= max; i++) {
    if (!nums.includes(i)) missingNumbers.push(i)
  }
  return missingNumbers
}

console.log(findMissingNumbers([1, 2, 4, 6]))// [3, 5]
console.log(findMissingNumbers([4, 8, 7, 2])) // [1, 3, 5, 6]
console.log(findMissingNumbers([3, 2, 1, 1])) // []
