/*

Crazy rabbit

Crazy rabbit is in a coffee field with boundries in an initial given cell (pos = 0 in example). Each field cell might have coffee beans.


  |             |
  |R____________|
   2 2 4 1 5 2 7 # Crazy rabbit at the start"

Crazy rabbit eats all coffee beans that available in the cell. And his jump power increases. Total jump power is equal to the number of total beans eaten

  |             |
  |R____________|
   0 2 4 1 5 2 7 # Crazy rabbit eat coffee beans and his jump power is now 2

Crazy rabbit jumps (initially to the right) if he has a jump power.

	 _
  | / \         |
  |R___↓________|
   0 2 4 1 5 2 7 #Crazy rabbit jumps to next position

Crazy rabbit bounces back from a boundries if he jumps too strong


		   ___
  |       /   \ |
  |      /     \|
  |     /     / |
  |____R_____↓__|
   0 2 0 1 5 2 7  # next jump will have power of 6, because he ate 4 more coffee beans)

Crazy rabbit position in a field cell is always in the middle. That means that if Crazy rabbit stays right next to the border and have power of jump = 1 then he will be bounced back to the same positon.

After hitting a boundry Crazy rabbit jumps in an opposite direction.

You will be given:

	a field as a list (linear array) of numbers

Can Crazy rabbit eat all the beans? return boolean

*/

function crazyRabbit(field, pos) {
	let counter = 0;
	let jumpPower = 0;
	let direction = 1;

	while (beansInField(field) && counter++ < 500) {
		jumpPower = jumpPower + field[pos];
		field[pos] = 0;

		for (let i = 0; i < jumpPower; i++) {
			pos = pos + direction;
			if (pos > field.length - 1) {
				direction = -1;
				pos = pos - 1;
			} else if (pos < 0) {
				direction = 1;
				pos = pos + 1;
			}
		}
	}
	return (beansInField(field) == 0);
}

function beansInField(field) {
	let sum = field.reduce((partialSum, a) => partialSum + a, 0);
	return sum > 0;
}
