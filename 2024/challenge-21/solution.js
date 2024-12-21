function treeHeight(tree) {
  if (!tree) return 0
  return 1 + Math.max(treeHeight(tree.left), treeHeight(tree.right))
}

const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null
    },
    right: {
      value: '🎅',
      left: null,
      right: null
    }
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null
    }
  }
}

console.log(treeHeight(tree)) // Devuelve: 3
// Representación gráfica del árbol:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌
// tiene 3 niveles de profundidad
