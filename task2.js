// Define a function called sumNumbers that takes an array of numbers as an argument
function sumNumbers(nums) {
  // Initialize a variable called sum to 0 to store the sum of the numbers
  let sum = 0;
  // Loop through each element of the input array using a for loop
  for (let i = 0; i < nums.length; i++) {
    // Add the current element to the sum variable using the += operator
    sum += nums[i];
  }
  // Use console.log to print out the sum of the numbers
  console.log(`The sum of the numbers in the array is ${sum}.`);
}

// Declare an array called nums containing several numbers
const nums = [4, 2, 2, 1, 1];
// Call the sumNumbers function with the nums array as an argument
sumNumbers(nums);
