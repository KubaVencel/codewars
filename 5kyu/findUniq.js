/*

Find the unique string

There is an array of strings. All strings contains similar letters except one. Try to find it!

findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'

Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

It’s guaranteed that array contains more than 2 strings.

This is the second kata in series:

	Find the unique number
	Find the unique string (this kata)
	Find The Unique

*/

function findUniq(arr) {
	let [a, b, c] = arr.slice(0, 3)

	if (!similar(a, b) && !similar(a, c)) return a
	for (d of arr) if (!similar(a, d)) return d
}

function similar(x, y) {
	x = new Set(x.toLowerCase())
	y = new Set(y.toLowerCase())

	if (x.size !== y.size) return false
	for (z of x) if (!y.has(z)) return false

	return true
}
