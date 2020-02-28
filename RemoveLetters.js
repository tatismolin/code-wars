// Remove letters from an array of letters and numbers.

function removeLetters(array){
    let newArray = [];
    let number = "number";
  
    for(let i = 0; i < array.length; i++){
      if(number === typeof(array[i])){
        newArray.push(array[i]);
      };
    };
    return newArray;
};