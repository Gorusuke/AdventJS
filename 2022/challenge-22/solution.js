function checkStepNumbers(systemNames, stepNumbers) {
  const seen = {}
  const booleans = []
  for (let idx = 0; idx < systemNames.length; idx++) {
    const name = systemNames[idx];
    const number = stepNumbers[idx]
    const count = seen[name] || 0
    if (!seen[name]) seen[name] = number
    else booleans.push(count < number)
  }
  return booleans.every(x => x)
}

const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
const stepNumbers = [1, 33, 10, 2, 44, 20]

console.log(checkStepNumbers(systemNames, stepNumbers)) // => true
console.log(checkStepNumbers(["tree_1", "tree_1", "house"], [2, 1, 10])) // => false
