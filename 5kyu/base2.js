/*

Base -2

In this Kata you must convert integers numbers from and to a negative-base binary system.

Negative-base systems can accommodate all the same numbers as standard place-value systems, but both positive and negative numbers are represented without the use of a minus sign (or, in computer representation, a sign bit); this advantage is countered by an increased complexity of arithmetic operations.

To help understand, the first eight digits (in decimal) of the Base(-2) system is:

[1, -2, 4, -8, 16, -32, 64, -128]

Example conversions:

Decimal, negabinary

6,   '11010'
-6,  '1110'
4,   '100'
18,  '10110'
-11, '110101'

*/

function intToNegabinary(number) {
	var Schroeppel4 = 0xAAAAAAAA;
	// Convert to NegaQuaternary String
	return ((number + Schroeppel4) ^ Schroeppel4).toString(2);
}
function negabinaryToInt(s) {
	return [...s].reduce((i, d) => +d - i * 2, 0);
}
