/*

FIRE and FURY

The President's phone is broken

He is not very happy.

The only letters still working are uppercase E, F, I, R, U, Y.

An angry tweet is sent to the department responsible for presidential phone maintenance.
Kata Task

Decipher the tweet by looking for words with known meanings.

		FIRE = "You are fired!"
		FURY = "I am furious."

If no known words are found, or unexpected letters are encountered, then it must be a "Fake tweet."
Notes

		The tweet reads left-to-right.
		Any letters not spelling words FIRE or FURY are just ignored
		If multiple of the same words are found in a row then plural rules apply -
		FIRE x 1 = "You are fired!"
		FIRE x 2 = "You and you are fired!"
		FIRE x 3 = "You and you and you are fired!"
		etc...
		FURY x 1 = "I am furious."
		FURY x 2 = "I am really furious."
		FURY x 3 = "I am really really furious."
		etc...

Examples

		ex1. FURYYYFIREYYFIRE = "I am furious. You and you are fired!"
		ex2. FIREYYFURYYFURYYFURRYFIRE = "You are fired! I am really furious. You are fired!"
		ex3. FYRYFIRUFIRUFURE = "Fake tweet."

*/

var fireAndFury = function(tweet) {

	let matches = tweet.match(/(FURY|FIRE)/g);

	if (/[^EFIRUY]/.test(tweet) || !matches)
		return 'Fake tweet.';

	return matches
		.join('')
		.match(/(FURY|FIRE)\1*/g)
		.map(match => {

			let terms = match.length / 4 - 1;

			return match[1] === 'I'
				? 'You ' + 'and you '.repeat(terms) + 'are fired!'
				: 'I am ' + 'really '.repeat(terms) + 'furious.';

		})
		.join(' ');

}
