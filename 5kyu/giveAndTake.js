/*

The Dollar Game

Description:
The Dollar Game
Setup

You are given a list of people and their current net worth, in dollars. Some people have a positive net worth, some have a negative net worth (i.e. are in debt), and some are just flat broke.

There are many friendships among this group. So many that no single person is alone, and there are no isolated sub-groups. That is to say, you can draw a friendship line from any one person to any other person, through x number of other people.

In this community, a person can give exactly 1 dollar to each and every one of their friends. Additionally, a person can take exactly 1 dollar from each and every one of their friends.
Goal

Determine a sequence of who should give or take a dollar, so that everyone has a non-negative balance.
Input

Your function giveAndTake will be passed two arguments:

	people - a hash object with names as keys and net worths as values
	friendships - an array of pairs of names that are friends

Output

An array of 'moves'. Each 'move' is an array of two elements: The name of a person and the value 1 or -1. 1 indicates they should take a dollar from each friend. -1 indicates they should give a dollar to each friend.

For example: [ ['David',1], ['Brian',-1], ['Alice',-1], ['Charlie',1] ]
Other Details

	All worths are integers.
	All inputs are valid. All games tested are known to be solvable.
	Outputs that contain names not in the given list of people or move values other than +/- 1 will fail.
	Random tests:
	3 levels: Easy, Hard, Difficult (== relative number of moves required)
	At each level, 3 sizes: 5 people, 20 people, 200 people
	For each level/size: 20 tests
	180 random tests total

Credit

Inspired by Dr Holly Krieger on Numberphile

*/

function giveAndTake(people, friends) {

	const names = Object.keys(people);

	let edges = names.reduce((e, n) => (e[n] = [], e), {});
	let coins = { ...people };
	let moves = [];

	for (let [a, b] of friends) {
		edges[a].push(b);
		edges[b].push(a);
	}

	loop: while (true) {

		for (let name in coins) {
			while (coins[name] < 0) {
				moves.push([name, 1]);
				coins[name] += edges[name].length;
				edges[name].forEach(edge => coins[edge]--);
				continue loop;
			}
		}

		return moves;

	}

}
