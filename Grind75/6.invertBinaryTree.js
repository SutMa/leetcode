/**Recursion
 * Instruction:
 * Given root of binary tree, invert the tree and return its root
 */

/**
 * Example:
 * Input: root = [4,2,7,1,3,6,9]
 * Output: [4,7,2,9,6,3,1]
 */

/**
 * Solution Explained:
 * We want to use a temp variable to swap the left and right child of the parent node.
 * Then we can recursively call the function on the left child and the right child
 * Return the entire root
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(root === null) return null
  let temp = root.left
  root.left = root.right
  root.right = temp

  invertTree(root.left)
  invertTree(root.right)
  return root
  
};

//Space: O(n)
//Time: O(n)