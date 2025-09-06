
function mergeSortLists(list1, list2)
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

module.exports = mergeSortLists;