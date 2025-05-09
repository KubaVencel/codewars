/*

Is Integer Array?

Description:

Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}

    returns true  / True if every element in an array is an integer or a float with no decimals.
    returns true  / True if array is empty.
    returns false / False for every other input.

*/

function isIntArray(arr) {
  return Array.isArray(arr) && arr.every(function (x) { return Math.floor(x) === x });
}
