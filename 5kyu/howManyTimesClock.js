/*

T.T.T.33: Grandfather clock

Description

There is a grandfather clock. At one o'clock, it struck once; At two o'clock, it struck 2 times; etc.. At twelve o'clock, it struck 12 times. In addition, in half an hour, it struck once.

Give you a time period, can you calculate how many times it strucks?
Task

Complete function howManyTimes() that accepts two argument time1 and time2, they are two strings like this:"yyyy-MM-dd hh:mm:ss"

You need to calculate how many times it strucks and return an integer value.
Specification

	Each struck takes 1 second.
	time1 is always earlier than time2.
	time1 is inclusive, time2 is exclusive.
	Strucks use the 12-hour system. For example at 00:00 and 12:00, we get 12 strucks; while at 01:00 and 13:00, we get 1 struck.

Examples

howManyTimes("2016-08-14 12:00:00","2016-08-14 12:00:01") === 1
howManyTimes("2016-08-14 12:00:00","2016-08-14 12:00:11") === 11
howManyTimes("2016-08-14 12:00:00","2016-08-14 12:01:00") === 12
howManyTimes("2016-08-14 12:00:00","2016-08-14 12:30:00") === 12
howManyTimes("2016-08-14 12:00:00","2016-08-14 12:31:00") === 13
howManyTimes("2016-08-14 12:00:00","2016-08-14 13:01:00") === 14

*/

const howManyTimes = (...t) => {
	let c = 0, [a, b, hs] = [...t, t[0].split` `[0]].map(Date.parse);
	for (let he; hs < b; hs = he) {
		let os = Math.max(a, hs), oe = Math.min(b, he = hs + 36e5);
		c += os < oe && Math.max(0, Math.min(oe, hs + (new Date(hs).getHours() % 12 || 12) * 1e3) - Math.max(os, hs)) / 1e3 + ((hs += 18e5) >= os && hs < oe)
	}
	return c;
}
