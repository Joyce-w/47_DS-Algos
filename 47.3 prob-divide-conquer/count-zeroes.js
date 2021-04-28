function countZeroes(arr) {
    // find where  0 ends and 1 starts in sorted array 
    let left = 0;
    let right = arr.length - 1;
    
    if (arr[left] === 0) {
        return arr.length;
    }
    if (arr[right] === 1) {
        return 0;
    }

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let midPlus = mid + 1
        if (arr[mid] === 1 && arr[midPlus] === 0) {
            return arr.length - (midPlus);
        }
        else if (arr[mid] === 1 && arr[midPlus] === 1) {
            left = midPlus;
        }
        else {
            right = mid;
        }
    }        
}

module.exports = countZeroes;
