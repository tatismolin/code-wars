// Create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string. 
// You don't have to worry with strings with less than two characters.

function removeChar(str){
    let newStr = str.split("");
    return newStr.slice(1, newStr.length-1).join("");
};