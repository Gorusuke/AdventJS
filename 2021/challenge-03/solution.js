export default function isValid(letter) {
  const hasEmptyParentheses = letter.replace(/\s+/g, '').includes('()');

  const parenthesesSequence = [...letter.replace(/[^()]/g, '')];
  const expectCloseStack = [];
  const hasBalancedParentheses =
    parenthesesSequence.every(b => (b === '(' ? expectCloseStack.push(b) : expectCloseStack.pop())) &&
    !expectCloseStack.length;

  const parenthesesBlocks = letter.match(/(?:\()[^()]*?(?:\))/g);
  const hasWrongCharacters = parenthesesBlocks
    ? parenthesesBlocks.some(b => b.includes('{') || b.includes('['))
    : false;

  return hasBalancedParentheses && !hasEmptyParentheses && !hasWrongCharacters;
}

const str = "bici coche (balón) bici coche peluche" // -> ✅
const str1 = "(muñeca) consola bici" // ✅
const str2 = "bici coche (balón bici coche" // -> ❌
const str3 = "peluche (bici [coche) bici coche balón" // -> ❌
const str4 = "(peluche {) bici" // -> ❌
const str5 = "() bici" // ❌

console.log(isValid(str));
console.log(isValid(str1));
console.log(isValid(str2));
console.log(isValid(str3));
console.log(isValid(str4));
console.log(isValid(str5));