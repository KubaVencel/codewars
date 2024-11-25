/*

The most common letter

Description:

Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.

If such letters are two or more, choose the one that appears in the string( earlier.

For example:

('my mom loves me as never did', 't') => 'ty tot loves te as never did'
('real talk bro', 'n') => 'neal talk bno'
('great job go ahead', 'k') => 'grekt job go khekd'

Fundamentals
Strings
Arrays

*/

function replaceCommon(string, letter) {
  const map = new Map();
  [...string].forEach(el => {
    if (el !== ' ') {
      map.has(el) ? map.set(el, (map.get(el)) + 1) : map.set(el, 1);
    }
  })
  const max = [...map.entries()].reduce((a, b) => b[1] > a[1] ? b : a);
  return string.split(max[0]).join(letter);
}
