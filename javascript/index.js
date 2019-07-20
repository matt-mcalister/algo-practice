function countSwaps(arr){
  let sorted = [...arr]
  let numSwaps = 0

  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length - 1; j++) {
        if (sorted[j] > sorted[j + 1]) {
          let bigger = sorted[j]
          let smaller = sorted[j+1]
          sorted[j] = smaller
          sorted[j+1] = bigger
          numSwaps++
        }
    }
}
  console.log(`Array is sorted in ${numSwaps} swaps.`)
  console.log(`First Element: ${sorted[0]}`)
  console.log(`Last Element: ${sorted[sorted.length - 1]}`)
  return sorted
}

console.log(countSwaps([6,4,1])) // 3,1,6
console.log(countSwaps([1,2,3])) // 0,1,3
console.log(countSwaps([3,2,1])) // 3,1,3
