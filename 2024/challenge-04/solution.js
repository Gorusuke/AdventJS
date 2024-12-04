function createXmasTree(height, ornament) {
  const [TREE_BODY_SYMBOL, TREE_TRUNK_SYMBOL, BACKGROUND_SYMBOL] = [ornament, '#', '_'];

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

const tree = createXmasTree(5, '*')
const tree2 = createXmasTree(3, '+')
const tree3 = createXmasTree(6, '@')

console.log(tree2) // 1
console.log(tree) // 2
console.log(tree3) // 3

/* 1
  ____*____
  ___***___
  __*****__
  _*******_
  *********
  ____#____
  ____#____
*/

/* 2
  __+__
  _+++_
  +++++
  __#__
  __#__
*/

/* 3
  _____@_____
  ____@@@____
  ___@@@@@___
  __@@@@@@@__
  _@@@@@@@@@_
  @@@@@@@@@@@
  _____#_____
  _____#_____
*/