// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

// Examples:
// n = 3, x = 1, y = 3 => true because 3 is divisible by 1 and 3
// n = 100, x = 5, y = 3 => false because 100 is not divisible by 3

function isDivisible(n, x, y){
    if(n % x === 0 && n % y === 0){
      return true;
    }else{
      return false;
    };
};
  