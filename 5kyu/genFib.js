/*

Fibonacci Factory Function

Create a factory function genfib that returns a function fib that always returns the next Fibonacci number on each invocation ( it should return 0 when being called the first time ).

Example:

const fib = genfib();
fib(); // returns 0
fib(); // returns 1
fib(); // returns 1
fib(); // returns 2

*/

function genfib() {
	let a = 1, b = 0;
	return function fib() {
		[a, b] = [b, b + a]
		return a;
	}
}
