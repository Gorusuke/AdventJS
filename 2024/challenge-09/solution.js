function moveTrain(board, mov) {
  let trainPositions = []
  let headX = -1, headY = -1

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === '@') {
        headX = i
        headY = j
        trainPositions.push([i, j])
      } else if (board[i][j] === 'o') {
        trainPositions.push([i, j])
      }
    }
  }

  console.log(trainPositions)
  const moveMap = {
    'L': [0, -1],
    'R': [0, 1],
    'U': [-1, 0],
    'D': [1, 0]
  }

  const [moveX, moveY] = moveMap[mov]
  const newHeadX = headX + moveX
  const newHeadY = headY + moveY

  if (newHeadX < 0 || newHeadX >= board.length || newHeadY < 0 || newHeadY >= board[0].length) {
    return 'crash'
  }

  for (let pos of trainPositions) {
    if (pos[0] === newHeadX && pos[1] === newHeadY) {
      return 'crash'
    }
  }

  if (board[newHeadX][newHeadY] === '*') {
    trainPositions.unshift([newHeadX, newHeadY])
    return 'eat'
  }

  trainPositions.unshift([newHeadX, newHeadY])
  trainPositions.pop()

  return 'none'
}

const board = [
  '·····',
  '*····',
  '@····',
  'o····',
  'o····'
]

console.log(moveTrain(board, 'U'))
// ➞ 'eat'
// Porque el tren se mueve hacia arriba y encuentra una fruta mágica

// console.log(moveTrain(board, 'D'))
// ➞ 'crash'
// El tren se mueve hacia abajo y la cabeza se choca consigo mismo

// console.log(moveTrain(board, 'L'))
// ➞ 'crash'
// El tren se mueve a la izquierda y se choca contra la pared

// console.log(moveTrain(board, 'R'))
// ➞ 'none'
// El tren se mueve hacia derecha y hay un espacio vacío en la derecha