## Q.1

>Bubble sort

```javascript

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  for (let i = 0; i < n-1; i++) {
    swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }

  return arr;
}

// Example usage

console.log(bubbleSort([5, 1, 4, 2, -1])); 
// Output: [1, 2, 4, 5, 8]

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));
// Output: [11, 12, 22, 25, 34, 64, 90]

```


## Q.2
>Selection sort

```javascript

function selectionSort(arr) {
    const n = arr.length
    let minIndex
    for(let i = 0 ;i<n-1;i++){
        minIndex = i

        for(let j = i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j
            }
        }

        if(minIndex != i){
            [arr[minIndex],arr[i]] = [arr[i],arr[minIndex]]
        }
    }

    return arr
}

console.log(selectionSort([5, 1, 4, 2, -1])); 
// Output: [1, 2, 4, 5, 8]

console.log(selectionSort([64, 34, 25, 12, 22, 11, 90]));
// Output: [11, 12, 22, 25, 34, 64, 90]

```