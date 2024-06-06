## Q.1
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

## Q.2
>
>Validate Subsequence:
>Given two non-empty arrays of integers, write a function that determines whether the second <br>
>array is a subsequence of the first one.
>A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array <br>
>but that are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] <br>
>form a subsequence of the array [1, 2, 3, 4], and so do the <br>
>numbers [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.
>

```
Sample Input:
array = 15, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]
Sample Output: true
```

```javascript
function isValidSubsequence(array, sequence) {
  let pointer = 0;
  for (let el of array) {
    if (el == sequence[pointer] && pointer < sequence.length) {
      pointer++;
    }
  }
  return pointer === sequence.length;
}
console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));

```

