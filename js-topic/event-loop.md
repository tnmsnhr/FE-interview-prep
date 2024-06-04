## Q.1
>guess the output


```javascript

var arr = [1,2,3,4,5,6]
console.log("A"+i)

for(var i=0;i<arr.length;i++){
    setTimeout(()=>{
        console.log("B"+i)
    },100-i*20)
}

console.log("C"+i++)

setTimeout(()=>{
   console.log("D"+--i) 
},0)

```

```
Aundefined
C6
B7
D6
B6
B6
B6
B6
B6
```