function organizeGifts(gifts) {
  const entries = gifts.match(/\d+[a-zA-Z]/g);
  let result = ''
  for (const entry of entries) {
    const [count, type] = [+entry.slice(0, -1), entry.slice(-1)]
    const pallets = count / 50;
    const boxes = count % 50 / 10;
    const units = count % 10;

    const pallet = `[${type}]`.repeat(pallets);
    const box = `{${type}}`.repeat(boxes);
    const unit = `(${type.repeat(units)})`.repeat(units > 0)

    result += `${pallet}${box}${unit}`
  }

  return result
}

function organizeGifts2(gifts) {
  let organizedGifts = ''
  const groups = gifts.match(/\d+\w/g) ?? []
  for (const group of groups) {
    const total = +group.slice(0, -1)
    const gift = group.slice(-1)
    const pallets = total / 50
    const boxes = (total / 10) % 5
    const bags = total % 10
    const palletGifts = `[${gift}]`.repeat(pallets)
    const boxGifts = `{${gift}}`.repeat(boxes)
    const bagGifts = `(${gift.repeat(bags)})`.repeat(+(bags > 0))
    organizedGifts += `${palletGifts}${boxGifts}${bagGifts}`
  }

  return organizedGifts
}

const result1 = organizeGifts(`76a11b`)
console.log(result1)
