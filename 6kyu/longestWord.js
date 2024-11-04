/*

Countdown - Longest Word

Description:

#Detail

Countdown is a British game show with number and word puzzles. The letters round consists of the contestant picking 9 shuffled letters - either picking from the vowel pile or the consonant pile. The contestants are given 30 seconds to try to come up with the longest English word they can think of with the available letters - letters can not be used more than once unless there is another of the same character.

#Task

Given an uppercase 9 letter string, letters, find the longest word that can be made with some or all of the letters. The preloaded array words (or $words in Ruby) contains a bunch of uppercase words that you will have to loop through. Only return the longest word; if there is more than one, return the words of the same lengths in alphabetical order. If there are no words that can be made from the letters given, return None/nil/null.

##Examples

letters = "ZZZZZZZZZ"
longest word = None

letters = "POVMERKIA", 
longest word = ["VAMPIRE"]

letters = "DVAVPALEM"
longest word = ["PALMED", "VALVED", "VAMPED"]

*/

function contains(letters, word) {
  letters.split('').forEach((char) => word = word.replace(char, ''));
  return word.length === 0;
}

function longestWord(letters){
  let length = 0
  , longest = null;
  for (let word of words) {
    if (word.length >= length && contains(letters, word)) {
      if (word.length > length)
        [ length, longest ] = [ word.length, [] ];
      longest.push(word);
    }   
  }
  return longest;
}
