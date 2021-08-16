////bubble sort///
function bubbleSort(arr) {
    //shows how many loops it took to get thru
    let count = 0;

    //loop from beginning to end
    for (let i = 0; i < arr.length; i++){
        //need to repeat again
        for (let j = 0; j < arr.length; j++){
            count++;
            //get element of i and compare to i+1 and compare
            if (arr[j] > arr[j + 1]) {
                //swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }            
        }
    }
    console.log("TOTAL COUNT:", count);
    return arr;
}

/**Why loop twice? 
 * One loop  goes through the array and compares one element
 * We need to compare the other elements too!
 */

console.log(bubbleSort([34, 5, 6, 2, 1, 99, 30]))

/**Every time outer loop, loops, there is an element in the correct spot(the end element)
 * We don't need to sort to the end anymore
 * Modify it so that it cuts out the elements that were already sorted
 */

function bubbleSort2(arr) {
    //shows how many loops it took to get thru
    let count = 0;
   
    //loop from beginning to end
    for (let i = 0; i < arr.length; i++){
        //need to repeat again
        for (let j = 0; j < arr.length-1; j++){
            count++;
            //get element of i and compare to i+1 and compare
            if (arr[j] > arr[j + 1]) {
                //swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }            
        }
    }
    console.log("TOTAL COUNT:", count);
    return arr;
}

/**Another optimization is using a while loop
 * Use boolean, if something was swapped, keep running
 * Start with false as a true
 * If never swapped we can change to true and break out of the loop early 
 */

function bubbleSort3(arr) {
    count = 0;
    //loop from beginning to end
    for (let i = 0; i < arr.length; i++){
//assume nothing has been swapped yet
        let swapped = false;
        //need to repeat again
        for (let j = 0; j < arr.length; j++){
            count++;
            //get element of i and compare to i+1 and compare
            if (arr[j] > arr[j + 1]) {
                //swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
//if anything was swapped, then change boolean for swapped
                swapped = true;
            }            
        }
//nothing was swapped before the ouer loop finishes than break 
//(because everything was swapped already)
        if (!swapped) break;
    }
    console.log("TOTAL COUNT:", count);
    return arr;
}

bubbleSort([987, 2,3,24,34,67,87,89,123,342,424,739])
bubbleSort2([987, 2,3,24,34,67,87,89,123,342,424,739])
bubbleSort3([987, 2, 3, 24, 34, 67, 87, 89, 123, 342, 424, 739])



//Merge Sort///
    
//two sorted arrays
[1, 3, 5][4, 6, 8]

//take first value of each array and compare to the other
1 vs 4 [1]
3 vs 4 [1, 3]
5 vs 4[1, 3, 4]
// Nothing in first Array, add the rest of the second array
5 vs 6 [1, 3, 4, 5, 6, 8]


//break into smaller arrays, sort, and then merge 

function merge(arr1, arr2) {
    //make results array
    const results = [];
    //make pointer
    let i = 0;
    let j = 0;

    //works if arrays are equal length 
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
        results.push(arr1[i]);
        i++;
        } else {
        results.push(arr2[j]);
        j++;
        }
    }

    //one while loop will run depending on which array has values left
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}


function mergeSort(arr) {
    //base case (stop when the length is 0 or 1)
    if (arr.length <= 1) return arr;
    //find the half to split array if not 0 or 1 length
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    //merge the sorted arrays at the end
    return merge(left, right)
}


console.log(mergeSort([4,45,67,-9,99,23,44,77,100]))