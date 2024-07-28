/*

String character frequency

Description:

In this Kata, we are going to determine if the count of each of the characters in a string can be equal if we remove a single character from that string.

For example:

solve('abba') = false -- if we remove any character, the count of each character will not be equal.
solve('abbba') = true -- if we remove one b, the count of each character becomes 2.
solve('aaaa') = true -- if we remove one character, the remaining characters have same count.
solve('wwwf') = true -- if we remove f, the remaining letters have same count.

More examples in the test cases. Empty string is not tested.

Good luck!

*/

function allSame(arr) {
  return arr.every(n => n === arr[0]);
}

function solve(s) {  
  const counts = {};
  for (let char of s) {
    counts[char] = (counts[char] || 0) + 1;
  }

  for (let letter in counts) {
    counts[letter] -= 1;
    const allCounts = Object.values(counts).filter(n => n !== 0);
    if (allSame(allCounts)) {
      return true;
    }
    counts[letter] += 1;
  }
  return false;
}
