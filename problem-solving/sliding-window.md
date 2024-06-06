## Q.1
> Find the longest substring with unique character

```
const input = "abcaswdswrdbcbb";
const result = longestUniqueSubstring(input);
console.log(result); // Output: "bcaswd"
```

```javascript

function longestUniqueSubstring(s) {
  let charIndex = {}; // Hash map to store the last seen index of each character
  let maxLength = 0; // Maximum length of unique characters substring
  let start = 0; // Left pointer of the window
  let longestSubstring = ''; // Store the longest unique substring

  for (let end = 0; end < s.length; end++) {
    let char = s[end];

    // If the character is already in the hash map and its index is within the current window
    if (char in charIndex && charIndex[char] >= start) {
      start = charIndex[char] + 1; // Move the left pointer to the right of the last seen index
    }

    charIndex[char] = end; // Update the last seen index of the current character

    // Check if the current window length is greater than the maxLength
    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1; // Update the maximum length
      longestSubstring = s.slice(start, end + 1); // Update the longest unique substring
    }
  }

  return longestSubstring;
}

// Example usage:
const input = "abcaswdswrdbcbb";
const result = longestUniqueSubstring(input);
console.log(result); // Output: "bcaswd" (The longest substring with unique characters)

```
