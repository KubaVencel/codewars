/*

The Office II - Boredom Score

Description:

Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.

You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

Each department has a different boredom assessment score, as follows:

accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25

Depending on the cumulative score of the team, return the appropriate sentiment:

<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'

The Office I - Outed
The Office III - Broken Photocopier
The Office IV - Find a Meeting Room
The Office V - Find a Chair

*/

const SCORES = {
  accounts: 1,
  finance: 2,
  canteen: 10,
  regulation: 3,
  trading: 6,
  change: 6,
  IS: 8,
  retail: 5,
  cleaning: 4,
  'pissing about': 25
};

function boredom(staff){
  let val = Object.keys(staff).reduce((acc, cur) => acc + SCORES[staff[cur]], 0);
    
  if (val <= 80) return 'kill me now';
  if (val > 100) return 'party time!!';
  return 'i can handle this';
}
