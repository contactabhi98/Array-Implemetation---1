function findSecondLargestNumber(arr) {
    console.log("Unsorted Array: ",arr)
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            // Compare adjacent elements
            if (arr[j] < arr[j + 1]) {
                // Swap them if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log("Sorted Array In Desc Order: ",arr);
    let uniqueArray = [];
    for(let k = 0; k < arr.length; k++) {
        // To check element present in unique array
        if(!uniqueArray.includes(arr[k])) {
            uniqueArray.push(arr[k])
        }

    }

    // return second largest number
    console.log("Unique Array: ",uniqueArray);
    return uniqueArray[1];
}

console.log("Second Largest Number In Array: ",findSecondLargestNumber([5, 2, 15, 10, 4, 1, 16, 17, 15]));