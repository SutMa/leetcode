/**STACK
 * Instruction: 
 * 
 * Given:
 * String S:
 *  contains just characters ( ) { } [ ]
 *
 * Determine if input the string is valid
 * Valid when:
 * Open brackets must be closed by the same type of brackets
 * Open brackets must be closed in correct order
 * Every close bracket has a corresponding open bracket of the same type
 * 
 * Example: 
 * Input: s = "()"
   Output: true

   Input: s = "()[]{}"
   Output: true

   Input: s = "(]"
   Output: false
 */

/**
 * Solution Explained:
 * We want to use the Stack Data Structure
 * While looping through and adding the ith element of the 
 * string s to the staack.
 * 
 * Now we have a variable, called open that is s.length - 2
 * We also have a variable, called close that is s.length - 1
 * 
 * Now we add the values of open and close 
 * If this value are included in the potential parentheses
 * Then we pop the stack twice.
 * 
 * If the stack is empty then the string s is valid. 
 */

var isValid = function(s){
  const stack = []
  const parens = '() [] {}'
  let i = 0 

  while (i < s.length){
    stack.push(s[i])
    i++

    let open = stack[stack.length-2]
    let close = stack[stack.length-1]

    let potentialParentheses = open + close

    if (parens.includes(potentialParentheses)){
      stack.pop()
      stack.pop()
    }
  }

  return stack.length === 0;
}
