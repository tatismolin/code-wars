// Convert number to reversed array of digits. Given a random number.
// You have to return the digits of this number within an array in reverse order.

// Examples:
// 348597 => [7,9,5,8,4,3]

function digitize(n){
    let newN = n.toString();
    let array = [];
    for(let i = newN.length-1; i >= 0; i--){
      array.push(parseInt(newN[i], 10));
    };
    return array;
};