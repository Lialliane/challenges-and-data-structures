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

test("expect a list of 1 -> 2 -> 3 to be 1 -> 2 -> 3 when k is 0", () => {
  const linkedList = new LinkedList();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3);
  linkedList.rotateLeft(0);
  expect(listToArray(linkedList)).toEqual([1, 2, 3]);
});

test("expect a list of 1 -> 2 -> 3 to be 2 -> 3 -> 1 when k is 4", () => {
  const linkedList = new LinkedList();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3);
  linkedList.rotateLeft(4);
  expect(listToArray(linkedList)).toEqual([ 2, 3, 1]);
});


