function getIndexsForPalindrome(word) {
  const index = word.split('').findIndex((letter, i) => letter != word.at(-i - 1))
  const index2 = word.length - 1 - index
  if (index == -1) return []
  for (let i = index + 1; i < index2; i++) {
    const arr = word.split('')
    arr[index] = word.at(i)
    arr[i] = word.at(index)
    if (arr.every((l, i) => l == arr.at(arr.length - 1 - i))) return [index, i]

    arr[index] = word.at(index)
    arr[i] = word.at(index2)
    arr[index2] = word.at(i)
    if (arr.every((l, i) => l == arr.at(arr.length - 1 - i))) return [index + i, index2]
  }
  return null
}

console.log(getIndexsForPalindrome('anna')) // []
console.log(getIndexsForPalindrome('abab')) // [0, 1]
console.log(getIndexsForPalindrome('abac')) // null
console.log(getIndexsForPalindrome('aaaaaaaa')) // []
console.log(getIndexsForPalindrome('aaababa')) // [1, 3]
console.log(getIndexsForPalindrome('caababa')) // null
