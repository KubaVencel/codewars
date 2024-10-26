/*

Simple Fun #259: Different Digits Number Search

Task

Given an array of integers arr, find the leftmost number that has a decimal representation which doesn't contain any digit more than once. If there is no such number, return -1 instead.
Input/Output

[input] array.integer arr

Array of positive integers.

2 ≤ inputArray.length ≤ 100000,

10 ≤ inputArray[i] ≤ 10000000.

[output] an integer
Example

For arr = [22, 111, 101, 124, 33, 30], the output should be 124

For arr = [1111, 404], the output should be -1.

*/

const differentDigitsNumberSearch = arr => arr.find(n => n.toString().length === new Set([...n.toString()]).size) || -1;
