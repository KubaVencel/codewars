/*

Challenge Fun #17: Merge Arrays

Description:
Task

You have two sorted arrays a and b, merge them to form new array of unique items.

If an item is present in both arrays, it should be part of the resulting array if and only if it appears in both arrays the same number of times.
Example

For a = [1, 3, 40, 40, 50, 60, 60, 60] and b = [2, 40, 40, 50, 50, 65], the result should be [1, 2, 3, 40, 60, 65].

 Number 40 appears 2 times in both arrays,  thus it is in the resulting array. Number 50 appears once in array a and twice in array b,  therefore it is not part of the resulting array.
Input/Output

    [input] integer array a

A sorted array.

1 ≤ a.length ≤ 500000

    [input] integer array b

A sorted array.

1 ≤ b.length ≤ 500000

    [output] an integer array

    The resulting sorted array.

*/

function mergeArrays(a, b) {
  const occur = {};
  for (let i = 0; i < a.length; i++) {
    if (!occur[a[i]]) occur[a[i]] = {'a': 1, 'b': 0};
    else {
      occur[a[i]]['a'] += 1;
      }
  }
  for (let i = 0; i < b.length; i++) {
    if (!occur[b[i]]) occur[b[i]] = {'a': 0, 'b': 1};
    else {
      occur[b[i]]['b'] += 1;  
    }
  }
  const resultArray = [];
  for (const num in occur) {
    if (occur[num]['a'] === 0 || occur[num]['b'] === 0) resultArray.push(+num)
    else {
      if (occur[num]['a'] === occur[num]['b']) resultArray.push(+num);
    };
  };
  return resultArray;
}
