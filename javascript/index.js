// Print an integer denoting the minimum number of bribes needed to get the queue
// into its final state. Print Too chaotic if the state is invalid,
// i.e. it requires a person to have bribed more than people.

function minimumBribes(q){
  // q is an array of integers
  // the first integer (t) describes the number of test cases in q
  // t times, there will be an integer (n) followed by n-integers. n describes how many people are in line (n-integers is the line)
  let t = q.shift()

  for (var i = 0; i < t; i++) {
    minBribeForLine(q.slice(1,q[0]))
    q.splice(0,q[0])
  }
}

function minBibeForLine(line) {

}

// ex:
//   [
//     2,
//     5,
//     2, 1, 5, 3, 4,
//     5,
//     2, 5, 1, 3, 4,
//   ]
// would output:
// 3
// Too chaotic

// [
//   2,
//   8,
//   5, 1, 2, 3, 7, 8, 6, 4
//   8,
//   1, 2, 5, 3, 7, 8, 6, 4
// ]
// would output:
// Too chaotic
// 7

// [
//   1,
//   8,
//   1, 2, 5, 3, 4, 7, 8, 6
// ]
// would output:
// 4
