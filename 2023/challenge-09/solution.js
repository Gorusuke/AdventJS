function adjustLights(lights) {
  const colors = ['🔴', '🟢']
  let res = 0
  for (const [idx, el] of lights.entries()) {
    res += +(colors[idx % 2] === el)
  }
  return Math.min(res, lights.length - res)
}

console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])) // -> 1 (cambias la cuarta luz a 🔴)
console.log(adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])) // -> 1 (cambia la primera luz a verde)
console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])) // -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)
console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])) // -> 0 (ya están alternadas)
console.log(adjustLights(['🔴', '🔴', '🔴'])) // -> 1 (cambias la segunda luz a 🟢)
