const Queue = require("./Queue");

describe("Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test("enqueuing a node into the queue", () => {
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
  });

  test("dequeuing a node from the queue", () => {
    queue.enqueue(2);
    expect(queue.dequeue()).toBe(2);
  });

  test("checking if queue is empty", () => {
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue(3);
    expect(queue.isEmpty()).toBe(false);
  });
});
