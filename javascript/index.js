
function hourglassSum(arr) {
  function reduceHourglass([y,x]) {
    return arr[y][x] + arr[y][x+1] + arr[y][x+2] + arr[y+1][x+1] + arr[y+2][x] + arr[y+2][x+1] + arr[y+2][x+2]
  }
  let possibleIndexes = [[0,0],[0,1],[0,2],[0,3],[0,4],[1,0],[1,1],[1,2],[1,3],[1,4],[2,0],[2,1],[2,2],[2,3],[2,4],[3,0],[3,1],[3,2],[3,3],[3,4]]
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
console.log(hourglassSum([[-9,-9,-9,1,1,1],[0,-9,0,4,3,2],[-9,-9,-9,1,2,3],[0,0,8,6,6,0],[0,0,0,-2,0,0],[0,0,1,2,4,0]]))
// -63, -34, -9, 12,
// -10, 0, 28, 23,
// -27, -11, -2, 10,
// 9, 17, 25, 18

// 28 => 0 4 3
      //   1
      // 8 6 6


// console.log(hourglassSum([1,1,1,0,0,0,
// 0,1,0,0,0,0,
// 1,1,1,0,0,0,
// 0,0,2,4,4,0,
// 0,0,0,2,0,0,
// 0,0,1,2,4,0]))

// outputs 19
