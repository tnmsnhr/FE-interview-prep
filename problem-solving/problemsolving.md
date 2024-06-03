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
