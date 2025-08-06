/*

Pattern Generator

Instructions

Write a function that accepts an integer n in parameter and returns a string following the pattern below.

	if n <= 0, return an empty string: ""
	for your convenience, the tests will trim invisible spaces, i.e. trailing spaces before a newline, so that e.g. "x\nx x\nx" and "x\nx x    \nx" are considered equal, as they display identically when printed.

Patterns

	n = 1

x

	n = 2

 x
x x
 x

	n = 3

  x
   x
x o x
 x
  x

	n = 4

   x
	x
   o x
x o o x
 x o
  x
   x

	n = 5

	x
	 x
	o x
	 o x
x o x o x
 x o
  x o
   x
	x

	n = 6

	 x
	  x
	 o x
	  o x
	 x o x
x o x x o x
 x o x
  x o 
   x o
	x 
	 x

and so on ...

*/

const patternGenerator = c =>
	Array.from({ length: 2 * c - 1 }, (_, i) =>
		Array.from({ length: 2 * c - 1 }, (_, j) => {
			const [dI, dJ] = [i - c + 1, j - c + 1];
			const dist = Math.abs(dI) + Math.abs(dJ);

			if (dI * dJ > 0 || (c - dist) % 2 <= 0) return ' ';

			return (dist - c + 1) % 4 ? 'o' : 'x';
		}).join``
	).join`\n`;
