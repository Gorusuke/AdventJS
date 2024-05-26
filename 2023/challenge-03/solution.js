function findNaughtyStep(original, modified) {
  const oLen = original.length
  const mLen = modified.length
  const combo = {
    [oLen]: [original, modified],
    [mLen]: [modified, original],
  };
  const [max, min] = combo[Math.max(oLen, mLen)];
  return [...max].find((el, idx) => el !== min[idx]) ?? '';
}

function findNaughtyStep2(original, modified) {
  const [max, min] = original.length > modified.length
    ? [original, modified]
    : [modified, original]
  const r = (el, idx) => el !== min[idx]
  return [...max].find(r) ?? ''
}

const original = 'abcd'
const modified = 'abcde'

const original1 = 'stepfor'
const modified1 = 'stepor'

const original2 = 'abcde'
const modified2 = 'abcde'

console.log(findNaughtyStep(original, modified)) // 'e'
console.log(findNaughtyStep(original1, modified1)) // 'f'
console.log(findNaughtyStep(original2, modified2)) // ''
