/*

Reverse polish notation calculator

Description:

Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

For your convenience, the input is formatted such that a space is provided between every token.

Empty expression should evaluate to 0.

Valid operations are +, -, *, /.

You may assume that there won't be exceptional situations (like stack underflow or division by zero).

*/

var operands = {
  '+': function (b, a) { return a + b;},
  '-': function (b, a) { return a - b;},
  '*': function (b, a) { return a * b;},
  '/': function (b, a) { return a / b;}
};

function calc(expr) {
  expr = expr || '0';
  return +expr.split(/\s/g).reduce(function (stack, current) {
      stack.push(operands[current] ? operands[current](+stack.pop(), +stack.pop()) : current);
    return stack;
  }, []).pop();
}
