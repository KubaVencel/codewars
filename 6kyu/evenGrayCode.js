/*

Even Gray Code

Background:

The Gray Code is a representation of binary integers in which successive integers differ in only 1 bit. The bit switched at each step is the one that yields the smallest value not yet represented. See Gray Code.

The "Even Gray Code" requires successive binary integers to differ in an even number of bits. The bits changed at each step should yield the smallest value not yet represented in the standard binary encoding.

Example - The 4-bit Even Gray Code:
0000   Start at 0
0011   Switch bits 1,2
0101   Switch bits 2,3
0110   Switch bits 1,2
1001   Switch all 4 bits
1010   Switch bits 1,21100   Switch bits 2,3
1111   Switch bits 1,2

Inputs:

The size of the Even Gray Code, a integer between 2 and 20.

The position where we want the Even Gray Code value, a non-negative integer guaranteed to be smaller than the number of elements in the Even Gray Code of length size.

Output:

A string representing the value at position position of the Even Gray Code of length size.

Example:

even_gray_code(4,5) should return '1010', because, as shown above, 1010 is the value of the Even Gray Code of length 4 at position 5. (The first position is position 0.)

Source: International Collegiate Programming Contest, North Central North American Regional, 2023.

*/

function evenGrayCode(size, position) {
  return (2 * position + (position.toString(2).split('1').length + 1) % 2).toString(2).padStart(size, '0');
}
