/*

Two levels arrays

You have to write an algorithm that flatten an arrays structure to 2 levels. It means that each array under the second level will be merge to its parent. Only two levels are kept.

Empty arrays are ignored.

array = [1, [2, 3], [4, 5, [6, 7, 8], 9, 10, [11, [12, [13, 14], 15], 16], 17], 18];
return [1,[2,3],[4,5,6,7,8,9,10,11,12,13,14,15,16,17], 18]

array = [1,[2, 3, [], [4, [], 5]]]
return [1,[2,3,4,5]]

*/

const flatten = a => Array.isArray(a) ? a.reduce((acc, v) => acc.concat(Array.isArray(v) ? flatten(v) : v), []) : a;
const flattenTwoLevels = a => a.map(flatten);
