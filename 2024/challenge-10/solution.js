function compile(instructions) {
  const registros = {}
  let index = 0

  while (index < instructions.length) {
    const inst = instructions[index].split(' ')
    switch (inst[0]) {
      case 'MOV':
        let x = inst[1]
        let y = inst[2]

        if (isNaN(x)) {
          x = registros[x] || 0
        }
        registros[y] = isNaN(x) ? 0 : parseInt(x)
        break

      case 'INC':
        const regInc = inst[1]
        registros[regInc] = (registros[regInc] || 0) + 1
        break

      case 'DEC':
        const regDec = inst[1]
        registros[regDec] = (registros[regDec] || 0) - 1
        break

      case 'JMP':
        const regJmp = inst[1]
        const target = parseInt(inst[2])
        if ((registros[regJmp] || 0) === 0) {
          index = target
          continue
        }
        break

      default:
        throw new Error('Instrucción desconocida')
    }

    index++
  }

  return registros['A']
}

const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A' // incrementa el valor del registro 'a'
]

console.log(compile(instructions)) // -> 2

/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 */