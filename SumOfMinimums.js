// Given an 2D array of size m * n. Your task is to find the sum of minimum value in each row.

// For example:
// [
//   [1, 2, 3, 4, 5], // minimum value of row is 1
//   [5, 6, 7, 8, 9], // minimum value of row is 5
//   [20, 21, 34, 56, 100] // minimum value of row is 20
// ]

// So, the function should return 26 because sum of minimums is as 1 + 5 + 20 = 26
// Note: You will be always given non-empty array containing Positive values.

function sumOfMinimums(arr){
    const newArray = arr.map(array => {
      return Math.min.apply(null, array);
    });
    return newArray.reduce((sum, num) => sum + num);
};
  
// OR

// function sumMin(array){
//   let newArray = array.map(array => {
//     let min = array[0];
//     for(let i = 0; i < array.length; i++){
//       if(array[i] < min){
//         min = array[i];
//       }
//     }
//     return min;
//   });
//   return newArray.reduce((sum, num) => sum + num)
// };