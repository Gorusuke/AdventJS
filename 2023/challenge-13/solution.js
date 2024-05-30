function calculateTime(deliveries) {
  const hoursInSecs = 3600
  const simbols = ['', '-']
  let seconds = -(7 * hoursInSecs)

  for (const delivery of deliveries) {
    const [hours, mins, secs] = delivery.split(':')
    seconds += +(hours * hoursInSecs) + +(mins * 60) + +secs
  }

  const sign = simbols[+(seconds < 0)]

  seconds = Math.abs(seconds)

  const hours = Math.floor(seconds / hoursInSecs)
    .toString()
    .padStart(2, '0')

  seconds %= hoursInSecs

  const minutes = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0')

  seconds %= 60

  const secs = seconds.toString().padStart(2, '0')

  return `${sign}${hours}:${minutes}:${secs}`
}

console.log(calculateTime(['00:10:00', '01:00:00', '03:30:00']))// '-02:20:00'
console.log(calculateTime(['02:00:00', '05:00:00', '00:30:00'])) // '00:30:00'
console.log(calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])) // '-05:29:00'
