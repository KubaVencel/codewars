/*

Simple Fun #216: Count Rectangles

Description:
Task

There are several points on the wall, each has x and y coordinates. Two points can be connected either with vertical or with horizontal lines. Count the number of rectangles that can be obtained by connecting 4 points.
Input/Output

	[input] 2D integer array points
		Array of unique elements. Each element is a 2-element array, containing x and y coordinates of a point.
		4 ≤ points.length ≤ 50
	[output] an integer
		The number of rectangles.

Example

	For points = [[1,0],[0,0],[0,1],[1,1]], the output should be 1.
		There are exactly 4 points, and they form a rectangle.

	For points = [[0,0],[1,0],[10,0],[1,17],[10,17],[0,17]], the output should be 3.
		It's possible to obtain 3 rectangles:

		[[0, 0], [1, 0], [1, 17], [0, 17]];
		[[0, 0], [10, 0], [10, 17], [0, 17]];
		[[1, 0], [10, 0], [10, 17], [1, 17]]

*/

const countRectangles = points => {
	const verts = Object.values(points.reduce((acc, [x, y]) => (acc[x] ??= new Set()).add(y) && acc, {}));

	let count = 0;

	for (let i = 0; i < verts.length - 1; i++) {
		for (let j = i + 1; j < verts.length; j++) {
			let horizLines = 0;
			for (const pt of verts[i]) {
				if (verts[j].has(pt)) horizLines++;
			}
			count += horizLines * (horizLines - 1) / 2;
		}
	}

	return count;
}
