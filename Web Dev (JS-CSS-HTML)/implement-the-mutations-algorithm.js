** start of script.js **

function mutation(arr) {
  // Convert both strings to lowercase for case-insensitive comparison
  const str1 = arr[0].toLowerCase();
  const str2 = arr[1].toLowerCase();

  // Iterate through each character of the second string
  for (let i = 0; i < str2.length; i++) {
    // Check if the current character from str2 is present in str1
    // The indexOf() method returns -1 if the character is not found
    if (str1.indexOf(str2[i]) === -1) {
      // If even one character is not found, return false immediately
      return false;
    }
  }

  // If the loop completes, it means all characters from str2 were found in str1
  return true;
}

// --- Test Cases (provided in the prompt) ---

console.log("mutation([\"hello\", \"hey\"]) should return false:", mutation(["hello", "hey"])); // Expected: false
console.log("mutation([\"hello\", \"Hello\"]) should return true:", mutation(["hello", "Hello"])); // Expected: true
console.log("mutation([\"zyxwvutsrqponmlkjihgfedcba\", \"qrstu\"]) should return true:", mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // Expected: true
console.log("mutation([\"Mary\", \"Army\"]) should return true:", mutation(["Mary", "Army"])); // Expected: true
console.log("mutation([\"Mary\", \"Aarmy\"]) should return true:", mutation(["Mary", "Aarmy"])); // Expected: true
console.log("mutation([\"Alien\", \"line\"]) should return true:", mutation(["Alien", "line"])); // Expected: true
console.log("mutation([\"floor\", \"for\"]) should return true:", mutation(["floor", "for"])); // Expected: true
console.log("mutation([\"hello\", \"neo\"]) should return false:", mutation(["hello", "neo"])); // Expected: false
console.log("mutation([\"voodoo\", \"no\"]) should return false:", mutation(["voodoo", "no"])); // Expected: false
console.log("mutation([\"ate\", \"date\"]) should return false:", mutation(["ate", "date"])); // Expected: false
console.log("mutation([\"Tiger\", \"Zebra\"]) should return false:", mutation(["Tiger", "Zebra"])); // Expected: false
console.log("mutation([\"Noel\", \"Ole\"]) should return true:", mutation(["Noel", "Ole"])); // Expected: true

** end of script.js **

