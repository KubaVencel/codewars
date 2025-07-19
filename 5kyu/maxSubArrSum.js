/*

Appendable maximum subarray sum

Description:

Welcome to Appendable kata. To be fair, I've just made up the name 'appendable'. There's probably a proper name like 'list homomorphism' or something to do with 'monoids' or whatever.

The idea is pretty simple: For some functions on lists, it's easy to 'combine' the result of a and b to get the result for the concatenation a ++ b (using ++ for list concatenation to avoid ambiguity):

sum(a ++ b) = sum(a) + sum(b)
max(a ++ b) = max([ max(a), max(b) ])

Sometimes it's not easy to combine the results of a function f, but you might be able to find some intermediate representation h such that h is appendable.

h(a ++ b) = combine(h(a), h(b))

And it's possible to, again, efficiently get the final result f(a) from the intermediate h(a)

h_to_f(h(a)) = f(a)

There are various things you can do with such an appendable algorithm. For example, you can use them to efficiently recalculate results for editable sequences, or efficiently find the result of ranges. We'll just focus on the algorithm itself for now.
Your task

Given an array or list of integers, find the maximum sum of all its contiguous subarrays. For example, for the following list of integers, the marked subarray sums to 6, and no other contiguous subarray sums to a value greater.

-2, 1, -3, 4, -1, 2, 1, -5, 4
		   ^^^^^^^^^^^ sums to 6

The subarray can be empty, so for an array that is empty or otherwise contains no positive numbers, the answer is 0.

This task would have been the same as this kata, but here you need to write an appendable solution, in the following form:

const solution = {
  // Get a representation of the empty array: []
  empty: ...,

  // Get a representation of the one-element array: [a]
  singleton(a) { ... }.

  // Get a representation of arr
  //
  // Recommended implementation:
  //   - Use solution.singleton to get representation for individual elements
  //   - Append them together
  get: (arr) => arr.reduce(
	(val, a) => solution.append(val, solution.singleton(a)),
	solution.empty
  ),

  // Given representations of arr1 and arr2, return the representation of (arr1 ++ arr2)
  append(repr1, repr2) { ... },

  // Given a representation of arr, return the maximum subarray sum of arr
  toAnswer(repr) { ... },
};

Only get, append, toAnswer are tested. Implementing get in terms of singleton, empty, append is the recommended approach for simplicity though.
A reminder on performance

The tests involve thousands of append and toAnswer operations on representations of arrays/lists with millions of elements.

Moreover, each representation may be reused across multiple calls to append. This means that your code, for example, should handle a test of repeatedly 'doubling' a representation (basically a → a ++ a) N times, without needing to use 2N operations or an array of 2N size to do so.

In particular, you definitely shouldn't try to reconstruct the full array.
Notes and constraints

	The representations provided by your code may be of any form. They're not checked directly for e.g. equality in the tests. Any representation is fine as long as eventually toAnswer provides the correct answer.
	If applicable in your language:
		It is guaranteed that the sum will not have precision problems or overflow.
		Do not mutate the input array or (visibly) mutate the input representation.

*/

const solution = {

	empty: [0, 0, 0, 0],

	singleton: (a, b = Math.max(a, 0)) =>
		[a, b, b, b],

	append: ([a_total, a_head, a_tail, a_max], [b_total, b_head, b_tail, b_max]) => [
		a_total + b_total,
		Math.max(a_head, a_total + b_head),
		Math.max(b_tail, b_total + a_tail),
		Math.max(a_max, b_max, a_tail + b_head)
	],

	get: arr => arr.reduce(
		(acc, val) => solution.append(acc, solution.singleton(val)),
		solution.empty
	),

	toAnswer: ([, , , max]) => max,

};
