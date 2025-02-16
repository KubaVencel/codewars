/*

Simple Fun #128: Doubly Not Less

Description:
Task

You are given an integer n(in string format). Find the smallest integer m such that both m and its reversed version (a number that is obtained by reversing the order of its digits) are not less than n.

Note: After reversing all leading zeros are omitted.
Examples

For n = "5314", the result should be `"5316".

Because both numbers 5316 and 6135 are not less than 5314.

The result is not 5315 because 5135(5315 reversed) < 5314.

For n = "23456", the result is also "23456".
Input/Output

    [input] string n

string representation of a positive integer n. 0 < n < 10^100

    [output] a string

string representation of an integer m

*/

function doublyNotLess(n) {
  const first = + n.charAt(0)
  const last = + n.charAt(n.length - 1)
  if (first < last || n.length === 1) return n
  if (n.length === 2) return '' + first + first
  const o = doublyNotLess(n.slice(1, -1))
  if (first === 9) return '9' + o + '9'
  if (last === first && n.slice(1, -1) === o) return n
  return n.slice(0, -1) + (first + (n.slice(1, -1) === o ? 0 : 1))
}
