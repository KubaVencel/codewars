/*

Pythagorean Triplets

Description:
Pythagorean Triples

A Pythagorean triplet is a set of three numbers a, b, and c where a^2 + b^2 = c^2. In this Kata, you will be tasked with finding the Pythagorean triplets whose product is equal to n, the given argument to the function pythagorean_triplet.
Your task

In this Kata, you will be tasked with finding the Pythagorean triplets whose product is equal to n, the given argument to the function, where 0 < n < 10000000
Examples

One such triple is 3, 4, 5. For this challenge, you would be given the value 60 as the argument to your function, and then it would return the Pythagorean triplet in an array [3, 4, 5] which is returned in increasing order. 3^2 + 4^2 = 5^2 since 9 + 16 = 25 and then their product (3 * 4 * 5) is 60.

More examples:
argument 	returns
60 	[3, 4, 5]
780 	[5, 12, 13]
2040 	[8, 15, 17]

*/

function pythagoreanTriplet(n) {
  let factsOfN = [];
  for (let i = 2; i <= n / 2; i += 1) {
    if (n % i === 0) {
      factsOfN.push(i);
    }
  }
  let triplets = [];
  for (let i = factsOfN.length - 1; i > 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      for (let k = j + 1; k < i; k += 1) {
        if (
          factsOfN[j] ** 2 + factsOfN[k] ** 2 === factsOfN[i] ** 2 &&
          factsOfN[j] * factsOfN[k] * factsOfN[i] === n
        ) {
          triplets.push([factsOfN[j], factsOfN[k], factsOfN[i]]);
        }
      }
    }
  }
  return triplets[0] ? triplets[triplets.length - 1] : 'None';
}
