// The first century spans from the year 1 up to and including the year 100, 
// The second - from the year 101 up to and including the year 200, etc.

// Given a year, return the century it is in.

// Examples:
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)

function century(year) {
    let century = 0;
    for(let i = 0; i < year; i++) {
      if(i % 100 == 0) {
        century++;
      }
    }
    return century;
};
  
// OR

// function century(year){
//     return Math.floor((year-1)/100) + 1;
// };