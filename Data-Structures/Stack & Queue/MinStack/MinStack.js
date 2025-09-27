const Node = require("../Stack&Queue-Implementation/Node");

class MinStack {
  constructor() {
    this.top = null;
    this.min = null;
  }

  push(value) {
    const newNode = new Node(value);

    if(!this.min)
        this.min = newNode;
    if(value < this.min.value)
        this.min = newNode;

    newNode.next = this.top;

    this.top = newNode;
  }

  pop() {
    if (!this.top) {
      console.log("cannot pop because the stack is empty");
      return ;
    }

    if(this.top == this.min)
    {
        let current = this.top.next;
        this.min = current
       while(current){
            if(this.min.value > current.value)
                this.min = current;
            current= current.next;
        }
    }
    const removed = this.top.value;

    this.top = this.top.next;

    return removed;
  }

  getTop()
  {
    if (this.top)
      return this.top.value;
    else
      console.log("cannot pop because the stack is empty");
  }

  isEmpty() {
    return this.top === null;
  }

  printStack() {
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

  getMin()
  {
    if (!this.top) {
      console.log("the stack is empty");
      return ;
    }

    return (this.min.value);
  }
}

module.exports = MinStack;
