const Node = require("./Node");

class StackWithDeleteMiddle {
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
  deleteMiddle()
  {
    let current = this.top;

    if (!current) {
      console.log("cannot delete, stack is empty!");
      return ;
    }
    if(!current.next)
    {
      this.pop();
      return ;
    }

    let length = 0;
    while(current)
    {
      length++;
      current = current.next;
    }

    let middle;
    let i = 0;
    current = this.top;
    if(length%2 == 0)
    {
      while(++i < length/2)
        current = current.next;
      middle = current.next;
    }
    else
    {
      while(++i < Math.floor(length/2) + 1)
        current = current.next;
      middle = current;
    }

    current = this.top;
    while(current.next != middle)
      current = current.next;

    current.next = middle.next;
  }
}

module.exports = StackWithDeleteMiddle;
