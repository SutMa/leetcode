/**
 * Problem:
 * What is a palindrome?
 *  all lowercase letter without non-alphanumeric characters
 *  Given string: s
 *  
 *  return true if it is a palindrome, return false otherwise
 * 
 */

/**
 * Solution Explained:
 * Create regex to replace special characters with ""
 * we have the leftIndex starting at the start of the string
 * we have rightIndex starting at the end of the string 
 * while loop checking to make sure the letters are the same
 * if all the characters passes return true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[^a-z0-9]/gi,"")
  let leftIndex = 0
  let rightIndex = s.length-1

  while(leftIndex<rightIndex){
      if(s[leftIndex].toLowerCase() !== s[rightIndex].toLowerCase()){
          return false
          
      }
      leftIndex++
      rightIndex--
  }

  return true
};