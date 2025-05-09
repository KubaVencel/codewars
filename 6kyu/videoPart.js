/*

Simple Fun #97: Video Part

Description:
Task

You have been watching a video for some time. Knowing the total video duration find out what portion of the video you have already watched.
Example

For part = "02:20:00" and total = "07:00:00", the output should be [1, 3].

You have watched 1 / 3 of the whole video.
Input/Output

    [input] string part

    A string of the following format "hh:mm:ss" representing the time you have been watching the video.

    [input] string total

    A string of the following format "hh:mm:ss" representing the total video duration.

    [output] an integer array

    An array of the following format [a, b] (where a / b is a reduced fraction).

*/

function videoPart(part, total) {
  const partSplit = part.split(':')
  const totalSplit = total.split(':')
  
  const partSeconds = Number(partSplit[0]) * 60 * 60 + Number(partSplit[1]) * 60 + Number(partSplit[2])
  const totalSeconds = Number(totalSplit[0]) * 60 * 60 + Number(totalSplit[1]) * 60 + Number(totalSplit[2])
 
  let input1 
  let input2
  
  for(let i = 1; i <= totalSeconds; i++){
    if(totalSeconds % i === 0 && partSeconds % i === 0){
      input1 = i
      input2 = i
    }
  }
  return [partSeconds/input1, totalSeconds/input2]
}
