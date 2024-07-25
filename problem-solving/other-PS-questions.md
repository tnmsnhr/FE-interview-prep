## Q1
> Given a string s containing just the characters '(', ')', '{', '}', '[', and ']', determine if the input string is valid.
The input string is valid if:
Open brackets must be closed by same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same page.

input: "()[]{}"
output: true

input: "(]"
output: false


```javascript

const str = "()]]";

function isValid(str) {

  if (str.length % 2 !== 0) {
    return false;
  }

  const matchingPairs = {
    ')': '(',
    '}': '{',
    ']': '['
  }

  const stack = [];


  for (char of str) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else {
     if (stack.length == 0 || stack.pop() !== matchingPairs[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(isValid(str));

```

## Q2
>Given an integer array, rotate or shift the array to the right by k steps, where k is non-negative.

input: nums = [1,2,3,4,5,6,7], k = 3
output: [5,6,7,1,2,3,4]

input: nums = [-1, -100, 3, 99], k = 2
output: [3,99,-1,-100]

```javascript

const array = [-1, -100, 3, 99];

function rotateArray(arr, k) {

  function reverse(arr, startIndex, endIndex) {
    while (startIndex < endIndex) {
      let temp = arr[startIndex];
      arr[startIndex] = arr[endIndex];
      arr[endIndex] = temp;
      startIndex++;
      endIndex--;
    }
  }

  reverse(array, 0, array.length - 1);

  reverse(array, 0, k - 1);

  reverse(array, k, array.length - 1);

}
rotateArray(array, 4)


console.log(array);

```
