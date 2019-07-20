function maximumToys(arr, budget){
  let sorted = arr.sort((a,b) => {
    if (a < b) {
      return -1
    } else if (a > b) {
      return 1
    } else {
      return 0
    }
  })
  
  return sorted.reduce((acc, el) => {
    if (el < budget) {
      budget -= el
      acc++
    }
    return acc
  }, 0)
}

console.log(maximumToys([1,12,5,111,200,1000,10], 50) === 4)
