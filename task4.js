// Task 4: Sum all numbers in the array, converting non-numeric elements using parseInt
const nums = ['a', '4', 2, 2, 1, 1];
let sum = 0;

for (let i = 0; i < nums.length; i++) {
  const num = parseInt(nums[i]);
  if (!isNaN(num)) {
    sum += num;
  } else {
    console.log(`Failed to convert ${nums[i]} to a number`);
  }
}

console.log(sum);
