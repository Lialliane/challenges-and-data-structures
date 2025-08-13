let array = [10, 15, 8, 6, 12];

console.log("array: ", array);

console.log("\nminimum value: ", MinimumValue(array));

let array1 = [1, 3, 5, 7, 9];

console.log("array: ", array1);

console.log("\nminimum value: ", MinimumValue(array1));

let array2 = [7, 9, 13, 25, 5];

console.log("array: ", array2);

console.log("\nminimum value: ", MinimumValue(array2));

function MinimumValue(array){
    let min = array[0];

    for(let i = 1; i < array.length; i++)
    {
        if(min > array[i] )
            min = array[i];
    }
    
    return min;
}