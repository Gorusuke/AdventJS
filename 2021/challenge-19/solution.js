function learn(time, courses) {
  if (courses.every(num => num >= time)) return null
  let idxArr = []
  let currentSum = 0
  for (let i = 0; i < courses.length; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      const number = courses[i];
      const otherNumber = courses[j];
      const sumNumbers = number + otherNumber
      if (sumNumbers <= time && currentSum < sumNumbers) {
        currentSum = sumNumbers
        idxArr = [i, j]
      }
    }
  }

  return idxArr
}

console.log(learn(10, [2, 3, 8, 1, 4])) // [0, 2] -> con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0 y 2.
console.log(learn(15, [2, 10, 4, 1])) // [1, 2] -> Los cursos en [1, 2] son 14 horas, es la mejor opción.
console.log(learn(25, [10, 15, 20, 5])) // [0, 1] -> los cursos [0, 1] y [2, 3] completan exactamente con 25 horas pero siempre devolvemos el primero que encontremos
console.log(learn(8, [8, 2, 1])) // [1, 2] -> para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.
console.log(learn(8, [8, 2, 1, 4, 3])) // [3, 4] -> usamos el máximo tiempo disponible así que [3, 4] usa 7 horas y el [1, 2] sólo usaría 3 horas.

console.log(learn(4, [10, 14, 20])) // null -> no nos da tiempo a hacer dos cursos
console.log(learn(5, [5, 5, 5])) // null -> no nos da tiempo a hacer dos cursos

console.log(learn(100, [101, 102, 103, 104, 105, 106, 107, 108, 109])) // null
console.log(learn(5, [2, 2, 2, 2, 2, 2, 3])) // [0, 6]
console.log(learn(10, [1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 5])) // [9, 10]
