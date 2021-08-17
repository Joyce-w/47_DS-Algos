function selectionSort(arr) {
    //if no length return arr;
    if (arr.length <= 1) return arr;
    //set a minimum as first val

   
    for (let i = 0; i < arr.length; i++){
        
        let min = arr[i];
         let newMin = arr[i]
        for (let j = i + 1; j < arr.length; j++){
            console.log(`min is ${min}, arr[j] is ${arr[j]}`)
            
            if (arr[j] < min && arr[j] < newMin) {
                
                newMin = arr[j]
            }
            console.log(`min is ${min}, newMin is ${newMin}`)
            arr[j] = min;
            arr[i] = newMin;
            console.log(arr)
        }
        
    }
    return arr;
}

selectionSort([4, 20, 12, 10, 7, 9])

module.exports = selectionSort;