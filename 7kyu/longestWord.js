/*

Inspiring Strings

Given a string of space separated words, return the longest word.
If there are multiple longest words, return the rightmost longest word.
Examples

"red white blue"  =>  "white"
"red blue gold"   =>  "gold"

*/

function longestWord(str){
  return str.split(' ').sort((b, a) => b.length - a.length).pop();
}
