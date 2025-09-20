const Stack = require("./Stack");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("pushing a node onto the stack", () => {
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });

  test("popping a node from the stack", () => {
    stack.push(2);
    expect(stack.pop()).toBe(2);
  });

  test("checking if stack is empty", () => {
    expect(stack.isEmpty()).toBe(true);
    stack.push(3);
    expect(stack.isEmpty()).toBe(false);
  });
});

