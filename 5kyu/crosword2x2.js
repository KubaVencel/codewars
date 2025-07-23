/*

Crossword Puzzle! (2x2)

Description:
Our Setup

Alice and Bob work in an office. When the workload is light and the boss isn't looking, they play simple word games for fun. This is one of those days!
Today's Game

Alice found a little puzzle in the local newspaper and challenged Bob on how many ways it could be solved using two different words. Bob suggested the condition that letters can score different points. Of course, they would then soon both sneak away to write up an algo trying to be first to finish!
The Puzzle

This tiniest of crosswords is just a 2 x 2 grid with one square blocked:

< the 4 possible grids, shown here as tuples of 2 strings >
	( '#_',        ( '_#',        ( '__',        ( '__',
	  '__' )         '__' )         '#_' )         '_#' )

The Words

There are 128 valid 2-letter words available to complete this puzzle:

	  "AA"  "AB"  "AD"  "AE"  "AG"  "AH"  "AI"  "AL"
	  "AM"  "AN"  "AR"  "AS"  "AT"  "AW"  "AX"  "AY"
	  "BA"  "BE"  "BI"  "BO"  "BY"  "CH"  "DA"  "DE"
	  "DI"  "DO"  "EA"  "ED"  "EE"  "EF"  "EH"  "EL"
	  "EM"  "EN"  "ER"  "ES"  "ET"  "EW"  "EX"  "FA"
	  "FE"  "FY"  "GI"  "GO"  "GU"  "HA"  "HE"  "HI"
	  "HM"  "HO"  "ID"  "IF"  "IN"  "IO"  "IS"  "IT"
	  "JA"  "JO"  "KA"  "KI"  "KO"  "KY"  "LA"  "LI"
	  "LO"  "MA"  "ME"  "MI"  "MM"  "MO"  "MU"  "MY"
	  "NA"  "NE"  "NI"  "NO"  "NU"  "NY"  "OB"  "OD"
	  "OE"  "OF"  "OH"  "OI"  "OK"  "OM"  "ON"  "OO"
	  "OP"  "OR"  "OS"  "OU"  "OW"  "OX"  "OY"  "PA"
	  "PE"  "PI"  "PO"  "QI"  "RE"  "SH"  "SI"  "SO"
	  "ST"  "TA"  "TE"  "TI"  "TO"  "UG"  "UH"  "UM"
	  "UN"  "UP"  "UR"  "US"  "UT"  "WE"  "WO"  "XI"
	  "XU"  "YA"  "YE"  "YO"  "YU"  "ZA"  "ZE"  "ZO"

The Values

The 26 alphabet letters are assigned these values for scoring solutions:

	  A   B   C   D   E   F   G   H   I   J   K   L   M
	  1   3   3   2   1   4   2   4   1   8   5   1   3

	  N   O   P   Q   R   S   T   U   V   W   X   Y   Z
	  1   1   3  10   1   1   1   1   4   4   8   4  10

A Snag!

One square has a letter in it! You must find words to work with this letter.
Two Examples

   puzzle:  use'TO'  use'DO'      puzzle:  use'ZA'  nothing!

	 # _      # _      # D          _ #      _ #      ? # 
	 _ O      T O      T O          Z _      Z A      Z A 
	 
	one of many solutions          no solution possible
	 score: 5 points                (no score)

Some Notes

	each puzzle has 2 spaces, 1 block, 1 letter
	underscores _ represent spaces for squares
	the hashtag # is the one blocked-out square
	placement of blocked square can't be altered
	the letter already written in can't be replaced
	across is left to right, down is top to bottom
	solution words overlap, thus share one letter
	solution words must be two different words
	all letters are uppercase and all input is valid

Input

You will be passed a (list) of 2 strings of 2 chars each representing the puzzle grid rows. The words and values (lists) will be available in your function scope. Consult examples below for data types in your language.
Output

The task is to return all valid solutions for the given puzzle. A solution has 3 elements: an across word, a down word, and a score. The words must be distinct and fit the given puzzle grid. The score is the sum of both letters in both words, so the shared letter is counted twice. The resulting solutions should be sorted first from highest to lowest score, and then alphabetically beginning with the across word. As the first example shows, some across and down words can be reversed to form two distinct solutions.

words  // an array of 128 available 2-letter words
values // an object of letters keyed to points

crossword2x2(['#_', '_G'])
 // input is an array of 2 strings
 // should return an array of arrays:
  [['AG', 'UG',  6], ['UG', 'AG',  6]]

crossword2x2(['_V', '_#'])
 // should return
  []

crossword2x2(['Q_', '#_'])
 // should return
  [['QI', 'IF', 16], ['QI', 'ID', 14], ['QI', 'IN', 13],
   ['QI', 'IO', 13], ['QI', 'IS', 13], ['QI', 'IT', 13]]

Enjoy!

...and please consider one of the following kata to solve next:

	Interlocking Binary Pairs
	Setting Places for the Dead
	Four Letter Words ~ Anagrams
	Shuffle an Integer
	Minimum Percentage of Visitors that Ate All Foods
	Is Sator Square?
	Playing With Toy Blocks ~ Can you build a 4x4 square?
	Four Letter Words ~ Mutations

*/

let crossword2x2 = p => {
	let $ = p.map(x => x.replace(/\_/g, '.')), _ = x => x.includes('#'), row = +(_($[0])), col = +(_($[0][0] + $[1][0])), solutions = [], across = words.filter(x => new RegExp($[row]).test(x));
	for (let A of across) for (let D of words.filter(x => new RegExp((row ? $[0][col] : '') + A[col] + (row ? '' : $[1][col])).test(x))) if (D !== A) solutions.push([A, D, [...(A + D)].reduce((a, b) => a + values[b], 0)]);
	return solutions.sort((a, b) => b[2] - a[2]);
};
