/*

Base64 Encoding

Extend the String object (JS) or create a function (Python, C#) that converts the value of the String to and from Base64 using the ASCII (UTF-8 for C#) character set.
Example (input -> output):

'this is a string!!' -> 'dGhpcyBpcyBhIHN0cmluZyEh'

You can learn more about Base64 encoding and decoding here.

Note: This kata uses the non-padding version ("=" is not added to the end).

*/

const base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

String.prototype.toBase64 = function() {
	return this.split('')
		.map((e) => { return ("00000000" + e.charCodeAt(0).toString(2)).slice(-8); })
		.reduce((p, c) => { return p + c; })
		.match(/.{1,6}/g)
		.map((e) => { return base64Chars[parseInt(e, 2)]; })
		.reduce((p, c) => { return p + c; });
};

String.prototype.fromBase64 = function() {
	return this.split('')
		.map((e) => { return ("000000" + base64Chars.indexOf(e).toString(2)).slice(-6); })
		.reduce((p, c) => { return p + c; })
		.match(/.{1,8}/g)
		.map((e) => { return String.fromCharCode(parseInt(e, 2)) })
		.reduce((p, c) => { return p + c; });
};
