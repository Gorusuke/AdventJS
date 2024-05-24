function getFilesToBackup(lastBackup, changes) {
  const getNumbers = changes
    .filter(([_, time]) => time > lastBackup)
    .map(([number]) => number)
    .sort((a, b) => a - b)
  return [...new Set(getNumbers)]
}

const lastBackup = 1546300800
const lastBackup2 = 1546300600
const changes = [
  [3, 1546301100],
  [2, 1546300800],
  [1, 1546300800],
  [1, 1546300900],
  [1, 1546301000]
]

console.log(getFilesToBackup(lastBackup, changes)) // => [ 1, 3 ]
console.log(getFilesToBackup(lastBackup2, changes)) // => [ 1, 2, 3 ]
