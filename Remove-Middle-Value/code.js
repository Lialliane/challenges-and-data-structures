let array = [1, 2, 3, 4, 5];

console.log("current array: ", array);

console.log("\nedited array: ", RemoveMiddleValue(array));

let array1 = [27, 8, 15, 73, 27];

console.log("current array: ", array1);

console.log("\nedited array: ", RemoveMiddleValue(array1));

let array2 = [7, 9, 13, 25, 5, 17];

console.log("current array: ", array2);
array2 = RemoveMiddleValue(array2);
console.log("\nedited array: ", array2);

function RemoveMiddleValue(array)
{
    let new_array = [];
    let middle_value = array.length%2 == 0? array.length/2: array.length/2 - 0.5;
    for(let i = 0; i< array.length-1; i++){
        if(i >= middle_value)
            new_array[i] = array[i+1];
        else
            new_array[i] = array[i];
    }
    return new_array;
}
