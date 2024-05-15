function wrapping(gifts) {
  const repeatSymbol = (el) => '*'.repeat(el.length + 2)
  return gifts.map(el =>
    `${repeatSymbol(el)}\n*${el}*\n${repeatSymbol(el)}`)
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
