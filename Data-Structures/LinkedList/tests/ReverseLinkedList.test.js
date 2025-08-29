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

test("expect a list of 1 -> 2 → 3 to be 3-> 2-> 1", () => {
  const linkedList = new LinkedList();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3);
  linkedList.reverse();
  console.log(linkedList);
  console.log(listToArray(linkedList));
  expect(listToArray(linkedList)).toEqual([3, 2, 1]);
});


test("expect a single node list of 5 to remain the same", () => {
  const linkedList = new LinkedList();;
  linkedList.add(5);
  linkedList.reverse();
  expect(listToArray(linkedList)).toEqual([5]);
});

test("searching for 10 should return false:", () => {
  const linkedList = new LinkedList();
  linkedList.reverse();
  expect(listToArray(linkedList)).toEqual([]);
});

test("list with duplicate values ( 1 -> 2 -> 2 -> 3) should be  (3 -> 2 -> 2-> 1)", () => {
  const linkedList = new LinkedList();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(2);
  linkedList.add(3);
  linkedList.reverse();
  expect(listToArray(linkedList)).toEqual([3, 2, 2, 1]);
});

