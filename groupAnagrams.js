function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let result = str2;
  for(let i = 0; i < str1.length; i++) {
    result = result.replace(str1.charAt(i), '');
  }
  return result.length === 0;
}

/**
* @param {string[]} strs
* @return {string[][]}
*/
var groupAnagrams = function(strs) {
  const result = [];
  for (let i = 0; i < strs.length; i++) {
      const index = result.findIndex((res) => isAnagram(res[0], strs[i]));
      if (index !== -1) {
          result[index].push(strs[i]);
      } else {
          result.push([strs[i]])
      }
  }
  return result;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
