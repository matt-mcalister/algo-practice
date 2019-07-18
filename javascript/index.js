function maximumSubArray(arr){
  let max = -Infinity

  let currentSum = 0

  arr.forEach((el, idx) => {
    currentSum += el

    if (currentSum > max) {
      max = currentSum
    }

    if (currentSum < 0){
      currentSum = 0
    }

  })
  return max
}

console.log(maximumSubArray([-2,-3,4,-1,-2,1,5,-3]) === 7)
console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6)
