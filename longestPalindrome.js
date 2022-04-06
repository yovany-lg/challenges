/**
 * @param {string} s 
 */
function isPalindrome(s) {
  const length = s.length;
  for(let i = 0; i < length/2; i++) {
    if (s[i] !== s[length -1 - i]) {
      return false;
    }
  }
  return true;
}

/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
  if (s.length === 0) return null
  if (s.length === 1) return s;
  let longest = null;
  for(let i = 0; i < s.length; i++) {
    for(let j = i + 1; j <= s.length; j++) {
      const sub = s.substring(i, j);
      if (isPalindrome(sub)) {
        if (longest === null || longest.length < sub.length) {
          longest = sub;
        }
      }
    }
  }
  return longest;
}

console.log(longestPalindrome("babad"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("bb"));