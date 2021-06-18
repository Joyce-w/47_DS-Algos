function sortedFrequency(arr, val) {

    let left = 0;
    let right = arr.length;

    while (left !== start && right !== end) {
        //find middle index
        let midIdx = (right - left) / 2;
        let midIdxMinus = midIdx - 1;
        let midIdxPlus = midIdx + 1;

        //make variables to hold freq num idx
        let start;
        let end;

        //edge case: check to see if val is at the end
        if (arr[arr.length - 1] === val) {
            end = arr.length - 1
        }
        //edge case: check to see if val is at the start
        if (arr[0] === val) {
            start = 0;
        }

        //if mid val < number || midIdxPLus = val, shift window right, make start = mididx, make left = start, end = mididxPLus 

        //if mid val >= number , shift window left, make end  = mid val
         

    }
    
}

//make functions to search left/right starting numbers

function leftIdx(arr, val) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let midIdx = (left + right) / 2;
        let midIdxMinus = midIdx - 1; 
        let midIdxPlus = midIdx + 1; 
        // if (arr[midIdx] === val) {
        //     if (arr[midIdxMinus] === val) {
        //         right = midIdxMinus;
        //     }
        // }
        console.log(midIdxMinus, midIdx, midIdxPlus)
        if (arr[midIdx] < val) {
            if (arr[midIdxPlus === val]) {
                return midIdxPlus;
            } else {
               left = midIdx; 
            }
            
        }
        else if (arr[midIdx] > val) {
            if (arr[midIdxMinus === val]) {
                return midIdxMinus;
            } else {
               right = midIdx; 
            }
            
        } else {
                right = midIdxMinus;
        }

    }
    return -1
}

leftIdx([1, 1, 2, 2, 2, 2, 3], 2)


module.exports = sortedFrequency