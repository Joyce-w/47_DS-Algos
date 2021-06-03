
function countZeroes(arr) {
    //Edge case: check for 1 at the end, no 0s in array
    if (arr[arr.length - 1] === 1) {
        return 0
    }

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        //middle index in array
        let midIdx = Math.floor((left + right) / 2);
        let afterMidIdx = midIdx + 1;
        
        //if midIdx & afterMidIdx 1, look right
        if (arr[midIdx] === 1 && arr[afterMidIdx] === 1) {
            left = afterMidIdx;
        } //Where 1 ends and 0 starts
        else if (arr[midIdx] === 1 && arr[afterMidIdx] === 0) {
            return( arr.length - afterMidIdx);
        } //if midIdx and afterMidIdx is 0, shift left
        else if (arr[midIdx] === 0 && arr[afterMidIdx] === 0){
            right = midIdx - 1;
            if (right < 0) {
                return arr.length - left;
            }
        }
    }
}

countZeroes([1, 1, 1, 0, 0, 0, 0]) // 4
countZeroes([0, 0, 0]) // 3
countZeroes([1, 1, 1, 1]) // 0
countZeroes([1, 1, 1, 1, 0, 0]) // 2

module.exports = countZeroes;
