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

> const flatObject = flattenObject(nestedObject);
> console.log(flatObject); 
> Output: {a: 1, bc: 2, bde: 3, g: 5}

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
>if the array is breaking the pattern then return the element(or index) at which it broke the rule.
>Example: [3,4,7,10,12,13]
>Output: 12, as 10 and 12 both are even and 12 is where the array first broke the pattern
>Example2: [4,7,12,13,15,19,20,23]
>Output: 15

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

>remove duplicate elements from an array and replace it with ```null```, all the ```null``` values will be at the end of the array
>do not create new array
>do not alter the length of the array
>cant use map,find,Set,filter
>Example1: [3,6,7,2,5,5,7,9]
>Output: [3,6,7,2,5,9,null,null]
>Example2: [3,6,7,2,5,5,7,9,7,11,2,3]
>Output: [3,6,7,2,5,9,11,null,null,null,null,null]

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