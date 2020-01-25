// Write a function that rearranges an integer into its largest possible value.
// If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.

function superSize(num){

  const newNum = num.toString().split("");

  const max = (a, b) => {
    if(a > b){
      return -1;
    }
    if(a < b){
      return 1;
    }
    return 0;
  };

  const sortedNum = newNum.sort(max).join("");
  
  if(num.length == 1){
    return num;
  }else{
    return parseInt(sortedNum);
  };
  
};