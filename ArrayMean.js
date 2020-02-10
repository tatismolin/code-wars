// Find the mean (average) of a list of numbers in an array.
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

const findAverage = (nums) => {
    const arrayLength = nums.length;
    const newArray = nums.reduce((sum, num) => sum + num);
    return newArray / arrayLength;
};