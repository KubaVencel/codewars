/*

Only Duplicates

Given a string, remove any characters that are unique from the string.

Example:

input: "abccdefee"

output: "cceee"

*/

function onlyDuplicates(str_in){
  let chars = {};
  for(let c of str_in){
    if(c in chars) chars[c] += 1;
    else           chars[c]  = 1;
  }
  return [...str_in].filter(c=> chars[c] > 1).join('');
}
