/*

The Rhinestone Cowboy ~ Count the dollars in his boots!

Description:
The Rhinestone Cowboy - Count the dollars in his boots!

					 ,|___|,       
					 |     |
					 |     |
					 |     |
					 | ==  |        
					 |[(1)]|
					 /    &|        
			 .-'`  ,   )****      
			 |         |   **
			 `~~~~~~~~~~    ^
						^
						|
		 One Dollar Bill

					 ,|___|,       
					 |     |
					 |     |
					 |[(1)]|
					 | ==  |        
					 |[(1)]|
					 /    &|        
			 .-'`  ,   )****      
			 |         |   **
			 `~~~~~~~~~~    ^
						^
						|
		 Two Dollar Bills
 
					 ,|___|,       
					 |[{1}]|  <---- not a bill   
					 |     |
					 |[(1)]|
					 | ==  |        
					 |[(1)]|
					 /    &|  <---- top is above the "&"   
			 .-'`  ,   )****      
			 |         |   **
			 `~~~~~~~~~~    ^
						 ^
						 |
		 Two Dollar Bills

Task

You will receive an array of two strings with the Cowboys boots. Count the number of dollars in each boot and return a string such as:

"This Rhinestone Cowboy has 2 dollar bills in his right boot and 1 in the left"

boots[0] = left boot
boots[1] = right boot

The bill must be of form [(1)] to be counted and only count ones, no other denominations. Only count bills in the top half of the boot(boot leg) so the cowboy can pull money out without removing the boots, see diagram above.

The test boots will be well-formed and always the same size.

You will always be given two boots since a Cowboy cannot walk around barefoot!

Dedicated to one of the coolest dudes ever.... Glen Campbell => https://www.youtube.com/watch?v=8kAU3B9Pi_U
Algorithms

*/

function cowboysDollars(boots) {
	let found = boots.toString().split("~~~~~~~~~~")
	found[0] = (found[0].match(/\|\[\(+1\)\]\|/g) || []).length
	found[1] = (found[1].match(/\|\[\(+1\)\]\|/g) || []).length
	return `This Rhinestone Cowboy has ${found[1]} dollar bills in his right boot and ${found[0]} in the left`
}
