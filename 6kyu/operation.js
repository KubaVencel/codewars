/*

Operation Transformation

Description:

You are given two positive integers a and b.

You can perform the following operations on a so as to obtain b :

(a-1)/2   (if (a-1) is divisible by 2)
a/2       (if a is divisible by 2)
a*2

b will always be a power of 2.

You are to write a function operation that efficiently returns the minimum number of operations required to transform a into b.

For example :

operation(2,8) -> 2
2*2 = 4
4*2 = 8

operation(9,2) -> 2
(9-1)/2 = 4
4/2 = 2

operation(1024,1024) -> 0

*/

function operation(a, b) {
  a = a.toString(2), b = b.toString(2)
  let idx = a.indexOf('1', 1)
  if (idx < 0) return Math.abs(b.length - a.length)
  return (a.length - idx) + Math.abs(b.length - idx)
}
