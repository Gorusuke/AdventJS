function fixLetter(letter) {
  return letter
    .trim()
    .replace(/([.,!])(.*)/g, '$1 $2')
    .replace(/([\s.,!?])(?=\1)/g, '')
    .replace(/\s+([.,!?])/g, '$1')
    .replace(/\b([.?!] \w)|(^\w)/g, str => str.toUpperCase())
    .replace(/^.*\w$/, str => `${str}.`)
    .replace(/santa claus/gi, 'Santa Claus')
}

console.log(fixLetter(` hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `))
console.log(fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"))
