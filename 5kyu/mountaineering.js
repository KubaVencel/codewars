/*

Simple Fun #331: Mountaineering

Task

As the greatest programmer in the world, myjinxin. He knows he has the most powerful soul power, but the body needs more exercise.

Hmm.. Mountaineering is a good idea ;-)

One day, he came to the foot of the mountain and started climbing. He records the height of his place every day.

Because he is too weak, he can only choose a flat position to get there every day. Specifically, the difference between the elevations of each of the two adjacent days is not more than 1 meter. For exampe, If his position is 100 meters on the first day, second days he may appear in the 101 or 99 meters position.

The unfortunate thing happened n days later: He fell from the mountain into a river and lost some of his records.

Now, all we know is the total number of days(nDays) and incomplete records(records). Your task is to help myjinxin calculate the highest possible height he can reach.

records is an 2D integer array. Each subarray is a two-element array [ith day(1-based),height]. It guarantees that there is no duplicate record in the records and at least contains 1 record.

If the records contains invlid data, return "Impossible" as result.
Example

For nDays = 8, records = [[2,0],[7,0]], the output should be 2.

The possible complete records are

[[1,1],[2,0],[3,1],[4,2],[5,2],[6,1],[7,0],[8,1]]

So, the highest possible height is 2.

For nDays = 8, records = [[2,0],[8,0]], the output should be 3.

The possible complete records are

[[1,1],[2,0],[3,1],[4,2],[5,3],[6,2],[7,1],[8,0]]

So, the highest possible height is 3.

For nDays = 8, records = [[2,0],[7,0],[8,2]], the output should be "Impossible".

The defference between day7 and day8 is 2, myjinxin is too weak, he can not climbing more than 1 meter per day ;-)

For nDays = 8, records = [[2,0],[8,7]], the output should be "Impossible".

same as the example 3, myjinxin is too weak, he can not climbing to 7 meter at day 8 ;-)

[[1,1],[2,0],[3,1],[4,2],[5,3],[6,4],[7,5],[8,6]]

The possible height at day8 can only be less than 7 meter.

*/

function mountaineering(n, a) {
	a = a.sort((a, b) => a[0] - b[0])
	let m = Math.max(a[0][0] - 1 + a[0][1], n - a.at(-1)[0] + a.at(-1)[1])
	for (let i = 0; i < a.length - 1; i++) {
		let d = (a[i + 1][0] - a[i][0] - Math.abs(a[i + 1][1] - a[i][1])) >> 1
		if (d === -1) return 'Impossible'
		m = Math.max(m, a[i][1] + d, a[i + 1][1] + d)
	}
	return m
}
