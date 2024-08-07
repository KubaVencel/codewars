/*

Range function

Description:

Create range generator function that will take up to 3 parameters - start value, step and stop value. This function should return an iterable object with numbers. For simplicity, assume all parameters to be positive numbers.

Examples:

    range(5) --> 1,2,3,4,5
    range(3, 7) --> 3,4,5,6,7
    range(2, 3, 15) --> 2,5,8,11,14

*/

function range(min, step, max) {
  if (arguments.length === 1) return range(1, 1, min)
  if (arguments.length === 2) return range(min, 1, step)
  const result = []
  for (let i = min; i <= max; i += step) {
    result.push(i)
  }
  return result
}
