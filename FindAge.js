// You will be given an array of all the family members' ages, in any order. 
// The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. 
// Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

function differenceInAges(ages){
    let newArray = [];
    let min = Math.min(...ages);
    let max = Math.max(...ages);
    let average = max - min;
    let finalArray = [...newArray, min, max, average];
    return finalArray;
};