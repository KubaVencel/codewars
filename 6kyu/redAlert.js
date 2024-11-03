/*

Simple Fun #346: Red Alert

Description:

We implemented a red alert effect on the web page. It uses hex code to represent colors such as "#120000", "#FF0000". Since it only represents red color, the last 4 chars are always "0000".

Its color is gradual, from light to dark, and from dark to light.

Specifically, the color code increases or decreases by 1 per 4 ms. Color changes like this:

increasing ------->
   0 ms       1-4 ms       5-8 ms      ...      xxxxms 
"#000000" -> "#010000" -> "#020000" -> ... -> "#FF0000"  -> ...

decreasing ------->                          increasing again-->
    xxxx ms     ...     xxxxms       xxxxms 
-> "#FE0000" -> ... -> "#010000" -> "#000000" -> "#010000" -> ...

and so on..

Task

You are given a non negative integer n. Your task is to calculate the color code at the nth ms. The result should be "#XX0000". XX means two hex chars(numbers or uppercase letters).
Examples

For n = 1. The output should be "#010000".

For n = 1024. The output should be "#FE0000".

For n = 2048. The output should be "#020000".
Note

    All inputs are valid.

    0 <= n < 10^13

    Happy Coding ^_^

*/

function redAlert(n, size = 4) {

  if (!n) 
    return '#000000';

  let quartet = Math.floor((n - 1) / size)
  ,   is_incr = Math.floor(quartet / 255) % 2 === 0
  ,    offset = quartet % 255 + 1;
  
  let dec = is_incr ? offset : 255 - offset
  ,   hex = ('0' + dec.toString(16).toUpperCase()).slice(-2);
  
  return `#${hex}0000`;

}
