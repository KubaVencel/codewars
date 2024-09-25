/*

MTV Cribs

Description:
Task

Given n representing the number of floors build a beautiful multi-million dollar mansions like the ones in the example below:

     /\
    /  \
   /    \
  /______\  number of floors 3
  |      |
  |      |
  |______|

     /\
    /  \
   /____\
   |    |   2 floors
   |____|

     /\
    /__\    1 floor
    |__|

Note: whitespace should be preserved on both sides of the roof. Number of floors will go up to 30. There will be no tests with invalid input.

If you manage to complete it, you can try a harder version here.

Good luck!

*/

function myCrib(n) {
  var outer = ' '.repeat(n)
  ,   inner = ''
  ,    crib = [];
  
  for (var i = 0; i < n; i++) {
    crib.push(outer + '/' + inner + '\\' + outer);
    outer = outer.slice(1);
    inner += '  ';
  }
  
  crib.push('/' + '_'.repeat(n * 2) + '\\');
  
  for (var i = 0; i < n - 1; i++)
    crib.push('|' + ' '.repeat(n * 2) + '|');
  
    crib.push('|' + '_'.repeat(n * 2) + '|');
  
  return crib.join("\n");
}
