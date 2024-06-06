## Q.1
> Implement Singly linked-list

```javascript

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.tail;
    let newTail = this.tail;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    return current;
  }

  shift() {
    if (!this.head) return undefined;

    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  unshift(val) {
    if (!this.head) {
      return this.push(val);
    } else {
      const newNode = new Node(val);
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    }
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter != index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index == 0) return this.shift();
    if (index == this.length - 1) return this.pop();

    let previousNode = this.get(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    var current = this.head;
    this.head = this.tail;
    this.tail = current;
    let next,
      prev = null;
    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  }

  print() {
    const arr = [];

    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }
}

var list = new SinglyLinkedList();
list.push("Hey");
list.push("Tanmoy");
list.push("Roy");


```

## Q.2
>Doubly linked-list

```javascript

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null
    }
    
}

class DublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    push(val){
        const newNode = new Node(val)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }

        this.length++
        return this
    }

    pop(){
        if(!this.head) return undefined;
        const poppedNode = this.tail
        if(this.length === 1){
            this.tail = null;
            this.head = null
        }else{
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }

        this.length--

        return poppedNode
    
    }

    shift(){
        if(!this.head) return undefined;
        const poppedNode = this.head;
        if(this.length===1) {
            this.head = null;
            this.tail = null
        }else{
            
            this.head = poppedNode.next
            this.head.prev = null;
            poppedNode.next = null
        }
        this.length--
        return poppedNode
    }

    unshift(val){
        const newNode = new Node(val)

        if(this.length == 0 ){
            this.head = newNode;
            this.tail = newNode
        }else{
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this;
    }

    get(index){
        if(index>=this.length || index<0) return null
        let count,current
        if(index<= this.length/2){
            count = 0;
            current = this.head

            while(index != count){
                current = current.next
                count++
            }

        }else{
            current = this.tail
            count = this.length-1
            while(count != index){
                current = current.prev
                count--
            }

        }
        return current;
    }

    set(index,val){
        const foundNode = this.get(index)

        if(!!foundNode){
            foundNode.val = val
            return true
        }
        
    }

    insert(index,val){
        if(index<0 || index>this.length) return false
        
        if(index === this.length) return !!this.push(val)
        
        if(index === 0 ) return !!this.unshift(val)

        const newNode = new Node(val)

        const beforeNode = this.get(index-1)
        const afterNode = this.get(index)

        beforeNode.next = newNode
        newNode.prev = beforeNode
        newNode.next = afterNode
        afterNode.prev = newNode
        
        
        // newNode.prev = foundNode.prev
        // newNode.next = foundNode
        // foundNode.prev = newNode
        this.length++

        return true
    }

    remove(index){
        if(this.length == 0 || index<0 || index >=this.length ) return null

        if(index == 0 ) return this.shift()
        if(index == this.length-1) return this.pop()
        const foundNode = this.get(index)

        foundNode.prev.next = foundNode.next
        foundNode.next.prev = foundNode.prev
        foundNode.next = null;
        foundNode.prev = null
        
        this.length--
        return foundNode

    }
    
}

const list2 = new DublyLinkedList()
list2.push(0)
list2.push(1)
list2.push(2)
list2.push(3)

```