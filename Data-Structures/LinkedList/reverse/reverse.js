

function reverse(linkedlist)
{
  let current = linkedlist.head;
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

  linkedlist.head = pointers[pointers.length - 1];
  for(let i = pointers.length - 1; i > 0 ; i--)
  {
    pointers[i].next = pointers[i - 1];
  }
  pointers[0].next = null;
    
}

module.exports = reverse;