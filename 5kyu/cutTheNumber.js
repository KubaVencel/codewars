/*

Simple Fun #359: Cut The Number

Task

You are given a number in string format, and a target number. We can "cut" the number into some pieces, and then calculate their sum value. Your task is to find the maximum sum value, which is closest to the target number, but no more than the target number. If can not got a valid result, return -1.
Example

For number = "12346", target = 50, the output should be 43.

"12346" can be "cut" into pieces with many ways:
1 2346
12 346
123 46
1234 6
12 34 6
.......
.......
1 2 34 6
.......
.......
1 2 3 4 6

In these ways, the maximum sum value is:
1 + 2 + 34 + 6 = 43

For number = "222", target = 2, the output should be -1.

These is no way to cut "222" and let their sum value less than or equals to 2.

For number = "106", target = 10, the output should be 7.

1 + 0 + 6 = 7

For number = "106", target = 20, the output should be 16.

10 + 6 = 16

For number = "1234", target = 10, the output should be 10.

1 + 2 + 3 + 4 = 10

For number = "1234", target = 20, the output should be 19.

12 + 3 + 4 = 19

For number = "1234", target = 30, the output should be 28.

1 + 23 + 4 = 28

For number = "1234", target = 50, the output should be 46.

12 + 34 = 46

For number = "1234", target = 1235, the output should be 1234.

When the target number is greater than the number, no need to cut it.
Note

	0 < number.length < 20

	0 < target <= 10000

	In order to avoid timeout, be aware of the code's performance ;-)

	Happy Coding ^_^

*/

const cut = (number, target) => {
	if (number <= target) return +number;

	let max = -1;
	for (let i = 1; i < number.length; i++) {
		const [left, right] = [+number.slice(0, i), number.slice(i)];

		if ([...right].reduce((acc, dgt) => acc + +dgt, left - target) > 0) break;

		max = Math.max(max, left + cut(right, target - left));
	}

	return max;
}
