function listGifts(letter) {
  const allWords = letter.trim().split(' ').filter(words => !words.includes('_'))
  const repeats = {}
  for (const word of allWords) {
    repeats[word] = (repeats[word] || 0) + 1
  }

  return repeats
}

const carta = 'bici coche balón _playstation bici coche peluche'
console.log(listGifts(carta))