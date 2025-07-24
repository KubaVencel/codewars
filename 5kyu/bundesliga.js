/*

Bundesliga 1. Spieltag - First Match Day

Description:

On 08/26/2016 (26.08.2016) the German Fussball-Bundesliga (national soccer league) started another new season!

In this kata you get an array with 9 strings, which contain the matches from the first match day.
Every string has this format, where x and y are the number of goals for the teams, if the match has already been played:

x:y [Team 1] - [Team 2]

Example:
6:0 FC Bayern München - Werder Bremen
-:- Eintracht Frankfurt - Schalke 04

The team, which has shot more goals than the other team, wins the match.

Your method should create and return the league table as one string.

Every line in the table follows these rules:

 1. Tableplace with two chars and a dot (" 1.", "12.")
 2. Space
 3. Name of the team/club padded right up to 30 chars (filled up with spaces).
 4. Number of played matches (in this kata always only one digit)
 5. Two spaces
 6. Number of won matches (in this kata always only one digit)
 7. Two spaces
 8. Number of tie matches (in this kata always only one digit)
 9. Two spaces
10. Number of lost matches (in this kata always only one digit)
11. Two spaces
12. Differences of goals (shot vs. gotten)
13. Two spaces
14. Count of points

It is 3 points for a won match and 1 point for a tie.
The table has to be sorted by these criteria:

1. Points
2. If the points are the same: The difference of goals. (2:0 is better than 1:0)
3. If the difference of goals is the same: More goals are better! (2:1 is better than 1:0)
4. Otherwise: The teams share the same place, but ordered by the name of the team (case-insensitive!)!

Example with the two matches above, if the league WOULD only have 4 teams:

 1. FC Bayern München             1  1  0  0  6:0  3 
 2. Eintrach Frankfurt            0  0  0  0  0:0  0
 2. Schalke 04                    0  0  0  0  0:0  0
 4. Werder Bremen                 1  0  0  1  0:6  0

You do not have to do a check for the input values. It will always be an array of 9 strings and all strings will be complete!

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.

*/

class Team {
	constructor(name) {
		this.name = name
		this.wins = this.losses = this.draws = this.goalsScored = this.goalsLost = 0
	}
	addMatch(scored, lost) {
		this.goalsScored += scored
		this.goalsLost = lost
		if (scored > lost) this.wins++
		else if (scored == lost) this.draws++
		else this.losses++
	}
	points() { return this.wins * 3 + this.draws }
	compare(other) {
		return this.points() - other.points() ||
			(this.goalsScored - this.goalsLost) - (other.goalsScored - other.goalsLost) ||
			this.goalsScored - other.goalsScored ||
			-this.name.toLowerCase().localeCompare(other.name.toLowerCase())
	}
	equals(other) {
		return this.points() == other.points() &&
			this.goalsScored == other.goalsScored &&
			this.goalsLost == other.goalsLost
	}
	toString(place) {
		place = (place > 9 ? '' : ' ') + place
		let name = this.name + ' '.repeat(30 - this.name.length)
		let games = this.wins + this.draws + this.losses
		return `${place}. ${name}${games}  ${this.wins}  ${this.draws}  ${this.losses}  ${this.goalsScored}:${this.goalsLost}  ${this.points()}`
	}
}

function table(results) {
	let dic = {}
	results.forEach(s => {
		let [_, score1, score2, team1, team2] = s.match(/^(\d+|-):(\d+|-) (.*) - (.*)$/)
		if (!dic[team1]) dic[team1] = new Team(team1)
		if (!dic[team2]) dic[team2] = new Team(team2)
		if (/-/.test(score1 + score2)) return
		score1 = score1 == '-' ? 0 : +score1
		score2 = score2 == '-' ? 0 : +score2
		dic[team1].addMatch(score1, score2)
		dic[team2].addMatch(score2, score1)
	})
	let teams = Object.keys(dic).map(k => dic[k]).sort((a, b) => a.compare(b)).reverse()
	let place = 1
	return teams.map((team, i) => {
		if (i == 0) return team.toString(1)
		if (team.equals(teams[i - 1])) return team.toString(place)
		return team.toString(place = i + 1)
	}).join('\n')
}
