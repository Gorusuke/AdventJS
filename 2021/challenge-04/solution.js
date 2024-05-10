function createXmasTree(height) {
  const [TREE_BODY_SYMBOL, TREE_TRUNK_SYMBOL, BACKGROUND_SYMBOL] = ['*', '#', '_'];

  const treeBody = Array.from({ length: height }, (_, index) =>
    TREE_BODY_SYMBOL.repeat(2 * index + 1)
      .padStart(index + height, BACKGROUND_SYMBOL)
      .padEnd(height * 2 - 1, BACKGROUND_SYMBOL)
      .concat('\n')
  ).join('');

  const treeTrunkHeight = 2;
  const treeTrunk = TREE_TRUNK_SYMBOL.padStart(height, BACKGROUND_SYMBOL)
    .padEnd(height * 2 - 1, BACKGROUND_SYMBOL)
    .concat('\n')
    .repeat(treeTrunkHeight);
  return treeBody.concat(treeTrunk).trim();
}

console.log(createXmasTree(1));
console.log(createXmasTree(2));
console.log(createXmasTree(3));
console.log(createXmasTree(4));
console.log(createXmasTree(20));