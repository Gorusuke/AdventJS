function organizeChristmasDinner(dishes) {
  const set = {};
  for (const [dish, ...rest] of dishes) {
    for (const ingredient of rest) {
      if (set[ingredient]) set[ingredient].push(dish);
      else set[ingredient] = [dish];
    }
  }
  const result = []
  for (const [el, arr] of Object.entries(set)) {
    if (arr.length > 1) result.push([el, ...arr.flat().sort()])
  }
  return result.sort();
}

const dishes = [
  ["christmas turkey", "turkey", "sauce", "herbs"],
  ["cake", "flour", "sugar", "egg"],
  ["hot chocolate", "chocolate", "milk", "sugar"],
  ["pizza", "sauce", "tomato", "cheese", "ham"],
]

console.log(organizeChristmasDinner(dishes))
// [
//   ["sauce", "christmas turkey", "pizza"],
//   ["sugar", "cake", "hot chocolate"]
// ]
