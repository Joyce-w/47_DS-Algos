function countZeroes(arr) {

    const zeros =  arr.filter(function (num) {
        return num === 0 
    })
    return zeros.length
}

// OR //

function countZeroes(arr) {
    //rule out no zeros
    if (!arr.includes(0)) {
        return 0
    }
    else {
    //sort array
    arr.sort()

    //find last index of 0s
    let last_idx = arr.lastIndexOf(0)

    //make subarray of 0s
    let zeros = arr.slice(0, last_idx + 1)
    
    return zeros.length;        
    }

}

module.exports = countZeroes