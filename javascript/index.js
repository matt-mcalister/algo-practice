function countSwaps(arr){
  let numSwaps = 0
  console.log(`Array is sorted in ${numSwaps} swaps.`)
  console.log(`First Element: ${arr[0]}`)
  console.log(`Last Element: ${arr[arr.length - 1]}`)
}

console.log(countSwaps([6,4,1])) // 3,1,6
console.log(countSwaps([1,2,3])) // 0,1,3
console.log(countSwaps([3,2,1])) // 3,1,3
