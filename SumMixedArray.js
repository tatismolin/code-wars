// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

function sumMix(x){
    let newArray = [];
    const sum = (a,b) => {
      return a + b;
    };
    for(let i = 0; i < x.length; i++){
      newArray.push(parseInt(x[i]));
    };
    return newArray.reduce(sum);
};