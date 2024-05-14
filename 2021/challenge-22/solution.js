function countDecorations(bigTree) {
  const bigTreeString = JSON.stringify(bigTree)
  const pattern = new RegExp('^[0-9]+$', 'i')
  const allNumbers = [...bigTreeString].filter(x => pattern.test(x))
  return allNumbers.reduce((acc, curr) => Number(acc) + Number(curr), 0)
}


const tree = {
  value: 1,
  left: {
    value: 2,
    left: null,
    right: null
  },
  right: {
    value: 3,
    left: null,
    right: null
  }
}

/* Gráficamente sería así:
    1
  /   \
 2     3

1 + 2 + 3 = 6
*/

const bigTree = {
  value: 1,
  left: {
    value: 5,
    left: {
      value: 7,
      left: {
        value: 3,
        left: null,
        right: null
      },
      right: null
    },
    right: null
  },
  right: {
    value: 6,
    left: {
      value: 5,
      left: null,
      right: null
    },
    right: {
      value: 1,
      left: null,
      right: null
    }
  }
}

/*
        1
      /   \
     5     6
    /     / \
   7     5   1
  /
 3
*/

console.log(countDecorations(tree)) // 6
console.log(countDecorations(bigTree)) // 28