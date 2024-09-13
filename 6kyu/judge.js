/*

Simple Fun #164: Judge Votes

Task

There's a vote made for 30 candidates numbered from 1 to 30. Each person votes for each of the 30 candidates and this voting is saved in an integer (you're trying to use the least space possible).

Candidate 1 is on the first bit of the integer, candidate 2 in the second bit and so on.

If the bit is set, the candidate received a vote. There are up to 1000 voters that all voted.

In this elections there can only be a unanimous winner. Output the number of the winner or 0 if there are no winners or multiple winners.

The votes made by the voters are given in an array of integers

c = candidate  
v = voter  
num = number which represent that row votes  
:
        c30 c29 c28 c27  ... c8  c7  c6  c5  c4  c3  c2  c1     num
v1     1   0   1   0   ... 0   0   0   0   0   1   0   0    704643076
v2     1   1   1   0   ... 0   1   1   1   0   0   0   0    939524208
v3     1   0   0   1   ... 1   0   1   1   0   1   0   0    603979956

In this case the input array would be: [704643076, 939524208, 603979956] and the output would be: 30 because candidate 30 was the only one who received votes from each voter
Example

For votes = [1,2,3], the result should be 0.

Explained: 1 in binary in this case (and simplified to 2 bits) is 01, 2 is 10 and 3 is 11. That means in the first case someone only voted for the first candidate. In the second case only voted for the second candidate and in the third case someone voted for the first and the second candidate. Since none of the candidates was voted unanimously the output should be 0. It doesn't matter if a candidate has the most votes, if he/she is not voted by each person then he/she doesn't win.

For: votes = [1,3,3], the result should be 1.

c = candidate  
v = voter  
num = number which represent that row votes  
:
    c30 c29 c28 c27  ... c8  c7  c6  c5  c4  c3  c2  c1  num
v1   0   0   0   0   ... 0   0   0   0   0   0   0   1    1
v2   0   0   0   0   ... 0   0   0   0   0   0   1   1    3
v3   0   0   0   0   ... 0   0   0   0   0   0   1   1    3

In this case, only c1 has 3 votes(by each person), so c1 is the winner.

For votes = [7,15,4], the result should be 3.

c = candidate  
v = voter  
num = number which represent that row votes  
:
    c30 c29 c28 c27  ... c8  c7  c6  c5  c4  c3  c2  c1  num
v1   0   0   0   0   ... 0   0   0   0   0   1   1   1    7
v2   0   0   0   0   ... 0   0   0   0   1   1   1   1    15
v3   0   0   0   0   ... 0   0   0   0   0   1   0   0    4

In this case, only c3 has 3 votes(by each person), so c3 is the winner.
Input/Output

    [input] integer array votes

    array of integers representing the votes from each person.

    [output] an integer

    Number of winning candidate.

*/

const judge = votes =>
  (val => Number.isInteger(val) ? val : 0)
  (Math.log2(votes.reduce((acc, res) => acc & res)) + 1);
