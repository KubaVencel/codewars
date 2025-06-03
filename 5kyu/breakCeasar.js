/*

Break the Caesar!

Description:

The Caesar cipher is a notorious (and notoriously simple) algorithm for encrypting a message: each letter is shifted a certain constant number of places in the alphabet. For example, applying a shift of 5 to the string "Hello, world!" yields "Mjqqt, btwqi!", which is jibberish.

In this kata, your task is to decrypt Caesar-encrypted messages using nothing but your wits, your computer, and a set of the 1000 (plus a few) most common words in English in lowercase (made available to you as a preloaded variable named WORDS, which you may use in your code as if you had defined it yourself).
Given a message, your function must return the most likely shift value as an integer.

A few hints:

    Be wary of punctuation
    Shift values may not be higher than 25

*/

const breakCaesar = msg => {
	const encryptStr = (str, shift) => {
		shift = (shift % 26 + 26) % 26;

		const shiftLetter = char => {
			if (!/[a-z]/i.test(char)) return char;

			const basePoint = (/[a-z]/.test(char) ? 'a' : 'A').charCodeAt();
			const offset = (char.charCodeAt() - basePoint + shift) % 26;

			return String.fromCharCode(basePoint + offset);
		}

		return str.replace(/./g, shiftLetter);
	}

	const normalizedMsg = msg.toLowerCase();

	for (let shift = 0; shift <= 25; shift++) {
		const hasAllMatched = encryptStr(normalizedMsg, -shift).match(/[a-z]+/gi).every(word => WORDS.has(word));
		if (hasAllMatched) return shift;
	}

	return null;
}
