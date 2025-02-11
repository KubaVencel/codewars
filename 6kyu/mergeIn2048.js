/*

Merge in 2048

Description:

Remember the game 2048? http://gabrielecirulli.github.io/2048/

The main part of this game is merging identical tiles in a row.

    Implement a function that models the process of merging all of the tile values in a single row.
    This function takes the array line as a parameter and returns a new array with the tile values from line slid towards the front of the array (index 0) and merged.
    A given tile can only merge once.
    Empty grid squares are represented as zeros.
    Your function should work on arrays containing arbitrary number of elements.

Examples

[2,0,2,2]  -->  [4,2,0,0]

Another example with repeated merges:

[4,4,8,16]  -->  [8,8,16,0]
[8,8,16,0]  -->  [16,16,0,0]
[16,16,0,0] -->  [32,0,0,0]

*/

const log = it => (console.log(it), it)

function merge (line) {
  const zeroes = []
  const merged = []
  
  let prev = null
  line.forEach((curr, index) => {
    if (curr === 0) {
      zeroes.push(0)
      return
    }
    
    if (prev !== curr) {
      merged.push(curr)
      prev = curr
    } else {
      merged[merged.length - 1] *= 2
      zeroes.push(0)
      prev = null
    }
  })

  return [...merged, ...zeroes]
};
