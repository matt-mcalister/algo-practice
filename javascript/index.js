function createCounter(counter, currentWord){
  counter[currentWord] = counter[currentWord] || 0
  counter[currentWord]++
  return counter
}
function checkMagazine(magazine, note){
  let magazine_count = magazine.reduce(createCounter, {})
  // console.log(magazine_count);
  let not_possible = note.find(word => {
    if (!magazine_count[word] || --magazine_count[word] < 0) {
      return true
    }
    return false
  })
  console.log(!not_possible ? "Yes" : "No")
}

checkMagazine(["attack", "at", "dawn"], ["Attack", "at", "dawn"]) // no
checkMagazine(["give", "me", "one", "grand", "today", "night"], ["give", "one", "grand", "today"]) // yes
checkMagazine(["two", "times", "three", "is", "not", "four"], ["two", "times", "two", "is", "four"])
