function getCompleted(part, total) {
  const [hourPart, minPart, secPart] = part.split(':')
  const [hourTotal, minTotal, secTotal] = total.split(':')

  const partSecondsNumber = (+hourPart * 60 + +minPart) * 60 + +secPart
  const totalSecondsNumber = (+hourTotal * 60 + +minTotal) * 60 + +secTotal

  let gcd = partSecondsNumber
  let b = totalSecondsNumber

  while (b) {
    const aux = b
    b = gcd % b
    gcd = aux
  }

  return `${partSecondsNumber / gcd}/${totalSecondsNumber / gcd}`
}

console.log(getCompleted('01:00:00', '03:00:00')) // '1/3'
console.log(getCompleted('02:00:00', '04:00:00')) // '1/2'
console.log(getCompleted('01:00:00', '01:00:00')) // '1/1'
console.log(getCompleted('00:10:00', '01:00:00')) // '1/6'
console.log(getCompleted('01:10:10', '03:30:30')) // '1/3'
console.log(getCompleted('03:30:30', '05:50:50')) // '3/5'
console.log(getCompleted('02:20:20', '03:30:30')) // '2/3'
