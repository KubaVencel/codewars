/*

D&D Character generator #2: psion power points

Following from the previous kata and taking into account how cool psionic powers are compare to the Vance spell system (really, the idea of slots to dumb down the game sucks, not to mention that D&D became a smash hit among geeks, so...), your task in this kata is to create a function that returns how many power points you get as a psion [because psions are the coolest, they allow for a lot of indepth tactic playing and adjusting for psychic warriors or wilders or other non-core classes would be just an obnoxious core].

Consider both the psion power points/days table and bonus power points to figure out the correct reply, returned as an integer; the usual interpretation is that bonus power points stop increasing after level 20, but for the scope of this kata, we will pretend they keep increasing as they did before.

To compute the total, you will be provided, both as non-negative integers:

    class level (assume they are all psion levels and remember the base power points/day halts after level 20)
    manifesting attribute score (Intelligence, to be more precise) to determine the total, provided the score is high enough for the character to manifest at least one power.

Some examples:

psionPowerPoints(1,0) === 0
psionPowerPoints(1,10) === 0
psionPowerPoints(1,11) === 2
psionPowerPoints(1,20) === 4
psionPowerPoints(21,30) === 448

Note: I didn't explain things in detail and just pointed out to the table on purpose, as my goal is also to train the pattern recognition skills of whoever is going to take this challenges, so do not complain about a summary description. Thanks :)

In the same series:

    D&D Character generator #1: attribute modifiers and spells
    D&D Character generator #2: psion power points
    D&D Character generator #3: carrying capacity

*/

const pointsPerDay = [2, 6, 11, 17, 25, 35, 46, 58, 72, 88, 106, 126, 147, 170, 195, 221, 250, 280, 311, 343]

function psionPowerPoints(level, score){
  if (score < 11 || level == 0) return 0
  let modifier = Math.floor((score - 10) / 2), f = parseInt(level * modifier * 0.5), lvl = Math.min(20, level)
  return pointsPerDay[lvl - 1] + f  
}
