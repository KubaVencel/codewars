/*

Challenge Fun #16: Overlap Point

Description:
Task

Given 2 circles c1 and c2, output the number of integer points inside the intersection area between them.

Each circle is represented as an array of three elements. The first two elements are the coordinates of the center, the third is the radius.
Example

For c1 = [2, 2, 3] and c2 = [0, -1, 3], the output should be 8 (see the picture below)

There are 8 integer points inside the intersection area between them:

(0,2),(0,1),(1,1),(2,1),(0,0),(1,0),(2,0),(2,-1)
Input/Output

    [input] integer array c1

The first circle.

-1000 ≤ c1[0] and c1[1](coordinates) ≤ 1000

-1600 ≤ c1[2](radius) ≤ 1600

    [input] integer array c2

The second circle.

-1000 ≤ c2[0] and c2[1](coordinates) ≤ 1000

-1600 ≤ c2[2](radius) ≤ 1600

    [output] an integer

The number of integer points inside the intersection area between c1 and c2.

*/

function overlapPoint([x1, y1, r1], [x2, y2, r2]) {
	let minX = Math.max(x1 - r1, x2 - r2)
	let maxX = Math.min(x1 + r1, x2 + r2)
	let total = 0

	for (let x = minX; x <= maxX; ++x) {
		let deltaX1 = x1 - x, deltaY1 = Math.sqrt(r1 * r1 - deltaX1 * deltaX1)
		let minY1 = y1 - deltaY1, maxY1 = y1 + deltaY1
		let deltaX2 = x2 - x, deltaY2 = Math.sqrt(r2 * r2 - deltaX2 * deltaX2)
		let minY2 = y2 - deltaY2, maxY2 = y2 + deltaY2

		let minY = Math.ceil(Math.max(minY1, minY2)), maxY = Math.floor(Math.min(maxY1, maxY2))
		if (minY <= maxY) total += maxY - minY + 1
	}

	return total
}
