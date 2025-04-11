/*
 
String reduction

In this Kata, we are going to see how a Hash (or Map or dict) can be used to keep track of characters in a string.

Consider two strings "aabcdefg" and "fbd". How many characters do we have to remove from the first string to get the second string? Although not the only way to solve this, we could create a Hash of counts for each string and see which character counts are different. That should get us close to the answer. I will leave the rest to you.

For this example, solve("aabcdefg","fbd") = 5. Also, solve("xyz","yxxz") = 0, because we cannot get second string from the first since the second string is longer.

More examples in the test cases.

Good luck!

*/

function solve(a, b) {
  let aCount = [...a].reduce((obj, c) => {
    obj[c] ? obj[c]++ : obj[c] = 1;
    return obj;
  }, {});
  
  let bCount = [...b].reduce((obj, c) => {
    obj[c] ? obj[c]++ : obj[c] = 1;
    return obj;
  }, {});
  
  let diff = [...new Set(a)].map(c => aCount[c] - (bCount[c] || 0));
  if (diff.some(n => n < 0)) {return 0;}
  return diff.reduce((acc,n) => acc + n, 0);
}
