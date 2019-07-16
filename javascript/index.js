function alternatingCharacters(str){
  let result = str[0]
  for (var i = 1; i < str.length; i++) {
    result = result[result.length-1] != str[i] ? result + str[i] : result
  }
  return str.length - result.length
}

console.log(alternatingCharacters("AAAA"))
console.log(alternatingCharacters("BBBBB"))
console.log(alternatingCharacters("ABABABAB"))
console.log(alternatingCharacters("BABABA"))
console.log(alternatingCharacters("AAABBB"))
