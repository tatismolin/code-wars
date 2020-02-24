// Find and return unique values of givven array.

function findUnique(array){
  let sortedArray = array.sort();
  let uniqueArray = [];

  for(let i = 0; i < sortedArray.length; i++){
    if(sortedArray[i-1] !== sortedArray[i]){
      uniqueArray.push(sortedArray[i])
    };
  };
  return uniqueArray;
};