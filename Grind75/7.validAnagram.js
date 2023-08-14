/**
 * Instructions:
 * Given two strings: s and t
 * s and t are lower case letters
 * Return true if t is an anagram of s, and false otherwise
 * 
 * What is an anagram?
 * word formed by rearranging the letters of a different word of phrase, typically using 
 * all the original letter exactly once
 */

/**Example
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 */

/**
 * Solution Explained:
 * We need to find out how many times each letters occurs in s
 * We split the string into individual characters and sort them
 * THen we compare and return true if they are equal
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
}
