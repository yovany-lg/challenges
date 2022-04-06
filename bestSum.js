/**
 * @param {number} target 
 * @param {number[]} array 
 * @param {object} map 
 */
function bestSum(target, array, map = {}) {
  if (target in map) return map[target];
  if (target < 0) return null;
  if (target === 0) return [];

  let shortest = null;
  for (let i = 0; i < array.length; i++) {
    const newTarget = target - array[i];
    const isSum = bestSum(newTarget, array, map);
    if (isSum !== null) {
      const comb = isSum.concat(array[i]);
      if (shortest === null || shortest.length > comb.length) {
        shortest = comb;
      }
    } else {
      map[newTarget] = null;
    }
  }
  map[target] = shortest;
  return shortest;
}

console.log(bestSum(8, [3, 5, 2]))
console.log(bestSum(7, [5, 3, 4, 7]))
console.log(bestSum(300, [7, 14]))
