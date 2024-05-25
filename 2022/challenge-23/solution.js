function executeCommands(commands) {
  const registers = Array(8).fill(0)
  const actions = {
    MOV: (fst, snd, command) => {
      const moveValue = command.slice(4).startsWith('V') ? registers[fst] : fst
      registers[snd] = moveValue
    },
    ADD: (fst, snd) => (registers[fst] = (registers[fst] + registers[snd]) % 256),
    DEC: number => (registers[number] = (registers[number] - 1 + 256) % 256),
    INC: number => (registers[number] = (registers[number] + 1) % 256),
  }

  for (let i = 0; i < commands.length; i++) {
    const command = commands[i]
    const [commandName, args] = command.split(' ')
    const values = args.split(',').map(v => +v.replace(/V/g, ''))
    if (commandName === 'JMP' && registers[0] !== 0) i = values[0] - 1
    if (commandName !== 'JMP') actions[commandName](...values, command)
  }

  return registers
}

console.log(executeCommands([
  'MOV 5,V00',  // V00 es 5
  'MOV 10,V01', // V01 es 10
  'DEC V00',    // V00 ahora es 4
  'ADD V00,V01' // V00 = V00 + V01 = 14
])) // Output: [14, 10, 0, 0, 0, 0, 0]

console.log(executeCommands([
  'MOV 255,V00', // V00 es 255
  'INC V00',     // V00 es 256, desborda a 0
  'DEC V01',     // V01 es -1, desborda a 255
  'DEC V01'      // V01 es 254
])) // Output: [0, 254, 0, 0, 0, 0, 0]

console.log(executeCommands([
  'MOV 10,V00', // V00 es 10
  'DEC V00',    // decrementa V00 en 1  <---┐
  'INC V01',    // incrementa V01 en 1      |
  'JMP 1',      // bucle hasta que V00 sea 0 ----┘
  'INC V06'     // incrementa V06 en 1
])) // Output: [ 0, 10, 0, 0, 0, 0, 1, 0 ]