function drawRace(indices, length) {
  const string = []
  for (let i = 0; i < indices.length; i++) {
    const index = indices[i];
    string.push('~'
      .repeat(length)
      .split('')
      .with(index, index !== 0 ? 'r' : '~')
      .concat(` /${i + 1}`)
      .reverse()
      .concat(' '.repeat(indices.length - (i + 1)))
      .reverse()
      .join('')
    )
  }
  return string.join('\n')
}


console.log(drawRace([0, 5, -3], 10)) // 1
console.log(drawRace([2, -1, 0, 5], 8)) //2
console.log(drawRace([3, 7, -2], 12)) // 3

/* 1
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

/* 2
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

/* 3
  ~~~r~~~~~~~~ /1
 ~~~~~~~~r~~~ /2
~~~~~~~~~r~~ /3
*/