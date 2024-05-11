function getMinJump(obstacles) {
  let minJump = 1

  for (let i = 1; i <= obstacles.length; i++) {
    const jump = minJump * i
    if (obstacles.includes(jump)) {
      ++minJump
      i = 0
    }
  }
  return minJump
}

const obstacles = [5, 3, 6, 7, 9] // -> [3, 5, 6, 7, 9] 
const obstacles2 = [2, 4, 6, 8, 10]
const obstacles3 = [14, 10, 8, 2, 3, 6]
const obstacles4 = [2, 5, 8, 11, 14, 3, 6, 9]

console.log(getMinJump(obstacles)) // -> 4
console.log(getMinJump(obstacles2)) // -> 7
console.log(getMinJump(obstacles3)) // -> 9
console.log(getMinJump(obstacles4)) // -> 10
console.log(getMinJump([9, 5, 1])) // -> 2
console.log(getMinJump([3, 7, 5])) // -> 2
console.log(getMinJump([1, 2, 3, 5])) // -> 4

// S es salto, X es obstáculo 
/* Así quedaría la representación: **obstacles**
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S-------
*/

/* Así quedaría la representación: **obstacles2**
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  X  .  X  .  X  .  X  .  X 
S--------------------S---------
*/


/* Así quedaría la representación: **obstacles3**
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
.  .  X  X  .  .  X  .  X  .  X   .   .   .   X  
S--------------------------S--------------------
*/


/* Así quedaría la representación: **obstacles4**
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14
.  .  X  X  .  X  X  .  X  X  .   X   .   .   X  
S-----------------------------S----------------
*/
