// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

function divisibleBy(numbers, divisor){
    let newArray = [];
    numbers.map(number => {
      if(number % divisor === 0){
        newArray.push(number);
      };
    });
    return newArray;
};