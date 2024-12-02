function createFrame(names) {
  const maxLength = Math.max(...names.map(x => x.length))
  const outside = '*'.repeat(maxLength + 4)
  const inside = names.map(name => `* ${name}${' '.repeat(maxLength - name.length)} *`)
  return [outside, ...inside, outside].join('\n')
}

console.log(createFrame(['midu', 'madeval', 'educalvolpz'])) // 1
console.log(createFrame(['midu'])) // 2
console.log(createFrame(['a', 'bb', 'ccc'])) // 3
console.log(createFrame(['a', 'bb', 'ccc', 'dddd'])) // 4

// 1
/*
  ***************
  * midu        *
  * madeval     *
  * educalvolpz *
  ***************
*/

// 2
/*
  ********
  * midu *
  ********
*/

// 3
/*
  *******
  * a   *
  * bb  *
  * ccc *
  *******
*/

// 4
/*
  ********
  * a    *
  * bb   *
  * ccc  *
  * dddd *
  ********
*/