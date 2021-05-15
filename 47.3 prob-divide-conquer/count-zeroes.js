function countZeroes(arr) {
    //start with left as arr index 0 and right as last index of arr.
    let left = 0;
    let right = arr.length - 1;
    
    /*Edge case: when arr[0] is 0, that means everything after is also 0 */
    if (arr[left] === 0) {
        return arr.length;
    }
    /*Edge case: if arr[right] is 1, that means everything before is also 1 */
    if (arr[right] === 1) {
        return 0;
    }
    /*Condition that continues as long as left idx is <= the right */
    while (left <= right) {
        //start by dividing arr in half. left is there to shift the mid value to the appropriate arr idx.
        let mid = left + Math.floor((right - left) / 2);
        let midPlus = mid + 1
        //if the mid value and the midPlus value  meets conditions, we have found where 1 ends and 0 starts
        if (arr[mid] === 1 && arr[midPlus] === 0) {
            return arr.length - (midPlus);
        }
        //if the mid and midPlus is 1, shift the 'search window' of left to midPlus so the next loop searches a smaller range
        else if (arr[mid] === 1 && arr[midPlus] === 1) {
            left = midPlus;
        }
        //if the mid & midPlus is 0, shift the 'search window' of the right to mid, so the next loop searches a smaller range
        else {
            right = mid;
        }
    }        
}

module.exports = countZeroes;
