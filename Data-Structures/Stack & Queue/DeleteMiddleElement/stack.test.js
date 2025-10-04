const Stack = require("./StackWithDeleteMiddle");


describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  function stackToArray(stack) {
  let arr = [];
  let current = stack.top;
  while (current) {
    arr.push(current.value);
    current = current.next;
  }
  
  return arr;
  }
  test("delete middle with odd number", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.deleteMiddle();
    expect(stackToArray(stack)).toEqual([3,1]);
  });

  test("delete middle with even number", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.deleteMiddle();
    expect(stackToArray(stack)).toEqual([4,3,1]);
  });
  test("delete from empty", () => {
    expect(stack.deleteMiddle()).toEqual();
  });
  test("delete from stack with 1 element", () => {
    stack.push(1);
    stack.deleteMiddle();
    expect(stackToArray(stack)).toEqual([]);
  });
});

