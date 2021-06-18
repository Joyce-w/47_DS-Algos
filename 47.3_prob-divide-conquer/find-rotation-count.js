function findRotationCount(arr) {
    let org = [...arr]
    let sorted = arr.sort((a, b) => (a - b))

    //set value of idx 1 as control
    let val = sorted[0]
    //find idx of val after sorted
    let new_idx = org.indexOf(val)
    return (new_idx - 0)
}

module.exports = findRotationCount