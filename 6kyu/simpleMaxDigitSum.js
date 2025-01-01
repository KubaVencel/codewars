/*

Simple max digit sum

In this Kata, you will be given an integer n and your task will be to return the largest integer that is <= n and has the highest digit sum.

For example:

solve(100) = 99. Digit Sum for 99 = 9 + 9 = 18. No other number <= 100 has a higher digit sum.
solve(10) = 9
solve(48) = 48. Note that 39 is also an option, but 48 is larger.

Input range is 0 < n < 1e11

More examples in the test cases.

Good luck!

*/

function solve(n){

    let str = n.toString();
    let secondDigit = str.slice(1,2);
    let firstDigit = str.slice(0,1);
    let rest = str.slice(1);
    if (secondDigit== '9')  return Number(  firstDigit + solve(Number(rest)).toString());
     
    
    let count = rest.split('').reduce((sum,digit)=> sum + 9 - Number(digit),0);

    if (count >1) return Number( (Number(firstDigit) -1).toString() + '9'.repeat(str.length - 1));

  
    return n;
    
}
