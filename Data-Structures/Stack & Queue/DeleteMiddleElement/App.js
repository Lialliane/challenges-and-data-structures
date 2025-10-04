const StackWithDeleteMiddle = require("./StackWithDeleteMiddle");


const stack = new StackWithDeleteMiddle();
stack.push(7);
stack.push(14);
stack.push(3);
stack.push(8);
stack.push(5);

stack.display();
stack.deleteMiddle();
stack.display();

stack.push(2);
stack.push(9);
stack.push(11);
stack.display();
stack.deleteMiddle();
stack.display();

console.log("----------------");

const stack1 = new StackWithDeleteMiddle();

stack1.deleteMiddle();
stack1.push(1);
stack1.display();

stack1.deleteMiddle();
stack1.display();
stack1.push(1);
stack1.push(2);
stack1.display();
stack1.deleteMiddle();
stack1.display();
