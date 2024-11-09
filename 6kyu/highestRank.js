/*

Highest Rank Number in an Array

Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.
Examples

[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

*/

function highestRank(arr){
  let obj = {};
  arr.forEach(function(elem){
     if(obj[elem] === undefined)
       obj[elem] = 0;
     obj[elem]++;
  });
  let keys = Object.keys(obj), highest = 0, key;
  keys.forEach(function(elem){
     if(obj[elem] >= highest)
     {
        highest = obj[elem];
        key = elem;
     }
  })
  return parseInt(key);
}
