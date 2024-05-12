function fixFiles(files) {
  const words = new Set()
  let count = 1
  for (let i = 0; i < files.length; i++) {
    const word = files[i];
    const nextWord = files[i + 1]
    if (words.has(word)) {
      if (words.has(`${word}(${count})`)) {
        words.add(`${word}(${count + 1})`)
      }
      words.add(`${word}(${count})`)
      count++
      if (word !== nextWord) {
        count = 1
      }
    } else {
      words.add(word)
      count = 1
    }
  }
  return [...words]
}

function fixFiles2(files) {
  const words = {}
  const wordsArr = []
  for (let i = 0; i < files.length; i++) {
    const word = files[i];
    const nameCount = words[word] || 0
    let name = word
    if (nameCount) name += `(${nameCount})`
    words[word] = nameCount + 1
    wordsArr.push(name)
  }
  return wordsArr
}


const files = ['photo', 'postcard', 'photo', 'photo', 'video']
const files2 = ['file', 'file', 'file', 'game', 'game']
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
const files4 = ['a', 'a', 'aa', 'a', 'a', 'a', 'aa']

console.log(fixFiles(files)) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']
console.log(fixFiles(files2)) // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']
console.log(fixFiles(files3)) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
console.log(fixFiles(files4)) // ['a', 'a(1)', 'aa', 'a(2)', 'a(3), 'a(4)', 'aa(1)']