function contarOvejas(ovejas) {
  const ovejasFiltered = ovejas.filter(oveja => oveja.name.includes('Na') && oveja.color === 'rojo')
  return ovejasFiltered
}

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' }
];

console.log(contarOvejas(ovejas))