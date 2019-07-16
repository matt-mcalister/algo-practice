function makeDictionary(acc, el){
  acc[el] = acc[el] || 0
  acc[el]++
  return acc
}

function makeAnagram(stringA, stringB) {
  let dictA = stringA.split("").reduce(makeDictionary, {})
  let dictB = stringB.split("").reduce(makeDictionary, {})
  function compare(acc, el){
    let compA = {...dictA}
    let compB = {...dictB}
    compA[el] = compA[el] || 0
    compB[el] = compB[el] || 0
    return acc + Math.abs(compA[el] - compB[el])
  }
  return Object.keys({...dictA, ...dictB}).reduce(compare, 0)
}

console.log(makeAnagram("cde","abc") === 4)
console.log(makeAnagram("fcrxzwscanmligyxyvym","jxwtrhvujlmrpdoqbisbwhmgpmeoke") === 30)
console.log(makeAnagram("showman","woman") === 2)
