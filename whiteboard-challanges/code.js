let array = [1,2,3,4,5];

console.log("current array: ", array);

ReverseArray(array);

console.log("\n\nedited array: ",array );


function ReverseArray(array)
{
    let temp;
    for(let i = 0; i < array.length/2; i++){
        temp = array[i];
        array[i] = array[array.length - i -1];
        array[array.length - i - 1] = temp;
    }
}

let array1 = [1,2,2,3,3,4,5];

console.log("current array: ", array1);

console.log("\n\nmost frequent num is: ", MostFrequntNuminArray(array) );

function MostFrequntNuminArray(array)
{
    let currrentFrequancy = 0;
    let mostFrequancy = 0;
    let mostFrequantNum = array[0];
    for(let i = 0; i < array.length; i++){
        currrentFrequancy = 0;
        for(let j = 0; j < array.length; j++){
            if(array[i] == array[j]){
                currrentFrequancy++;
            }
        }
        if(mostFrequancy < currrentFrequancy){
            mostFrequancy = currrentFrequancy;
            mostFrequantNum = array[i];
        }
    }
    return mostFrequantNum;
}