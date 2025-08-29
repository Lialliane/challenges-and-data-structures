const Node = require("./NodeItem");

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let last = this.head;
    while (last.next !== null) {
      last = last.next;
    }

    last.next = newNode;
  }

  remove(data)
  {
    let current = this.head;
    // if no head exists
    if(current === null)
    {
      console.log("list is empty");
      return ;
    }
    // in case the value is the head
    if(current.value === data)
    {
      if(current.next !== null)
        this.head = current.next;
      else
        this.head = null;
      console.log("value deleted");
      return ;
    }
    // if only 1 node exist and it doesn't hold the value
    if(current.next === null)
    {
      console.log("no such value exist in list");
      return ;
    }
    // keep reference to current and next to fix linking
    let next = current.next;
    do
    {
      if(next.value === data)
      {
        if(next.next !== null)
          current.next = next.next;
        next = null;
        console.log("value deleted");
        return ;
      }
      current = next;
      next = next.next;
    }
    while(next.next !== null)

    console.log("no such value exist in list");
  }

  include(data)
  {
    let current = this.head;
    if (current === null) {
      console.log("list is empty");
      return ;
    }
    if (current.value === data)
        return true;
    while(current !== null)
    {
      if(current.value === data)
        return true;
      current = current.next;
    }
    return false;
  }

  insertAt(index, value)
  {
    let current = this.head;
    // if index is 0, replace head
    if(index === 0)
    {
      const newNode = new Node(value);
      newNode.next = current;
      this.head = newNode;
      return ;
    }
    // if list is empty & index is not 0
    if (current === null) 
    {
      console.log("no such index exist in list");
      return ;
    }
    // if only 1 value exist in list
    if(current.next === null)
    {
      if(index === 1)
        this.add(value);
      else
        console.log("no such index exist in list");
      return ;
    }
    let next = current.next;
    let i = 0;
    while(i < index - 1)
    {
      if(next.next === null)
      {
        if(i + 2 != index)
        {
          console.log("no such index exist in list");
          return ;
        }
        else
        {
          this.add(value);
          return ;
        }
      }
      current = current.next;
      next = next.next;
      i++;
    }
    const newNode = new Node(value);
    newNode.next = next;
    current.next = newNode;
  }

  display() {
    let current = this.head;

    if (current === null) {
      console.log("list is empty");
      return;
    }

    let values = [];
    while (current !== null) {
      values.push(current.value);
      current = current.next;
    }

    console.log("Head --> ", values.join(" --> "), " --> Null");
  }
  reverse()
  {
    let current = this.head;
    let pointers = [];

    if (current === null)
    {
      console.log("list is empty");
      return ;
    }


    while (current !== null) 
    {
      pointers.push(current);
      current = current.next;
    }
    if (pointers.length == 1)
      return ;

    this.head = pointers[pointers.length - 1];
    for(let i = pointers.length - 1; i > 0 ; i--)
    {
      pointers[i].next = pointers[i - 1];
    }
    pointers[0].next = null;
    
  }
}

module.exports = LinkedList;
