function insertionSort(arr) {
  
    //pick second element
    for (let i = 1; i < arr.length; i++){
        console.log('everyloop', arr)
        if (arr[i] < arr[i = 1]) {
            console.log(`${arr[i]} is smaller than ${arr[i - 1]}`)
            let temp = arr[i]
            arr[i - 1] = arr[i]
            let j = i;

            //loop backwards to find value where it is larger
             (arr[j - 1] > temp && j > 1) {
                arr[j] = arr[j - 1];
                j--;
            }

            
        }
        
    }

    return arr;
}

(insertionSort([20,4, 12, 10, 7, 9]))

module.exports = insertionSort;