// Given an array of integers, return a new array with each value doubled.

// Examples:
// [1, 2, 3] --> [2, 4, 6]

function maps(x){
    let newArray = [];
    for(let i = 0; i < x.length; i++){
      newArray.push(x[i] * 2);
    };
    return newArray;
};
  