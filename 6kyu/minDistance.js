/*

Min Factor Distance

Description:

Write a function that returns the smallest distance between two factors of a number. The input will always be a number greater than one.

Example:

13013 has factors: [ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]

Hence the answer will be 2 (=13-11)

*/

function minDistance(n) {

	//  get factors of n
	const factors = [1]
	for (let i = 2; i < Math.min(n / 2 + 1); i++) {
		if (n % i === 0) factors.push(i)
	}

	//  get differences between each factor in 'factors array'
	let diff = n
	for (let i = 1; i < factors.length; i++) {
		if (diff > (factors[i] - factors[i - 1])) diff = (factors[i] - factors[i - 1])
	}

	//  return smallest difference
	return (diff === n) ? (diff - 1) : diff
}
