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
  if (words.length === 0) return temp
  
  //if the current word is greater than temp, reassign
  if (words[0].length > temp) {
    temp = words[0].length;
  }
 
  return longest(words.slice(1), temp)    

}


// /** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, newStr='') {
  //base case
  if (str.length === i) return newStr;
  
  //every other starting from index 0, add to the new Str
  if (i % 2 == 0) {
  newStr = newStr + str[i]
  }
  //recursion
  return everyOther(str, i+1, newStr)
}

// /** isPalindrome: checks whether a string is a palindrome or not. */
//word is the same spelled from & backwards

/**inital solving took 30 minutes */
function isPalindrome(str, i=0) {

  //base case 
  if (str.length === i) return true

  //recursion, need something to check from last index
  if (str[i] !== str[(str.length - 1) - i]) {
    return false
  }
  
  return isPalindrome(str, i+1)
}

// /** findIndex: return the index of val in arr (or -1 if val is not present). */
/**inital solving took <5  mins */
function findIndex(arr, val, i=0) {
  //base case
  if (i === arr.length) return -1;

  if (arr[i] === val) {
    return i
  }
  //recursion 
  return findIndex(arr, val, i+1)
}

// /** revString: return a copy of a string, but in reverse. */
/**inital solving took 4 mins */
function revString(str, reverse='', i=0) {
  //base
  if (i === str.length) return reverse

  reverse = reverse + str[(str.length - 1) - i]

  //recursion
  return revString(str, reverse, i+1)
}

// /** gatherStrings: given an object, return an array of all of the string values. */
/**inital solving took 1hr! */
function gatherStrings(obj, arr = []) {
  for (const value of Object.values(obj)) {
    
    //if it value is a string, push into arr
    if (typeof (value) === "string") {
      arr.push(value)
    }
    //if value is object, recurse over object
    else if (typeof(value) === "object") {

      //recursion 
      gatherStrings(value, arr)
    }    
  }
  //after looping, return array
  //base case
  return arr;
}


// /** binarySearch: given a sorted array of numbers, and a value,
//  * return the index of that value (or -1 if val is not present). */
/**inital solving took 8 mins */
function binarySearch(arr, val, i = 0) {
  console.log(arr[i], i, arr.length-1)
  //base case
  if (i === arr.length) return -1
  
  if (arr[i] === val) {
    return i;
  }
  
  //recursion
  return binarySearch(arr,val, i+1)

}
/**Using the slice method on the array */
// function binarySearch(arr, val ) {
//   console.log(arr[0],arr.length-1)
//   //base case
//   if (arr.length === 0) return -1
  
//   if (arr[0] === val) {
//     return i;
//   }
  
//   //recursion
//   return binarySearch(arr.slice(1),val)

// }

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
