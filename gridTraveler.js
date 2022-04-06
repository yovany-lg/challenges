/**
 * @param {number} i row
 * @param {number} j col
 * @param {object} paths col
 */
function gridTraveler(i, j, paths = {}) {
  const pathKey = `${i},${j}`;
  if (paths[pathKey]) return paths[pathKey];
  // if 0 we are out of the grid
  if (i === 0 || j === 0) return 0;
  if (i === 1 && j === 1) return 1;
  paths[pathKey] = gridTraveler(i - 1, j, paths) + gridTraveler(i, j - 1, paths);
  return paths[pathKey];
}

console.log(gridTraveler(1,1));
console.log(gridTraveler(2,3));
console.log(gridTraveler(3,3));
console.log(gridTraveler(18,18));