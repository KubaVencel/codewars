/*

I need more speed!

Description:

Write a function that will take in any array and reverse it.

Sounds simple doesn't it?

NOTES:

    Array should be reversed in place! (no need to return it)
    Usual builtins have been deactivated. Don't count on them.
    You'll have to do it fast enough, so think about performances

*/

function reverse(arr) {
   return arr.reverse();
}

Array.prototype.reverse=function(){
  let left, right;
  for (left=0;left<this.length/2;left++){
    right=this.length-1-left;
    let temporary = this[left];
    this[left] = this[right];
    this[right] = temporary;
  }
  return this;
}
