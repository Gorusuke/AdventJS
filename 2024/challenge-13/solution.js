function isRobotBack(moves) {
  const start = [0, 0]
  const seen = {
    R: 1,
    L: -1,
    U: 1,
    D: -1
  }
  const end = [0, 0]
  for (let i = 0; i < moves.length; i++) {
    const move = moves[i]
    let value = seen[move]
    if (move === '*' && (moves[i + 1] === 'R' || moves[i + 1] === 'L')) {
      value = seen[moves[i + 1]] * 2
      end[0] += value
    } else if (move === '*' && (moves[i + 1] === 'U' || moves[i + 1] === 'D')) {
      value = seen[moves[i + 1]] * 2
      end[1] += value
    } else if (move === '!' && (moves[i + 1] === 'R' || moves[i + 1] === 'L')) {
      if (moves[i + 1] === 'R') value = seen['L']
      else value = seen['R']
      end[0] += value
    } else if (move === '!' && (moves[i + 1] === 'U' || moves[i + 1] === 'D')) {
      if (moves[i + 1] === 'U') value = seen['D']
      else value = seen['U']
      end[1] += value
    } else if (move === '?') {
      if ((moves[i - 1] === moves[i + 1] || moves[i + 1] === moves[0])) {
        if (moves[i - 2] === '!') {
          value = value = seen[moves[i + 1]]
          if (moves[i - 1] === 'R' || moves[i - 1] === 'L') end[0] += value
          if (moves[i - 1] === 'U' || moves[i - 1] === 'D') end[1] += value
        } else {
          end[0] += 0
          end[1] += 0
        }
      } else {
        if (moves[i + 1] === 'D' && moves.includes('!U')) {
          end[0] += 0
          end[1] += 0
        } else {
          value = seen[moves[i + 1]]
          if (moves[i - 1] === 'R' || moves[i - 1] === 'L') end[0] += value
          if (moves[i - 1] === 'U' || moves[i - 1] === 'D') end[1] += value
        }
      }
    }

    if ((move === 'R' || move === 'L') && (moves[i - 1] !== '*' && moves[i - 1] !== '!' && moves[i - 1] !== '?')) {
      end[0] += value
    } else if ((move === 'U' || move === 'D') && (moves[i - 1] !== '*' && moves[i - 1] !== '!' && moves[i - 1] !== '?')) {
      end[1] += value
    }
  }

  return JSON.stringify(start) === JSON.stringify(end) || end
}


function isRobotBack(moves) {
  let x = 0, y = 0
  let seen = { 'R': 1, 'L': -1, 'U': 1, 'D': -1 }
  let performedMoves = []
  let lastMove = null

  for (let i = 0; i < moves.length; i++) {
    const move = moves[i]
    if (move === '*') {
      const nextMove = moves[i + 1]
      if (nextMove === 'R' || nextMove === 'L') {
        x += seen[nextMove] * 2
      } else if (nextMove === 'U' || nextMove === 'D') {
        y += seen[nextMove] * 2
      }
      performedMoves.push(nextMove)
      i++
    } else if (move === '!') {
      const nextMove = moves[i + 1]
      if (nextMove === 'R' || nextMove === 'L') {
        x += seen[nextMove === 'R' ? 'L' : 'R']
        lastMove = nextMove === 'R' ? 'L' : 'R'
      } else if (nextMove === 'U' || nextMove === 'D') {
        y += seen[nextMove === 'U' ? 'D' : 'U']
        lastMove = nextMove === 'U' ? 'D' : 'U'
      }
      performedMoves.push(lastMove)
      i++
    } else if (move === '?') {
      const nextMove = moves[i + 1]
      if (!performedMoves.includes(nextMove)) {
        if (nextMove === 'R' || nextMove === 'L') {
          x += seen[nextMove]
        } else if (nextMove === 'U' || nextMove === 'D') {
          y += seen[nextMove]
        }
        performedMoves.push(nextMove)
      }
      i++
    } else if (move === 'R' || move === 'L') {
      x += seen[move]
      performedMoves.push(move)
    } else if (move === 'U' || move === 'D') {
      y += seen[move]
      performedMoves.push(move)
    }
  }
  return x === 0 && y === 0 ? true : [x, y]
}

console.log(isRobotBack('R'))     // [1, 0]
console.log(isRobotBack('RL'))    // true
console.log(isRobotBack('RLUD'))  // true
console.log(isRobotBack('*RU'))   // [2, 1]
console.log(isRobotBack('R*U'))   // [1, 2]
console.log(isRobotBack('LLL!R')) // [-4, 0]
console.log(isRobotBack('R?R'))   // [1, 0]
console.log(isRobotBack('U?D'))   // true
console.log(isRobotBack('R!L'))   // [2,0]
console.log(isRobotBack('U!D'))   // [0,2]
console.log(isRobotBack('R?L'))   // true
console.log(isRobotBack('U?U'))   // [0,1]
console.log(isRobotBack('*U?U'))  // [0,2]
console.log(isRobotBack('R!U?U')) // [1,0]
console.log(isRobotBack('U?D?U')) // true
console.log(isRobotBack('UU!U?D')) // [0,1]