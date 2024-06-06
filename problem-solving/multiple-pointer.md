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

## Q.2
>Container With Most Water
```
Given n non-negative integers a1, a2, ..., an where each represents a
point at coordinate (i, ai). n vertical lines are drawn such that
the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines,
which together with the x-axis forms a container, such that the
container contains the most water.
```

```javascript

function maxArea(height) {
  let left = 0, right = height.length - 1, maxArea = 0;
  while (left < right) {
    let width = right - left;
    let area = Math.min(height[left], height[right]) * width;
    maxArea = Math.max(maxArea, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

console.log(maxArea([1,2,6,2,3,5,7]))
//24

```
