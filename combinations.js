function combinations(array) {
  if (array.length === 0) return [ [] ];
  const firstItem = array[0];
  const otherCombinations = combinations(array.slice(1));
  const combinationsWithItem = [];

  otherCombinations.forEach((comb) => {
    combinationsWithItem.push([ ...comb, firstItem ])
  });
  return [...otherCombinations, ...combinationsWithItem];
}

const arr = ['a', 'b', 'c', 'd'];
console.log(combinations(arr));
