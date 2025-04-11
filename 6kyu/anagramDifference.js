/*

Anagram difference

Description:
Given two words, how many letters do you have to remove from them to make them anagrams?
Example

		First word : c od e w ar s (4 letters removed)
		Second word : ha c k er r a nk (6 letters removed)
		Result : 10

Hints

		A word is an anagram of another word if they have the same letters (usually in a different order).
		Do not worry about case. All inputs will be lowercase.
		When you're done with this kata, check out its big brother/sister : https://www.codewars.com/kata/hardcore-anagram-difference

*/

function anagramDifference(w1, w2) {
	w1 = w1.split('');
	w2 = w2.split('');

	for (let i = 0; i < w1.length; i++) {
		for (let j = 0; j < w2.length; j++) {
			if (w1[i] === w2[j]) {
				w1[i] = ' ';
				w2[j] = ' ';
				break;
			}
		}
	}

	let counter = 0;

	for (let i = 0; i < w1.length; i++) {
		if (w1[i] == ' ') counter++;
	}

	return w1.length - counter + w2.length - counter;
}
