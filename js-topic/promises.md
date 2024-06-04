## Info:

1. JS Engine will always try to find synchronous code first then async code
2. The executor function provided to the Promise constructor is executed immediately when the Promise is created.
   The executor function (res, rej) => {...} is executed immediately. Within that function, console.log(1) is a synchronous operation, and res(2) is also invoked synchronously.
   However, the resolution of the promise (setting it to a fulfilled state with the value 2) is scheduled to occur asynchronously after the current synchronous execution context is complete.


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
>Guess the output

```javascript
console.log("start");

const promise1 = new Promise((res, rej) => {
  console.log(1);
  res(2);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");

// output:
// start
// 1
// end
// 
```

## Q.3
>Guess the output

```javascript
function sleep(ms) {
  console.log(`Sleeping for ${ms}`);
  const start = new Date();
  while (new Date() - start < ms) {
    // Do nothing
  }
  console.log("Sleep Over");
}

// Promise executor is executed Synchronously
function executor(resolve, reject) {
  sleep(3000);
  if (new Date() % 2) {
    resolve("Time is odd");
  } else {
    reject("Time is even");
  }
}

// Promise is not really asynchronous, it waits for the executor
const pakka = new Promise(executor);
console.log("Promise Made");

// .then/.catch are not parallel, they run deferred
pakka.then((res) => console.log(res)).catch((rej) => console.log(rej));

console.log("Program ends");
```

## Q.4
>Guess the output

```javascript
const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });

console.log("middle");

fn().then((res) => {
  console.log(res);
});

console.log("end");

// output:
// middle
// 1
// end
// success
```

## Q.5
>Guess the output

```javascript
function job() {
  return new Promise(function (resolve, reject) {
    reject();
  });
}

let promise2 = job();

promise2
  .then(function () {
    console.log("Success 1");
  })
  .then(function () {
    console.log("Success 2");
  })
  .then(function () {
    console.log("Success 3");
  })
  .catch(function () {
    console.log("Error 1");
  })
  .then(function () {
    console.log("Success 4");
  });

/*
Output:
Error 1
Success 4
*/
```

## Q.5
>Guess the output

```javascript
function job2(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("Success");
    } else {
      reject("error");
    }
  });
}

let promise3 = job2(true);

promise3
  .then(function (data) {
    console.log(data);
    return job2(false);
  })
  .catch(function (error) {
    console.log(error);
    return "Error caught";
  })
  .then(function (data) {
    console.log(data);
    return job2(true);
  })
  .catch(function (error) {
    console.log(error);
  });

/* OUTPUT:
Success
error
Error caught
Success
*/
```
