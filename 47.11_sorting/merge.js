function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        //check if arr1[i] is larger than arr2[j]. push the smaller value into result and increment that corresponding array
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i])
            i++
        } else {
            results.push(arr2[j])
            j++
        }
    }
    //in the case where the arrays are differents lengths, push the remaining elements into results
    while (i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    console.log(results)
    return results;
}

// let arr1 = [1,3,4,5];
// let arr2 = [2,4,6,8];
// merge(arr1, arr2)

//breaks up array into small pieces
function mergeSort(arr) {
    //base case
    if (arr.length <= 1) return arr;

    //split arr
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid)
)
    //when no more splicing can happen, run merge on left and right
    return merge(left, right);
}

// mergeSort([4, 20, 12, 10, 7, 9])


module.exports = { merge, mergeSort};