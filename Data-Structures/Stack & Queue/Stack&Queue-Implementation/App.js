const Stack = require("./Stack");
const Queue = require("./Queue");


const stack = new Stack();
stack.push(10); 
stack.push(20);
stack.push(30);
stack.display();

console.log(`removed: ${stack.pop()}`);
stack.display();
console.log(`current top ${stack.peek()}`);
console.log("is stack empty? ");
console.log(stack.isEmpty());
console.log(`removed: ${stack.pop()}`);
console.log(`removed: ${stack.pop()}`);
console.log("is stack empty? ");
console.log(stack.isEmpty());

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display();
console.log(`removed: ${queue.dequeue()}`);
console.log(`current front ${queue.peek()}`);
console.log("is queue empty? ");
console.log(queue.isEmpty());
console.log(`removed: ${queue.dequeue()}`);
console.log(`removed: ${queue.dequeue()}`);
console.log("is queue empty? ");
console.log(queue.isEmpty());

