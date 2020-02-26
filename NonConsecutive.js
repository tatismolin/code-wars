// Your task is to find the first element of an array that is not consecutive.
// If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
// If the whole array is consecutive then return null.

function firstNonConsecutive(array){
    for(let i = 0; i < array.length-1; i++){
      if(array[i] + 1 !== array[i+1]){
        return array[i+1];
      };
    };
    return null;
};