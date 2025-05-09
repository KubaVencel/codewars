/*

Simple Fun #318: Sort String

Description:
Task

Your task is to sort the characters in a string according to the following rules:

- Rule1: English alphabets are arranged from A to Z, case insensitive.
  ie. "Type" --> "epTy"
- Rule2: If the uppercase and lowercase of an English alphabet exist
  at the same time, they are arranged in the order of oringal input.
  ie. "BabA" --> "aABb"
- Rule3: non English alphabet remain in their original position.
  ie. "By?e" --> "Be?y"

Input/Output

[input] string s

A non empty string contains any characters(English alphabets or non English alphabets).

[output] a string

A sorted string according to the rules above.
Example

For s = "cba", the output should be "abc".

For s = "Cba", the output should be "abC".

For s = "cCBbAa", the output should be "AaBbcC".

For s = "c b a", the output should be "a b c".

For s = "-c--b--a-", the output should be "-a--b--c-".

For s = "Codewars", the output should be "aCdeorsw".

*/

function sortString(s) {
  let letters = s.split('').filter(c => /[a-zA-Z]/.test(c));
  letters.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
  let result = s.split('').map(c => /[a-zA-Z]/.test(c) ? letters.shift() : c).join('');
  return result;
}
