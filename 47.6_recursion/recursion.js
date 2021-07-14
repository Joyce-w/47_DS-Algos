/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  //base case
  if (nums.length === i) return 1;
  //recursive procedure 
  return nums[i] * product(nums, i + 1);
}
/**Time complexity is O(n^2) because we are running an array in an array */

/**product with slice method */
// function product(nums) {
//   //base case
//   if (nums.length === 0) return 1;
//   //normal case
//   return nums[0] * product(nums.slice(1));
// }


/** longest: return the length of the longest word in an array of words. */
function longest(words, temp = 0) {
  //base case return when array is empty
  console.log(temp, words)
  if (words.length === 0) return temp
  
  //if the current word is greater than temp, reassign
  if (words[0].length > temp) {
    temp = words[0].length;
  }
  //recursion case is 
  return longest(words.slice(1), temp)    

}


// /** everyOther: return a string with every other letter. */

// function everyOther(str) {

// }

// /** isPalindrome: checks whether a string is a palindrome or not. */

// function isPalindrome(str) {

// }

// /** findIndex: return the index of val in arr (or -1 if val is not present). */

// function findIndex(arr, val) {

// }

// /** revString: return a copy of a string, but in reverse. */

// function revString(str) {

// }

// /** gatherStrings: given an object, return an array of all of the string values. */

// function gatherStrings(obj) {

// }

// /** binarySearch: given a sorted array of numbers, and a value,
//  * return the index of that value (or -1 if val is not present). */

// function binarySearch(arr, val) {

// }

module.exports = {
  product,
  longest
  // everyOther,
  // isPalindrome,
  // findIndex,
  // revString,
  // gatherStrings,
  // binarySearch
};
