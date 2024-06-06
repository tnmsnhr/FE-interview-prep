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
