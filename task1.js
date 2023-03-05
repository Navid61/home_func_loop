// Define a function called findSteveIndex that takes an array of names as an argument
function findSteveIndex(names) {
  // Loop through each element of the names array using a for loop
  for (let i = 0; i < names.length; i++) {
    // Check if the current element is equal to 'Steve' using the strict equality operator (===)
    if (names[i] === 'Steve') {
      // If so, use console.log to print out the index of the current element and a message indicating that the name was found
      console.log(`Name found at index ${i}.`);
      // Return the index of the element
      return i;
    }
  }
  // If the loop completes without finding the name, use console.log to print out a message indicating that it was not found
  console.log('Name not found.');
  // Return -1 to indicate that the name was not found
  return -1;
}

// Declare an array of names
const names = ['Istvan', 'Katalin', 'Steve', 'Gabor', 'Peter', 'Anna', 'Kitti'];
// Call the findSteveIndex function with the names array as an argument
findSteveIndex(names);
