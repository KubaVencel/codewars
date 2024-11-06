/*

Simple Fun #292: Primiest Number

Description:
Task

Lets call a prime number the primiest if all of its digits are also prime.

You are given an integer k. Find the kth (1-based) primiest number. If k is invalid or the answer is greater than 10000, return -1 instead.
Input/Output

[input] integer k

The number of the primiest number to find.

-100 ≤ k ≤ 100

[output] an integer

The kth primiest number, or -1 if k is invalid or the answer is greater than 10000.
Example

For k = 2, the output should be 3.

The first primiest number is 2, and the second one is 3, so the answer is 3.

For k = 0, the output should be -1.

k = 0 is an invalid value.

For k = 100, the output should be -1.

The 100th primiest number is greater than 10000.

*/

function primiestNumber(k) {
  if(k <= 0 || k > 100) return -1;
  let count = 0;
  for(var i = 2; i < 10000; i++){
    if(isPrime(i) && i.toString().split('').every(n => isPrime(n)))
      count++;
    if(count == k)
      return i;
  }
  return -1;
}

function isPrime(n){
  if(n == 0 || n == 1) return false;
  const boundary = Math.floor(Math.sqrt(n));
  for(var i = 2; i <= boundary; i++)
    if(n % i == 0) return false;
  return true;
}
