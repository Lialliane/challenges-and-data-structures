
function rotateLeft(k , list)
  {
    let length = 0;
    let current = list.head;
    while(current)
    {
      length++;
      current = current.next;
    }
    if(!length || k == length || !k)
      return ;
    if(k > length)
      k = k % length;
    if(k < 0)
      k = length + k;

    let i = 0;
    current = list.head;
    while(i != k)
    {
      i++;
      list.add(current.value);
      current = current.next;
    }
    list.head = current;
  }


module.exports = reverse;