/*

Largest product in a series

Description:

Complete the method so that it'll find the greatest product of five consecutive digits in the given string of digits.

For example: the greatest product of five consecutive digits in the string "123834539327238239583" is 3240.

The input string always has more than five digits.

Adapted from Project Euler.

*/

function greatestProduct(input) {
	let maxNumber = 0;

	for (let i = 0; i < input.length - 4; i++) {
		let multiplication = input[i] * input[i + 1] * input[i + 2] * input[i + 3] * input[i + 4];
		if (multiplication > maxNumber) {
			maxNumber = multiplication;
		}
	}

	return maxNumber;
}
