/*

String average

You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"

*/

const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

const averageString = (str) => {
  const nums = str.split(" ").map(v => numbers.indexOf(v));
  if (nums.includes(-1)) return "n/a"
  const sum = nums.reduce((prev, cur) => prev + cur);
  const average = Math.floor(sum / nums.length)
  return numbers[average]
}
