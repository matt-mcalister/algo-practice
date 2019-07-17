function substrCount(n, str){
  return str.split("").reduce((acc, el, idx) => {
    for (var i = idx+1; i < str.length; i++) {
      let substring = str.slice(idx,i+1)
      let set = new Set(substring.split(""))
      if (set.size > 2){
        return acc
      } else {
        if (set.size === 1) {
          acc++
        } else {
          let dict = makeDictionary(substring)
          let letters = Object.keys(dict)
          let pivot = dict[letters[0]].count > dict[letters[1]].count ? dict[letters[1]] : dict[letters[0]]
          if ((dict[letters[0]].count > 1 && dict[letters[1]].count > 1) || (pivot.indexes[0] < Math.floor(substring.length / 2) && substring.length > 2)) {
            return acc
          }
          if (pivot.indexes[0] === Math.floor(substring.length / 2) && substring.length % 2 != 0){
            acc++
          }
        }
      }
    }
    return acc
  }, n)
}

function makeDictionary(str){
  return str.split("").reduce((acc, el, idx) => {
    acc[el] = acc[el] || {
      count: 0,
      indexes: []
    }
    acc[el].count++
    acc[el].indexes.push(idx)
    return acc
  }, {})
}

console.log(substrCount(5, "asasd") === 7)
console.log(substrCount(7, "abcbaba") === 10)
console.log(substrCount(4, "aaaa") === 10)
