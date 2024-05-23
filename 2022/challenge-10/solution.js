function checkJump(heights) {
  const maxHeightIndex = heights.indexOf(Math.max(...heights))
  return maxHeightIndex > 0
    && maxHeightIndex !== heights.length - 1
    && heights
      .slice(1, maxHeightIndex + 1)
      .every((height, index) => height >= heights[index])
    && heights
      .slice(maxHeightIndex + 1)
      .every((height, index) => height <= heights[index + maxHeightIndex])

}

console.log(checkJump([1, 3, 8, 5, 2])) // true
console.log(checkJump([1, 2, 2, 2, 1])) // true
console.log(checkJump([1, 7, 3, 5])) // false
console.log(checkJump([1, 2, 3, 2, 1, 2, 3])) // false
