## Q.1

> Given an array of api's, make api calls synchronously one after
> another each. Once all completed, execute a callback. Similar to
> Promise.all but just that all promises has to be resolved
> synchronously.
```javascript
    const fakeApi = (url, ms = 0) => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(`${url}- done`)
        }, ms)
      })
    }
    
    const callApisSynchronously = async (urls) => {
      const responses = []
    
      for (let url of urls) {
        const response = await fakeApi(url)
        responses.push(response)
      }
    
      console.log(responses)
    }
    
    const apiUrls = [
      'https://api.example.com/endpoint1',
      'https://api.example.com/endpoint2',
      'https://api.example.com/endpoint3'
    ]
    
    callApisSynchronously(apiUrls)
    
```
## Q.2
> Polyfill of call()


```javascript

const car = {
  color: "red",
  brand: "ferari"
}

function getDetails(price) {
  console.log(`I baught this ${this.color} 
  ${this.brand} for INR ${price}`)
}

Function.prototype.myCall = function(context = {}, ...args) {
  if (typeof this !== 'function') {
    throw new Error("Error----")
  }

  context.fn = this
  context.fn(...args)
}


getDetails.myCall(car, 4000)

```

## Q.3

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

