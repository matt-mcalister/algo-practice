// … a man was given directions to go from one point to another.
// The directions were "NORTH", "SOUTH", "WEST", "EAST".
// Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.
// Going to one direction and coming back the opposite direction is a needless effort.
// Since this is the wild west, with dreadfull weather and not much water,
// it's important to save yourself some energy, otherwise you might die of thirst!
// How I crossed the desert the smart way.
//
// The directions given to the man are, for example, the following:
// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].

// You can immediatly see that going "NORTH" and then "SOUTH" is not reasonable,
// better stay to the same place! So the task is to give to the man
// a simplified version of the plan. A better plan in this case is simply:
// ["WEST"]


function dirReduc(arr){
  let opposites = {
    "NORTH": "SOUTH",
    "SOUTH": "NORTH",
    "EAST": "WEST",
    "WEST": "EAST"
  }
  if (arr.length === 1) {
    return arr
  }
  let currentDir = arr.shift()
  let remaining = dirReduc(arr)
  if (opposites[currentDir] === remaining[0]) {
    remaining.shift()
  } else {
    remaining = [currentDir, ...remaining]
  }
  return remaining
}


console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])) // should be ["WEST"]
console.log("DONEZO");
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])) // should be ["NORTH", "WEST", "SOUTH", "EAST"]
console.log("DONEZO");
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])) // should be []
console.log("DONEZO");
