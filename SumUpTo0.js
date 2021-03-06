// Given an integer, return an array containing N unique integers that sum up to 0.


function sol(A){
    let uniqArr = [...new Set(A.sort())];
    let noNegative = uniqArr.filter(function(x){ return x > -1 });

    if(uniqArr[0] < 0 && uniqArr[-1]){
      result = 1;
    }else{
        for(i = 0; i < noNegative.length; i++){
            if(noNegative[i] === i + 1){
                continue;
            }else{
                result = i + 1;
            };
        };
    };
    return result;
};