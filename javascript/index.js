// Given string and int size, find if the string is unique up to the length specified in size.
function uniqChars(str){
  let dict = {}
  for (var i = 0; i < str.length; i++) {
    dict[str[i]] = dict[str[i]] || 0
    dict[str[i]]++
    if (dict[str[i]] > 1){
      return false
    }
  }
  return true
}


console.log(uniqChars("abcd10jk") === true)
console.log(uniqChars("hutg9mnd!nk9") === false)
