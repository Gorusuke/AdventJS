function fixPackages(packages) {
  const replacer = /\(([^()]+)\)/
  const callback = (_, innerContent) => innerContent.split('').reverse().join('')
  while (packages.includes('(')) {
    packages = packages.replace(replacer, callback)
  }
  return packages
}

console.log(fixPackages('a(cb)de')) // ➞ "abcde"
console.log(fixPackages('a(bc(def)g)h')) // ➞ "agdefcbh"
console.log(fixPackages('abc(def(gh)i)jk')) // ➞ "abcighfedjk"
console.log(fixPackages('a(b(c))e')) // ➞ "acbe"