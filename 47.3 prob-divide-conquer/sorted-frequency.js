function sortedFrequency(arr, val) {

    if (!arr.includes(val)) {
        return -1
    } else {
        let count = 0;
        for (let el of arr) {
            if (el === val) {
                count +=1
            }
        }        
        return count
    }
}

module.exports = sortedFrequency