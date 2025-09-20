const Node = require("./Node");

class Queue {

    constructor() 
    {
        this.front = null;  
        this.rear = null; 
    }

  enqueue(data)
  {
    const newNode = new Node(data);

    newNode.next = null;
    if(this.isEmpty())
    {
        this.rear = newNode;
        this.front = newNode;
    }
    else
    {
        this.rear.next = newNode;
        this.rear = newNode;
    }
  }
  dequeue()
  {
    if(this.isEmpty())
    {
        console.log("queue is empty!");
        return ;
    }
    else if(this.front == this.rear)
    {
        const temp = this.front;
        this.front = null;
        this.rear = null;
        return temp.value;
    }
    const temp = this.front;
    this.front = this.front.next;

    return temp.value;
  }

  peek() {
    if (this.front)
      return this.front.value;
    else
      console.log("queue is empty");
  }

  isEmpty() {
    return this.front === null;
  }

  display() {
    let current = this.front;

    if (current === null) {
      console.log("queue is empty");
      return ;
    }

    let values = [];
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }

    console.log("Front --> ", values.join(" --> "), " --> Rear");
  }
}

module.exports = Queue;
