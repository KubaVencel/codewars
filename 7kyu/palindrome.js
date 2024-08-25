/*

Create palindrome

Description:

Consider the string "adfa" and the following rules:

a) each character MUST be changed either to the one before or the one after in alphabet. 
b) "a" can only be changed to "b" and "z" to "y". 

From our string, we get:

"adfa" -> ["begb","beeb","bcgb","bceb"]

Here is another example: 
"bd" -> ["ae","ac","ce","cc"]

--We see that in each example, one of the outcomes is a palindrome. That is, "beeb" and "cc".

You will be given a lowercase string and your task is to return True if at least one of the outcomes is a palindrome or False otherwise.

More examples in test cases. Good luck!

*/

// I'll compare starting at the first and the last character (and continue to the middle)
// If both are same, both must be changed in the same direction to create a palindrom
// If the two are exacly two letterst apart (like L & N), they can be changed to be the same (M & M)
// If the distance is not 0 or 2, these letters break the palindrom

function solve(s) {
  const middle = s.length / 2;

  for (let i = 0; i < middle; i++) {
    const first = s[i].charCodeAt()
    const last = s[s.length - (i + 1)].charCodeAt()
    const distance = Math.abs(last - first)
    if (distance > 2 || distance === 1) return false
  }
  return true
}
