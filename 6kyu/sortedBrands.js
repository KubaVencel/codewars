/*

Personalized brand list

Assume you are creating a webshop and you would like to help the user in the search. You have products with brands, prices and name. You have the history of opened products (the most recently opened being the first item).

Your task is to create a list of brands ordered by popularity, if two brands have the same popularity level then choose the one which was opened last from the two and second the other one.

Product popularity is calculated from the history. If a product is more times in the history than it is more popular.

Your function will have one parameter which will be always an array/list of object.

example product: { name: "Phone", price: 25, brand: "Fake brand" }

*/

function sortedBrands(history) {
  const historyWithoutDup = history.filter(
    (current, i, arr) =>
      arr.findIndex(last => last.brand === current.brand) === i
  );
  const historyWithPopularity = history.reduce((popular, el) => {
    const brand = el.brand;

    popular[brand] = (popular[brand] || 0) + 1;
    return popular;
  }, {});
  const result = [...historyWithoutDup]
    .sort((a, b) => {
      const brandA = a.brand;
      const brandB = b.brand;
      const popularSort =
        historyWithPopularity[brandB] - historyWithPopularity[brandA];

      if (popularSort == 0)
        return (
          historyWithoutDup.findIndex(el => el.brand == brandA) -
          historyWithoutDup.findIndex(el => el.brand == brandB)
        );

      return popularSort;
    })
    .map(el => el.brand);

  return result;
}
