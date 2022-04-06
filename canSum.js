/**
 * @param {number} targetNum 
 * @param {number[]} arr 
 * @param {object} map
 */
function canSum(targetNum, arr, map = {}) {
  if (targetNum in map) return map[targetNum];
  if (targetNum < 0) return false;
  if (targetNum === 0) return true;

  for (let i = 0; i < arr.length; i++) {
    const newTarget = targetNum - arr[i];
    let thisCanSum = false;
    if (newTarget in map) {
      thisCanSum = map[newTarget];
    } else {
      thisCanSum = canSum(newTarget, arr, map);
      map[newTarget] = thisCanSum;
    }
    if (thisCanSum) {
      return true;
    }
  }
  map[targetNum] = false;
  return false;
}

console.log(canSum(300, [7, 10]))