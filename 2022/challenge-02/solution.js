function countHours(year, holidays) {
  let extraHours = 0
  for (let idx = 0; idx < holidays.length; idx++) {
    const el = holidays[idx];
    const date = new Date(`${el}/${year}`)
    if (![0, 6].includes(date.getDay())) extraHours += 2
  }
  return extraHours;
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

console.log(countHours(year, holidays)) // 2 días -> 4 horas extra en el año