// Find min and max numbers in array and print them out.

function findMinMax(array){
    let min = array[0];
    let max = 0;
  
    for(let i = 0; i < array.length; i++){
      if(array[i] < min){
        min = array[i];
      }else if(array[i] > max){
        max = array[i];
      };
    };
    console.log(min)
    console.log(max)
};