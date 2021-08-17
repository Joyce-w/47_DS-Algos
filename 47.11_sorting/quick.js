/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

// function pivot(arr) {
//     //remember the pivot el
//     let pivotNum = arr[0]
//     let midIdx = Math.floor(arr.length - 1) / 2;
//     let midEl = arr[midIdx]
//     console.log('mid el', midEl)
//     //swap the pivotNum with the mid value
//     let temp = pivotNum;
//     arr[0] = midEl;
//     console.log(arr[0])
//     console.log('index of mid',Math.floor(arr.length -1) / 2)
//     arr[midIdx] = temp;
//     //

//     return midIdx;
// }

function pivot(arr) {
    //remember the pivot el
    
    for (let i = 0; i < arr.length; i++){
        let pivotNum = arr[0];
        console.log(arr[i], arr)
        if (arr[i] > pivotNum) {
            
        } else { /**arr[i] smaller than pivot number */
            arr[i]
        }
}

    //if valu is greater than
pivot(arr)

/*
quickSort accepts an array, left index, and right index
*/

function quickSort() {}

module.exports = quickSort;