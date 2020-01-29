// Complete the solution so that it reverses the string value passed into it.

// Examples:
// solution('world'); // returns 'dlrow'

function solution(str){
    let newStr = "";
  
    for(let i = str.length-1; i >= 0; i--){
      newStr += str[i]
    };
    return newStr;
};