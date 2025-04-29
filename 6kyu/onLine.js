/*

Points On A Line

Description:

Given some points (cartesian coordinates), return true if all of them lie on a line. Treat both an empty set and a single point as a line.

onLine([[1,2], [7, 4], [22, 9]]);                 // returns true
onLine([[1,2], [-3, -14], [22, 9]]);              // returns false

*/

function onLine(points) {
	// TODO: Program me
	//console.log(points)
	if (points.length < 3) return true
	for (var i = 2; i < points.length; i++) {
		if (((points[i - 2][0] - points[i - 1][0]) * (points[i][1] - points[i - 1][1]) != (points[i - 1][0] - points[i][0]) * (points[i - 1][1] - points[i - 2][1]))) return false;
	}
	return true;
}
