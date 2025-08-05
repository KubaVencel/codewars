/*

Subset Sum

Description:

Given a possibly empty list of strictly positive numbers and a non-negative target number, return either a subset of the list summing to the target, or null or a similar empty value if no such subset exists.

The subset must consist of unique ( by index ) list elements.
If a particular value occurs more than once in the input list, you can use it up to as many times as it occurs.
The empty subset sums to 0.
If multiple valid subsets exist, return any one of them.

The target will never be much bigger than the sum of the input list, and often quite a bit smaller.

*/

function subsetSum(xs, target) {

	const dp = Array(target + 1);

	dp[0] = [];

	for (let i = 0; i < xs.length; i++)
		for (let t = target; t >= xs[i]; t--)
			if (dp[t - xs[i]] && !dp[t])
				dp[t] = [...dp[t - xs[i]], xs[i]];

	return dp[target];

}
