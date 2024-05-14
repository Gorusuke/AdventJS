function canReconfigure(from, to) {
  if (from.length !== to.length) return false

  const fromMap = new Map()
  const toMap = new Map()
  for (let i = 0; i < from.length; i++) {
    if (fromMap.has(from[i]) && fromMap.get(from[i]) !== to[i]) return false
    if (toMap.has(to[i]) && toMap.get(to[i]) !== from[i]) return false

    fromMap.set(from[i], to[i])
    toMap.set(to[i], from[i])
  }

  return true
}

const from = 'BAL'
const to = 'LIB'
console.log(canReconfigure(from, to)) // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

const from2 = 'XBOX'
const to2 = 'XOBX'
console.log(canReconfigure(from2, to2)) // true

const from3 = 'MMM'
const to3 = 'MID'
console.log(canReconfigure(from3, to3)) // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

const from4 = 'AA'
const to4 = 'MID'
console.log(canReconfigure(from4, to4)) // false -> no tiene la misma longitud

const from5 = 'CON'
const to5 = 'JUU'
console.log(canReconfigure(from5, to5)) // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

const from6 = 'XBOX'
const to6 = 'XXBO'
console.log(canReconfigure(from6, to6)) // false
/* no se puede hacer la transformación:
X -> X
B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra) 
O -> B
X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)
*/
