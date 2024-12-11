function decodeFilename(filename) {
  const result = filename.split('.')
  const extension = result.at(-2)
  const name = result[0].split('_').slice(1).join('_')
  return `${name}.${extension}`
}

console.log(decodeFilename('2023122512345678_sleighDesign.png.grinchwa')) // ➞ "sleighDesign.png"
console.log(decodeFilename('42_chimney_dimensions.pdf.hack2023')) // ➞ "chimney_dimensions.pdf"
console.log(decodeFilename('987654321_elf-roster.csv.tempfile')) // ➞ "elf-roster.csv"
