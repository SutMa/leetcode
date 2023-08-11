/**
 * Instructions:
 * 
 * Given: 
 * array of integers: nums 
 * integer: target
 * 
 * Return: indices of the two numbers such that they add up to target. Return in any order. 
 * 
 * Assumption: 
 * each input would have exactly one solution
 * may not use the same element twice
 * Exactly one solution
 * 
 * Example:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 */

/**
 * Solution Explained:
 * Loop through the array and add the next indices to see if it matches target. 
 */

var twoSum = function(nums, target){
  for(var i = 0; i < nums.length; i++){
    for(var j = i + 1; j<nums.length; j++){
      if(nums[i]+nums[j] == target){
        return [i,j]
      }
    }
  }
}

/**
 * Stats:
 * Time Complexity: O(n^2):
 * Going through array once and then one more time resulting in n^2
 * Space Complexity: O(1):
 * This means its constant because no extra allocation of memory to solve problem
 */

/**We can make this much faster using HASHMAP:
 * Time: O(n^2) --> O(n)
 * Space: O(1) --> O(n)
 * This is because Hashmaps do methods in constant time trading for linear space
 */

/**
 * Better Solution:
 * Looping through the array: 
 * Make variable complement_pair which is target minus the current indices value
 * check the hashmap for complement_pair 
 * Add the current index value into hashmap
 * Next element and repeat until complement_pair is found 
 */

//DSA: HASHMAPS
var twoSum = function(nums, target){
  var map = {}
  for (var i = 0; i < nums.length; i++){
    var value = nums[i]
    var complement_pair = target - value
    if (map[complement_pair] !== undefined){
      return [map[complement_pair],i]
    }else {
      map[value] = i
    }
  }
}