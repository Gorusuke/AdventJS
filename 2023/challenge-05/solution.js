function cyberReindeer(road, time) {
  const close = `.${road.slice(1)}`;
  const open = close.replaceAll('|', '*');
  const roadByType = [close, open]
  const result = [road];

  for (let i = 1, pos = 0; i < time; i++) {
    const next = roadByType[+(i >= 5)]
    pos += +(next[pos + 1] !== '|')
    result.push(`${next.slice(0, pos)}S${next.slice(pos + 1)}`);
  }
  return result;
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo
console.log(cyberReindeer(road, time))
