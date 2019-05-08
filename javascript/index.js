function orderWeight(string) {
  return string.split(" ").sort((a,b) => {
    let sumA = sumDigits(a)
    let sumB = sumDigits(b)

    if (sumA > sumB) {
      return 1
    } else if (sumA == sumB) {
      if (a > b) {
        return 1
      } else {
        return -1
      }
    } else {
      return -1
    }

  }).join(" ")
}

function sumDigits(str){
  return str.split("").reduce((acc,digit) => {
    return acc + parseInt(digit,10)
  }, 0)
}

// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:
  // "100 180 90 56 65 74 68 86 99"
console.log(orderWeight("56 65 74 100 99 68 86 180 90"))
// console.log(sumDigits("99"))
