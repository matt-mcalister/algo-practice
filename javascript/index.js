
function hourglassSum(arr) {
  function reduceHourglass(i) {
    return arr[i] + arr[i+1] + arr[i+2] + arr[i+7] + arr[i+12] + arr[i+13] + arr[i+14]
  }
  let possibleIndexes = [0,1,2,3,6,7,8,9,12,13,14,15,18,19,20,21]
  let topHourglassIndex = possibleIndexes[0]
  possibleIndexes.forEach(index => {
    let hourglassValue = reduceHourglass(index)
    if (reduceHourglass(topHourglassIndex) < hourglassValue) {
      topHourglassIndex = index
    }
  })
  return reduceHourglass(topHourglassIndex)
}

// -9 -9 -9  1 1 1
//  0 -9  0  4 3 2
// -9 -9 -9  1 2 3
//  0  0  8  6 6 0
//  0  0  0 -2 0 0
//  0  0  1  2 4 0
// console.log(hourglassSum([-9,-9,-9,1,1,1,0,-9,0,4,3,2,-9,-9,-9,1,2,3,0,0,8,6,6,0,0,0,0,-2,0,0,0,0,1,2,4,0]))
// -63, -34, -9, 12,
// -10, 0, 28, 23,
// -27, -11, -2, 10,
// 9, 17, 25, 18

// 28 => 0 4 3
      //   1
      // 8 6 6


console.log(hourglassSum([1,1,1,0,0,0,
0,1,0,0,0,0,
1,1,1,0,0,0,
0,0,2,4,4,0,
0,0,0,2,0,0,
0,0,1,2,4,0]))

// outputs 19
