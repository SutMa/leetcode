/**LINKED LIST
 * 
 * Instruction:
 * You are given two sorted linked lists. 
 * The task is to merge these two sorted linked lists into a single, sorted linked list. 
 * The final sorted linked list should not be made by splicing together the nodes of the first two lists 
 * but by creating new nodes.
 * 
 * Example:
 * list1 = 1 -> 2 -> 4
 * list2 = 1 -> 3 -> 4
 * 
 * 1 -> 1 -> 2 -> 3 -> 4 -> 4
 */

/**
 * Solution Explained:
 * We want to use the Linked Lists to combine the lists to produce a new return. 
 *  
 * 
 * Use a dummy node at the beginning pointed by prev
 * compare each l1 and l2 and add them as needed to 
 * the dummy node. 
 * 
 * move the prev to the latest added node
 * move the list along
 */



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// Function to merge two sorted linked lists
var mergeTwoLists = function(list1, list2) {
    
  // Create a dummy node to act as the starting point of the merged list
  let dummy = new ListNode(-1);
  
  // Initialize 'prev' to point to this dummy node. 'prev' will be used to track the last node in the merged list
  let prev  = dummy;

  // Loop until one of the lists becomes empty
  while (list1 && list2) {
      
      // Compare the current nodes of the two lists
      if(list1.val <= list2.val) {
          
          // Point the 'next' of the current end of the merged list to list1's current node
          prev.next = list1;
          
          // Move the 'prev' pointer to list1's current node
          prev = list1;
          
          // Advance to the next node in list1
          list1 = list1.next;
          
      } else {
          
          // Point the 'next' of the current end of the merged list to list2's current node (since list2's current node is smaller)
          prev.next = list2;
          
          // Move the 'prev' pointer to list2's current node
          prev = list2;
          
          // Advance to the next node in list2
          list2 = list2.next;
      }
  }

  // At this point, at least one of the lists (list1 or list2) is empty
  // If list1 is empty, then attach the rest of list2 to the merged list
  if (!list1) {
      prev.next = list2;
  }
  
  // If list2 is empty, then attach the rest of list1 to the merged list
  if (!list2) {
      prev.next = list1;
  }
  
  // Return the next node after 'dummy', which is the head of the actual merged list
  return dummy.next;

}
