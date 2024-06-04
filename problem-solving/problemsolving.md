## Q.1

> You will be given array of meeting times, you have to return when can you host a meeting of certain length when everyone is free or not overlapping meeting time.
>Example1:
> lets say input array is, find a suitable slot where I can host meeting of length 120min
> [
> [[60,150],[180,240]],
> [[0,210],[360,420]]
> ]
> Expected output: 240(after 240 we have 120min of gap)
> 
> Example: 2
> [
> [[0,1429]],
> [[0,1439]],
> [[0,560],[600,780]]
> ]
> output: -1(as we dont have any slot in between or at the very start)

```javascript

function findMeetingSlot(meetings, meetingLength) {
  // Flatten the list of meetings
  let allMeetings = [].concat(...meetings);

  // Sort meetings based on start time
  allMeetings.sort((a, b) => a[0] - b[0]);

  // Merge overlapping meetings
  let mergedMeetings = [allMeetings[0]];
  for (let i = 1; i < allMeetings.length; i++) {
    let lastMerged = mergedMeetings[mergedMeetings.length - 1];
    let current = allMeetings[i];
    
    if (current[0] <= lastMerged[1]) {
      // There is an overlap, so merge the intervals
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // No overlap, add the current meeting to mergedMeetings
      mergedMeetings.push(current);
    }
  }

  // Check gaps between merged meetings for a suitable slot
  for (let i = 1; i < mergedMeetings.length; i++) {
    let gapStart = mergedMeetings[i - 1][1];
    let gapEnd = mergedMeetings[i][0];

    if (gapEnd - gapStart >= meetingLength) {
      return gapStart;
    }
  }

  // Check for a slot before the first meeting
  if (mergedMeetings[0][0] >= meetingLength) {
    return 0;
  }

  // No suitable slot found
  return -1;
}

// Example input
const inputArray = [
  [[60, 150], [180, 240]],
  [[0, 210], [360, 420]]
];
const meetingLength = 120;

const result = findMeetingSlot(inputArray, meetingLength);
console.log(result); // Output should be 240

```
## Q.2

> Flatten nested object: 
```
const nestedObject = {   
  a: 1,   
  b: {
    	c: 2,
	    d: {
		    e: 3,
		    f: { }
		 }   
	  },   
	g: 5 
};
const flatObject = flattenObject(nestedObject) <br>
console.log(flatObject); <br>
Output: {a: 1, bc: 2, bde: 3, g: 5} <br>
```
<br>
<br>
<br>

```javascript

function flattenObject(obj,parent="",res={}) {
    for(let key in obj){
        let propName = parent ? `${parent}${key}` : key
        if(typeof obj[key] === "object"){
            flattenObject(obj[key],propName,res)
        }else{
            res[propName] = obj[key]
        }
    }
    return res
}

```

## Q.3
>Given an array is said to be non-pattern breaker if consecutive two elemnts are not the same type(odd or even),
>if the array is breaking the pattern then return the element(or index) at which it broke the rule. <br>
>Example: ```[3,4,7,10,12,13]``` <br>
>Output: ```12```, as ```10``` and ```12``` both are even and ```12``` is where the array first broke the pattern <br>
>Example2: ```[4,7,12,13,15,19,20,23]``` <br>
>Output: ```15``` <br>

```javascript

const checkPattern = (arr)=>{
  for(let i=1; i<arr.length;i++){
    if((arr[i-1]%2 == arr[i]%2)){
      return arr[i]
    }
  }
  return -1
}

console.log(checkPattern(arr))

```

## Q.4

>remove duplicate elements from an array and replace it with ```null```, all the ```null``` values will be at the end of the array <br>
>do not create new array  <br>
>do not alter the length of the array <br>
>cant use map,find,Set,filter <br>
>Example1: ```[3,6,7,2,5,5,7,9]``` <br>
>Output: ```[3,6,7,2,5,9,null,null]``` <br>
>Example2: ```[3,6,7,2,5,5,7,9,7,11,2,3]``` <br>
>Output: ```[3,6,7,2,5,9,11,null,null,null,null,null]``` <br>

```javascript
const removeDuplicate = (arr)=>{
  for(let i = 0; i<arr.length;i++){
    let left = i
    for(let j=arr.length-1;j>i;j--){
      if(arr[i]==arr[j]){
        arr[j] = null
      }

      if(arr[j] && !arr[i]){
        [arr[i],arr[j]] = [arr[j],arr[i]]
      }
    }
  }
  return arr
}

console.log(removeDuplicate(arr))

```

## Q.5
>Flatten a nested array with specif depth
```
const nestedArray = [1, [2, [3, [4, [5]]]]];
const depth = 2;
const flattenedArray = nestedArray.flat(depth);
console.log(flattenedArray); // Output: [1, 2, 3, [4, [5]]]
```

```javascript

function flattenArray(arr, depth = 1) {
  if (depth < 1) {
    return arr.slice();
  }

  return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      acc.push(...flattenArray(val, depth - 1));
    } else {
      acc.push(val);
    }
    return acc;
  }, []);
}

// Example usage:
const nestedArray = [1, [2, [3, [4, [5]]]]];
const flattenedArray = flattenArray(nestedArray, 2);
console.log(flattenedArray); // Output: [1, 2, 3, [4, [5]]]


```

## Q.5
>Find next palindrome

```javascript

let  isPalindrome= (num)=> {
  const str = num.toString();
  return str === str.split('').reverse().join('');
}

let createPalindrome = (left, isOddLength) => {
  const strLeft = left.toString();
  const reversed = strLeft.split('').reverse().join('');
  return parseInt(isOddLength ? strLeft + reversed.slice(1) : strLeft + reversed);
}

let nextPalindrome = (num) => {
  const strNum = num.toString();
  const length = strNum.length;
  const isOddLength = length % 2 !== 0;
  const leftHalf = parseInt(strNum.slice(0, Math.ceil(length / 2)));
  
  for (let i = 0; i < 2; i++) {
    const candidate = createPalindrome(leftHalf + i, isOddLength);
    if (candidate > num) {
      return candidate;
    }
  }

  return createPalindrome(leftHalf + 1, isOddLength);
}

// Example usage:
const number = 123;
const nextPal = nextPalindrome(number);
console.log(nextPal); // Output: 131

```

## Q.6
>Flat an array

```javascript

const flatArray = (arr) =>{
    const result = []

    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            result.push(...flatArray(arr[i]))
        }else{
            result.push(arr[i])
        }
    }

    return result
}

console.log(flatArray([1,4,5,6,[7,9,10,[11,12]],99]))

```
