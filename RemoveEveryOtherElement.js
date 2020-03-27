// Take an array and remove every second element out of that array. 
// Always keep the first element and start removing with the next element.

// Examples:
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];

function removeEveryOther(arr){
    let newArray = [];
  
    for(let i = 0; i < arr.length; i += 2){
        newArray.push(arr[i])
    };
    return newArray;
};