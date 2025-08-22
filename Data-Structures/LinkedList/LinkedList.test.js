const LinkedList = require("./LinkedList");

test("after adding 2, expects head to be 2", () => {
  const linkedList = new LinkedList();
  linkedList.add(2);
  expect(linkedList.head.value).toBe(2);
});


test("searching for 5 should return true:", () => {
  const linkedList = new LinkedList();
  linkedList.add(4);
  linkedList.add(3);
  linkedList.add(5);
  expect(linkedList.include(5)).toBe(true);
});

test("searching for 10 should return false:", () => {
  const linkedList = new LinkedList();
  linkedList.add(4);
  linkedList.add(3);
  linkedList.add(5);
  expect(linkedList.include(10)).toBe(false);
});

test("after removing 3, it shouldn't exist anymore", () => {
  const linkedList = new LinkedList();
  linkedList.add(4);
  linkedList.add(3);
  linkedList.add(5);
  linkedList.remove(3);
  expect(linkedList.include(3)).toBe(false);
});

test("19 should exist now", () => {
  const linkedList = new LinkedList();
  linkedList.add(4);
  linkedList.add(3);
  linkedList.add(5);
  linkedList.insertAt(1, 19);
  linkedList.display();
  expect(linkedList.include(19)).toBe(true);
});

test("4 should be at the end of list", () => {
  const linkedList = new LinkedList();
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3);
  linkedList.insertAt(3, 4);
  expect(linkedList.include(4)).toBe(true);
});
