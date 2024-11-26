/*
 
Crazed Templating

Description:

Your crazy uncle has found a new hobby - he will occasionally scream out random words of the same length. Since he was a renowned Computer Scientist, you think he must have some pattern to this craziness. The words seem to always have a few letters in the same place, so maybe if you find his pattern his new amusement will stop annoying you.

Create a function that takes a list of words, all as equal length strings, and returns a new string (of the same word length). This string should keep the letters that occur at the same index across all the words, but place an asterisk (*) at indices where the words mismatch.
Examples

    ["war", "rad", "dad"]
        Result: "*a*" (only the second letter is shared).
    ["general", "admiral", "piglets", "secrets"]
        Result: "*******" (no shared letters).
    ["family"]
        Result: "family" (only one word, so all letters are shared by definition).

Assumptions

    All words are composed entirely of lowercase letters.
    All words have the same length, and are never empty.
    There will always be at least one word in the list.

*/

function letterPattern(words) {
  let pattern = words[0].split('');
  for (let i = 1; i < words.length; i++) {
    for (let l = 0; l < words[i].length; l++) {
      if (words[i][l] !== pattern[l]) {
        pattern[l] = '*'
      }
    }
  }
  return pattern.join('');
}
