/*

The Look and Say sequence

From Wikipedia:

In mathematics, the look-and-say sequence is the sequence of integers beginning as follows:

1, 11, 21, 1211, 111221, 312211, …

To generate a member of the sequence from the previous member, read off the digits of the previous member, counting the number of digits in groups of the same digit. For example:

1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.
1211 is read off as "one 1, then one 2, then two 1s" or 111221.
111221 is read off as "three 1s, then two 2s, then one 1" or 312211.

Your mission is to write a function which, given an integer n as parameter, returns a comma separated list of the first n terms of the sequence. For 0, an empty string shall be returned.
Examples

2  -->  "1,11"
3  --> "1,11,21"
5  --> "1,11,21,1211,111221"

*/

function getLines(line) {
	if (line === 0) return "";
	let str = ["1"];
	for (let i = 0; i < line - 1; i++) {
		const arr = str[i].match(/(.)\1*/g).map(el => el.length.toString() + el[0].toString()).join("")
		str.push(arr);
	}
	return str.join(",");
}
