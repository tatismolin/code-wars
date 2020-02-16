// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.
// You need to consider the following ratings:
// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%

// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:
// "Rating not recognised".
// Because you're a nice person, you always round up the tip, regardless of the service.

function calculateTip(amount, rating){
    if(rating.toLowerCase() === "terrible"){
      return Math.ceil((amount/100)*0);
    }else if(rating.toLowerCase() === "poor"){
      return Math.ceil((amount/100)*5);
    }else if(rating.toLowerCase() === "good"){
      return Math.ceil((amount/100)*10);
    }else if(rating.toLowerCase() === "great"){
      return Math.ceil((amount/100)*15);
    }else if(rating.toLowerCase() === "excellent"){
      return Math.ceil((amount/100)*20);
    }else{
      return "Rating not recognised"
    };
};

// OR

// function calculateTip(amount, rating){
//     let multiplier = 0;
//     switch(rating.toLowerCase()){
//       case "terrible":
//         break;
//       case "poor":
//         multiplier = .05;
//         break;
//       case "good":
//         multiplier = .1;
//         break;
//       case "great":
//         multiplier = .15;
//         break;
//       case "excellent":
//         multiplier = .2;
//         break;
//       default:
//         return "Rating not recognised";
//     };
//     return Math.ceil(amount * multiplier);
// };

// OR

// const TIPS = {
//     "terrible": 0.0,
//     "poor": 0.05,
//     "good": 0.1,
//     "great": 0.15,
//     "excellent": 0.2
// };
  
// const calculateTip = (amount, rating) => {
//     rating = rating.toLowerCase();
//     return rating in TIPS ? Math.ceil(TIPS[rating] * amount) : "Rating not recognised";
// };