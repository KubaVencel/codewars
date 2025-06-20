/*

Tri-Bicolor Tiling

Problem Description

You have a row of n square tiles, which are colored black and the side length is 1. You also have infinite supplies of three kinds of rectangular tiles:

    Red tiles of Length r
    Green tiles of Length g
    Blue tiles of Length b

All tiles have integer lengths and share the same height of 1.

Now, you want to replace some black square tiles with your colored tiles. However, you are quite picky, and you want to use exactly two types of colored tiles (RGB). You can leave black gaps as much as you want.

In how many ways can you replace black tiles with your colored tiles? Since your answer will be very large, please give your answer modulo 12345787.
Example

For n = 6 and (r, g, b) = (2, 3, 4), these are the eight possible arrangements using exactly two colors (R, G, B denote red, green, blue tiles respectively, and a dot is a black tile):

RRGGG.

RR.GGG

.RRGGG

GGGRR.

GGG.RR

.GGGRR

RRBBBB

BBBBRR

Constraints

5 <= n <= 100

2 <= r, g, b <= 5

Some of the values of r, g, or b may be the same.

The inputs will be always valid integers.
More Examples

// One Red (length 2) and one Green (length 3): two arrangements
triBicolorTiling(5, 2, 3, 4) == 2

// One Red (length 2) and one Green (length 3): 6 arrangements
// One Red (length 2) and one Blue (length 4): 2 arrangements
triBicolorTiling(6, 2, 3, 4) == 8

triBicolorTiling(10, 2, 3, 4) == 248

// For these cases, think about tiling with dominos first
// and then coloring them with two colors.
triBicolorTiling(5, 2, 2, 2) == 18
triBicolorTiling(6, 2, 2, 2) == 54

Acknowledgement

This problem was inspired by Project Euler #116: Red, Green, or Blue Tiles and Project Euler #117: Red, Green, and Blue Tiles.

If you enjoyed this Kata, please also have a look at my other Katas!

*/

function triBicolorTiling(n, r, g, b) {
	const MOD = 12345787;
	const RED = 1 << 0;
	const GREEN = 1 << 1;
	const BLUE = 1 << 2;
	const dp = Array.from({ length: n + 1 }, () => Array(8).fill(0));
	dp[0][0] = 1;
	for (let i = 0; i < n; i++) {
		for (let mask = 0; mask < 8; mask++) {
			if (dp[i][mask] === 0) continue;
			dp[i + 1][mask] = (dp[i + 1][mask] + dp[i][mask]) % MOD;
			if (i + r <= n) {
				const newMask = mask | RED;
				dp[i + r][newMask] = (dp[i + r][newMask] + dp[i][mask]) % MOD;
			}
			if (i + g <= n) {
				const newMask = mask | GREEN;
				dp[i + g][newMask] = (dp[i + g][newMask] + dp[i][mask]) % MOD;
			}
			if (i + b <= n) {
				const newMask = mask | BLUE;
				dp[i + b][newMask] = (dp[i + b][newMask] + dp[i][mask]) % MOD;
			}
		}
	}
	let result = 0;
	for (let mask = 0; mask < 8; mask++) {
		if (mask === (RED | GREEN) || mask === (RED | BLUE) || mask === (GREEN | BLUE)) {
			result = (result + dp[n][mask]) % MOD;
		}
	}
	return result;
}
