
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

  // 1 km = 100000 cm
  // 1 hour = 3600 sec

function cockroachSpeed(s){
    return Math.floor((s * 100000) / 3600);
};
  
  
