/*

Find character

Description:

Give you a character matrix. Find out the character which has the smallest amount.
Arguments:

    matrix: A string that contains some letters. Each row is separated by "\n".

Results & Note:

    Returns the characters which has smallest amount, using string format.
    If more than one characters are found, sort them according to the order A-Za-z0-9.
    You can assume that there are at least two characters in the matrix.
    Please ignore the "\n" ;-)

Some Examples

matrix=
00000000
0000O000
00000000
00000000
00000000

result -> "O"

matrix=
mmmmmmmmmmmmm
mmmmmmmmmmmmm
mmmmmmmmmmmmm
mmmmmmmmmnmmm

result -> "n"

matrix=
AAAAAAAAAAA
AABBBBBBBBB
BCCCCCCCCDD
DDDDEEEEFFF

result -> "F"

matrix=
AAAAA
ABBBB
BCCCC
DDDDE
EEEEF
FFFFF

result -> "CD"

*/

function findCharacters(matrix) {
  
  const counts = matrix
    .match(/\w/g)
    .reduce((a, b) => (a[b] = (a[b] || 0) + 1, a), {});
  
  const min = Math.min(...Object.values(counts));
  
  const type = char => /[A-Z]/.test(char) * 1 || /[a-z]/.test(char) * 2 || 3;
  
  return Object.keys(counts)
      .filter(key => counts[key] === min)
      .sort((a, b) => (type(a) === type(b) ? 1 : -1) * a.localeCompare(b))
      .join('');
  
}
