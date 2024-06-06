## Q.1
>Implement a stack using two queues.

```javascript

class MyStack {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(x) {
    this.queue1.push(x);
  }

  pop() {
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }
    let poppedElement = this.queue1.shift();
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
    return poppedElement;
  }

  top() {
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }
    let topElement = this.queue1.shift();
    this.queue2.push(topElement);
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
    return topElement;
  }

  empty() {
    return this.queue1.length === 0;
  }
}


```

## Q.2
>Implement a queue using two stacks.

```javascript
class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push(x) {
    this.stack1.push(x);
  }

  pop() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }

  peek() {
    if (this.stack2.length === 0) {
      while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }

  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}


```