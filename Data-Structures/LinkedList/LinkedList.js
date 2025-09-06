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

    if(current === null)
    {
      console.log("list is empty");
      return ;
    }

    if(current.value === data)
    {
      if(current.next !== null)
        this.head = current.next;
      else
        this.head = null;
      console.log("value deleted");
      return ;
    }

    if(current.next === null)
    {
      console.log("no such value exist in list");
      return ;
    }

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

    if(index === 0)
    {
      const newNode = new Node(value);
      newNode.next = current;
      this.head = newNode;
      return ;
    }

    if (current === null) 
    {
      console.log("no such index exist in list");
      return ;
    }

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
  static mergeSortLists(list1, list2)
  {
    let current1 = list1.head;
    let current2 = list2.head;

    let newList = new LinkedList();;

    //edge case: one or two of the list are empty
    if(!current1)
    {
      if(!current2){
        console.log("Lists are empty!");
        return newList; 
      }
      else
      {
        newList.head = new Node(current2.value);
        current2 = current2.next;
        while(current2)
        {
          newList.add(current2.value);
          current2 = current2.next;
        }
        return newList;
      }
    }
    else
    {
     if(!current2){
        newList.head = new Node(current1.value);
        current1 = current1.next;
        while(current1)
        {
          newList.add(current1.value);
          current1 = current1.next;
        }
        return newList;
      } 
    }

    // start with assigning head of the new list
    if(current1.value > current2.value)
    {
        newList.head = new Node(current2.value);
        current2 = current2.next;
    }
    else
    {
      newList.head = new Node(current1.value);
      current1 = current1.next;
    }

    while(current1 || current2)
    {
      if(!current1)
      {
        newList.add(current2.value);
        current2 = current2.next;
        continue ;
      }
      if(!current2)
      {
        newList.add(current2.value);
        current2 = current2.next;
        continue ;
      }
      if(current1.value > current2.value)
      {
        newList.add(current2.value);
        current2 = current2.next;
      }
      else
      {
        newList.add(current1.value);
        current1 = current1.next;
      }
    }
    return newList;
  }
}

module.exports = LinkedList;
