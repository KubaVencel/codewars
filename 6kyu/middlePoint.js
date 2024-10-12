/*

Find the in-between point

Description:

For this kata, you are given three points (x1,y1,z1), (x2,y2,z2), and (x3,y3,z3) that lie on a straight line in 3-dimensional space. You have to figure out which point lies in between the other two.

Your function should return 1, 2, or 3 to indicate which point is the in-between one.

*/

function middle_point(x1, y1, z1, x2, y2, z2, x3, y3, z3)
{
  var x = [x1, x2, x3].sort((a, b)=>a-b);
  var y = [y1, y2, y3].sort((a, b)=>a-b);
  var z = [z1, z2, z3].sort((a, b)=>a-b);

  if(x[1] == x1 && y[1] == y1 && z[1] == z1) return 1;
  else if(x[1] == x2 && y[1] == y2 & z[1] == z2) return 2;
  else return 3;
}     
