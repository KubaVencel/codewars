/*

Parse bank account number

Returns the bank account number parsed from specified string.

 You work for a bank, which has recently purchased an ingenious machine to assist in reading letters and faxes sent in by branch offices.
 The machine scans the paper documents, and produces a string with a bank account that looks like this:

 _     _  _     _  _  _  _  _
| |  | _| _||_||_ |_   ||_||_|
|_|  ||_  _|  | _||_|  ||_| _|

 Each string contains an account number written using pipes and underscores.
 Each account number should have at least one digit, all of which should be in the range 0-9.

 Your task is to write a function that can take bank account string and parse it into actual account numbers.

 @param {string} bankAccount
 @return {number}

Examples:


   '    _  _     _  _  _  _  _ \n'+
   '  | _| _||_||_ |_   ||_||_|\n'+     => 123456789
   '  ||_  _|  | _||_|  ||_| _|\n'

   ' _  _  _  _  _  _  _  _  _ \n'+
   '| | _| _|| ||_ |_   ||_||_|\n'+     => 23056789
   '|_||_  _||_| _||_|  ||_| _|\n',

   ' _  _  _  _  _  _  _  _  _ \n'+
   '|_| _| _||_||_ |_ |_||_||_|\n'+     => 823856989
   '|_||_  _||_| _||_| _||_| _|\n',

*/

function parseBankAccount(bankAccount) {
    const NUMBERS = {
        ' _ | ||_|' : 0,
        '     |  |' : 1,
        ' _  _||_ ' : 2,
        ' _  _| _|' : 3,
        '   |_|  |' : 4,
        ' _ |_  _|' : 5,
        ' _ |_ |_|' : 6,
        ' _   |  |' : 7,
        ' _ |_||_|' : 8,
        ' _ |_| _|' : 9,
      }
    

    let lines = bankAccount.split('\n')
    let result = ''

    for (let i = 0; i < lines[0].length; i += 3) {
        let num = lines.map(line => line.slice(i, i + 3)).join('')
        let digit = NUMBERS[num]
        result += digit
    }

    return +result
}
