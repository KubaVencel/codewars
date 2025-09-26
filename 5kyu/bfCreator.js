/*

BF Creator: Is a > b?

Description:

Preamble

You are writing a BF program and find yourself constantly writing the same logic for different parts of the program. You need some system to automatically generate the required code for your situation. That's what this kata tries to produce.

Task

Write a create function to return a BrainF**k program which determines if a > b when run.

Your function will be given the memory address of a and b together with c, which is an empty (0) memory space for your BF program's computation needs.

Your BF program should output the ASCII-representation of 0 or 1 to indicate if a <= b or a > b respectively.

	The memory addresses are positive integers >= 0. Think of memory as an array/list.
	The pointer is initially at cell 0.
	Yes, you're limited to 1 extra cell.
	Distance between max(address of a,b,c) and min(address of a,b,c) will never exceed 200 and you are to use only a, b, and c (assume other cells contain data of your program you don't want to corrupt).
	Your output BF code should NOT contain a , otherwise an exception will be raised (you don't want to alter the input stream used by other parts of your program).
	There are 50 random tests. BF programs with a "not so slow" algorithm should be able to pass the tests.

BF interpreter specs

	Each memory cell capacity is 1 byte.
	255 + 1 = 0 and 0 - 1 = 255.
	[, ] and . will work normally. A , will cause the interpreter to raise an exception due to reasons stated above.
	The tape doesn't wrap around. An error would be thrown if you attempt do so.
	You can look at the interpreter function used in the sample tests section.

*/

function create(a, b, c) {
	const [ab, ba, ac, ca, cb] = [[a, b], [b, a], [a, c], [c, a], [c, b]].map(([x, y]) => ("><"[+(x > y)]).repeat(Math.abs(x - y)));
	return ">".repeat(b) + `[-${ba}[-[-${ac}+${ca}]]${ac}[-${ca}+${ac}]${cb}]${ba}[[-]${ab}+${ba}]${ab}.`;
}
