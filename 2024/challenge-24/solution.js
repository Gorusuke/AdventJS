function isTreesSynchronized(tree1, tree2) {
  if (!tree1 || !tree2 || tree1.value !== tree2.value) {
    return [false, tree1 ? tree1.value : null]
  }

  let stack = [[tree1.left, tree2.right]]
  while (stack.length > 0) {
    const [node1, node2] = stack.pop()
    if (!node1 && !node2) continue
    if (!node1 || !node2 || node1.value !== node2.value) {
      return [false, tree1.value]
    }
    stack.push([node1.left, node2.right])
    stack.push([node1.right, node2.left])
  }
  return [true, tree1.value]
}

const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '⭐' },
}

const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' }
}

const tree4 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

console.log(isTreesSynchronized(tree1, tree2)) // [true, '🎄']
console.log(isTreesSynchronized(tree1, tree3)) // [false, '🎄']
console.log(isTreesSynchronized(tree1, tree4)) // [false, '🎄']
console.log(isTreesSynchronized({ value: '🎅' }, { value: '🧑‍🎄' })) // [false, '🎅']
