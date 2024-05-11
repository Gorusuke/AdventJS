function wrapGifts(gifts) {
  const arr = []
  let symbol = null
  for (let idx = 0; idx < gifts.length; idx++) {
    const gift = gifts[idx];
    symbol = '*'.repeat(gift.length + 2)
    arr.push(`*${gift}*`)
  }
  arr.unshift(symbol)
  arr.push(symbol)
  return arr
}


console.log(wrapGifts(["📷", "⚽️"]))
console.log(wrapGifts(["🏈🎸", "🎮🧸"]))
console.log(wrapGifts(["📷"]))
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/
