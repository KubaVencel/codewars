/*

Reaching a number by x3 or +5 (or is it possible?)

In this kata, your goal is to find a way to reach a target number from 1 by multiplying by 3 (* 3) or adding 5 (+ 5) only. If there is a way, format your solution as a mathematical equation as a string. If there is not a way, return null, Nothing or a similar empty value of your language.

For more information about formatting...

Each step of the equation should be in parentheses () except the last. They should go from the inside out, as per mathematical conventions. Space everything by one space except for numbers and parentheses joined together. So, if your target was 11, you should return "((1) + 5) + 5".

The multiply symbol used for this kata is an asterisk *.

If you need more examples, please take a look at the test cases.

Note: Because there can be multiple possible solutions, valid test cases will check if your string evaluates to the given number. Your return string must be formatted according to the rules set above (including spacing) (your output is only allowed * 3 or + 5, parentheses, spacing, and the starting (1)).

Test specifications:

    Sample tests include 2 anticheat verifications, 5 possible solutions and 3 impossible solutions.
    100 random tests, integer between 1,000-10,000.

Additional points:

    An efficient solution will pass well within the time limit, but naïve recursion solutions will not pass this kata.
    Optimization is required to pass this kata, or call stack size excessions may occur. This can be handled through taking less steps to reach the target number.

*/

function solution(n) {
	let queue = [];

	while (n > 1) {
		if (n === 6 || n === 21 || n === 51 || n === 36 || n === 66) {
			queue.push(5);
			n -= 5;
		} else if (n % 3 === 0) {
			queue.push(3);
			n /= 3;
		} else if (n - 5 >= 1) {
			queue.push(5);
			n -= 5;
		} else {
			return null;
		}
	}
	let result = "1";
	while (queue.length !== 0) {
		let val = queue.pop();
		if (val === 3) {
			result = `(${result}) * 3`;
		} else if (val === 5) {
			result = `(${result}) + 5`;
		}
	}

	return result;
}
