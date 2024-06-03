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

