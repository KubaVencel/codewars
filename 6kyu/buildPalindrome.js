/*

Simple Fun #78: Build Palindrome

Task

Given a string str, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.
Example

For str = "abcdc", the output should be "abcdcba".
Input/Output

		[input] string str

		A string consisting of lowercase latin letters.

		Constraints: 3 ≤ str.length ≤ 10.

		[output] a string

*/

function buildPalindrome(str) {
	//loop through string 
	for (let i = 0; i < str.length; i++) {
		//append i characters reversed at the end of the string - str.substring()
		let newString = str + str.substring(0, i).split("").reverse().join("")
		//check if it is a palindrome
		if (newString === newString.split("").reverse().join(""))
			return newString
	}
}
