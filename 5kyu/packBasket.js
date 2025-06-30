/*

Help Suzuki pack his coal basket!

Suzuki is preparing for a walk over fire ceremony high up in the mountains and the monks need coal for the fire. He must pack a basket of coal to the optimal level for each trip up the mountain. He must fit as much as possible into his basket. He can either take a piece of coal or leave it so he must chose which pieces will be optimal for the trip based on the weight in order to maximize the basket capacity.

10 ≤ basket ≤ 200

1 ≤ pile ≤ 100

You will be given a data structure similar to the one below:

pile = 'dust 1 dust 4 dust 8 dust 100 dust'

basket = 43

Return the weight of the coal:

'The basket weighs 13 kilograms'

basket = 50

pile = 'dust83dust 45 25 22 46'

Returns:

'The basket weighs 47 kilograms'

Rake out the dust setting the pieces represented as integers for their weight aside. Take as much coal as possible filling the basket as close to its capacity as possible.

The size of the basket will change with each test as Suzuki exchanges it for an empty one on each trip up the mountain.

Return the weight of the coal as a string:

'The basket weighs 13 kilograms'

If there are no pieces of coal that will fit in the basket the solution returns:

'The basket weighs 0 kilograms'

Please also try the other Kata in this series..

    Help Suzuki count his vegetables...
    Help Suzuki purchase his Tofu!
    Help Suzuki rake his garden!
    Suzuki needs help lining up his students!
    How many stairs will Suzuki climb in 20 years?

*/

function packBasket(basket, pile) {
	pile = (pile.match(/\d+/g) || []).map(x => +x)
	let groups = Array(basket + 1).fill(false)
	groups[0] = true
	pile.forEach(x => groups = groups.map((c, i) => groups[i - x] || c))
	return `The basket weighs ${groups.lastIndexOf(true)} kilograms`
}
