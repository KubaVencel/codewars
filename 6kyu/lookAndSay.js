/*

Look and say numbers

Description:

There exists a sequence of numbers that follows the pattern

					1
				 11
				 21
				1211
			 111221
			 312211
			13112221
		 1113213211
					.
					.
					.

Starting with "1" the following lines are produced by "saying what you see", so that line two is "one one", line three is "two one(s)", line four is "one two one one".

Write a function that given a starting value as a string, returns the appropriate sequence as a list. The starting value can have any number of digits. The termination condition is a defined by the maximum number of iterations, also supplied as an argument.

*/

const lookAndSay = (nums, seqLength) => {
	let results = [];

	let lastNum;
	let currentStreak = 1;
	let currentResults = '';

	if (results.length === seqLength) return results;

	for (let [index, currentNum] of nums.split('').entries()) {
		if (!lastNum) lastNum = currentNum;
		else {
			if (lastNum === currentNum) currentStreak++;
			else {
				currentResults += currentStreak + lastNum;
				currentStreak = 1;
				lastNum = currentNum;
			}
		}
		if (index === nums.length - 1) currentResults += currentStreak + lastNum;
	}

	results.push(currentResults);

	return results.concat(lookAndSay(currentResults, seqLength - 1));
};
