function permutations(array) {
  if (array.length === 0) return [[]];
  const firstItem = array[0];
  const otherPermutations = permutations(array.slice(1));

  const combinedPermutations = [];
  otherPermutations.forEach((per) => {
    for(let i = 0; i < per.length + 1; i++) {
      combinedPermutations.push([...per.slice(0,i), firstItem, ...per.slice(i)]);
    }
  });
  return combinedPermutations;
}

const arr = ['a', 'b', 'c', 'd'];
const arr2 = ['b', 'c', 'd'];

console.log(permutations(arr));