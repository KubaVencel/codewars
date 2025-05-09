/*

1/n- Cycle

Let n be an integer coprime with 10, e.g. 7.

1/7 = 0.142857 142857 142857 ....

We see that the decimal part has a cycle: 142857. The length of this cycle is 6. In the same way:

1/11 = 0.09 09 09 .... Cycle length is 2.
Task

Given an integer n (n > 1), write a function that returns the length of the cycle if there is one, otherwise (if n and 10 not coprimes) return -1.
Examples

n = 5  --> Should return -1
n = 13 --> Should return 6 -> 0.076923 076923 076923 ...
n = 21 --> Should return 6 -> 0.047619 047619 047619 ...
n = 27 --> Should return 3 -> 0.037 037 037 037 037 037 ...
n = 33 --> Should return 2 -> 0.03 03 03 03 03 03 03 03 ...
n = 37 --> Should return 3 -> 0.027 027 027 027 027 027 ...
n = 94 --> Should return -1 

Notes

n = 22 --> Should return -1 since 1/22 ~ 0.0 45 45 45 45 ...

    Please ask before translating..

*/

cycle = p => {
  if (!(p%2 && p%5))
    return -1;
  let cycles = 1;
  for (let x=10; x != 1; x = x*10%p) {
    cycles++;
  }
  return cycles
}
