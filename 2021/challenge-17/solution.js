function countPackages(carriers, carrierID) {
  let total = 0
  const getTotal = (arr, idx) => {
    const carr = arr[idx]
    const [_, num, array] = carriers.find(x => x.includes(carr))
    if (array.length > 0) {
      for (let i = 0; i < array.length; i++) {
        getTotal(array, i)
      }
    }
    total += num
  }

  const [_, number, arr] = carriers.find(x => x.includes(carrierID))
  for (let idx = 0; idx < arr.length; idx++) {
    getTotal(arr, idx)
  }

  return total + number
}

const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
]
const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []]
]
const carriers3 = [['a', 99, ['b']], ['b', 1, ['c']], ['c', 1, ['d']], ['d', 1, []]]

console.log(countPackages(carriers, 'dapelu')) // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9
console.log(countPackages(carriers2, 'camila')) // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15
console.log(countPackages(carriers3, 'a')) // 102
