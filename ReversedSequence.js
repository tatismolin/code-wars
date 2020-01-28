// Get the number n (n>0) to return the reversed sequence from n to 1.

// Examples:
// n=5 >> [5,4,3,2,1]


const reverseSeq = n => {
    let newArray = [];
    for(let i = n; i > 0; i--){
        newArray.push(i);
    };
    return newArray;
};