const LinkedList = require("../LinkedList");

function listToArray(list) {
  let arr = [];
  let current = list.head;
  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  return arr;
}

test("expect a merge og list 1 -> 2 → 3 and empty to be 1 -> 2 → 3", () => {
  const linkedList = new LinkedList();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3);
  const linkedList1 = new LinkedList();
  const merged = LinkedList.mergeSortLists(linkedList, linkedList1);
  expect(listToArray(merged)).toEqual([1, 2, 3]);
});


test("expect 2 empty lists to return another empty list.", () => {
  const linkedList = new LinkedList();
  const linkedList1 = new LinkedList();
  const merged = LinkedList.mergeSortLists(linkedList, linkedList1);
  expect(listToArray(merged)).toEqual([]);
});

test("expect a List of 5 -> 10 -> 15 and List of 2 -> 3-> 20 \n to return a new list of 2 -> 3 -> 5 -> 10 -> 15-> 20", () => {
  const linkedList = new LinkedList();
  linkedList.add(5);
  linkedList.add(10);
  linkedList.add(15);
  const linkedList1 = new LinkedList();
  linkedList1.add(2);
  linkedList1.add(3);
  linkedList1.add(20);
  const merged = LinkedList.mergeSortLists(linkedList, linkedList1);
  expect(listToArray(merged)).toEqual([2,3,5,10,15,20]);
});


