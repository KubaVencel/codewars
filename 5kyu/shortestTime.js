/*

(Insane) N Warriors and a Lamp

A system is receiving each hour a batch with logon information.
Can you write a method that can update accounts with the latest logon data?
Task

Finish this function:

function updateAccounts(accounts, logons) {}

The function accepts "Accounts" and returns the same list updated. The list of accounts is a JSON object:

var accounts = {
  "Accounts": [
	{
	  "Id": 21,
	  "Name": "John Shepherd",
	  "LogonCount" : 13,
	  "LastLogon" : new Date(2017, 1, 14, 16, 15, 6, 111)
	},
	{
	  // ...
	}
  ]
}

The function accepts a list of "Logons" that is a JSON object:

var logons = {
  "Logons": [
	{
	  "Id": 21,
	  "Name": "John Shepherd",
	  "Date" : new Date(2017, 1, 14, 16, 15, 6, 111)
	},
	{
	  // ...
	}
  ]
}

The updates must follow this pattern:

	Accounts are matched with the logon information by the "Id" fields.
	If an account matches a logon, The "LogonCount" is incremented with 1.
	If "Id" is not found, a new account will be added with all available information where "LogonCount" is set to 1.
	If "LastLogon" is older than the logon "Date" it will be set to the logon "Date".
	If "LastLogon" is older than the logon "Date" the "Name" will be set to the logon "Name" when not empty.
	The input logons is not necessarily ordered by Date ascending, but you will have to process them as such. For example the 3 logons [ {Id: 1, Name: 'A', Date: 2023}, {Id: 1, Name: '', Date: 2025}, {Id: 1, Name: 'B', Date: 2024} ] should result in {Id: 1, Name: 'B', Date: 2025}, because the name change to 'B' occurs before the latest anonymous login but after the very first logon.
	Accounts are returned ordered by "Id" ascending, but they are not necessarily ordered when they are passed as a parameter.

*/

function shortestTime(times) {
	times.sort((a, b) => a - b);

	let total = 0;
	while (times.length > 3) {
		let strat1 = times[1] + times[0] + times[times.length - 1] + times[1];
		let strat2 = times[times.length - 1] + times[0] + times[times.length - 2] + times[0];
		total += Math.min(strat1, strat2);
		times.pop();
		times.pop();
	}

	if (times.length === 3) {
		total += times[2] + times[0] + times[1];
	} else {
		total += times[times.length - 1];
	}
	return total;
}
