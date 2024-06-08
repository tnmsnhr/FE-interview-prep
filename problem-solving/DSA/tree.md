## Q.1
>BST

```javascript

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;

      while (true) {
        if (value == current.value) return undefined;
        if (value < current.value) {
          if (current.left == null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else {
          if (current.right == null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root;
    while (true) {
      if (!current) return false;
      if (value == current.value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  BFS() {
    let data = [],
      queue = [],
      node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      if (node?.left) queue.push(node.left);
      if (node?.right) queue.push(node.right);
      data.push(node?.value);
    }

    return data;
  }

  DFSPreOrder() {
    let data = [];
    let current = this.root;

    const traverse = (node) => {
      data.push(node?.value);

      if (node?.left) traverse(node?.left);
      if (node?.right) traverse(node?.right);
    };

    traverse(current);

    return data;
  }

  DFSPostOrder() {
    let data = [];
    let current = this.root;

    const traverse = (node) => {
      if (node?.left) traverse(node?.left);
      if (node?.right) traverse(node?.right);
      data.push(node?.value);
    };

    traverse(current);

    return data;
  }

  DFSInOrder() {
    let data = [];
    let current = this.root;

    const traverse = (node) => {
      if (node?.left) traverse(node?.left);
      data.push(node?.value);
      if (node?.right) traverse(node?.right);
    };

    traverse(current);

    return data;
  }
  findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  remove(val) {
    this.root = this._removeNode(this.root, val);
  }

  _removeNode(node, val) {
    if (!node) {
      return null;
    }

    if (val < node.val) {
      node.left = this._removeNode(node.left, val);
      return node;
    } else if (val > node.val) {
      node.right = this._removeNode(node.right, val);
      return node;
    } else {
      // Node to be deleted found

      // Case 1: Node has no children (leaf node)
      if (!node.left && !node.right) {
        return null;
      }

      // Case 2: Node has one child
      if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      }

      // Case 3: Node has two children
      // Find the inorder successor (smallest node in the right subtree)
      let temp = this.findMin(node.right);
      node.val = temp.val;

      // Delete the inorder successor
      node.right = this._removeNode(node.right, temp.val);
      return node;
    }
  }
}

const tree = new BST();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);


```

## Q.2
>Find the minimum path in a Binary Search Tree (BST), you typically want to find the
>minimum path sum from the root to any leaf.

```
Example1:
        10
       /  \
      5    20
     / \     \
    3   7     30

Output: 18 (10 + 5 + 3)

Example2:

        10
       /  
      5    
     /  
    3  
   /
  1

Output: 19 (10 + 5 + 3 + 1)


```

```javascript

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(20);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.right.right = new TreeNode(30);

const minPathSum = (root) => {
    if (root === null) {
        return Infinity;
    }

    if (root.left === null && root.right === null) {
        return root.value;
    }

    const leftMinSum = minPathSum(root.left);
    const rightMinSum = minPathSum(root.right);

    return root.value + Math.min(leftMinSum, rightMinSum);
};

```


## Q.3
>Find the min and max value of a BST 

```
Example1:
        10
       /  \
      5    20
     / \     \
    3   7     30

Output: 3

Example2:

        10
       /  
      5    
     /  
    3  
   /
  1

Output: 1


```


```javascript

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(20);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(7);
root.right.right = new TreeNode(30);

const findMin = (root)=>{
  if(!root) return undefined
  if(!root.right && !root.left) return root.value

  return findMin(root.left)
}

const findMax = (root)=>{
  if(!root) return undefined
  if(!root.right && !root.left) return root.value

  return findMax(root.right)
}

console.log(findMin(root))
console.log(findMax(root))

```
