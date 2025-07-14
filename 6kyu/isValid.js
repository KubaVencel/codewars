/*

Is this a valid Tic Tac Toe position?

You work as a data scientist at an IT company, and your boss, all of a sudden, asked you to find the most common patterns in Tic Tac Toe games submitted to a survey on your company's website.

However, some of them are not from real games, i. e. the position on such a game board cannot be reached through normal play.

You have to find a way to filter out such "games", leaving only the correct (reachable) ones.
Task

You will be given a 3x3 array of character arrays (tuple of string tuples in Python) representing a Tic Tac Toe game board, with the following specifications:

		'X' is a square occupied by player X,
		'O' is a square occupied by player O,
		'_' is a square not occupied by either player.

Given this board, you need to determine whether this board represents a position that is reachable through normal play, and return a boolean value: true (if the condition is satisfied) and false otherwise.

Validation rules:

		'X' should always be the first player to move.
		During one move, a player must occupy one extra square.
		If a player manages to occupy 3 squares in a row (horizontally, vertically or diagonally), the game is immediately over and no further moves can be made; that player wins and is declared victorious (such a game is valid).
		If all squares are occupied and neither player managed to get 3 in a row, the game ends in a draw (which is valid).
		Games where not all squares are occupied and neither player got 3 in a row are considered valid.

Special case: This board (and similar ones where 'X' has two three-in-a-rows but the position can be reached):

X X X
O O X
O O X

should result in true.

The board is guaranteed to be 3x3 and to consist of only 'X', 'O' or '_'.

Good luck!

*/

function isValid(board) {
	const arrBoard = board.map(row => row.split(''));
	const flat = arrBoard.flat();
	const x = flat.filter(c => c == 'X').length;
	const o = flat.filter(c => c == 'O').length;
	if (!(x == o || x == o + 1)) return false;
	function winner(player) {
		let lines = [];
		for (let i = 0; i < 3; i++) {
			lines.push(board[i][0] == player && board[i][1] == player && board[i][2] == player);
		}
		for (let j = 0; j < 3; j++) {
			lines.push(board[0][j] == player && board[1][j] == player && board[2][j] == player);
		}
		lines.push(board[0][0] == player && board[1][1] == player && board[2][2] == player);
		lines.push(board[0][2] == player && board[1][1] == player && board[2][0] == player);
		return lines.filter(Boolean).length;
	}
	const X = winner('X');
	const O = winner('O');
	if (O > 0 && X > 0) return false;
	if (X > 0 && x != o + 1) return false;
	if (O > 0 && x != o) return false;
	return true;
}
