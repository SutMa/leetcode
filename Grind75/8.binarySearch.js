/**
 * Instruction:
 * Given array of intergers: nums
 * Number to find: target
 * 
 * If the target exist in nums return the index, else return -1
* Need to be O(log n) runtime 
 */

/**
 * Solution Explained:
 * Binary Search which divides the array and compares and then keeps halfing the array until target is found.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let leftPointer = 0
  let rightPointer = nums.length-1
  
      while(leftPointer <= rightPointer){
          let mid = Math.floor((leftPointer+rightPointer)/2)
          if(nums[mid] === target) {return mid}
          else if (nums[mid]<target){
              leftPointer = mid +1
          }else if(nums[mid]>target){
              rightPointer = mid-1
          }
      }
      return -1
  };