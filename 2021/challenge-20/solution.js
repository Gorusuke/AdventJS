function pangram(letter) {
  let count = 0
  if (letter.includes('ñ')) count++
  const pattern = new RegExp('^[A-Z]+$', 'i');
  const allLetters = [...letter.toLowerCase()].filter(x => pattern.test(x)).join('')
  const seen = {}
  for (let i = 0; i < allLetters.length; i++) {
    const singleLetter = allLetters[i];
    const count = seen[singleLetter] || 0
    seen[singleLetter] = count + 1
  }
  const ALL_LETTERS_COUNT = 27
  return Object.keys(seen).length + count === ALL_LETTERS_COUNT
}

function pangram(letter) {
  const alphabet = 'abcdefghijklmnñopqrstuvwxyz'
  const lowerCaseLetter = letter.toLowerCase()
  return [...alphabet].every(singleLetter => lowerCaseLetter.includes(singleLetter))
}

console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')) // true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')) // true
console.log(pangram('Whisky bueno: ¡excitad mi frágil pequeña vejez!')) // true

console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')) // false
console.log(pangram('De la a a la z, nos faltan letras')) // false
console.log(pangram('¡Qué whisky! ¡Qué whisky! ¡Qué whisky!')) // false
console.log(pangram('!"·$%&/()=?¿^*Ç¨_:;.|@#¢∞¬÷“”≠´‚abcdefghijz')) // false
console.log(pangram('!"·$%&/()=?¿^*Ç¨_:;.|@#¢∞¬÷“”≠´‚abcdefghij')) // false
console.log(pangram('1a2a3a4a5a6a7a8a90a0bcdefghijz_:;,.-ç´`+')) // false
console.log(pangram('abcdefgññññijklmnopqrstuvwxyz')) // false
console.log(pangram('abcdefghijklmnopqrstuvwxyz')) // false
