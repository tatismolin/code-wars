// Get the sum of two arrays...actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

function arrayPlusArray(arr1, arr2){
  const reducer = (sum, num) => sum + num;
  let arrayA = arr1.reduce(reducer);
  let arrayB = arr2.reduce(reducer);
  return arrayA + arrayB;
};

// OR

// function arrayPlusArray(arr1, arr2){
//   function sum(a,b){
//     return a + b
//   };
//   let arrayA = arr1.reduce(sum);
//   let arrayB = arr2.reduce(sum);
//   return arrayA + arrayB;
// };
