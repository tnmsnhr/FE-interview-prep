## Q.1
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
