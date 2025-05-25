/*

Divide and maximize

Your friend has a list of k numbers: [a1, a2, a3, ... ak].

He is allowed to do an operation which consists of three steps:

    select two numbers: ai and aj (ai % 2 = 0)
    replace ai with ai / 2
    replace aj with aj * 2

Help him to find the maximum sum of list elements that is possible to achieve by using this operation (possibly multiple times).
Return this sum modulo 1_000_000_007, because it can be quite big.
Input

List of k elements: [a1, a2, a3, ..., ak]; k < 10**4
All numbers are positive and smaller than 10**9
Output

Maximum sum after some operations (modulo 1_000_000_007)

*/

const MODULO = 1_000_000_007n;

const divideAndMultiply = nums => {
  let [sum, twos, max] = [0n, 1n, 0n];
  for (let num of nums) {
    while (!(num % 2n)) {
      num /= 2n;
      twos = twos * 2n % MODULO;
    }
    
    sum = (sum + num) % MODULO;
    if (num > max) max = num;
  }
  sum = (sum + max * (twos - 1n)) % MODULO;
  
  return sum;
}
