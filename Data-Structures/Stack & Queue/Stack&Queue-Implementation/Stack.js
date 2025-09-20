const Node = require("./Node");

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);

    newNode.next = this.top;

    this.top = newNode;
  }

  pop() {
    if (!this.top) {
      console.log("cannot pop because the stack is empty");
      return ;
    }
    const removed = this.top.value;

    this.top = this.top.next;

    return removed;
  }

  peek() 
  {
    if (this.top)
      return this.top.value;
    else
      console.log("cannot pop because the stack is empty");
  }

  isEmpty() {
    return this.top === null;
  }

  display() {
    let current = this.top;

    if (current === null) {
      console.log("stack is empty");
      return ;
    }

    let values = [];
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }

    console.log("Top --> ", values.join(" --> "), " --> Null");
  }
}

module.exports = Stack;
