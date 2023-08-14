/**TWO POINTERS
 * Instructions:
 * Given array: prices
 *    prices[i] is the price of a given stock on the ith day
 * Maximize profit by choosing a single day to buy one stock and choosing a 
 * different day in the future to sell the stock.
 * 
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0
 * Basically buy low and sell high
 */

/**
 * Example:
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: In this case, no transactions are done and the max profit = 0.
 */ 

/**
 * Solution Explained:
 * We let minPrice represent the lowest price
 * Let maxProfit represent the highest profit
 * We loop though each element of prices of the array:
 *  if the price is less than the minPrice then set the minPrice to price
 *  let maxProfit be the price minus minPrice 
 *  return the maxProfit
 */

var maxProfit = function(prices) {
  let minPrice = Number.POSITIVE_INFINITY
  let maxProfit = 0
  for(let price of prices){
      if (price < minPrice){
          minPrice = price
      }else {
          maxProfit = Math.max(maxProfit, price - minPrice)
      }
  } 
  return maxProfit
  
}
