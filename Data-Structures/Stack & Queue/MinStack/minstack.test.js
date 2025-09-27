const MinStack = require("./MinStack");

describe("MinStack", () => {
  let minStack;

  beforeEach(() => {
    minStack = new MinStack();
  });

  test("retrieving the minimum element from the stack.", () => {
    minStack.push(1);
    minStack.push(2);
    minStack.push(3);
    expect(minStack.getMin()).toBe(1);
  });

  test("popping a node from the stack, abd checking min", () => {
    minStack.push(1);
    minStack.push(2);
    minStack.push(3);
    minStack.push(-1);
    expect(minStack.getMin()).toBe(-1);
    minStack.pop();
    expect(minStack.getMin()).toBe(1);
  });

  test("push element and check the minimum in the stack after the push", () => {
    minStack.push(1);
    minStack.push(2);
    minStack.push(3);
    expect(minStack.getMin()).toBe(1);
    minStack.push(-1);
    expect(minStack.getMin()).toBe(-1);
  });
});

