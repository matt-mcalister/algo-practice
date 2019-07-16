function isValid(str){
  let dict = str.split("").reduce((acc,el) => {
    acc[el] = acc[el] || 0
    acc[el]++
    return acc
  }, {})
  let removed = false
  let letters = Object.keys(dict)
  let num = dict[letters[0]]
  for (el of letters) {
    if (dict[el] != num) {
      if (removed){
        return "NO"
      } else {
        removed = true
      }
    }
  }
  return "YES"
}

console.log(isValid("aabbcd"))
console.log(isValid("aabbccddeefghi"))
console.log(isValid("abcdefghhgfedecba"))
