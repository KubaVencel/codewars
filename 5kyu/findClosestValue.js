/*

Following Sierpinski's Footprints

The first positive integer, n, with its value 4n² + 1, being divisible by 5 and 13 is 4. (condition 1)

It can be demonstrated that we have infinite numbers that may satisfy the above condition.

If we name ai, the different terms of the sequence of numbers with this property, we define S(n) as:

We are interested in working with numbers of this sequence from 10 to 15 digits. Could you elaborate a solution for these results?

You will be given an integer value m(always valid an positive) and you should output the closest value of the sequence to m.

If the given value m is in the sequence, your solution should return the same value.

In the case that there are two possible solutions: s1 and s2, (s1 < s2), because |m - s1| = |m - s2|, output the highest solution s2

No hardcoded solutions are allowed.

No misterious formulae are required, just good observation to discover hidden patterns.

See the example tests to see output format and useful examples, edge cases are included.

Features of the random tests 1000 <= m <= 5.2 e14

Note Sierpinsky presented the numbers that satisfy condition (1)

*/

function findClosestValue(m) {
	let re = [4, 9, 56, 61]//this the first 4 nums of (4 n**2 +1) % 65 == 0, then add 65 to grow the chain
		, sum = 0
		, i = 0
		, j = 0
	while (sum < m) {
		if (i == 4) i = 0, j++;
		let x = re[i] + (65 * j);
		if (sum && Math.abs(sum - m) < Math.abs(sum + x - m)) return sum;
		sum += x;
		i++;
	}
	return sum;
}
