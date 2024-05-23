function selectSleigh(distance, sleighs) {
  const bateria = 20
  if (sleighs.every(x => x.consumption * distance > bateria)) return null

  const persons = []
  for (let i = 0; i < sleighs.length; i++) {
    const { name, consumption } = sleighs[i];
    const maxConsumption = distance * consumption
    if (maxConsumption <= bateria) persons.push(name)
  }
  return persons[persons.length - 1]
}

const sleighs = [
  { name: "Dasher", consumption: 0.3 },
  { name: "Dancer", consumption: 0.5 },
  { name: "Rudolph", consumption: 0.7 },
  { name: "Midu", consumption: 1 }
]
const data = [
  { name: 'pheralb', consumption: 0.3 },
  { name: 'TMChein', consumption: 0.5 }
]

const data2 = [
  { name: 'Pedrosillano', consumption: 1 },
  { name: 'SamarJaffal', consumption: 5 }
]

const data3 = [
  { name: 'Pedrosillano', consumption: 1 },
  { name: 'SamarJaffal', consumption: 2 },
  { name: 'marcospage', consumption: 3 }
]

const data4 = [
  { name: 'Pedrosillano', consumption: 1 },
  { name: 'SamarJaffal', consumption: 2 },
  { name: 'marcospage', consumption: 3 }
]

console.log(selectSleigh(30, sleighs)) // => "Dancer"
console.log(selectSleigh(1, data)) // => "TMChein"
console.log(selectSleigh(10, data2)) // => "Pedrosillano"
console.log(selectSleigh(10, data3)) // => "SamarJaffal"
console.log(selectSleigh(50, data4)) // => null
