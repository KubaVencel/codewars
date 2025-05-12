/*

Now that's a crib!

MTV Cribs is back!

If you haven't solved it already I recommend trying this kata first.
Task

Given n representing the number of floors build a penthouse like this:

				___
			 /___\                
			/_____\
			|  _  |     1 floor
			|_|_|_|
		  
			 _____
			/_____\
		 /_______\
		/_________\             
	 /___________\
	 |           |
	 |    ___    |     2 floors
	 |   |   |   |
	 |___|___|___|
 
			_______
		 /_______\
		/_________\
	 /___________\
	/_____________\
 /_______________\
/_________________\
|                 |         3 floors
|                 |
|      _____      |
|     |     |     |
|     |     |     |
|_____|_____|_____|

Note: whitespace should be preserved on both sides of the roof. No invalid input tests.

Good luck!

*/

function myCrib(n) {

	const peak = ' '.repeat(2 * n) + '_'.repeat(2 * n + 1) + ' '.repeat(2 * n),
		slat = i => ' '.repeat(2 * n - i - 1) + '/' + '_'.repeat(2 * (n + i) + 1) + '\\' + ' '.repeat(2 * n - i - 1),
		roof = [peak, ...Array.from({ length: 2 * n }, (_, i) => slat(i))],
		wall = ' '.repeat(6 * n - 1),
		head = ' '.repeat(2 * n) + '_'.repeat(2 * n - 1) + ' '.repeat(2 * n),
		door = ' '.repeat(2 * n - 1) + '|' + ' '.repeat(2 * n - 1) + '|' + ' '.repeat(2 * n - 1),
		jamb = '_'.repeat(2 * n - 1) + '|' + '_'.repeat(2 * n - 1) + '|' + '_'.repeat(2 * n - 1),
		side = i => '|' + (i === n - 1 ? head : i === 2 * n - 1 ? jamb : i >= n ? door : wall) + '|',
		base = Array.from({ length: 2 * n }, (_, i) => side(i)),
		home = [...roof, ...base],
		welcome = a => a.join('\n')

	return welcome(home)
}
