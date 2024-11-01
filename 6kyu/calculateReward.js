/*

Punch Card - Reward System

Description:

Today, I went to a local business, and they were doing a special promotion: Buy any five pieces of jewelry and receive the 6th one for free. However, there is some rule:

1 piece of jewelry = 1 point 5 points = 1 free piece of jewelry 10 points = 2 free pieces of jewelry and so on. Left over points are marked on a punch card. Left over points are stackable with future purchases (or other punch cards), that's why customers might have a lot of points. When they purchase some jewelry, our system has to calculate their current points, along with current purchase points, then tell the customers how many pieces of jewelry they will receive for free, how many of them have to be paid for, and how many points they have left.

Examples: If a customer has 3 points, now they buy 3 pieces of jewelry, then they have to pay only 2, the 3rd one is free, and they have no point Input: Current point: 3, number of jewelry: 3 Output: Point Left: 0. Free Item: 1. Pay Item: 2

If they have 20 points, now they want to buy 4 pieces of jewelry, they don't have to pay anything, the points they now have are 0 Input: Current point: 20, number of jewelry: 4 Output: Point Left: 0. Free Item: 4. Pay Item: 0

If they have 36 points, now they to buy 27 pieces of jewelry, they only have to pay for 17 of them, 10 of them are free, and they have 3 points left Input: Current point: 36, number of jewelry: 27 Output: Point Left: 3. Free Item: 10. Pay Item: 17

*/

  function calculateReward(currentPoints, numberOfJewelry) {
  let free = 0;
  for (let i = 0; i < numberOfJewelry; i++) {
    if (currentPoints >= 5) {
      free++;
      currentPoints -= 5;
    }
    else currentPoints++;
  }
  return `Point Left: ${currentPoints}. Free Item: ${free}. Pay Item: ${numberOfJewelry - free}`;
}
