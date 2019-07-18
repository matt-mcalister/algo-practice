function maximumSubArray(arr){
  let max = arr[0]
  let newSum = arr[0]
  for (let leftBound = 0; leftBound < arr.length; leftBound++) {
    for (let rightBound = leftBound+1; rightBound <= arr.length; rightBound++) {
      newSum = arr.slice(leftBound, rightBound).reduce(((acc, el) => acc + el), 0)
      max = newSum > max ? newSum : max
    }
  }
  return max
}

console.log(maximumSubArray([-2,-3,4,-1,-2,1,5,-3]) === 7)
console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6)
