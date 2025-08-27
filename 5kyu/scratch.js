/*

Simple Fun #322: Scratch lottery III

Task

You got a scratch lottery, you want to know how much money you win.

There are six sets of characters on the lottery. Each set of characters represents a chance to win. The text has a coating on it. When you buy the lottery ticket and then blow it off, you can see the text information below the coating.

Each set of characters contains three animal names and a number, like this: "tiger tiger tiger 100". If the three animal names are the same, Congratulations, you won the prize. You will win the same bonus as the last number.

Now, You have scraped on the lottery softly, some letters of animal name and digits of the last number have been wiped off the coating. The other position are coverd by "#", each "#" represents a letter or digit. It's guaranteed that no spaces are coverd by "#". It's also guaranteed that at most one character is wiped off in each name or number.

Given the lottery, your task is to calculate the maximum possible winning amount of this lottery ticket.

The animal names may be one of these names: "tiger","rabbit","dragon","snake","rat","ox","pig","dog","cock","sheep","horse","monkey"

The winning amount may be one of these numbers: 5,10,20,50,100,200,500,1000,2000,5000,10000
Input/Output

[input] string array lottery

A string array that contains six sets of characters. "###" is the unknown text.

[output] an integer

The maximum possible winning amount of this lottery ticket.
Example

For

lottery = [
"t#### #i### ####r 1##",
"r##### d##### ###### ####0",
"## ox ## #000",
"### ### ### 10",
"####e #####y r## ###0",
"r##### r## r## ###"
]```

the output should be `5110`.

scraped ### in "t#### #i### ####r 1##". It can be "tiger tiger tiger 100", you win $100

"r##### d##### ###### ####0" can not win

scraped ### in "## ox ## #000", It can be "ox ox ox 5000", you win $5000

scraped ### in "### ### ### 10", It can be any three animals of the same name, you win $10

"r##### r## r## ###" can not win

The total amount is: 100 + 5000 + 10 = 5110 ```

*/

const AMOUNTS = "10000 5000 2000 1000 500 200 100 50 20 10 5";
const ANIMALS = "tiger rabbit dragon snake rat ox pig dog cock sheep horse monkey"
	.split(" ").map(a => `${a} ${a} ${a}`).join();

function scratch(lottery) {
	return lottery.reduce((res, str) => {
		const [a, b, c, d] = str.replace(/#/g, "\\w").split(" ");
		return new RegExp(`${a} ${b} ${c}`).test(ANIMALS) ? res + (+AMOUNTS.match(`\\b${d}\\b`) || 0) : res;
	}, 0);
}
