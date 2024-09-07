/*

Apply offset to subtitles

Description:

You are given a line from a movie subtitle file as a string.
The line consists of time interval when the text is shown:

start(hh:mm:ss,ms) --> stop(hh:mm:ss,ms)

and the text itself, for example:

01:09:02,684 --> 01:09:03,601 Run Forrest, run!

Your task is to write a function subs_offset_apply which takes such string and offset
(integer) in miliseconds as arguments, and returns the string with the offset applied.
Examples:

string = "01:09:02,684 --> 01:09:03,601 Run Forrest, run!"  
subs_offset_apply(string, 3663655)
output: "02:10:06,339 --> 02:10:07,256 Run Forrest, run!"

"00:43:22,074 --> 00:43:24,159 No, I am your father."
subs_offset_apply(string, 1789)   
output: "00:43:23,863 --> 00:43:25,948 No, I am your father." 

"00:03:06,241 --> 00:03:07,618 I'll be back."
subs_offset_apply(string, -21789) 
output: "00:02:44,452 --> 00:02:45,829 I'll be back."

Time constraints:

00:00:00,000 <= t <= 99:59:59,999

In case of too big negative or positive offset, which results in exceeding the constraints,
the function should return a string "Invalid offset".
You'll be given only valid strings.
Have Fun!
Description:

You are given a line from a movie subtitle file as a string.
The line consists of time interval when the text is shown:

start(hh:mm:ss,ms) --> stop(hh:mm:ss,ms)

and the text itself, for example:

01:09:02,684 --> 01:09:03,601 Run Forrest, run!

Your task is to write a function subs_offset_apply which takes such string and offset
(integer) in miliseconds as arguments, and returns the string with the offset applied.
Examples:

string = "01:09:02,684 --> 01:09:03,601 Run Forrest, run!"  
subs_offset_apply(string, 3663655)
output: "02:10:06,339 --> 02:10:07,256 Run Forrest, run!"

"00:43:22,074 --> 00:43:24,159 No, I am your father."
subs_offset_apply(string, 1789)   
output: "00:43:23,863 --> 00:43:25,948 No, I am your father." 

"00:03:06,241 --> 00:03:07,618 I'll be back."
subs_offset_apply(string, -21789) 
output: "00:02:44,452 --> 00:02:45,829 I'll be back."

Time constraints:

00:00:00,000 <= t <= 99:59:59,999

In case of too big negative or positive offset, which results in exceeding the constraints,
the function should return a string "Invalid offset".
You'll be given only valid strings.
Have Fun!

*/

function parseTime(str) {

  return str
    .match(/\d+/g)
    .reduce((a, b, i) => a * (i < 3 ? 60 : 1000) + +b, 0);
    
}

function formatTime(ms) {

  const pad = (n, len = 2) => `${Math.floor(n)}`.padStart(len, '0');

  return pad(ms / 3600000 % 100) +
   ':' + pad(ms / 60000 % 60) +
   ':' + pad(ms / 1000 % 60) +
   ',' + pad(ms % 1000, 3);

}

function subsOffsetApply(str, offset) {

  const from = parseTime(str.slice(0, 12)) + offset;
  const to = parseTime(str.slice(17, 29)) + offset;
  
  if (from < 0 || to >= 360000000)
    return 'Invalid offset';

  return formatTime(from) + ' --> ' + formatTime(to) + str.slice(29);
  
}
