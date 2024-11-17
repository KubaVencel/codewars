/*

T.T.T.61: Alien's magic

Description:
Description

Some aliens are hiding in codewars. They have a magic that can change the time and space. The name of this magic is called lalala. The aliens will spell out the magic spell lalala, all the time and space of the object will be changed.

Example 1:

things=[
"In the afternoon, John had dinner at the restaurant.",
"At noon, Tom stool in the toilet."
]
lalala(things) === 
[
"At noon, John had dinner in the toilet.",
"In the afternoon, Tom stool at the restaurant."
]

Example 2:
things=[
"In the afternoon, John had dinner at the restaurant.",
"At noon, Tom stool in the toilet.",
"At 10 in the evening, Anne dancing pole dance in the bar."
]
lalala(things) === 
[
"At noon, John had dinner in the toilet.",
"At 10 in the evening, Tom stool in the bar.",
"In the afternoon, Anne dancing pole dance at the restaurant."
]

As you can see, the order of the change of time and space is:

first --> last
second --> first
third --> second
and so on...

Task

Complete function lalala that accepts a argument things, returns the result in accordance with the above rules. You can assume that things is an array containing at least two string elements.

*/

function lalala(t){
  t = t.map(e=> e.match(/^([^\,]+,)(.+)((?:in|at|on)\sthe\s[a-z\s]+\.)+$/));
  let res = [];
  for (let i=0; i<t.length; i++) 
    res.push( `${t[(i+1)%t.length][1]}${t[i][2]}${t[(i+1)%t.length][3]}`);
  return res;
}
