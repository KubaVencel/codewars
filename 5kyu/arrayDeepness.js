/*

How deep do these trees even go?

Description:

You will be given an array arr representing a tree, which has nested arrays, which might have nest arrays in them, which... well, you get the idea. You need to quantify how deep these arrays go by calculating these numbers:

	min: minimum deepness
	max: maximum deepness
	mean: average deepness

and return the result as an object: {min: something, max: something, mean: something}. Please return an object with keys in this exact order, and round the mean to 3 decimal places.

Deepness is quantified by all the leaves (i.e elements that are not arrays) of the tree.

It is guaranteed that the initial array will always be an array, and there will never be any circular references.

*/

const depths = (arr, d = 0) => Array.isArray(arr) ? [].concat(...[...arr].map(x => depths(x, d + 1))) : d;
const mean = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

function arrayDeepness(arr) {
	const ds = depths(arr);
	return { min: Math.min(...ds), max: Math.max(...ds), mean: +mean(ds).toFixed(3) };
}
