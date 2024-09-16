/*

Are we alternate?

Create a function isAlt() that accepts a string as an argument and validates whether the vowels (a, e, i, o, u) and consonants are in alternate order.

isAlt("amazon")
// true
isAlt("apple")
// false
isAlt("banana")
// true

Arguments consist of only lowercase letters.

*/

function isAlt(word) {
  let isVowels = {'a':1,'e':1,'i':1,'o':1,'u':1}, prev, cur;
  for (let i=0; i<word.length; i++) {
    cur = word[i] in isVowels ? 'vowel' : 'consonant';
    if (cur === prev) { return false; }
    prev = cur;
  }
  return true;
}
