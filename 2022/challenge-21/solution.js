function printTable(gifts) {
  const quantityTitle = 'Quantity'
  const gift = 'Gift'
  const giftLength = Math.max(...gifts.map(x => x.name.length), gift.length)
  const quantityLength = Math.max(...gifts.map(x => x.quantity.toString().length), quantityTitle.length)
  let maxLengthGift = 0
  let maxLengthQuantity = 0
  let test = ''

  for (let i = 0; i < gifts.length; i++) {
    const { name, quantity } = gifts[i];
    maxLengthGift = Math.max(maxLengthGift, name.length, gift.length)
    maxLengthQuantity = Math.max(maxLengthQuantity, quantity.toString().length, quantityTitle.length)
    console.log({ a: quantityLength - quantity.toString().length });
    test += `| ${name}${' '.repeat(giftLength - name.length)} | ${quantity}${' '.repeat(quantityLength - quantity.toString().length)} |` + '\n'
  }
  const repeatSymbol = (symbol) => symbol.repeat(maxLengthGift + maxLengthQuantity + 7)
  const dashes = (str, length) => '-'.repeat(str.length + length)
  const titleLength = Math.abs(maxLengthGift - gift.length)
  const anotherTitleLength = Math.abs(maxLengthQuantity - quantityTitle.length)

  const table = repeatSymbol('+') + '\n' +
    `| ${gift}${' '.repeat(titleLength)} | ${quantityTitle}${' '.repeat(anotherTitleLength)} |` + '\n' +
    `| ${dashes(gift, titleLength)} | ${dashes(quantityTitle, anotherTitleLength)} |` + '\n' +
    `${test}` + repeatSymbol('*')

  return table
}

console.log(printTable([
  { name: 'Game', quantity: 2 },
  { name: 'Bike', quantity: 1 },
  { name: 'Book', quantity: 3 }
]))

// +++++++++++++++++++
// | Gift | Quantity |
// | ---- | -------- |
// | Game | 2        |
// | Bike | 1        |
// | Book | 3        |
// *******************

console.log(printTable([
  { name: 'PlayStation 5', quantity: 9234782374892 },
  { name: 'Book Learn Web Dev', quantity: 23531 }
]))

// ++++++++++++++++++++++++++++++++++++++
// | Gift               | Quantity      |
// | ------------------ | ------------- |
// | PlayStation 5      | 9234782374892 |
// | Book Learn Web Dev | 23531         |
// **************************************
