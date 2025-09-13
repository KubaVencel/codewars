/*

Streams - endless arrays

The goal of this kata is to write a Stream - an endless sequence of elements. Such a Stream usually has two methods head(), requesting the first element of the current Stream and tail() to get the rest of the current Stream without the head.

An example use could be:

function increment(n) {return n + 1};
function id(n) {return n};
function sqr(n) {return n * n};

const naturalNumbers = new Stream(0, id, increment);

console.log(naturalNumbers.head()) // 0
console.log(naturalNumbers.tail().head()) // 1
console.log(naturalNumbers.tail().tail().head()) // 2

Implement a Stream object.

Further explenations: A Stream is constructed using three parameters:

const naturalNumbers = new Stream(0, id, increment);

The second parameter is the so called output function. These functions controls the result of calling head(). The third parameter is the stepping function. It is very common to have just the increment function used for this. The first parameter is the start value. The first call to head() will return <output_function>(<start_value>)

A call to tail() should always returns a new Stream object.

*/

class Stream {
	constructor(start, output, stepping) {
		this.start = start;
		this.output = output;
		this.stepping = stepping;
	}
	head() {
		return this.output(this.start);
	}
	tail() {
		return new Stream(this.stepping(this.start), this.output, this.stepping);
	}
}
