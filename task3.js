// Define a function called sumNumbers that takes an array as an argument
function sumNumbers(nums) {
  // Initialize a variable called sum to 0 to store the sum of the numbers
  let sum = 0;
  // Loop through each element of the input array using a for loop
  for (let i = 0; i < nums.length; i++) {
    // Check if the current element is a number using the typeof operator
    if (typeof nums[i] === 'number') {
      // If it is, add the current element to the sum variable using the += operator
      sum += nums[i];
    } else {
      // If it is not, print out a message indicating that the element is not a number
      console.log(`Element at index ${i} is not a number.`);
    }
  }
  // Use console.log to print out the sum of the numbers
  console.log(`The sum of the numbers in the array is ${sum}.`);
}

// Declare an array called nums containing several numbers and a string
const nums = ['a', 4, 2, 2, 1, 1];
// Call the sumNumbers function with the nums array as an argument
sumNumbers(nums);
