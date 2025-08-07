let string = "javascript";

console.log(`string is: ${string}`);

console.log(`reversed: ${reverse(string)}`);

let string1 = "nadroj";

console.log(`string is: ${string1}`);

console.log(`reversed: ${reverse(string1)}`);

let string2 = "abc564";

console.log(`string is: ${string2}`);

console.log(`reversed: ${reverse(string2)}`);

function reverse(string){
    let string_list_temp = [];
    let new_string = "";

    for(let i = 0; i < string.length; i++)
    {
        string_list_temp.push(string[string.length - i - 1]);
        new_string = new_string + string_list_temp[i];
    }
    
    return new_string;
}