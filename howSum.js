/**
 * @param {number} target 
 * @param {number[]} arr 
 * @param {object} map 
 */
function howSum(target, arr, map = {}) {
  if (target in map) return map[target];
  if (target < 0) return null;
  if (target === 0) return [];

  for (let i = 0; i < arr.length; i++) {
    const newTarget = target - arr[i];
    let isSum;
    if (target in map) {
      isSum = map[newTarget];
    } else {
      isSum = howSum(newTarget, arr, map);
      map[newTarget] = isSum;
    }
    if (isSum !== null) {
      isSum.push(arr[i]);
      return isSum;
    }
  }
  map[target] = null;
  return null;
}

console.log(howSum(8, [3, 5, 2]))
