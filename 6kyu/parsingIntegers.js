/*

Regexp basics - parsing integers``

Description:

Implement a function/class, which should return an integer if the input string is in one of the formats specified below, or null/nil/None otherwise.

Format:

    Optional - or +
    Base prefix 0b (binary), 0x (hexadecimal), 0o (octal), or in case of no prefix decimal.
    Digits depending on base

Any extra character (including whitespace) makes the input invalid, in which case you should return null/nil/None.

Digits are case insensitive, but base prefix must be lower case.

See the test cases for examples.

*/

String.prototype.toInteger=function(){
  return  /^[+-]?\d+$/.test(this)             ? parseInt(this) : 
          /^[+-]?0x[\dA-Fa-f]+$/.test(this)   ? parseInt(this,16) :
          /^[+-]?0o[0-7]+$/.test(this)        ? parseInt(this.replace(/0o/,""),8) :
          /^[+-]?0b[01]+$|^\d+0b$/.test(this) ? parseInt(this.replace(/0b/,""),2) : null
}
