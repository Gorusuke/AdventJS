function getStaircasePaths(steps, maxJump) {
  const result = [];
  function generateCombinations(currentCombination, remainingTotal) {
    if (remainingTotal === 0) {
      result.push([...currentCombination]);
      return;
    }
    for (let i = 1; i <= maxJump && i <= remainingTotal; i++) {
      currentCombination.push(i);
      generateCombinations(currentCombination, remainingTotal - i);
      currentCombination.pop();
    }
  }
  generateCombinations([], steps);
  return result;
}

console.log(getStaircasePaths(2, 1)) // [[1, 1]]
console.log(getStaircasePaths(3, 3)) // [[1, 1, 1], [1, 2], [2, 1], [3]]
console.log(getStaircasePaths(5, 1)) // [[1, 1, 1, 1, 1]]
console.log(getStaircasePaths(5, 2))
/*
[
  [1, 1, 1, 1, 1],
  [1, 1, 1, 2],
  [1, 1, 2, 1],
  [1, 2, 1, 1],
  [1, 2, 2],
  [2, 1, 1, 1],
  [2, 1, 2],
  [2, 2, 1],
]
*/