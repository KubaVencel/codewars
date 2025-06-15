/*

Simple Fun #294: Reduce Square Roots

Task

Given a list of integers, define a move as taking one of the integers in the list and replacing it with its square root, rounded down to the nearest integer.

Given an integer l and an integer k, start with the array [1, 2, 3, ..., l] and find the minimal sum of the array after k moves.
Input/Output

[input] integer l

1 ≤ l ≤ 10^4

[input] integer k

The number of moves.

1 ≤ k ≤ 10^4

[output] an integer

The minimal sum after k moves.
Example

For l = 5 and k = 2, the output should be 10.

We start with [1, 2, 3, 4, 5].

After square rooting 5 to get [1, 2, 3, 4, 2] and then square rooting 3 to get [1, 2, 1, 4, 2], we end up with a sum of 10.

*/

const squareRoots = (l, k) => {
	const nums = Array(l + 1).fill(1);

	let sum = l * (l + 1) / 2;
	for (let i = k; i > 0 && nums.length > 2; i--) {
		const [a, b] = [nums.length - 1, (nums.length - 1) ** .5 ^ 0];
		sum += -a + b;
		++nums[b] && !--nums[a] && nums.pop();
	}

	return sum;
}
