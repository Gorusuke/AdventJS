function findInAgenda(agenda, phone) {
  const lines = agenda.split('\n')
  const matches = []
  for (let line of lines) {
    if (line.includes(phone)) {
      const nameMatch = line.match(/<([^>]+)>/)
      if (nameMatch) {
        const address = line.split('<')[0].trim()
        const cleanAddress = address.replace(/\+?\d{1,2}-\d{3}-\d{3}-\d{3}/, '').trim()
        matches.push({ name: nameMatch[1], address: cleanAddress })
      }
    }
  }

  if (matches.length !== 1) return null
  return matches[0]
}



const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

console.log(findInAgenda(agenda, '34-600-123-456')) // { name: "Juan Perez", address: "Calle Gran Via 12" }
console.log(findInAgenda(agenda, '600-987')) // { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }
console.log(findInAgenda(agenda, '111')) // null => Explicación: No hay resultados
console.log(findInAgenda(agenda, '1')) // null => Explicación: Demasiados resultados
console.log(findInAgenda(
  `+44-123-456-789 Main Street <Alice Smith>
  +44-987-654-321 Park Avenue <Alice Johnson>`,
  "44-123"
)) // { "name": "Alice Smith", "address": "Main Street" }