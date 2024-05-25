function canExit(maze) {
  let start = null
  let end = null

  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[0].length; j++) {
      if (maze[i][j] === 'S') start = [i, j]
      else if (maze[i][j] === 'E') end = [i, j]
    }
  }

  function dfs(x, y, visited) {
    const isEqualX = x < 0 || x >= maze.length
    const isEqualY = y < 0 || y >= maze[0].length
    if (isEqualX || isEqualY || maze[x][y] === 'W') return false
    if (x === end[0] && y === end[1]) return true
    visited.add(`${x},${y}`)
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]

    for (const [dx, dy] of directions) {
      const nx = x + dx
      const ny = y + dy
      if (!visited.has(`${nx},${ny}`) && dfs(nx, ny, visited)) return true
    }

    visited.delete(`${x},${y}`)
    return false
  }

  const visited = new Set()
  return dfs(start[0], start[1], visited)
}

console.log(canExit([
  [' ', ' ', 'W', ' ', 'S'],
  [' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
])) // -> true

console.log(canExit([
  ['E', ' ', ' ', ' ', 'S']
])) // true

console.log(canExit([
  ['E', ' ', 'W', ' ', 'S'],
  [' ', ' ', ' ', ' ', ' '],
])) // true

console.log(canExit([
  ['E', ' ', 'W', ' ', 'S'],
  [' ', ' ', ' ', ' ', ' '],
  ['W', 'W', 'W', 'W', 'W']
])) // true

console.log(canExit([
  ['E', 'S', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'W', 'W']
])) // true

console.log(canExit([
  [' ', ' ', 'W', 'W', 'S'],
  [' ', ' ', ' ', 'W', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'E']
])) // -> false

console.log(canExit([
  [' ', ' ', 'W', 'W', 'S'],
  [' ', ' ', ' ', 'W', ' '],
  [' ', ' ', ' ', 'W', ' '],
  ['W', 'W', ' ', ' ', 'W'],
  [' ', ' ', ' ', ' ', 'E']
])) // -> false

console.log(canExit([
  ['E', ' ', 'W', ' ', 'S']
])) // false

console.log(canExit([
  ['E', ' ', 'W', ' ', 'S'],
  [' ', ' ', 'W', ' ', ' '],
  ['W', 'W', 'W', 'W', 'W']
])) // false
