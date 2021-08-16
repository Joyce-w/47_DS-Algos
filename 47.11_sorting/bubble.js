function bubbleSort(arr) {
    //return arr if empty
    if (arr.length <= 1) return arr;

    //loop outer array
    for (let i = 0; i < arr.length; i++){
        //loop inner array, shortening the array each time by i
        for (let j = 0; j < arr.length - i; j++){
            
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
    return arr;
}

// bubbleSort([0, -10, 7, 4])

module.exports = bubbleSort;