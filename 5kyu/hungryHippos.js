/*

Hungry Hippos

Description:
Introduction

Hungry Hungry Hippos is a tabletop game made for 2–4 players, produced by Hasbro, under the brand of its subsidiary, Milton Bradley. The idea for the game was published in 1967 by toy inventor Fred Kroll and it was introduced in 1978. The objective of the game is for each player to collect as many marbles as possible with their 'hippo' (a toy hippo model). (Source Wikipedia)

Squares
Task

Your task is to write a simple class called Game that checks how many times a hippo has to leap into the centre of the arena to collect some food. You will be given an integer array called board that defines where all the food can be found. You have to return an integer for the amount of leaps a hippo has to do to eat all of the food.

Rules

1.  The board array contains 0’s for spaces and 1’s for food

2.  The board is n x n in size, where n is between 5 and 50.

3.  One leap consists of food items that are either horizontally or vertically connected to each other. If they are not connected, then another leap is needed.

Returns

Return an integer for the amount of leaps needed to collect all of the food.

Example
Initialise

board = [[1,1,0,0,0],
		 [1,1,0,0,0],
		 [0,0,0,0,0],
		 [0,0,0,1,1],
		 [0,0,0,1,1]]

game = new Game(board)
game.play()

Result

There are 2 blocks of food connected horizontally or vertically so you must return 2.

Good luck and enjoy!
Kata Series

If you enjoyed this, then please try one of my other Katas. Any feedback, translations and grading of beta Katas are greatly appreciated. Thank you.

Rank 
Maze Runner

Rank 
Scooby Doo Puzzle

Rank 
Driving License

Rank 
Connect 4

Rank 
Vending Machine

Rank 
Snakes and Ladders

Rank 
Mastermind

Rank 
Guess Who?

Rank 
Am I safe to drive?

Rank 
Mexican Wave

Rank 
Pigs in a Pen

Rank 
Hungry Hippos

Rank 
Plenty of Fish in the Pond

Rank 
Fruit Machine

Rank 
Car Park Escape

*/

function Game(board) {
	this.board = board;
}

function canEat(board, y, x) {
	if (board[y] && board[y][x]) {
		board[y][x] = 0;
		canEat(board, y, x + 1)
		canEat(board, y, x - 1)
		canEat(board, y + 1, x)
		canEat(board, y - 1, x)
		return true;
	}
	return false;
}

Game.prototype.play = function() {
	let rounds = 0;
	for (let i = 0; i < this.board.length; i++) {
		for (let j = 0; j < this.board[0].length; j++) {
			if (canEat(this.board, i, j)) {
				rounds++;
				j++;
			}
		}
	}
	return rounds;
}
