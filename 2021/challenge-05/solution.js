function daysToXmas(date) {
  const newDate = new Date(date)
  const christmas = new Date('Dec 25, 2021');
  const daysToXmas = christmas.getTime() - newDate.getTime()
  const daysInMS = 60 * 60 * 24 * 1000;
  return Math.ceil(daysToXmas / daysInMS);
}

const date = new Date('Dec 25, 2021')
const date1 = new Date('Dec 26, 2021')
const date2 = new Date('Dec 31, 2021')
const date3 = new Date('Jan 1, 2022 00:00:01')
const date4 = new Date('Jan 1, 2022 23:59:59')

console.log(daysToXmas(date)) // 0
console.log(daysToXmas(date1)) // -1
console.log(daysToXmas(date2)) // -6
console.log(daysToXmas(date3)) // -7
console.log(daysToXmas(date4)) // -7