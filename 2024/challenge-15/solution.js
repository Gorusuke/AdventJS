function drawTable(data) {
  const columns = Object.keys(data[0])
  const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)
  const formatRow = row => columns.map((col, index) => {
    return String(row[col]).padEnd(columnWidths[index])
  }).join(' | ')
  const header = columns.map(capitalize)
  const columnWidths = columns.map((col, _) => Math.max(
    capitalize(col).length,
    ...data.map(row => String(row[col]).length)
  ))
  const border = `+${columnWidths.map(width => '-'.repeat(width + 2)).join('+')}+`
  const headerRow = `| ${header.map((col, index) => col.padEnd(columnWidths[index])).join(' | ')} |`
  const rows = data.map(formatRow).map(row => `| ${row} |`).join('\n')
  const table = `${border}\n${headerRow}\n${border}\n${rows}\n${border}`
  return table
}

console.log(drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
]))
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

console.log(drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
]))
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+