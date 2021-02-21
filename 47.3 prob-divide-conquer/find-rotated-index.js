function findRotatedIndex(arr,val) {
    if (!arr.includes(val)) {
        return -1
    }
    else {
        return arr.indexOf(val)
    }
}

module.exports = findRotatedIndex