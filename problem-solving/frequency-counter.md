## Q.1
>Check whether two strings are anagram or not

```javascript

const validAnagram = (first,second)=>{
    if(first.length != second.length) return false

    const lookup = {}
    for(let i = 0;i<first.length;i++){
        lookup[first[i]] ? lookup[first[i]] += 1 : lookup[first[i]] = 1
    }

    for(let i=0;i<second.length;i++){
        if(!lookup[second[i]]) return false
        else lookup[second[i]] -= 1
    }

    return true
}

console.log(validAnagram("anagram","granaaa"))
//true
```
