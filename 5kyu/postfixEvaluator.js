/*

Evaluate a postfix expression

Imagine you are in a universe where you can just perform the following arithematic operations:

	Addition (+)
	Subtraction (-)
	Multiplication (*)
	Integer Division (/)

A postfix expression is an expression where the operands come after the operator. Operators and operands are separared by a space.

Write a function that takes a string representing a postfix expression as input and returns what it evaluates to as an integer.

	You can assume that the input is always valid.
	You can assume there will be no divisions by zero

Examples

	25 45 + is equivalent to 25 + 45 --> 70
	20 40 + 60 * is equivalent to (20 + 40) * 60 --> 3600
	20 40 60 + * is equivalent to 20 * (40 + 60) --> 2000

*/

function postfixEvaluator(string) {
	let ops = {
		'+': (a, b) => b + a,
		'-': (a, b) => b - a,
		'*': (a, b) => b * a,
		'/': (a, b) => b / a | 0
	};
	return string.split(/\s/).reduce((stack, el) => {
		if (el in ops) {
			stack.push(ops[el](stack.pop(), stack.pop()));
		} else {
			stack.push(+el);
		}
		return stack;
	}, []).pop();
}
