/*

SHA-256 Cracker

Description:

This kata aims to show the vulnerabilities of hashing functions for short messages.

When provided with a SHA-256 hash, return the value that was hashed. You are also given the characters that make the expected value, but in alphabetical order.

The returned value is less than 10 characters long. Return nil for Ruby and Crystal, None for Python, null for for Java and Javascript when the hash cannot be cracked with the given characters.

*/

const crypto = require('crypto');

function hashText(text) {
	return crypto.createHash('sha256').update(text).digest('hex');
}

function permutations(str) {
	if (str.length <= 1) {
		return [str];
	}

	let result = [];
	for (let i = 0; i < str.length; i++) {
		const char = str[i];
		const reste = str.slice(0, i) + str.slice(i + 1);
		for (const perm of permutations(reste)) {
			result.push(char + perm);
		}
	}
	return result;
}

function sha256Cracker(hash, chars) {
	for (let text of permutations(chars)) {
		if (hash === hashText(text)) {
			return text;
		}
	}

	return null;
}
