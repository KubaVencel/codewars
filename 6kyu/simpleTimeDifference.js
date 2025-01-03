/*
 
Simple time difference

Description:

In this Kata, you will be given a series of times at which an alarm sounds. Your task will be to determine the maximum time interval between alarms. Each alarm starts ringing at the beginning of the corresponding minute and rings for exactly one minute. The times in the array are not in chronological order. Ignore duplicate times, if any.

For example:
solve(["14:51"]) = "23:59". If the alarm sounds now, it will not sound for another 23 hours and 59 minutes.
solve(["23:00","04:22","18:05","06:24"]) == "11:40". The max interval that the alarm will not sound is 11 hours and 40 minutes.

In the second example, the alarm sounds 4 times in a day.

More examples in test cases. Good luck!

*/

function timeToMinutes(time)
{
  let parts = time.split(':');
  return parseInt(parts[0]) * 60 + parseInt(parts[1]);
}

function minutesToTime(int)
{
  let hours = parseInt(int / 60).toString();
  let minutes = (int % 60).toString();
  
  return hours.padStart(2, '0') + ':' + minutes.padStart(2, '0');
}

function solve(arr){
  let maxDiff = null;
  let lastTime = null;
  
  arr.sort();
  arr.push(minutesToTime(timeToMinutes(arr[0]) + 60*24));

  for (let i in arr) {
    let intTime = timeToMinutes(arr[i]);
        
    if (lastTime !== null) {
      let diff = intTime - (lastTime +1);
      maxDiff = (diff > maxDiff) ? diff : maxDiff;
    }
    
    lastTime = intTime;
  }
  
  return minutesToTime(maxDiff);
}
