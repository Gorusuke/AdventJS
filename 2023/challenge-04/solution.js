function decode(message) {
  do {
    const open = message.lastIndexOf('(');
    const close = message.indexOf(')', open);
    const change = [...message.slice(open + 1, close)].reverse().join("");
    message = message.slice(0, open) + change + message.slice(close + 1);
  } while (message.includes("("))
  return message;
}

function decode2(message) {
  const regexp = /\(([^()]*)\)/g
  const replacer = (_, r) => r.split('').reverse().join('')
  return message.replace(regexp, replacer).replace(regexp, replacer)
}

console.log(decode('hola (odnum)')) // hola mundo
console.log(decode('(olleh) (dlrow)!')) // hello world!
console.log(decode('sa(u(cla)atn)s')) // santaclaus
