/*

Summarize ranges

Description:

Given a sorted array of numbers, return the summary of its ranges.
Examples

[1, 2, 3, 4] ==> ["1->4"]
[1, 1, 1, 1, 1] ==> ["1"]
[0, 1, 2, 5, 6, 9] ==> ["0->2", "5->6", "9"]
[0, 1, 2, 3, 3, 3, 4, 5, 6, 7] ==> ["0->7"]
[0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10] ==> ["0->7", "9->10"]
[-2,0, 1, 2, 3, 3, 3, 4, 4, 5, 6, 7, 7, 9, 9, 10, 12] ==> ["-2", "0->7", "9->10", "12"]

*/

function summaryRanges(nums) {
  let res = []
  for (let b = 0; b < nums.length; b++) {
    let e = b;
    while (nums[e + 1] - nums[e] <= 1)
      e++;
    res.push(nums[b] == nums[e] ? `${nums[b]}` : `${nums[b]}->${nums[e]}`);
    b = e;
  }
  return res;
}
