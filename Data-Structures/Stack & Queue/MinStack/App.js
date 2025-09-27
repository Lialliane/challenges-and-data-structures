const MinStack = require("./MinStack");

const minStack = new MinStack();

minStack.push(15); 
minStack.push(7);
minStack.push(12);
minStack.push(3); 

minStack.printStack();
let min = minStack.getMin();
console.log(`current min is ${min}`);

let popped = minStack.pop();
minStack.printStack();


min = minStack.getMin();
console.log(`current min is ${min}`);

console.log(`top value is ${minStack.getTop()}`);

minStack.push(2);
minStack.printStack();


min = minStack.getMin();
console.log(`current min is ${min}`);

let isEmpty = minStack.isEmpty();

console.log(`is list empty? ${isEmpty?"True": "False"}`);


minStack.pop();
minStack.pop();
minStack.pop();
minStack.pop();
minStack.push(1);
minStack.push(2);
minStack.push(3);
minStack.push(4);
minStack.push(5);
minStack.printStack();
min = minStack.getMin();
console.log(`current min is ${min}`);

minStack.push(-10);
minStack.push(5);
minStack.push(5);
minStack.push(-5);
minStack.printStack();
min = minStack.getMin();
console.log(`current min is ${min}`);