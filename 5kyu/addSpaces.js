/*

Simple Fun #343: Add Spaces Between 1 To n

Task

The task is very simple: You are given a string s. It contains all numbers from 1 to n(1<n<50) without duplicates, and the order is confusing. You need to add a space between each of the two adjacent numbers to make them look clearer.

If there are multiple valid solutions, you only need to return one of them.
Examples

For s="1234", the output should be "1 2 3 4".

For s="10987654321", the output should be "10 9 8 7 6 5 4 3 2 1".

For s="121110987654312",

the output may be "12 11 10 9 8 7 6 5 4 3 1 2",

or "1 2 11 10 9 8 7 6 5 4 3 12"

*/

const addSpaces = str => {
	const { 0: _, ...stats } = { ...Array(Math.min(str.length, 9) / 2 + str.length / 2 + 1).fill(1) };

	const handleStr = (s, stats) => {
		if (stats[s]) return s;

		for (let i = 1; i <= 2; i++) {
			const s1 = s.slice(0, i);

			const str1 = stats[s1] && handleStr(s.slice(i), { ...stats, [s1]: 0 });
			if (str1 && str1 !== 'Impossible!') return s1 + ' ' + str1;
		}

		return 'Impossible!';
	}

	return handleStr(str, { ...stats });
}
